package de.nbrownie.jumbleapplication.services;

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
public class ReviewService {

    private ReviewRepository reviewRepository;
    private JumbleRepository jumbleRepository;
    private UserRepository userRepository;


    @Autowired
    public ReviewService(ReviewRepository reviewRepository,JumbleRepository jumbleRepository, UserRepository userRepository) {
        this.reviewRepository = reviewRepository;
        this.jumbleRepository = jumbleRepository;
        this.userRepository = userRepository;
    }

    public List<Review> findAllForUser(Long userId) {
        User user = userRepository.getUserByUserId(userId).orElseThrow(() -> new EntityNotFoundException("User not found"));
        return reviewRepository.findByUser(user);
    }

    public List<Review> findAllForJumble(Long jumbleId) {
        Jumble jumble = jumbleRepository.getJumbleByJumbleId(jumbleId).orElseThrow(() -> new EntityNotFoundException("Jumble not found"));
        return reviewRepository.findByJumble(jumble);
    }

    public List<Review> getAllReviews() {
        return reviewRepository.findAll();
    }

    public Review getReviewById(Long reviewId) {
        return reviewRepository.findById(reviewId).orElseThrow(() -> new IllegalArgumentException("Reviews not found"));
    }

    public void addReview(Review review){
        reviewRepository.save(review);
    }

//   public Jumble addNewJumbleWithReviewList(Jumble jumble, Set<Review> newReviewList) {
//         Jumble jumble = jumbleRepository.getJumbleByJumbleId(jumbleId).orElseThrow(() -> new EntityNotFoundException("Jumble not found"));;
//        return addReviewList(jumble, newReviewList);
//    }

    public Jumble addReviewList(Long jumbleId, Set<Review> reviewList) {
        Jumble jumble = jumbleRepository.getJumbleByJumbleId(jumbleId).orElseThrow(() -> new EntityNotFoundException("Jumble not found"));
        Set<Review> createdReviewList = new HashSet<>();
        for (Review review : reviewList) {
            review.setJumble(jumble);
            createdReviewList.add(review);
        }
        jumble.setReviewList(createdReviewList);
        return jumbleRepository.save(jumble);
    }

    public void addReviewToList(Long jumbleId, Review newReview) {
        Jumble existingJumble = jumbleRepository.getJumbleByJumbleId(jumbleId).orElseThrow(() -> new EntityNotFoundException("Jumble not found"));
//        if (!existingJumble.getUser().getUserId().equals(userId)) {
//            throw new UnauthorizedUserException("Jumble can only be updated by owner of jumble");
//        }
        existingJumble.addReview(newReview);
        jumbleRepository.save(existingJumble);
    }

    public Review deleteReview(Long jumbleId, Long reviewId) {
        Review reviewToDelete = getReviewById(reviewId);
        reviewRepository.delete(reviewToDelete);
        return reviewToDelete;
    }

// oder: //    public Review deleteReview(Long jumbleId, Long reviewId) {
//       // userRepository.getUserByUserId(userId).orElseThrow(() -> new UnauthorizedUserException("User can only delete own review"));
//        Review existingReview = reviewRepository.getReviewByReviewId(reviewId).orElseThrow(() -> new EntityNotFoundException("Reviews not found"));
//        Jumble jumble = jumbleRepository.getJumbleByJumbleId(jumbleId).orElseThrow(() -> new EntityNotFoundException("Jumble not found"));
//        if (!existingReview.getJumble().getJumbleId().equals(jumbleId)) {
//            throw new IllegalArgumentException("JumbleId and reviewId do not fit");
//        }
//        jumbleRepository.save(jumble.removeReview(existingReview));
//
//        return existingReview;
//    }
//}


}
