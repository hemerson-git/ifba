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


def generate_feed(register):
    feed = {
        "_id": register["pokemon_id"],
        "pokemon_name": register["pokemon_name"],
        "front_default": register["front_default"],
        "front_shiny": register["front_shiny"],
        "back_default": register["back_default"],
        "back_shiny": register["back_shiny"],
        "official_art": register["official_art"]
    }

    return feed


@service.route('/pokemons/<int:page>')
def get_pokemons(page):
    pokemons = []

    connection = get_connection_db()
    cursor = connection.cursor(dictionary=True)
    cursor.execute(
        "select _id as pokemon_id, name as pokemon_name, front_default, " +
        "IFNULL(back_default, '') as back_default, IFNULL(front_shiny, '') as front_shiny, " +
        "IFNULL(back_shiny, '') as back_shiny, IFNULL(official_art, '') as official_art, height " +
        "FROM details " +
        "ORDER BY pokemon_id ASC " +
        "LIMIT " + str((page - 1) * PAGE_SIZE) + ", " + str(PAGE_SIZE) + "; "
    )

    result = cursor.fetchall()
    for register in result:
        pokemons.append(generate_feed(register))

    return jsonify(pokemons)


@service.route('/pokemon/<int:id>')
def get_pokemon(id):
    pokemon = {}

    connection = get_connection_db()
    cursor = connection.cursor(dictionary=True)
    cursor.execute(
        "select _id as pokemon_id, name as pokemon_name, front_default, " +
        "IFNULL(back_default, '') as back_default, IFNULL(front_shiny, '') as front_shiny, " +
        "IFNULL(back_shiny, '') as back_shiny, IFNULL(official_art, '') as official_art, height " +
        "FROM details WHERE _id = " + str(id)
    )

    register = cursor.fetchone()
    if register:
        pokemon = generate_feed(register)

    return jsonify(pokemon)


if __name__ == "__main__":
    service.run(
        host="0.0.0.0",
        debug=DEBUG
    )
