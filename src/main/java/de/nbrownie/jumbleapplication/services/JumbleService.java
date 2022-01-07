package de.nbrownie.jumbleapplication.services;

import de.nbrownie.jumbleapplication.models.*;
import de.nbrownie.jumbleapplication.payload.request.CreateAddressRequest;
import de.nbrownie.jumbleapplication.payload.request.CreateJumbleRequest;
import de.nbrownie.jumbleapplication.payload.request.UpdateJumbleRequest;
import de.nbrownie.jumbleapplication.repo.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Getter
@Setter
@Service
public class JumbleService {

    private JumbleRepository jumbleRepository;
    private AddressRepository addressRepository;
    private CategoryRepository categoryRepository;
    private ReviewRepository reviewRepository;
    private UserRepository userRepository;

    private AddressService addressService;

    @Autowired
    public JumbleService(JumbleRepository jumbleRepository, AddressRepository addressRepository, CategoryRepository categoryRepository, ReviewRepository reviewRepository, UserRepository userRepository, AddressService addressService ) {
        this.jumbleRepository = jumbleRepository;
        this.addressRepository = addressRepository;
        this.categoryRepository = categoryRepository;
        this.reviewRepository = reviewRepository;
        this.userRepository = userRepository;

        this.addressService= addressService;
    }

    public List<Jumble> getAllJumbles() {
        return jumbleRepository.findAll();
    }

    public Jumble getJumbleById(Long jumbleId) {
        return jumbleRepository.getJumbleByJumbleId(jumbleId).orElseThrow(() -> new IllegalArgumentException("JumbleApplication not found"));
    }


    public Jumble addNewJumble(CreateJumbleRequest newJumble ){
                               //CreateAddressRequest newAddress){
        // User user = userRepository.getUserByUserId(id).orElseThrow(() -> new EntityNotFoundException("User not found"));
        Jumble jumble = new Jumble();
        // jumble.setUser(user);
        jumble.setJumbleName(newJumble.getJumbleName());
        jumble.setJumbleTime(newJumble.getJumbleTime());
        jumble.setJumbleImage(newJumble.getJumbleImage());
        jumble.setJumbleText(newJumble.getJumbleText());
        jumble.setJumbleWebsite(newJumble.getJumbleWebsite());
        jumble.setJumbleDate(newJumble.getJumbleDate());
        jumble.setCategory(newJumble.getCategory());

        Address address = new Address();
        address.setAddressStreet(newJumble.getAddressStreet());
        address.setAddressNumber(newJumble.getAddressNumber());
        address.setAddressZip(newJumble.getAddressZip());
        address.setAddressCity(newJumble.getAddressCity());
        jumble.setAddress(address);
        /////Create new Address
       // Address address = addressService.addNewAddress(newAddress);
        //address.setJumble(jumble);
       // jumble.setAddress(address);
        /////Add empty ReviewList?
        return jumbleRepository.save(jumble);
    }


    public Jumble updateJumble(Long jumbleId, UpdateJumbleRequest changedJumble) {
        Jumble existingJumble = jumbleRepository.findById(jumbleId).orElseThrow(() -> new EntityNotFoundException("Jumble not found"));
//        if (!existingJumble.getUser().getId().equals(id)) {
//            throw new UnauthorizedUserException("Jumble can only be updated by its owner");
//        }
        if (changedJumble.getJumbleImage() != null && !changedJumble.getJumbleImage().equals(existingJumble.getJumbleImage())) {
            existingJumble.setJumbleImage(changedJumble.getJumbleImage());
        }
        if (changedJumble.getJumbleText() != null && !changedJumble.getJumbleText().equals(existingJumble.getJumbleText())) {
            existingJumble.setJumbleText(changedJumble.getJumbleText());
        }
        if (changedJumble.getJumbleName() != null && !changedJumble.getJumbleName().equals(existingJumble.getJumbleName())) {
            existingJumble.setJumbleName(changedJumble.getJumbleName());
        }
        if (changedJumble.getJumbleDate() != null && !changedJumble.getJumbleDate().equals(existingJumble.getJumbleDate())) {
            existingJumble.setJumbleDate(changedJumble.getJumbleDate());
        }
        if (changedJumble.getJumbleTime() != null && !changedJumble.getJumbleTime().equals(existingJumble.getJumbleTime())) {
            existingJumble.setJumbleTime(changedJumble.getJumbleTime());
        }
        if (changedJumble.getJumbleWebsite() != null && !changedJumble.getJumbleWebsite().equals(existingJumble.getJumbleWebsite())) {
            existingJumble.setJumbleWebsite(changedJumble.getJumbleWebsite());
        }
        if (changedJumble.getReviewList() != null && !changedJumble.getReviewList().equals(existingJumble.getReviewList())) {
            existingJumble.setReviewList(changedJumble.getReviewList());
        }
        if (changedJumble.getCategory() != null && !changedJumble.getCategory().equals(existingJumble.getCategory())) {
            existingJumble.setCategory(changedJumble.getCategory());
        }
        if (changedJumble.getAddress() != null && !changedJumble.getAddress().equals(existingJumble.getAddress())) {
            existingJumble.setAddress(changedJumble.getAddress());
        }
        return jumbleRepository.save(existingJumble);
    }

////    public Jumble deleteJumble(Long jumbleId) {
////        //User user = userRepository.getUserByUserId(userId).orElseThrow(() -> new UnauthorizedUserException("User not found"));
////        Jumble deleteJumble = jumbleRepository.getJumbleByJumbleId(jumbleId).orElseThrow(() -> new EntityNotFoundException("Jumble not found"));
////        if (!jumbleRepository.existsById(jumbleId)) {
////            throw new ResourceNotFoundException(
////                    "Jumble with id " + jumbleId + " does not exists");
////        }
////        if (!addressRepository.existsById(jumbleId)) {
////            throw new ResourceNotFoundException(
////                    "Address with id " + jumbleId + " does not exists");
////        }
////        jumbleRepository.deleteById(jumbleId);
////        //userRepository.save(user.deleteJumble(deleteJumble));
////        deleteJumble.setJumbleId(null);
////        return deleteJumble;
////    }
//

    public Jumble deleteJumble(Long jumbleId) {
        Jumble jumbleToDelete = getJumbleById(jumbleId);
        jumbleRepository.delete(jumbleToDelete);
        return jumbleToDelete;
    }


///////SEARCHBAR SECTION////////

    //Searchbar findByJumbleByName
    //public Jumble getJumbleByName(String jumbleName) {
    //    return jumbleRepository.getJumbleByName(jumbleName);
    //}

    //Searchbar findByJumbleByAddress
    //public Jumble getJumbleByAddress(String addressStreet) {
    //    return jumbleRepository.getJumbleByAddress(addressStreet);
    //}

}
