package de.nbrownie.jumblesbackend.services;

import de.nbrownie.jumblesbackend.models.User;
import de.nbrownie.jumblesbackend.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;


@Component
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> GetUsers() {
        return userRepository.findAll();
    }
}
