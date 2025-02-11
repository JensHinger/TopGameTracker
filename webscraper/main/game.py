class Game:

    def __init__(self, name, image, all_time_high_pc):
        self.name: str = name
        self.image: list = image
        self.all_time_high_pc: int = all_time_high_pc

    def set_all_time_high_pc(self, new_all_time_high_pc: int) -> None:
        self.all_time_high_pc = new_all_time_high_pc

    def set_image(self, new_image) -> None:
        self.image = new_image

    @staticmethod
    def from_db(result):
        name, image, all_time_high_pc = result
        return Game(name, image, all_time_high_pc)

    def __str__(self):
        return (f"""
                {self.name} : {type(self.name)} \n 
                {self.image} : {type(self.image)} \n
                {self.all_time_high_pc} : {type(self.all_time_high_pc)} \n
        """)