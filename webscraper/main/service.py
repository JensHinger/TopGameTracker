from game import Game
from ranking_data import RankingData
import psycopg2

class TopGameService:

    def __init__(self, database_connection):
        self.database_connection = database_connection

    def insert_ranking_data(self, ranking_data: RankingData):
        with self.database_connection as cur:
            SQL = "INSERT INTO rankingdata (game, date, num_players, day_peak, ranking) VALUES (%s, %s, %s, %s, %s)"
            cur.execute(SQL, (ranking_data.game.name, ranking_data.date, ranking_data.num_players, ranking_data.day_peak, ranking_data.ranking))

    def insert_game(self, game: Game):
        with self.database_connection as cur:
            SQL = "INSERT INTO game (name, image, all_time_high_pc) VALUES (%s, %s, %s)"
            cur.execute(SQL, (game.name, game.image, game.all_time_high_pc))

    def update_game(self, game: Game):
        with self.database_connection as cur:
            SQL = "UPDATE game SET (image, all_time_high_pc)=(%s, %s)  WHERE name=(%s)"
            cur.execute(SQL, (game.image, game.all_time_high_pc, game.name))

    def get_game(self, game_name: str) -> Game:
        with self.database_connection as cur:
            SQL = "SELECT name, image, all_time_high_pc FROM game WHERE name=(%s)"
            cur.execute(SQL, (game_name, ))
            result = cur.fetchone()
        
        try:
            game_object = Game.from_db(result)
        except TypeError:
            game_object = None

        return game_object
    
