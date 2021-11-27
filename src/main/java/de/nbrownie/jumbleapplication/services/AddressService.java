package de.nbrownie.jumbleapplication.services;

import de.nbrownie.jumbleapplication.exceptions.UnauthorizedUserException;
import de.nbrownie.jumbleapplication.models.Address;
import de.nbrownie.jumbleapplication.repo.AddressRepository;
import de.nbrownie.jumbleapplication.repo.JumbleRepository;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;

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

    public Address getAddressByAddressId(Long addressId) {
        return addressRepository.getAddressByAddressId(addressId).orElseThrow(() -> new IllegalArgumentException("Address not found"));
    }

    public boolean addressExists(Address existingAddress, Address addressToCheck) {
        if (existingAddress.getAddressStreet().equals(addressToCheck.getAddressStreet())
                && existingAddress.getAddressNumber().equals(addressToCheck.getAddressNumber())
                && existingAddress.getAddressZip().equals(addressToCheck.getAddressZip())
                && existingAddress.getAddressCity().equals(addressToCheck.getAddressCity()))
            return true;
        return false;
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


    public Optional<Address> getAddressByJumbleId(Long jumbleId){
            return addressRepository.getAddressByJumbleId(jumbleId);
    }

    public List<Address> getAddressByAddressIdAndJumbleId(Long jumbleId, Long addressId){
        return addressRepository.getAddressByAddressIdAndJumbleId(jumbleId, addressId);
    }


//    public void deleteAddress(Long addressId) {
//        if(!addressRepository.existsById(addressId)) {
//            throw new ResourceNotFoundException(
//                    "Address with id " + addressId + " does not exists");
//        }
//        addressRepository.deleteById(addressId);
//    }

}
//////////////








