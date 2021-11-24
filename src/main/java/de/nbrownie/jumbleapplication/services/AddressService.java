package de.nbrownie.jumbleapplication.services;

import de.nbrownie.jumbleapplication.exceptions.ResourceNotFoundException;
import de.nbrownie.jumbleapplication.exceptions.UnauthorizedUserException;
import de.nbrownie.jumbleapplication.models.Address;
import de.nbrownie.jumbleapplication.models.Jumble;
import de.nbrownie.jumbleapplication.models.User;
import de.nbrownie.jumbleapplication.repo.AddressRepository;
import de.nbrownie.jumbleapplication.repo.JumbleRepository;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@Service
public class AddressService {

    private AddressRepository addressRepository;
    private JumbleRepository jumbleRepository;
  //  private final MapboxService mapboxService;
  //  private final PasswordEncoder passwordEncoder;

    @Autowired
    public AddressService(AddressRepository addressRepository, JumbleRepository jumbleRepository) {
        this.addressRepository = addressRepository;
        this.jumbleRepository = jumbleRepository;
        //this.mapboxService = mapboxService;    MapboxService mapboxService, PasswordEncoder passwordEncoder)
        //this.passwordEncoder = passwordEncoder;
    }

    public List<Address> getAllAddresses() {
        return addressRepository.findAll();
    }

    public Address getAddressById(Long addressId) {
        return addressRepository.getAddressByAddressId(addressId).orElseThrow(() -> new IllegalArgumentException("Address not found"));
    }

    public Address addNewAddress(Long jumbleId, Address newAddress) {
        Jumble jumble = jumbleRepository.getJumbleByJumbleId(jumbleId).orElseThrow(() -> new EntityNotFoundException("Jumble not found"));
        newAddress.setJumble(jumble);
        return addressRepository.save(newAddress);
//        if(addressExists(existingUserAddresses, addressEntity)){
//            throw new EntityExistsException("Address already exists");
//        }
//        address.setJumble(jumble);
//        Address savedAddress = addressRepository.save(address);
//        mapboxService.getGeoLocation(savedAddress.getId(), address.toString());
//
//        return savedAddress;

    }

    public Address updateAddress(Long addressId, Long jumbleId, Address changedAddress) {
        Address existingAddress = addressRepository.getAddressByAddressId(addressId).orElseThrow(() -> new EntityNotFoundException("Address not found"));
        if (!existingAddress.getJumble().getJumbleId().equals(jumbleId)){
            throw new UnauthorizedUserException("Address can only be updated by its owner in its jumble");
        }

        if (changedAddress.getAddressStreet() != null && !changedAddress.getAddressStreet().equals(existingAddress.getAddressStreet())) {
            existingAddress.setAddressStreet(changedAddress.getAddressStreet());
        }
        if (changedAddress.getAddressNumber() != null && !changedAddress.getAddressNumber().equals(existingAddress.getAddressNumber())) {
            existingAddress.setAddressNumber(changedAddress.getAddressNumber());
        }
        if (changedAddress.getAddressZip() != null && !changedAddress.getAddressZip().equals(existingAddress.getAddressZip())) {
            existingAddress.setAddressZip(changedAddress.getAddressZip());
        }
        if (changedAddress.getAddressCity() != null && !changedAddress.getAddressCity().equals(existingAddress.getAddressCity())) {
            existingAddress.setAddressCity(changedAddress.getAddressCity());
        }
        if (changedAddress.getAddressCountry() != null && !changedAddress.getAddressCountry().equals(existingAddress.getAddressCountry())) {
            existingAddress.setAddressCountry(changedAddress.getAddressCountry());
        }

        return addressRepository.save(existingAddress);
    }


//    public void deleteAddress(Long addressId) {
//        if(!addressRepository.existsById(addressId)) {
//            throw new ResourceNotFoundException(
//                    "Address with id " + addressId + " does not exists");
//        }
//        addressRepository.deleteById(addressId);
//    }

}
