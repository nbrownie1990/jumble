package de.nbrownie.jumblesbackend.controllers;

import de.nbrownie.jumblesbackend.exceptions.ResourceNotFoundException;
import de.nbrownie.jumblesbackend.models.Jumble;
import de.nbrownie.jumblesbackend.repo.JumbleRepository;
import de.nbrownie.jumblesbackend.services.JumbleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
    public List<Jumble> GetAllJumbles() { return jumbleRepository.findAll();
    }

    @GetMapping("/jumbles/{id}")
    public ResponseEntity<Jumble> GetJumbleById(@PathVariable Long id) {
        Jumble jumble = jumbleRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Jumble with this id:" + id + "not exist..."));
        return ResponseEntity.ok(jumble);
    }


    @PostMapping("/new")
    public Jumble PostJumble(@RequestBody Jumble jumble){
        return jumbleRepository.save(jumble);
    }

}
    
