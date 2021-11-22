package de.nbrownie.jumbleapplication.services;

import de.nbrownie.jumbleapplication.exceptions.ResourceNotFoundException;
import de.nbrownie.jumbleapplication.models.User;
import de.nbrownie.jumbleapplication.repo.UserRepository;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Getter
@Setter
@Service
public class UserService {

    private UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserById(Long userId) {
        return userRepository.findById(userId).orElseThrow(() -> new IllegalArgumentException("JumbleApplication not found"));
    }


    public void addNewUser(User user) {
//        Boolean existsEmail = userRepository
//                .selectExistsEmail(user.getEmail());
//        if (existsEmail) {
//            throw new BadRequestException(
//                    "Email " + user.getEmail() + " taken");}

        userRepository.save(user);
    }

    public void deleteUser(Long userId) {
        if(!userRepository.existsById(userId)) {
            throw new ResourceNotFoundException(
                    "User with id " + userId + " does not exists");
        }
        userRepository.deleteById(userId);
    }

}
