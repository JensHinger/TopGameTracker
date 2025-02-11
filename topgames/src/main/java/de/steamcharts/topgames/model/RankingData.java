package de.steamcharts.topgames.model;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name="rankingdata")
public class RankingData {

    @EmbeddedId
    private RankingDataPK rankingDataPK;

    @Column(name="num_players")
    private int numPlayers;

    @Column(name="day_peak")
    private int dayPeak;

    @Column(name="ranking")
    private int ranking;

    public RankingDataPK getRankingDataPK() {
        return rankingDataPK;
    }

    public void setRankingDataPK(RankingDataPK rankingDataPK) {
        this.rankingDataPK = rankingDataPK;
    }

    public int getNumPlayers() {
        return numPlayers;
    }

    public void setNumPlayers(int numPlayers) {
        this.numPlayers = numPlayers;
    }

    public int getDayPeak() {
        return dayPeak;
    }

    public void setDayPeak(int dayPeak) {
        this.dayPeak = dayPeak;
    }

    public int getRanking() {
        return ranking;
    }

    public void setRanking(int ranking) {
        this.ranking = ranking;
    }
}
