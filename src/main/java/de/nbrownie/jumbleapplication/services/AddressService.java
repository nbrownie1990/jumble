package de.nbrownie.jumbleapplication.services;

import de.nbrownie.jumbleapplication.exceptions.ResourceNotFoundException;
import de.nbrownie.jumbleapplication.models.Address;
import de.nbrownie.jumbleapplication.repo.AddressRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
@AllArgsConstructor
public class AddressService {

    private final AddressRepository addressRepository;

    public List<Address> getAllAddresses() {
        return addressRepository.findAll();
    }

    public Address getAddressById(Long addressId) {
        return addressRepository.findById(addressId).orElseThrow(() -> new IllegalArgumentException("Address not found"));
    }

    public void addNewAddress(Address address){
         addressRepository.save(address);
    }

    public void deleteAddress(Long addressId) {
        if(!addressRepository.existsById(addressId)) {
            throw new ResourceNotFoundException(
                    "Address with id " + addressId + " does not exists");
        }
        addressRepository.deleteById(addressId);
    }
}
