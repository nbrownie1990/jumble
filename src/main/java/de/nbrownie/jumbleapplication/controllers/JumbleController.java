package de.nbrownie.jumbleapplication.controllers;

import de.nbrownie.jumbleapplication.exceptions.ResourceNotFoundException;
import de.nbrownie.jumbleapplication.models.Jumble;
import de.nbrownie.jumbleapplication.repo.JumbleRepository;
import de.nbrownie.jumbleapplication.services.JumbleService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@AllArgsConstructor
@RestController
@RequestMapping(path= "/jumbles")
public class JumbleController {

    private final JumbleService jumbleService;

    //Get all JumbleApplication
    @GetMapping("/getall")
    public List<Jumble> getAllJumbles() { return jumbleService.getAllJumbles();
    }

//    @GetMapping("/{id}")
//    public ResponseEntity<de.nbrownie.jumbleapplication.models.Jumble> GetJumbleById(@PathVariable Long id) {
//        de.nbrownie.jumbleapplication.models.Jumble jumble = jumbleRepository.findById(id)
//                .orElseThrow(() -> new ResourceNotFoundException("JumbleApplication with this id:" + id + "not exist..."));
//        return ResponseEntity.ok(jumble);
//    }
//
//    @PostMapping("/new")
//    public de.nbrownie.jumbleapplication.models.Jumble PostJumble(@RequestBody de.nbrownie.jumbleapplication.models.Jumble jumble){
//        return jumbleRepository.save(jumble);
//    }
//
//    @PutMapping("/edit/{id}")
//    public ResponseEntity<de.nbrownie.jumbleapplication.models.Jumble> updateJumble(@PathVariable Long id, @RequestBody de.nbrownie.jumbleapplication.models.Jumble jumbleDetails){
//
//        de.nbrownie.jumbleapplication.models.Jumble jumble = jumbleRepository.findById(id)
//                .orElseThrow(() -> new ResourceNotFoundException("JumbleApplication with this id:" + id + "not exist..."));
//
//        jumble.setJumble_address(jumbleDetails.getJumble_name());
//        jumble.setJumble_category(jumbleDetails.getJumble_category());
//        jumble.setJumble_rating(jumbleDetails.getJumble_rating());
//        jumble.setJumble_time(jumbleDetails.getJumble_time());
//        jumble.setJumble_name(jumbleDetails.getJumble_name());
//        jumble.setJumble_website(jumbleDetails.getJumble_website());
//        jumble.setJumble_text(jumbleDetails.getJumble_text());
//        jumble.setJumble_time(jumbleDetails.getJumble_time());
//
//        de.nbrownie.jumbleapplication.models.Jumble updateJumble = jumbleRepository.save(jumble);
//        return ResponseEntity.ok(updateJumble);
//    }
}
    
