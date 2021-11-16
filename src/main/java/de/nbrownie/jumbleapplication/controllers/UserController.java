package de.nbrownie.jumbleapplication.controllers;
import de.nbrownie.jumbleapplication.models.Jumble;
import de.nbrownie.jumbleapplication.models.User;
import java.util.List;

import de.nbrownie.jumbleapplication.services.UserService;
import lombok.AllArgsConstructor;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@AllArgsConstructor
@RestController
@RequestMapping(path= "/user")
public class UserController {

    private final UserService userService;

    @GetMapping("/getall")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping(path = "/{user_id}")
    public User getUserById(
            @PathVariable("user_id") Long user_id) {
        return userService.getUserById(user_id);
    }

   @PostMapping("/signup")
    public void addNewUser(@Validated @RequestBody User user){
         userService.addNewUser(user);
    }

    @DeleteMapping(path = "/{user_id}")
    public void deleteUser(
            @PathVariable("user_id") Long user_id) {
        userService.deleteUser(user_id);
    }
}
    
