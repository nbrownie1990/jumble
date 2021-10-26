package de.nbrownie.jumblesbackend.controllers;

import de.nbrownie.jumblesbackend.models.User;
import de.nbrownie.jumblesbackend.repo.UserRepository;

import java.math.BigInteger;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping ("/")
    public List<User> GetUsers() {
    return userRepository.findAll();
    }
    
    @GetMapping("/{user_id}")
    public User GetUser(@PathVariable BigInteger user_id){
        return userRepository.findById(user_id).orElse(null);
    }

    @PostMapping("/")
    public User PostUser(@RequestBody User user){
        return userRepository.save(user);
        }

    @PutMapping("/")
    public User PutUser(@RequestBody User user){
        User oldUser= userRepository.findById(user.getUser_id()).orElse(null);
        oldUser.setUser_name(user.getUser_name());
        oldUser.setUser_email(user.getUser_name());
        oldUser.setUser_psw(user.getUser_name());
        oldUser.setUser_text(user.getUser_name());
        return userRepository.save(oldUser);
    }

    @DeleteMapping("/{user_id}")
    public BigInteger DeleteUser(@PathVariable BigInteger user_id){
        userRepository.deleteById(user_id);
        return user_id;
    }
}
