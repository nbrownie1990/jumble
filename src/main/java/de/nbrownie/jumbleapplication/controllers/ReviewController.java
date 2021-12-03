package de.nbrownie.jumbleapplication.controllers;

import de.nbrownie.jumbleapplication.exceptions.ResourceNotFoundException;
import de.nbrownie.jumbleapplication.models.Jumble;
import de.nbrownie.jumbleapplication.models.Review;
import de.nbrownie.jumbleapplication.services.ReviewService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.ResponseEntity.ok;

@CrossOrigin("http://localhost:8080/")
@AllArgsConstructor
@RestController
@RequestMapping(path= "api/reviews")
public class ReviewController {

    private final ReviewService reviewService;

    @GetMapping(path = "getall")
    public List<Review> getAllReviews(){
        if (true) {
            return reviewService.getAllReviews();
        }
        throw new ResourceNotFoundException("Reviews not found...");
    }

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
    
