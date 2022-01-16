package de.nbrownie.jumbleapplication.services;

import de.nbrownie.jumbleapplication.models.Address;
import de.nbrownie.jumbleapplication.models.Category;
import de.nbrownie.jumbleapplication.models.Jumble;
import de.nbrownie.jumbleapplication.payload.request.CreateJumbleRequest;
import de.nbrownie.jumbleapplication.payload.request.UpdateJumbleRequest;
import de.nbrownie.jumbleapplication.repo.*;
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

    public List<Jumble> findJumblesByCategoryId(Long categoryId) {
        Category category = categoryRepository.getCategoryByCategoryId(categoryId).orElseThrow(() -> new EntityNotFoundException("Category not found"));
        return jumbleRepository.findJumbleByCategory(category);
    }


    public Jumble getJumbleById(Long jumbleId) {
        return jumbleRepository.getJumbleByJumbleId(jumbleId).orElseThrow(() -> new IllegalArgumentException("JumbleApplication not found"));
    }


    public Jumble addNewJumble(CreateJumbleRequest createNewJumbleRequest) {
        Jumble jumble = new Jumble();

        jumble.setJumbleName(createNewJumbleRequest.getJumbleName());
        jumble.setJumbleTime(createNewJumbleRequest.getJumbleTime());
        jumble.setJumbleImage(createNewJumbleRequest.getJumbleImage());
        jumble.setJumbleText(createNewJumbleRequest.getJumbleText());
        jumble.setJumbleWebsite(createNewJumbleRequest.getJumbleWebsite());
        jumble.setJumbleDate(createNewJumbleRequest.getJumbleDate());

        jumble.setCategory(createNewJumbleRequest.getCategory());

        jumble.setUser(userRepository.getUserByUserId(createNewJumbleRequest.getUserId())
                .orElseThrow(() -> new EntityNotFoundException("User not found")));

        jumble.setAddress(addressService.addNewAddress(makeAddress(createNewJumbleRequest)));

        return jumbleRepository.save(jumble);
    }

    private Address makeAddress(CreateJumbleRequest createNewJumbleRequest) {
        Address address = new Address();
        address.setAddressStreet(createNewJumbleRequest.getAddressStreet());
        address.setAddressNumber(createNewJumbleRequest.getAddressNumber());
        address.setAddressZip(createNewJumbleRequest.getAddressZip());
        address.setAddressCity(createNewJumbleRequest.getAddressCity());
        return address;
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

    public Jumble deleteJumble(Long jumbleId) {
        Jumble jumbleToDelete = getJumbleById(jumbleId);
        jumbleRepository.deleteJumbleByJumbleId(jumbleId);
        addressRepository.deleteAddressById(jumbleToDelete.getAddress().getAddressId());
        return jumbleToDelete;
    }


///////SEARCHBAR SECTION////////
    public Optional<Jumble> getJumbleByName(String jumbleName) {
       return jumbleRepository.getJumbleByJumbleName(jumbleName);
    }

}
