import psycopg2

class DataBaseConnection():

    def __init__(self, dbname):
        self.dbname: str = dbname
        self.connection = None
        self.cursor = None

    def __enter__(self):
        self.connection = psycopg2.connect(f"dbname={self.dbname} user=postgres password=admin port=5431")
        if self.cursor != None:
            raise RuntimeError("Already connected!")
        self.cursor = self.connection.cursor()
        return self.cursor

    def __exit__(self, exc_type, exc_val, exc_tb) -> None:       
        self.connection.commit()

        self.cursor.close()
        self.connection.close()
        self.cursor = None
        self.connection = None
