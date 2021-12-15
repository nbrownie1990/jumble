package de.nbrownie.jumbleapplication.controllers;



import de.nbrownie.jumbleapplication.models.Jumble;
import de.nbrownie.jumbleapplication.models.Review;
import de.nbrownie.jumbleapplication.services.JumbleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600, allowedHeaders = "*")
@RestController
//@AllArgsConstructor
@RequestMapping(path= "api/jumbles")
public class JumbleController {

    private final JumbleService jumbleService;

    @Autowired
    public JumbleController(JumbleService jumbleService) {
        this.jumbleService = jumbleService;
    }

    //Get all JumbleApplication
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
    @PostMapping(path = "edit/new/{jumbleId}/{reviewId}")
    public void addReview(@PathVariable("jumbleId") Long jumbleId, @RequestBody Review review){
        jumbleService.addReviewToList(jumbleId, review);
    }

//    @PutMapping(value = "edit/{jumbleId}")
//    public ResponseEntity<JumbleApi> updateJumble(@PathVariable Long jumbleId, @RequestBody JumbleApi updateJumble) {
//        if (updateJumble.getJumbleId().equals(jumbleId)) {
//            Jumble changedJumble = jumbleService.updateJumble(jumbleId, mapJumble(updateJumble));
//            return ok(mapJumble(changedJumble));
//        }
//        throw new IllegalArgumentException("Jumble and ID not belong together");
//    }
//    //// TEST
//    @PostMapping(value = "new", produces = APPLICATION_JSON_VALUE, consumes = APPLICATION_JSON_VALUE)
//    public ResponseEntity<JumbleApi> addNewJumble(@RequestBody JumbleApi newJumble) {
//            Jumble jumble = mapJumble(newJumble);
//        Set<Review> reviewList = mapReviewListToEntity(newJumble.getReviewApiList());
//        Jumble jumbleCreated = jumbleService.addNewJumbleWithReviewList(jumble, reviewList);
//            return ok(mapJumble(jumbleCreated));
//        }
//
//
//    //Reviews
//    @PostMapping(value = "edit/new/{jumbleId}/{reviewId}", produces = APPLICATION_JSON_VALUE, consumes = APPLICATION_JSON_VALUE)
//    public ResponseEntity<JumbleApi> addReviewToJumble(@PathVariable Long jumbleId, @RequestBody ReviewApi reviewApi) {
//        Jumble updatedJumble = jumbleService.addReviewToList(jumbleId, mapReview(reviewApi));
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
//   ///Addresses
//
//    @DeleteMapping(value = "edit/delete/{jumbleId}", produces = APPLICATION_JSON_VALUE)
//    public ResponseEntity<JumbleApi> deleteJumble(@PathVariable Long jumbleId) {
//        Jumble deletedJumble = jumbleService.deleteJumble(jumbleId);
//        return ok(mapJumble(deletedJumble));
//    }

}






    
