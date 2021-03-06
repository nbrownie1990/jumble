package de.nbrownie.jumbleapplication.controllers;

import de.nbrownie.jumbleapplication.exceptions.ResourceNotFoundException;
import de.nbrownie.jumbleapplication.models.Review;
import de.nbrownie.jumbleapplication.services.JumbleService;
import de.nbrownie.jumbleapplication.services.ReviewService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600, allowedHeaders = "*")
@AllArgsConstructor
@RestController
@RequestMapping(path= "api/reviews")
public class ReviewController {

    private final ReviewService reviewService;

    @PreAuthorize("hasRole('USER')")
    @GetMapping(path = "getall")
    public List<Review> getAllReviews(){
        if (true) {
            return reviewService.getAllReviews();
        }
        throw new ResourceNotFoundException("Reviews not found...");
    }

    @PreAuthorize("hasRole('USER')")
    @GetMapping(path = "user/{userId}")
    public List<Review> getReviewListByUserId(@PathVariable("userId") Long userId) {
        if (true) {
            return reviewService.findReviewListByUserId(userId);
        }
        throw new ResourceNotFoundException("Reviews for this User not found...");
    }

    @PreAuthorize("hasRole('USER')")
    @GetMapping(path = "jumble/{jumbleId}")
    public List<Review> getReviewListByJumbleId(@PathVariable("jumbleId") Long jumbleId) {
        if (true) {
            return reviewService.findReviewListByJumbleId(jumbleId);
        }
        throw new ResourceNotFoundException("Reviews for this Jumble not found...");
    }

    @PreAuthorize("hasRole('USER')")
    @GetMapping(path = "{reviewId}")
    public ResponseEntity<Review> getReviewById(
            @PathVariable("reviewId") Long reviewId) {
        Review review = reviewService.getReviewById(reviewId);
        return ResponseEntity.ok(review);
    }

    @PreAuthorize("hasRole('USER')")
    @PostMapping(path = "edit/{jumbleId}/newreview")
    public void addReviewToList(@PathVariable("jumbleId") Long jumbleId, @RequestBody Review newReview){
        reviewService.addReviewToList(jumbleId, newReview);
    }

    @PreAuthorize("hasRole('USER')")
    @DeleteMapping(path = "edit/delete/{reviewId}")
    public void deleteReview(@PathVariable Long reviewId) {
        reviewService.deleteReview(reviewId);
    }

}
    
