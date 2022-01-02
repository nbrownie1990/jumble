package de.nbrownie.jumbleapplication.services;

import de.nbrownie.jumbleapplication.exceptions.UnauthorizedUserException;
import de.nbrownie.jumbleapplication.models.User;
import de.nbrownie.jumbleapplication.repo.UserRepository;
import lombok.Getter;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Slf4j
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

    public User getUserByUserId(Long id) {
        return userRepository.getUserByUserId(id).orElseThrow(() -> new IllegalArgumentException("User not found"));
    }

    public User getUserByUserName(String username) {
        return userRepository.getUserByUserName(username).orElseThrow(() -> new IllegalArgumentException("User not found"));
    }

/////noch überarbeiten:
//    public User addNewProfile(String username, User profile) {
//        User profileToSave = getUserByUserName(username);
//        User savedProfile = userRepository.save(profileToSave);
//        return savedProfile;
//    }
//    //
//
//    public User updatePassword(String username, String password) {
//        User user = getUserByUserName(username);
//        String hashedPassword = passwordEncoder.encode(password);
//        user.setPassword(hashedPassword);
//        log.info("New password set");
//        return userRepository.save(user);
//    }


    public User updateUser(Long id, User changedUser) {
        User existingUser = userRepository.getUserByUserId(id).orElseThrow(() -> new EntityNotFoundException("User not found"));
        if (!existingUser.getId().equals(id)){
            throw new UnauthorizedUserException("User can only be updated himself/herself");
        }
        if (changedUser.getUserImage() != null && !changedUser.getUserImage().equals(existingUser.getUserImage())) {
            existingUser.setUserImage(changedUser.getUserImage());
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


    public User deleteUser(Long id) {
        User userToDelete = getUserByUserId(id);
        userRepository.delete(userToDelete);
        return userToDelete;
    }
}
//
//}
