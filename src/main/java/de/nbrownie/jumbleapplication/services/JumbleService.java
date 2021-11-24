package de.nbrownie.jumbleapplication.services;

import de.nbrownie.jumbleapplication.exceptions.ResourceNotFoundException;
import de.nbrownie.jumbleapplication.exceptions.UnauthorizedUserException;
import de.nbrownie.jumbleapplication.models.Jumble;
import de.nbrownie.jumbleapplication.models.Review;
import de.nbrownie.jumbleapplication.models.User;
import de.nbrownie.jumbleapplication.repo.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@Service
public class JumbleService {

    private JumbleRepository jumbleRepository;
    private AddressRepository addressRepository;
    private CategoryRepository categoryRepository;
    private ReviewRepository reviewRepository;
    private UserRepository userRepository;

    @Autowired
    public JumbleService(JumbleRepository jumbleRepository, AddressRepository addressRepository, CategoryRepository categoryRepository, ReviewRepository reviewRepository, UserRepository userRepository) {
        this.jumbleRepository = jumbleRepository;
        this.addressRepository = addressRepository;
        this.categoryRepository = categoryRepository;
        this.reviewRepository = reviewRepository;
        this.userRepository = userRepository;
    }

    public List<Jumble> getAllJumbles() {
        return jumbleRepository.findAll();
    }

    public Jumble getJumbleById(Long jumbleId) {
        return jumbleRepository.getJumbleByJumbleId(jumbleId).orElseThrow(() -> new IllegalArgumentException("JumbleApplication not found"));
    }

///TEXT
    public Jumble addNewAwesomeJumble(Jumble newJumble) {
        return jumbleRepository.save(newJumble);
    }
  ////
  public Jumble addNewJumble(Long userId, Jumble newJumble) {
       User user = userRepository.getUserByUserId(userId).orElseThrow(() -> new EntityNotFoundException("User not found"));
        newJumble.setUser(user);
       return jumbleRepository.save(newJumble);
    }


    public Jumble updateJumble(Long jumbleId, Long userId, Jumble changedJumble) {
        Jumble existingJumble = jumbleRepository.findById(jumbleId).orElseThrow(() -> new EntityNotFoundException("Jumble not found"));
        if (!existingJumble.getUser().getUserId().equals(userId)) {
            throw new UnauthorizedUserException("Jumble can only be updated by its owner");
        }

        if (changedJumble.getJumbleImage() != null && !changedJumble.getJumbleImage().equals(existingJumble.getJumbleImage())) {
            existingJumble.setJumbleImage(changedJumble.getJumbleImage());
        }
        if (changedJumble.getJumbleText() != null && !changedJumble.getJumbleText().equals(existingJumble.getJumbleText())) {
            existingJumble.setJumbleText(changedJumble.getJumbleText());
        }
        if (changedJumble.getJumbleName() != null && !changedJumble.getJumbleName().equals(existingJumble.getJumbleName())) {
            existingJumble.setJumbleName(changedJumble.getJumbleName());
        }
        if (changedJumble.getJumbleDate() != null && !changedJumble.getJumbleDate().equals(existingJumble.getJumbleDate())) {
            existingJumble.setJumbleDate(changedJumble.getJumbleDate());
        }
        if (changedJumble.getJumbleTime() != null && !changedJumble.getJumbleTime().equals(existingJumble.getJumbleTime())) {
            existingJumble.setJumbleTime(changedJumble.getJumbleTime());
        }
        if (changedJumble.getJumbleWebsite() != null && !changedJumble.getJumbleWebsite().equals(existingJumble.getJumbleWebsite())) {
            existingJumble.setJumbleWebsite(changedJumble.getJumbleWebsite());
        }
        if (changedJumble.getReviewList() != null && !changedJumble.getReviewList().equals(existingJumble.getReviewList())) {
            existingJumble.setReviewList(changedJumble.getReviewList());
        }
        if (changedJumble.getCategory() != null && !changedJumble.getCategory().equals(existingJumble.getCategory())) {
            existingJumble.setCategory(changedJumble.getCategory());
        }
        if (changedJumble.getAddress() != null && !changedJumble.getAddress().equals(existingJumble.getAddress())) {
            existingJumble.setAddress(changedJumble.getAddress());
        }
        return jumbleRepository.save(existingJumble);
    }

    public Jumble deleteJumble(Long userId, Long jumbleId) {
        User user = userRepository.getUserByUserId(userId).orElseThrow(() -> new UnauthorizedUserException("User not found"));
        Jumble deleteJumble = jumbleRepository.getJumbleByJumbleId(jumbleId).orElseThrow(() -> new EntityNotFoundException("Jumble not found"));
        if (!jumbleRepository.existsById(jumbleId)) {
            throw new ResourceNotFoundException(
                    "Jumble with id " + jumbleId + " does not exists");
        }
        if (!addressRepository.existsById(jumbleId)) {
            throw new ResourceNotFoundException(
                    "Address with id " + jumbleId + " does not exists");
        }
        jumbleRepository.deleteById(jumbleId);
        userRepository.save(user.deleteJumble(deleteJumble));
        deleteJumble.setJumbleId(null);
        return deleteJumble;
    }

    ///////REVIEW SECTION////////
    public Jumble addNewJumbleWithReviewList(Long userId, Jumble newJumble, Set<Review> newReviewList) {
        Jumble createdJumble = addNewJumble(userId, newJumble);
        return addReviewList(createdJumble, newReviewList);
    }

    public Jumble addReviewList(Jumble jumble, Set<Review> reviewList) {
        Set<Review> createdReviewList = new HashSet<>();
        for (Review review : reviewList) {
            review.setJumble(jumble);
            createdReviewList.add(review);
        }
        jumble.setReviewList(createdReviewList);
        return jumbleRepository.save(jumble);
    }

    public Jumble addReviewToList(Long jumbleId, Long userId, Review newReview) {
        Jumble existingJumble = jumbleRepository.getJumbleByJumbleId(jumbleId).orElseThrow(() -> new EntityNotFoundException("Jumble not found"));
        if (!existingJumble.getUser().getUserId().equals(userId)) {
            throw new UnauthorizedUserException("Jumble can only be updated by owner of jumble");
        }
        existingJumble.addReview(newReview);

        return jumbleRepository.save(existingJumble);
    }

    public Jumble updateReviews(Long jumbleId, Long userId, Review changedReview) {
        Jumble existingJumble = jumbleRepository.getJumbleByJumbleId(jumbleId).orElseThrow(() -> new EntityNotFoundException("Jumble not found"));
        if (!existingJumble.getUser().getUserId().equals(userId)) {
            throw new UnauthorizedUserException("Jumble can only be updated by its owner");
        }
        Review existingReview = reviewRepository.findById(changedReview.getReviewId())
                .orElseThrow(() -> new EntityNotFoundException("Review not found"));

        if (changedReview.getReviewText() != null) {
            existingReview.setReviewText(changedReview.getReviewText());
        }
        if (changedReview.getReviewRating() != null) {
            existingReview.setReviewRating(changedReview.getReviewRating());
        }

        reviewRepository.save(existingReview);

        return existingJumble;

    }

    public Review deleteReview(Long userId, Long jumbleId, Long reviewId) {
        userRepository.getUserByUserId(userId).orElseThrow(() -> new UnauthorizedUserException("User can only delete own review"));
        Review existingReview = reviewRepository.findById(reviewId).orElseThrow(() -> new EntityNotFoundException("Review not found"));
        Jumble jumble = jumbleRepository.getJumbleByJumbleId(jumbleId).orElseThrow(() -> new EntityNotFoundException("Jumble not found"));
        if (!existingReview.getJumble().getJumbleId().equals(jumbleId)) {
            throw new IllegalArgumentException("JumbleId and reviewId do not fit");
        }
        jumbleRepository.save(jumble.removeReview(existingReview));

        return existingReview;
    }
}


///////SEARCHBAR SECTION////////

    //Searchbar findByJumbleByName
    //public Jumble getJumbleByName(String jumbleName) {
    //    return jumbleRepository.getJumbleByName(jumbleName);
    //}

    //Searchbar findByJumbleByAddress
    //public Jumble getJumbleByAddress(String addressStreet) {
    //    return jumbleRepository.getJumbleByAddress(addressStreet);
    //}


