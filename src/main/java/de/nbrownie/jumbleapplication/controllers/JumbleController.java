package de.nbrownie.jumbleapplication.controllers;

import de.nbrownie.jumbleapplication.api.JumbleApi;
import de.nbrownie.jumbleapplication.api.ReviewApi;
import de.nbrownie.jumbleapplication.exceptions.UnauthorizedUserException;
import de.nbrownie.jumbleapplication.models.Jumble;
import de.nbrownie.jumbleapplication.models.Review;
import de.nbrownie.jumbleapplication.models.User;
import de.nbrownie.jumbleapplication.services.JumbleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import static org.springframework.http.ResponseEntity.ok;
import static org.springframework.util.MimeTypeUtils.APPLICATION_JSON_VALUE;

import java.util.List;
import java.util.Set;

@CrossOrigin("http://localhost:8080/")
@RestController
//@AllArgsConstructor
@RequestMapping(path= "api/jumbles")
public class JumbleController extends ControllerMapper {

    private final JumbleService jumbleService;

    @Autowired
    public JumbleController(JumbleService jumbleService) {
        this.jumbleService = jumbleService;
    }

    //Get all JumbleApplication
    @GetMapping("getall")
    public List<Jumble> getAllJumbles() {
        return jumbleService.getAllJumbles();
    }

    @GetMapping(path = "{jumbleId}")
    public ResponseEntity<Jumble> getJumbleById(
            @PathVariable Long jumbleId) {
        Jumble jumble = jumbleService.getJumbleById(jumbleId);
        return ResponseEntity.ok(jumble);
    }

    @PutMapping(value = "edit/{jumbleId}")
    public ResponseEntity<JumbleApi> updateJumble(@AuthenticationPrincipal User authUser, @PathVariable Long jumbleId, @RequestBody JumbleApi updateJumble) {
        if (updateJumble.getJumbleId().equals(jumbleId)) {
            Jumble changedJumble = jumbleService.updateJumble(jumbleId, authUser.getUserId(), mapJumble(updateJumble));
            return ok(mapJumble(changedJumble));
        }
        throw new IllegalArgumentException("Jumble and ID not belong together");
    }
    //// TEST
    @PostMapping(value = "new", produces = APPLICATION_JSON_VALUE, consumes = APPLICATION_JSON_VALUE)
    public ResponseEntity<JumbleApi> addNewAwesomeJumble( @RequestBody JumbleApi newJumble) {
            Jumble jumble = mapJumble(newJumble);
            Jumble jumbleCreated = jumbleService.addNewAwesomeJumble(jumble);
            return ok(mapJumble(jumbleCreated));
        }



    ////
    @PostMapping(value = "new/{userId}", produces = APPLICATION_JSON_VALUE, consumes = APPLICATION_JSON_VALUE)
    public ResponseEntity<JumbleApi> addNewJumbleWithReview(@AuthenticationPrincipal User authUser, @PathVariable Long userId, @RequestBody JumbleApi newJumble) {
        if (authUser.getUserId().equals(userId)) {
            Jumble jumble = mapJumble(newJumble);
            Set<Review> reviewList = mapReviewListToEntity(newJumble.getReviewApiList());
            Jumble jumbleCreated = jumbleService.addNewJumbleWithReviewList(userId, jumble, reviewList);
            return ok(mapJumble(jumbleCreated));
        }
        throw new UnauthorizedUserException("Only logged-in user can create a Jumble in list");
    }

    @PostMapping(value = "post/add/{jumbleId}", produces = APPLICATION_JSON_VALUE, consumes = APPLICATION_JSON_VALUE)
    public ResponseEntity<JumbleApi> addReviewToJumble(@AuthenticationPrincipal User authUser, @PathVariable Long jumbleId, @RequestBody ReviewApi reviewApi) {
        Jumble updatedJumble = jumbleService.addReviewToList(authUser.getUserId(), jumbleId, mapReview(reviewApi));
        return ok(mapJumble(updatedJumble));
    }

    @PutMapping(value = "edit/post/{jumbleId}", produces = APPLICATION_JSON_VALUE, consumes = APPLICATION_JSON_VALUE)
    public ResponseEntity<JumbleApi> updateReviews(@AuthenticationPrincipal User authUser, @PathVariable Long jumbleId, @RequestBody ReviewApi reviewApi) {
        Jumble updatedJumble = jumbleService.updateReviews(authUser.getUserId(), jumbleId, mapReview(reviewApi));
        return ok(mapJumble(updatedJumble));
    }

    @DeleteMapping(value = "edit/delete/{jumbleId}/{reviewId}", produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<ReviewApi> deleteReview(@AuthenticationPrincipal User authUser, @PathVariable Long jumbleId, @PathVariable Long reviewId) {
        Review deletedReview = jumbleService.deleteReview(authUser.getUserId(), jumbleId, reviewId);
        return ok(mapReview(deletedReview));
    }

    @DeleteMapping(value = "edit/delete/{jumbleId}", produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<JumbleApi> deleteJumble(@AuthenticationPrincipal User authUser, @PathVariable Long jumbleId) {
        Jumble deletedJumble = jumbleService.deleteJumble(authUser.getUserId(), jumbleId);
        return ok(mapJumble(deletedJumble));
    }
}






    
