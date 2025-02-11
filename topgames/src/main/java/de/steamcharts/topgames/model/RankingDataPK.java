package de.steamcharts.topgames.model;

import jakarta.persistence.*;

import java.util.Date;

@Embeddable
public class RankingDataPK {
    @ManyToOne
    @JoinColumn(name="game")
    private Game game;

    @Column(name="date")
    @Temporal(TemporalType.TIMESTAMP)
    private Date date;

    public RankingDataPK() {
    }

    public RankingDataPK(Game game, Date date) {
        this.game = game;
        this.date = date;
    }

    public Game getGame() {
        return game;
    }

    public void setGame(Game game) {
        this.game = game;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
