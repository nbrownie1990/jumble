package de.nbrownie.jumbleapplication.services;

import de.nbrownie.jumbleapplication.models.Jumble;
import de.nbrownie.jumbleapplication.repo.JumbleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;


@Component
public class JumbleService {

    private final JumbleRepository jumbleRepository;

    @Autowired
    public JumbleService(JumbleRepository jumbleRepository) {
        this.jumbleRepository = jumbleRepository;
    }

    public List<Jumble> GetJumbles() {
        return jumbleRepository.findAll();
    }

    public Jumble GetJumbleById(Long id) {
        return jumbleRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("JumbleApplication not found"));
    }
}
