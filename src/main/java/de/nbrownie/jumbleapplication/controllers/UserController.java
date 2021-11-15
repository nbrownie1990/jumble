package de.nbrownie.jumbleapplication.controllers;
import de.nbrownie.jumbleapplication.models.User;
import java.util.List;

import de.nbrownie.jumbleapplication.repo.UserRepository;
import de.nbrownie.jumbleapplication.services.UserService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@AllArgsConstructor
@RestController
@RequestMapping(path= "/user")
public class UserController {

    private final UserService userService;

    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

//    @PostMapping("/signup")
//    public User PostUser(@RequestBody User user){
//        return userRepository.save(user);
//    }

}
    
