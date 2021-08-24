import urllib.request
import json
import time
import pandas as pd

# pokemon routes
URL_SERVICE = "http://127.0.0.1:5000/"
IS_ALIVE = URL_SERVICE + "isalive/"
POKEMON = URL_SERVICE + "pokemon/"


def access(url):
    print('Accessing url: ', url)

    response = urllib.request.urlopen(url)
    # data = response.read()

    print(response)
    # return data.decode("utf-8")


def is_alive():
    alive = False

    if access(IS_ALIVE) == 'yes':
        alive = True

    return alive


def get_pokemon():
    data = access(POKEMON)
    pokemons = json.loads(data)

    return pokemons


if __name__ == '__main__':
    # Verify if the service is available (is_alive)
    is_alive = is_alive()

    print(is_alive)
    # if the service is online...
    # get the list of pokemons
    # otherwise
    # return a inactivity message
