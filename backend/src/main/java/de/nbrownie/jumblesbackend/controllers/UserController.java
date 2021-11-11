package de.nbrownie.jumblesbackend.controllers;
import de.nbrownie.jumblesbackend.models.User;
import java.util.List;

import de.nbrownie.jumblesbackend.repo.UserRepository;
import de.nbrownie.jumblesbackend.services.UserService;
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
    
