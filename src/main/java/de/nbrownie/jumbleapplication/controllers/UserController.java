package de.nbrownie.jumbleapplication.controllers;
import de.nbrownie.jumbleapplication.models.User;
import java.util.List;

import de.nbrownie.jumbleapplication.services.UserService;
import lombok.AllArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;


import static org.springframework.http.ResponseEntity.ok;
import static org.springframework.util.MimeTypeUtils.APPLICATION_JSON_VALUE;
@CrossOrigin(origins = "*", maxAge = 3600, allowedHeaders = "*")
@AllArgsConstructor
@RestController
@RequestMapping(path= "api/user")
public class UserController {

    private final UserService userService;

    @PreAuthorize("hasRole('USER')")
    @GetMapping("getall")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @PreAuthorize("hasRole('USER')")
    @GetMapping(path = "{userId}")
    public User getUserByUserId(
            @PathVariable Long userId) {
        return userService.getUserByUserId(userId);
    }

//    @PutMapping(value = "edit/me", produces = APPLICATION_JSON_VALUE, consumes = APPLICATION_JSON_VALUE)
//    public ResponseEntity<UserApi> updateUser(@AuthenticationPrincipal User authUser, @PathVariable Long userId, @RequestBody UserApi updateUser){
//        if(updateUser.getUserId().equals(userId)){
//            User changedUser = userService.updateUser(authUser.getUserId(), mapUser(updateUser));
//            return ok(mapUser(changedUser));
//        }
//        throw new IllegalArgumentException("User and ID does not belong together");
//    }



//    @PostMapping(path = "new")
//    public void addNewUser(@RequestBody User user){
//        userService.addNewUser(user);
//    }
    
//
//    @GetMapping(path = "{username}", produces = APPLICATION_JSON_VALUE)
//    public ResponseEntity<UserApi> getUserByUserName(@AuthenticationPrincipal User authUser, @PathVariable String username){
//        if (authUser.getUsername().equals(username) || authUser.getUserRole().equals("admin")) {
//            User user = userService.getUserByUserName(username);
//            return ok(mapUser(user));
//        }
//        throw new UnauthorizedUserException("Only admins are allowed to find any user");
//    }
//
//    @PostMapping(value = "register", produces = APPLICATION_JSON_VALUE, consumes = APPLICATION_JSON_VALUE)
//    public ResponseEntity<UserApi> register(@RequestBody Signup user) {
//        User createdUser = userService.createUser(mapUser(user), user.getPassword());
//        return ResponseEntity.ok(mapUser(createdUser));
//    }
//
//    @PostMapping(value = "new", produces = APPLICATION_JSON_VALUE, consumes = APPLICATION_JSON_VALUE)
//    public ResponseEntity<UserApi> addNewProfile(@PathVariable String username, @RequestBody UserApi newUser) {
//        User user = mapUser(newUser);
//        User createdUser = userService.addNewProfile(username, user);
//        return ok(mapUser(createdUser));
//    }
//

//
//    @PutMapping(value="edit/updatePassword", produces = APPLICATION_JSON_VALUE, consumes = APPLICATION_JSON_VALUE)
//    public ResponseEntity<UserApi> updatePassword(@AuthenticationPrincipal User authUser, @RequestBody PasswordApi password){
//        authService.checkPassword(password.getPassword());
//        authService.validateCredentials(authUser.getUsername(), password.getOldPassword());
//        User updatedUser = userService.updatePassword(authUser.getUsername(), password.getPassword());
//        return ok(mapUser(updatedUser));
//    }

//    @DeleteMapping(path = "edit/delete/{userId}")
//    public void deleteUser(
//            @PathVariable Long userId) {
//        userService.deleteUser(userId);
//    }

//    @DeleteMapping(value = "edit/delete/{userId}", produces = APPLICATION_JSON_VALUE)
//    public ResponseEntity<UserApi> deleteUser(@PathVariable Long userId) {
//        User deletedUser = userService.deleteUser(userId);
//        return ok(mapUser(deletedUser));
//    }
}
    
