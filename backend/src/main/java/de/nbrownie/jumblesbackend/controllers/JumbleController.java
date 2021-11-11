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
    @GetMapping("/{id}")
    public ResponseEntity<Jumble> GetJumbleById(@PathVariable Long id) {
        Jumble jumble = jumbleRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Jumble with this id:" + id + "not exist..."));
        return ResponseEntity.ok(jumble);
    }

    @PostMapping("/new")
    public Jumble PostJumble(@RequestBody Jumble jumble){
        return jumbleRepository.save(jumble);
    }

    @PutMapping("/edit/{id}")
    public ResponseEntity<Jumble> updateJumble(@PathVariable Long id, @RequestBody Jumble jumbleDetails){

        Jumble jumble = jumbleRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Jumble with this id:" + id + "not exist..."));

        jumble.setJumble_address(jumbleDetails.getJumble_name());
        jumble.setJumble_category(jumbleDetails.getJumble_category());
        jumble.setJumble_rating(jumbleDetails.getJumble_rating());
        jumble.setJumble_termin(jumbleDetails.getJumble_termin());
        jumble.setJumble_name(jumbleDetails.getJumble_name());
        jumble.setJumble_website(jumbleDetails.getJumble_website());
        jumble.setJumble_text(jumbleDetails.getJumble_text());
        jumble.setJumble_openingTime(jumbleDetails.getJumble_openingTime());

        Jumble updateJumble = jumbleRepository.save(jumble);
        return ResponseEntity.ok(updateJumble);
    }
}
    
