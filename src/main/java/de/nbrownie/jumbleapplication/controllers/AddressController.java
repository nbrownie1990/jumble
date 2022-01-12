package de.nbrownie.jumbleapplication.controllers;

import de.nbrownie.jumbleapplication.models.Address;
import de.nbrownie.jumbleapplication.models.Jumble;
import de.nbrownie.jumbleapplication.payload.request.CreateAddressRequest;
import de.nbrownie.jumbleapplication.services.AddressService;
import lombok.AllArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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
    @PostMapping(path = "new/newaddress")
    public void addNewAddress(@RequestBody CreateAddressRequest newAddress){
        addressService.addNewAddress(newAddress);
    }
}



