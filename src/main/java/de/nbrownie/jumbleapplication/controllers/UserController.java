package de.nbrownie.jumbleapplication.controllers;
import de.nbrownie.jumbleapplication.api.JumbleApi;
import de.nbrownie.jumbleapplication.api.UserApi;
import de.nbrownie.jumbleapplication.models.Jumble;
import de.nbrownie.jumbleapplication.models.User;
import java.util.List;

import de.nbrownie.jumbleapplication.services.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityNotFoundException;

import static org.springframework.http.ResponseEntity.ok;
import static org.springframework.util.MimeTypeUtils.APPLICATION_JSON_VALUE;

@CrossOrigin("http://localhost:8080/")
@AllArgsConstructor
@RestController
@RequestMapping(path= "api/user")
public class UserController extends ControllerMapper {

    private final UserService userService;

    @GetMapping("getall")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping(path = "{userId}")
    public User getUserByUserId(
            @PathVariable Long userId) {
        return userService.getUserByUserId(userId);
    }

    @PutMapping(value = "edit/{userId}", produces = APPLICATION_JSON_VALUE, consumes = APPLICATION_JSON_VALUE)
    public ResponseEntity<UserApi> updateUser(@AuthenticationPrincipal User authUser, @PathVariable Long userId, @RequestBody UserApi updateUser){
        if(updateUser.getUserId().equals(userId)){
            User changedUser = userService.updateUser(userId, authUser.getUserId(), mapUser(updateUser));
            return ok(mapUser(changedUser));
        }
        throw new IllegalArgumentException("User and ID does not belong together");
    }

//   @PostMapping("signup")
//    public void addNewUser(@Validated @RequestBody User user){
//         userService.addNewUser(user);
//    }


//    @DeleteMapping(path = "edit/delete/{userId}")
//    public void deleteUser(
//            @PathVariable Long userId) {
//        userService.deleteUser(userId);
//    }

    @DeleteMapping(value = "edit/delete/{userId}", produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<UserApi> deleteUser(@PathVariable Long userId) {
        User deletedUser = userService.deleteUser(userId);
        return ok(mapUser(deletedUser));
    }
}
    
