import urllib.request
import json
import time
import pandas as pd

# pokemon routes
URL_SERVICE = "http://127.0.0.1:5000/"
IS_ALIVE = URL_SERVICE + "isalive/"
POKEMON = URL_SERVICE + "pokemons/"


def access(url):
    print('Accessing url: ', url)

    response = urllib.request.urlopen(url)
    data = response.read()

    print(response)
    return data.decode("utf-8")


def is_alive():
    alive = False

    if access(IS_ALIVE) == 'yes':
        alive = True

    return alive


def get_pokemon():
    data = access(POKEMON)
    pokemons = json.loads(data)

    return pokemons


def print_pokemons(pokemons):
    frame = pd.DataFrame(pokemons)
    print(frame.T)


if __name__ == '__main__':
    while True:
        # Verify if the service is available (is_alive)
        alive = is_alive()

        if alive:
            pokemons = get_pokemon()
            print_pokemons(pokemons)

            # get the list of pokemons
            # otherwise
            # return a inactivity message
        else:
            # print "not available"
            print("The service is not available!")

        time.sleep(5)
