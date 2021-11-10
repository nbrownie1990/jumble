package de.nbrownie.jumblesbackend.controllers;

import de.nbrownie.jumblesbackend.models.Jumble;
import de.nbrownie.jumblesbackend.repo.JumbleRepository;
import de.nbrownie.jumblesbackend.services.JumbleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(path= "/jumbles")
public class JumbleController {

    @Autowired
    private JumbleRepository jumbleRepository;

    //Get all Jumbles
    @GetMapping("/getall")
    public List<Jumble> getAllJumbles() { return jumbleRepository.findAll();
    }

    @PostMapping("/new")
    public Jumble postJumble(@RequestBody Jumble jumble){
        return jumbleRepository.save(jumble);
    }

}
    
