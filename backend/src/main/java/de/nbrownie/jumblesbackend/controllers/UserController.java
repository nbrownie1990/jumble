package de.nbrownie.jumblesbackend.controllers;
import de.nbrownie.jumblesbackend.models.User;
import java.util.List;

import de.nbrownie.jumblesbackend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path= "/api/")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<User> GetUsers() {
        return userService.GetUsers();
    }
}
    
