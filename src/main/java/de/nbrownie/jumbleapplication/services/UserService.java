package de.nbrownie.jumbleapplication.services;

import de.nbrownie.jumbleapplication.exceptions.BadRequestException;
import de.nbrownie.jumbleapplication.exceptions.ResourceNotFoundException;
import de.nbrownie.jumbleapplication.models.User;
import de.nbrownie.jumbleapplication.repo.UserRepository;
import io.swagger.v3.oas.annotations.parameters.RequestBody;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;


@AllArgsConstructor
@Service
public class UserService {

    private final UserRepository userRepository;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserById(Long id) {
        return userRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("JumbleApplication not found"));
    }


    public void addNewUser(User user) {
//        Boolean existsEmail = userRepository
//                .selectExistsEmail(user.getEmail());
//        if (existsEmail) {
//            throw new BadRequestException(
//                    "Email " + user.getEmail() + " taken");}

        userRepository.save(user);
    }

    public void deleteUser(Long user_id) {
        if(!userRepository.existsById(user_id)) {
            throw new ResourceNotFoundException(
                    "User with id " + user_id + " does not exists");
        }
        userRepository.deleteById(user_id);
    }

}
