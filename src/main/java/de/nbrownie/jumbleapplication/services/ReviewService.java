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
import java.util.List;


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

    public void addReview(Review review) {
        reviewRepository.save(review);
    }

}
