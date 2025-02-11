from game import Game
import datetime

class RankingData:

    def __init__(self, date, game, num_players, day_peak, ranking):
        self.date: datetime = date
        self.game: Game = game
        self.num_players: int = num_players
        self.day_peak: int = day_peak
        self.ranking: int = ranking

    def __str__(self):
        return (f"""
            {self.game.name} : {type(self.game.name)} \n 
            {self.date} : {type(self.date)} \n
            {self.num_players} : {type(self.num_players)} \n
            {self.day_peak} : {type(self.day_peak)} \n
            {self.ranking} : {type(self.ranking)}
        """)