package de.steamcharts.topgames.repository;

import de.steamcharts.topgames.model.RankingData;
import de.steamcharts.topgames.model.RankingDataPK;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Date;
import java.util.List;

public interface RankingDataRepository extends JpaRepository<RankingData, RankingDataPK> {

    List<RankingData> findByRankingDataPK_Game_Name(String name);

    List<RankingData> findByRankingDataPKDateBetween(Date startDate, Date endDate);

    @Query(value = "SELECT * FROM rankingdata WHERE game = :game ORDER BY date DESC LIMIT :number", nativeQuery = true)
    List<RankingData> findNLatestByGame(String game, int number);

    @Query(value = "SELECT * FROM rankingdata ORDER BY date DESC LIMIT :number", nativeQuery = true)
    List<RankingData> findNLatestEntries(int number);
}

