package de.nbrownie.jumbleapplication.services;

import de.nbrownie.jumbleapplication.models.Review;
import de.nbrownie.jumbleapplication.repo.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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


    public List<Review> getAllReviews() {
        return reviewRepository.findAll();
    }

    public Review getReviewById(Long reviewId) {
        return reviewRepository.findById(reviewId).orElseThrow(() -> new IllegalArgumentException("Review not found"));
    }
}
