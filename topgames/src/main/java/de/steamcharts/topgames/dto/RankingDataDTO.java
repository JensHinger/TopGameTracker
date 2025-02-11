package de.steamcharts.topgames.dto;

import java.util.Date;

public class RankingDataDTO {
    private String game;
    private Date date;
    private int numPlayers;
    private int dayPeak;
    private int ranking;

    public RankingDataDTO(String game, Date date, int numPlayers, int dayPeak, int ranking) {
        this.game = game;
        this.date = date;
        this.numPlayers = numPlayers;
        this.dayPeak = dayPeak;
        this.ranking = ranking;
    }

    public String getGame() {
        return game;
    }

    public void setGame(String game) {
        this.game = game;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
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
