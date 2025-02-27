package de.steamcharts.topgames.service;

import de.steamcharts.topgames.dto.RankingDataDTO;
import de.steamcharts.topgames.model.RankingData;
import de.steamcharts.topgames.model.RankingDataPK;
import de.steamcharts.topgames.repository.RankingDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class RankingDataService {

    @Autowired
    private RankingDataRepository rankingDataRepository;

    public List<RankingDataDTO> findAll() {
        return rankingDataRepository.findAll()
                .stream().map(this::convertToDTO)
                .toList();
    }

    public List<RankingDataDTO> findAllByGame(String name) {
        return  rankingDataRepository.findByRankingDataPK_Game_Name(name)
                .stream().map(this::convertToDTO)
                .toList();
    }

    public List<RankingDataDTO> findNLatestByGame(String name, int number) {
        return  rankingDataRepository.findNLatestByGame(name, number)
                .stream().map(this::convertToDTO)
                .toList();
    }

    public List<RankingDataDTO> findAllBetweenDate(Date startDate, Date endDate) {
        return rankingDataRepository.findByRankingDataPKDateBetween(startDate, endDate)
                .stream().map(this::convertToDTO)
                .toList();
    }

    public List<RankingDataDTO> findNLatestEntries(int number) {
        return rankingDataRepository.findNLatestEntries(number)
                .stream().map(this::convertToDTO)
                .toList();
    }

    private RankingDataDTO convertToDTO(RankingData rankingData){
        return new RankingDataDTO(
                rankingData.getRankingDataPK().getGame().getName(),
                rankingData.getRankingDataPK().getDate(),
                rankingData.getNumPlayers(),
                rankingData.getDayPeak(),
                rankingData.getRanking()
        );
    }

    // TODO Maybe unecessary -> No data is given from front to backend
    private RankingData convertToEntity(RankingDataDTO rankingDataDTO){
        // TODO How to get game object for conversion?
        // RankingDataPK rankingDataPK = new RankingDataPK(rankingDataDTO.getGame(), rankingDataDTO.getDate());

        return new RankingData();
    }
}
