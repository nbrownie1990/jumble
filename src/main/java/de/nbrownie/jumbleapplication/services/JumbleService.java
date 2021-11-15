package de.nbrownie.jumbleapplication.services;

import de.nbrownie.jumbleapplication.models.Jumble;
import de.nbrownie.jumbleapplication.repo.JumbleRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;


@Component
@AllArgsConstructor
public class JumbleService {

    private final JumbleRepository jumbleRepository;

    public List<Jumble> getAllJumbles() {
        return jumbleRepository.findAll();
    }

    public Jumble getJumbleById(Long id) {
        return jumbleRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("JumbleApplication not found"));
    }
}
