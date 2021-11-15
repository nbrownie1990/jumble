package de.nbrownie.jumbleapplication.services;

import de.nbrownie.jumbleapplication.models.User;
import de.nbrownie.jumbleapplication.repo.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;


@Component
@AllArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserById(Long id) {
        return userRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("JumbleApplication not found"));
    }
}
