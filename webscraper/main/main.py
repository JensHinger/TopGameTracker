import requests
from selenium import webdriver
from selenium.webdriver.common.by import By
from game import Game
from ranking_data import RankingData
from database import DataBaseConnection
from service import TopGameService
import datetime

import psycopg2

DATABASE = DataBaseConnection("topgames")

def get_data():
    # TODO what happens if steamdb is down -> no connection?
    browser = webdriver.Firefox()
    browser.get('https://steamdb.info/charts/')
    browser.minimize_window()

    all_games = browser.find_elements(By.CLASS_NAME, "app")
    # TODO change later to only save hours not minutes
    current_date = datetime.datetime.today().strftime('%Y-%m-%d %H:%M')
    print(f"Data is collected @ {current_date}")

    service = TopGameService(DATABASE) 

    for game in all_games:
        table_data = game.find_elements(By.TAG_NAME, "td")

        current_ranking: int = int(table_data[0].text[:-1])
        game_name: str = table_data[2].text

        current_pc: int = int(table_data[3].text.replace(",", ""))
        day_peak: int = int(table_data[4].text.replace(",", ""))
        all_time_peak_current: int = int(table_data[5].text.replace(",", ""))

        # Check if Game exits
        game: Game = service.get_game(game_name)

        image_url = table_data[1].find_element(By.TAG_NAME, "img").get_attribute("src")
        response = requests.get(image_url) # Get image out of request result
        if response.status_code == 200:
            binary_image = response._content
        else:
            # Somehow picture could not be loaded
            binary_image = None

        if game is None:
            # Insert new game and ranking data in db
            new_game: Game = Game(game_name, binary_image, all_time_peak_current)
            new_ranking: RankingData = RankingData(current_date, new_game, current_pc, day_peak, current_ranking)
            
            service.insert_game(new_game)
            service.insert_ranking_data(new_ranking)
        else:
            # insert existing ranking data in db
            new_ranking = RankingData(current_date, game, current_pc, day_peak, current_ranking)

            bool_image = game.image is None and binary_image is not None
            bool_pc = game.all_time_high_pc < all_time_peak_current

            if bool_image or bool_pc:
                game.set_all_time_high_pc(all_time_peak_current)
                game.set_image(binary_image)
                service.update_game(game)
        
            service.insert_ranking_data(new_ranking)

    browser.close()


if __name__ == "__main__":
    import schedule
    import  time
    get_data()
    schedule.every(1).minutes.do(get_data)

    while True:
        schedule.run_pending()
        time.sleep(1) # Checks roughly once every second if task should be ran? could increase but higher volatility when data is captured
        