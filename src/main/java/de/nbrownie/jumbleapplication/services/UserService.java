package de.nbrownie.jumbleapplication.services;

import de.nbrownie.jumbleapplication.exceptions.BadRequestException;
import de.nbrownie.jumbleapplication.exceptions.ResourceNotFoundException;
import de.nbrownie.jumbleapplication.exceptions.UnauthorizedUserException;
import de.nbrownie.jumbleapplication.models.Jumble;
import de.nbrownie.jumbleapplication.models.User;
import de.nbrownie.jumbleapplication.repo.UserRepository;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
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

    public User getUserByUserId(Long userId) {
        return userRepository.getUserByUserId(userId).orElseThrow(() -> new IllegalArgumentException("User not found"));
    }

//    public User addNewUser(User user, String email) {
//        User existingEmail = userRepository.getUserByEmail(email).orElseThrow(() -> new EntityNotFoundException("User not found"));
//        if (existingEmail.equals(user)) {
//            throw new BadRequestException(
//                    "Email " + user.getEmail() + "already taken");}
//        return userRepository.save(user);
//    }


    public User updateUser(Long id, Long userId, User changedUser) {
        User existingUser = userRepository.getUserByUserId(userId).orElseThrow(() -> new EntityNotFoundException("User not found"));
        if (!existingUser.equals(userId)){
            throw new UnauthorizedUserException("User can only be updated himself/herself");
        }
        if (changedUser.getUserImage() != null && !changedUser.getUserImage().equals(existingUser.getUserImage())) {
            existingUser.setUserImage(changedUser.getUserImage());
        }
        if (changedUser.getUsername() != null && !changedUser.getUsername().equals(existingUser.getUsername())) {
            existingUser.setUsername(changedUser.getUsername());
        }
        if (changedUser.getEmail() != null && !changedUser.getEmail().equals(existingUser.getEmail())) {
            existingUser.setEmail(changedUser.getEmail());
        }
        if (changedUser.getPassword() != null && !changedUser.getPassword().equals(existingUser.getPassword())) {
            existingUser.setPassword(changedUser.getPassword());
        }
        if (changedUser.getUserText() != null && !changedUser.getUserText().equals(existingUser.getUserText())) {
            existingUser.setUserText(changedUser.getUserText());
        }
        return userRepository.save(existingUser);
    }

    public User deleteUser(Long userId) {
        User userToDelete = getUserByUserId(userId);
        userRepository.delete(userToDelete);
        return userToDelete;
    }

}
