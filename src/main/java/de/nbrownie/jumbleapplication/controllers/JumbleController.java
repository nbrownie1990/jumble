package de.nbrownie.jumbleapplication.controllers;



import de.nbrownie.jumbleapplication.models.Jumble;
import de.nbrownie.jumbleapplication.models.Review;
import de.nbrownie.jumbleapplication.payload.request.RequestUpdateJumble;
import de.nbrownie.jumbleapplication.services.JumbleService;
import de.nbrownie.jumbleapplication.services.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

import static org.springframework.util.MimeTypeUtils.APPLICATION_JSON_VALUE;

@CrossOrigin(origins = "*", maxAge = 3600, allowedHeaders = "*")
@RestController
//@AllArgsConstructor
@RequestMapping(path= "api/jumbles")
public class JumbleController {

    private final JumbleService jumbleService;
    private final ReviewService reviewService;

    @Autowired
    public JumbleController(JumbleService jumbleService, ReviewService reviewService) {
        this.jumbleService = jumbleService;
        this.reviewService = reviewService;

    }

    @PreAuthorize("hasRole('USER')")
    @GetMapping(path="getall")
    public List<Jumble> getAllJumbles() {
        return jumbleService.getAllJumbles();
    }

    @PreAuthorize("hasRole('USER')")
    @GetMapping(path = "{jumbleId}")
    public ResponseEntity<Jumble> getJumbleById(
            @PathVariable Long jumbleId) {
        Jumble jumble = jumbleService.getJumbleById(jumbleId);
        return ResponseEntity.ok(jumble);
    }

    @PreAuthorize("hasRole('USER')")
    @PostMapping(path = "new")
    public void addJumble(@RequestBody Jumble jumble){
        jumbleService.addNewJumble(jumble);
    }

    @PreAuthorize("hasRole('USER')")
    @PutMapping(path = "edit/{jumbleId}")
    public void updateJumble(@PathVariable("jumbleId") Long jumbleId, @RequestBody RequestUpdateJumble updateJumble){
        jumbleService.updateJumble(jumbleId, updateJumble);
    }

    @PreAuthorize("hasRole('USER')")
    @DeleteMapping(path = "edit/{jumbleId}/delete")
    public void deleteJumble(
            @PathVariable Long jumbleId) {
        jumbleService.deleteJumble(jumbleId);
    }
//    @DeleteMapping(value = "edit/delete/{jumbleId}", produces = APPLICATION_JSON_VALUE)
//    public ResponseEntity<JumbleApi> deleteJumble(@PathVariable Long jumbleId) {
//        Jumble deletedJumble = jumbleService.deleteJumble(jumbleId);
//        return ok(mapJumble(deletedJumble));
//    }

/////////REVIEW SECTION////////

    @PreAuthorize("hasRole('USER')")
    @PostMapping(path = "edit/{jumbleId}/newreview")
    public void addReview(@PathVariable("jumbleId") Long jumbleId, @RequestBody Review review){
        jumbleService.addReviewToList(jumbleId, review);
    }

//    @PostMapping(value = "new", produces = APPLICATION_JSON_VALUE, consumes = APPLICATION_JSON_VALUE)
//    public ResponseEntity<JumbleApi> addNewJumble(@RequestBody JumbleApi newJumble) {
//            Jumble jumble = mapJumble(newJumble);
//        Set<Review> reviewList = mapReviewListToEntity(newJumble.getReviewApiList());
//        Jumble jumbleCreated = jumbleService.addNewJumbleWithReviewList(jumble, reviewList);
//            return ok(mapJumble(jumbleCreated));
//        }
//
//    @PostMapping(value = "edit/new/{jumbleId}/{reviewId}", produces = APPLICATION_JSON_VALUE, consumes = APPLICATION_JSON_VALUE)
//    public ResponseEntity<Jumble> addReviewToJumble(@PathVariable Long jumbleId, @RequestBody Review review) {
//        Jumble updatedJumble = jumbleService.addReviewToList(jumbleId, mapReview(review));
//        return ok(mapJumble(updatedJumble));
//    }
//
//
//    @DeleteMapping(value = "edit/delete/{jumbleId}/{reviewId}", produces = APPLICATION_JSON_VALUE)
//    public ResponseEntity<ReviewApi> deleteReview(@PathVariable Long jumbleId, @PathVariable Long reviewId) {
//        Review deletedReview = jumbleService.deleteReview(jumbleId, reviewId);
//        return ok(mapReview(deletedReview));
//    }
//
    @DeleteMapping(path = "edit/{jumbleId}/delete/{reviewId}")
    public void deleteReview(@PathVariable Long jumbleId, @PathVariable Long reviewId)  {
        reviewService.deleteReview(jumbleId, reviewId);
    }

    /////////ADDRESS SECTION////////

}






    
