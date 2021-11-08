package de.nbrownie.jumblesbackend.controllers;

import de.nbrownie.jumblesbackend.models.Jumble;
import de.nbrownie.jumblesbackend.services.JumbleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path= "/jumble")
public class JumbleController {

    private final JumbleService jumbleService;
    @Autowired
    public JumbleController(JumbleService jumbleService) {
        this.jumbleService = jumbleService;
    }

    @GetMapping
    public List<Jumble> GetJumbles() { return jumbleService.GetJumbles();
    }
}
    
