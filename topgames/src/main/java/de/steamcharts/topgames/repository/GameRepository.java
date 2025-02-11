package de.steamcharts.topgames.repository;

import de.steamcharts.topgames.model.Game;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface GameRepository extends JpaRepository<Game, String> {
}
