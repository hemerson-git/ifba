from flask import Flask, jsonify
import mysql.connector as mysql

service = Flask(__name__)

IS_ALIVE = 'yes'
DEBUG = True
PAGE_SIZE = 4

MYSQL_SERVER = "database"
MYSQL_USER = "root"
MYSQL_PASS = "admin"
MYSQL_BASE = "pokemons"


def get_connection_db():
    connection = mysql.connect(
        host=MYSQL_SERVER, user=MYSQL_USER, password=MYSQL_PASS, database=MYSQL_BASE
    )

    return connection


@service.route('/pokemons/<int:pagina>')
def get_pokemons(page):
    pokemons = []

    connection = get_connection_db()
    cursor = connection.cursor(dictionary=True)
    cursor.execute(
        "select pokemons.id as pokemon_id, pokemons.name as pokemon_name, pokemons.image1 as image," +
        "IFNULL(pokemons.image2, '') as image2, IFNULL(pokemon.image3, '') as image_3, pokemons.height as height" +
        "ORDER BY DESC" +
        "LIMIT " + str((page - 1) * PAGE_SIZE) + ", " + str(PAGE_SIZE)
    )

    return pokemons
