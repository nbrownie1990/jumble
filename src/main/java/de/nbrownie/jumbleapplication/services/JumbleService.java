package de.nbrownie.jumbleapplication.services;

import de.nbrownie.jumbleapplication.exceptions.ResourceNotFoundException;
import de.nbrownie.jumbleapplication.models.Jumble;
import de.nbrownie.jumbleapplication.repo.AddressRepository;
import de.nbrownie.jumbleapplication.repo.CategoryRepository;
import de.nbrownie.jumbleapplication.repo.JumbleRepository;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Getter
@Setter
@Service
public class JumbleService {

    private JumbleRepository jumbleRepository;
    private AddressRepository addressRepository;
    private CategoryRepository categoryRepository;

    @Autowired
    public JumbleService(JumbleRepository jumbleRepository, AddressRepository addressRepository, CategoryRepository categoryRepository) {
        this.jumbleRepository = jumbleRepository;
        this.addressRepository = addressRepository;
        this.categoryRepository = categoryRepository;
    }


    public List<Jumble> getAllJumbles() {
        return jumbleRepository.findAll();
    }

    public Jumble getJumbleById(Long jumbleId) {
        return jumbleRepository.findById(jumbleId).orElseThrow(() -> new IllegalArgumentException("JumbleApplication not found"));
    }

    public void addNewJumble(Jumble jumble){
         jumbleRepository.save(jumble);
    }

    public void deleteJumble(Long jumbleId) {
        if(!jumbleRepository.existsById(jumbleId)) {
            throw new ResourceNotFoundException(
                    "Jumble with id " + jumbleId + " does not exists");
        }
        jumbleRepository.deleteById(jumbleId);
    }


    //Searchbar findByJumbleByName
    //public Jumble getJumbleByName(String jumbleName) {
    //    return jumbleRepository.getJumbleByName(jumbleName);
    //}

    //Searchbar findByJumbleByAddress
    //public Jumble getJumbleByAddress(String addressStreet) {
    //    return jumbleRepository.getJumbleByAddress(addressStreet);
    //}
}

