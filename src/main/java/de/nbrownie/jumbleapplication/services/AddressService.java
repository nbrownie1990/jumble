package de.nbrownie.jumbleapplication.services;

import de.nbrownie.jumbleapplication.exceptions.ResourceNotFoundException;
import de.nbrownie.jumbleapplication.models.Address;
import de.nbrownie.jumbleapplication.repo.AddressRepository;
import de.nbrownie.jumbleapplication.repo.JumbleRepository;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Getter
@Setter
@Service
public class AddressService {

    private AddressRepository addressRepository;
    private JumbleRepository jumbleRepository;

    @Autowired
    public AddressService(AddressRepository addressRepository, JumbleRepository jumbleRepository) {
        this.addressRepository = addressRepository;
        this.jumbleRepository = jumbleRepository;
    }

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
