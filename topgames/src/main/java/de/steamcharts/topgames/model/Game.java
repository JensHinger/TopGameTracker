package de.steamcharts.topgames.model;

import jakarta.persistence.*;

@Entity
@Table(name="game")
public class Game {

    @Id
    @Column(name="name")
    String name;

    @Column(name="image")
    byte[] image;

    @Column(name="all_time_high_pc")
    int allTimeHighPC;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }

    public int getAll_time_high_pc() {
        return allTimeHighPC;
    }

    public void setAll_time_high_pc(int allTimeHighPC) {
        this.allTimeHighPC = allTimeHighPC;
    }
}
