package de.steamcharts.topgames.controller;

import de.steamcharts.topgames.model.Game;
import de.steamcharts.topgames.service.GameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/games")
@CrossOrigin
public class GameController {

    @Autowired
    private GameService gameService;

    @GetMapping("/{name}")
    public Optional<Game> findByName(@PathVariable String name){
        return gameService.findByName(name);
    }

    @GetMapping
    public List<Game> findAll(){
        return gameService.findAll();
    }
}
