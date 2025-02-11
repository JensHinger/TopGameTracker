package de.steamcharts.topgames.controller;

import de.steamcharts.topgames.dto.RankingDataDTO;
import de.steamcharts.topgames.service.RankingDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/rankingdata")
@CrossOrigin
public class RankingDataController {

    @Autowired
    private  RankingDataService rankingDataService;

    @GetMapping
    public List<RankingDataDTO> findAll() {
        return rankingDataService.findAll();
    }

    @GetMapping("/{game}")
    public List<RankingDataDTO> findAllByGame(@PathVariable String game) {
        return rankingDataService.findAllByGame(game);
    }

    @GetMapping("/{game}/{number}")
    public List<RankingDataDTO> findNLatestByGame(@PathVariable String game, @PathVariable int number) {
        return rankingDataService.findNLatestByGame(game, number);
    }

    @GetMapping("/{startDate}_{endDate}")
    public List<RankingDataDTO> findAllBetweenDate(@PathVariable Date startDate, @PathVariable Date endDate) {
        return rankingDataService.findAllBetweenDate(startDate, endDate);
    }
}
