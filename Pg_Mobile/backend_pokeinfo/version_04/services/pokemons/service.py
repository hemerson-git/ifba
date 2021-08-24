from flask import Flask, request, jsonify
from pymemcache.client import base

service = Flask(__name__)

IS_ALIVE = 'yes'
VERSION = "0.0.1"
AUTHOR = "Hemerson Oliveira Silva"
EMAIL = "dummy@gmail.com"
DESCRIPTION = "This is a service the return informations about pokemons"

VOLATILE_DATABASE = "volatile_database"


# service routes
# ping like route, just to know if your service is available
@service.route('/isalive/')
def is_alive():
    return IS_ALIVE


# return basic infos about the service
@service.route('/info/')
def get_info():
    info = jsonify(
        version=VERSION,
        author=AUTHOR,
        email=EMAIL,
        description=DESCRIPTION
    )

    return info


@service.route('/write/', methods=['POST', 'GET'])
def write():
    pokemons = request.get_json()
    if pokemons:
        client = base.Client((VOLATILE_DATABASE, 11211))
        client.set("pokemons", pokemons)

    return "OK"


# return a list of all pokemons
@service.route('/pokemons/')
def get_pokemons():
    result = "ERROR: no pokemons founded"

    client = base.Client((VOLATILE_DATABASE, 11211))
    pokemons = client.get('pokemons')

    if pokemons:
        result = pokemons

    return result


if __name__ == '__main__':
    service.run(
        host='0.0.0.0',
        debug=True
    )
