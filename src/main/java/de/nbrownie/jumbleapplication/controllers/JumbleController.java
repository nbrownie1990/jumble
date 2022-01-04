package de.nbrownie.jumbleapplication.controllers;



import de.nbrownie.jumbleapplication.models.Address;
import de.nbrownie.jumbleapplication.models.Jumble;
import de.nbrownie.jumbleapplication.models.Review;
import de.nbrownie.jumbleapplication.payload.request.CreateAddressRequest;
import de.nbrownie.jumbleapplication.payload.request.CreateJumbleRequest;
import de.nbrownie.jumbleapplication.payload.request.UpdateJumbleRequest;
import de.nbrownie.jumbleapplication.services.AddressService;
import de.nbrownie.jumbleapplication.services.JumbleService;
import de.nbrownie.jumbleapplication.services.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@CrossOrigin(origins = "*", maxAge = 3600, allowedHeaders = "*")
@RestController
//@AllArgsConstructor
@RequestMapping(path= "api/jumbles")
public class JumbleController {

    private final JumbleService jumbleService;
    private final AddressService addressService;
    private final ReviewService reviewService;

    @Autowired
    public JumbleController(JumbleService jumbleService, AddressService addressService, ReviewService reviewService) {
        this.jumbleService = jumbleService;
        this.addressService = addressService;
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
    public void addNewJumble(@RequestBody CreateJumbleRequest newJumble)
    {jumbleService.addNewJumble(newJumble);}
    //   public void addNewJumble(@RequestBody CreateJumbleRequest newJumble, CreateAddressRequest newAddress)
    //  {jumbleService.addNewJumble(newJumble, newAddress);}

//oder: ///    @PreAuthorize("hasRole('USER')")
//    @PostMapping(path = "new")
//    public void addJumble(@RequestBody Jumble jumble){
//        jumbleService.addNewJumble(jumble);
//    }

//oder: //  @PostMapping(value = "new", produces = APPLICATION_JSON_VALUE, consumes = APPLICATION_JSON_VALUE)
//    public ResponseEntity<JumbleApi> addNewJumble(@RequestBody JumbleApi newJumble) {
//            Jumble jumble = mapJumble(newJumble);
//        Set<Review> reviewList = mapReviewListToEntity(newJumble.getReviewApiList());
//        Jumble jumbleCreated = jumbleService.addNewJumbleWithReviewList(jumble, reviewList);
//            return ok(mapJumble(jumbleCreated));
//        }
//
    @PreAuthorize("hasRole('USER')")
    @PutMapping(path = "edit/{jumbleId}")
    public void updateJumble(@PathVariable("jumbleId") Long jumbleId, @RequestBody UpdateJumbleRequest updateJumble){
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

    // Before the first jumble-review
    @PreAuthorize("hasRole('USER')")
    @PostMapping(path = "edit/{jumbleId}/newreviewlist")
    public void addReviewList(@PathVariable("jumbleId") Long jumbleId, @RequestBody Set<Review> reviewList){
        reviewService.addReviewList(jumbleId, reviewList);
    }

    // Add a jumble-review
    @PreAuthorize("hasRole('USER')")
    @PostMapping(path = "edit/{jumbleId}/newreview")
    public void addReviewToList(@PathVariable("jumbleId") Long jumbleId, @RequestBody Review newReview){
        reviewService.addReviewToList(jumbleId, newReview);
    }

    @DeleteMapping(path = "edit/{jumbleId}/delete/{reviewId}")
    public void deleteReview(@PathVariable Long jumbleId, @PathVariable Long reviewId)  {
        reviewService.deleteReview(jumbleId, reviewId);
    }

//oder: //    @DeleteMapping(value = "edit/delete/{jumbleId}/{reviewId}", produces = APPLICATION_JSON_VALUE)
//    public ResponseEntity<ReviewApi> deleteReview(@PathVariable Long jumbleId, @PathVariable Long reviewId) {
//        Review deletedReview = jumbleService.deleteReview(jumbleId, reviewId);
//        return ok(mapReview(deletedReview));
//    }
//

}






    
