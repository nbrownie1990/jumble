package de.nbrownie.jumbleapplication.controllers;

import de.nbrownie.jumbleapplication.models.Address;
import de.nbrownie.jumbleapplication.models.Jumble;
import de.nbrownie.jumbleapplication.services.AddressService;
import de.nbrownie.jumbleapplication.services.JumbleService;
import lombok.AllArgsConstructor;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@AllArgsConstructor
@RestController
@RequestMapping(path= "/jumbles")
public class AddressController {

    private final AddressService addressService;

    //Get all JumbleApplication
    @GetMapping
    public List<Address> getAllAddress() {
        return addressService.getAllAddresses();
    }

    @GetMapping(path = "/{addressId}")
    public Address getAddressById(
            @PathVariable("addressId") Long addressId) {
        return addressService.getAddressById(addressId);
    }

    @PostMapping
    public void addNewAddress(@Validated @RequestBody Address address) {
        addressService.addNewAddress(address);
    }

    @DeleteMapping(path = "{addressId}")
    public void deleteAddress(
            @PathVariable("addressId") Long addressId) {
        addressService.deleteAddress(addressId);
    }
}
//    @GetMapping("/{id}")
//    public ResponseEntity<de.nbrownie.jumbleapplication.models.Jumble> GetJumbleById(@PathVariable Long id) {
//        de.nbrownie.jumbleapplication.models.Jumble jumble = jumbleRepository.findById(id)
//                .orElseThrow(() -> new ResourceNotFoundException("JumbleApplication with this id:" + id + "not exist..."));
//        return ResponseEntity.ok(jumble);
//    }
//
//
//    @PutMapping("/edit/{id}")
//    public ResponseEntity<de.nbrownie.jumbleapplication.models.Jumble> updateJumble(@PathVariable Long id, @RequestBody de.nbrownie.jumbleapplication.models.Jumble jumbleDetails){
//
//        de.nbrownie.jumbleapplication.models.Jumble jumble = jumbleRepository.findById(id)
//                .orElseThrow(() -> new ResourceNotFoundException("JumbleApplication with this id:" + id + "not exist..."));
//
//        jumble.setJumble_address(jumbleDetails.getJumble_name());
//        jumble.setJumble_category(jumbleDetails.getJumble_category());
//        jumble.setJumble_rating(jumbleDetails.getJumble_rating());
//        jumble.setJumble_time(jumbleDetails.getJumble_time());
//        jumble.setJumble_name(jumbleDetails.getJumble_name());
//        jumble.setJumble_website(jumbleDetails.getJumble_website());
//        jumble.setJumble_text(jumbleDetails.getJumble_text());
//        jumble.setJumble_time(jumbleDetails.getJumble_time());
//
//        de.nbrownie.jumbleapplication.models.Jumble updateJumble = jumbleRepository.save(jumble);
//        return ResponseEntity.ok(updateJumble);
//    }

    
