package de.nbrownie.jumbleapplication.controllers;

import de.nbrownie.jumbleapplication.models.Address;
import de.nbrownie.jumbleapplication.services.AddressService;
import lombok.AllArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
//@CrossOrigin(origins = "http://localhost:8080/", maxAge = 3600, allowedHeaders = "*")

@CrossOrigin(origins = "*", maxAge = 3600, allowedHeaders = "*")
@AllArgsConstructor
@RestController
@RequestMapping(path= "/api/jumbles")
public class AddressController {

    private final AddressService addressService;

    @PreAuthorize("hasRole('USER')")
    @GetMapping(path = "addresses/{addressId}")
    public Address getAddressById(
            @PathVariable Long addressId) {
        return addressService.getAddressByAddressId(addressId);
    }

    @PreAuthorize("hasRole('USER')")
    @GetMapping(path = "{jumbleId}/{addressId}")
    public List<Address> getAddressByAddressIdAndJumbleId(
            @PathVariable Long jumbleId, @PathVariable Long addressId) {
        return addressService.getAddressByAddressIdAndJumbleId(jumbleId, addressId);
    }
}

//    @GetMapping(value="address/find/{username}/{addressId}", produces = APPLICATION_JSON_VALUE)
//    public ResponseEntity<AddressApi> getJumbleAddressById(@PathVariable Long jumbleId){
//        Address address = addressService.findJumbleAddressById(addressId);
//        if(!authUser.getUsername().equals(addressEntity.getUserEntity().getUsername())){
//            throw new UnauthorizedUserException("User can only view own addresses");
//        }
//        return ok(mapAddress(addressEntity));
//    }

//    @PostMapping
//    public void addNewAddress(@Validated @RequestBody Address address) {
//        addressService.addNewAddress(address);
//    }
//
//    @DeleteMapping(path = "{addressId}")
//    public void deleteAddress(
//            @PathVariable("addressId") Long addressId) {
//        addressService.deleteAddress(addressId);
//    }

//    @GetMapping("/{id}")
//    public ResponseEntity<de.nbrownie.jumbleapplication.models.Jumble> GetJumbleById(@PathVariable Long id) {
//        de.nbrownie.jumbleapplication.models.Jumble jumble = jumbleRepository.findById(id)
//                .orElseThrow(() -> new ResourceNotFoundException("JumbleApplication with this id:" + id + "not exist..."));
//        return ResponseEntity.ok(jumble);
//    }
//

