package de.steamcharts.topgames.service;

import de.steamcharts.topgames.model.Game;
import de.steamcharts.topgames.repository.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class GameService {

    @Autowired
    private GameRepository gameRepository;

    public List<Game> findAll(){
        return gameRepository.findAll();
    }

    public Optional<Game> findByName(String name){
        return gameRepository.findById(name);
    }

    public void deleteByName(String name){
        gameRepository.deleteById(name);
    }
}
