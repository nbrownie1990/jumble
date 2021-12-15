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
    @GetMapping(path = "{reviewId}")
    public ResponseEntity<Review> getReviewById(
            @PathVariable("reviewId") Long reviewId) {
        Review review = reviewService.getReviewById(reviewId);
        return ResponseEntity.ok(review);
    }



//   @GetMapping("/{id}")
//   public ResponseEntity<Category> GetCategoryById(@PathVariable Long id) {
//        CategoryEntity categoryEntity = CategoryService.GetCategoryById(id)
//                .orElseThrow(() -> new ResourceNotFoundException("Category with this id:" + id + "not exist..."));
//        return ResponseEntity.ok(categoryEntity);
//    }
}
    
