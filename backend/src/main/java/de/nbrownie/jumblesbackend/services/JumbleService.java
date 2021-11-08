package de.nbrownie.jumblesbackend.services;

import de.nbrownie.jumblesbackend.models.Jumble;
import de.nbrownie.jumblesbackend.repo.JumbleRepository;
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
}
