package de.nbrownie.jumbleapplication.services;

import de.nbrownie.jumbleapplication.exceptions.ResourceNotFoundException;
import de.nbrownie.jumbleapplication.models.Jumble;
import de.nbrownie.jumbleapplication.models.User;
import de.nbrownie.jumbleapplication.repo.JumbleRepository;
import io.swagger.v3.oas.annotations.parameters.RequestBody;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
@AllArgsConstructor
public class JumbleService {

    private final JumbleRepository jumbleRepository;

    public List<Jumble> getAllJumbles() {
        return jumbleRepository.findAll();
    }

    public Jumble getJumbleById(Long id) {
        return jumbleRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("JumbleApplication not found"));
    }

    public void addNewJumble(Jumble jumble){
         jumbleRepository.save(jumble);
    }

    public void deleteJumble(Long jumble_id) {
        if(!jumbleRepository.existsById(jumble_id)) {
            throw new ResourceNotFoundException(
                    "Jumble with id " + jumble_id + " does not exists");
        }
        jumbleRepository.deleteById(jumble_id);
    }
}
