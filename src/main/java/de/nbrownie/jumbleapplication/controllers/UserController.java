package de.nbrownie.jumbleapplication.controllers;
import de.nbrownie.jumbleapplication.models.User;
import java.util.List;

import de.nbrownie.jumbleapplication.repo.UserRepository;
import de.nbrownie.jumbleapplication.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path= "/user")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<User> GetUsers() {
        return userService.GetUsers();
    }

    @PostMapping("/signup")
    public User PostUser(@RequestBody User user){
        return userRepository.save(user);
    }

}
    
