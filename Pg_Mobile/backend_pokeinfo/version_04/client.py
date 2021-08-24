import urllib.request
import json
import time
import pandas as pd

# pokemon routes
URL_POKEMONS = "http://172.19.1.1:5000/"
IS_ALIVE = URL_POKEMONS + "isalive/"
POKEMON = URL_POKEMONS + "pokemons/"


def access(url):
    print('Accessing url:', url)

    response = urllib.request.urlopen(url)
    data = response.read()

    return data.decode('utf-8')


def is_alive():
    alive = False

    if access(IS_ALIVE) == 'yes':
        alive = True

    return alive


def get_pokemon():
    data = access(POKEMON)
    data = json.loads(data)

    return data["pokemons"]


def print_pokemons(pokemons):
    frame = pd.DataFrame(pokemons)
    print(frame.T)


if __name__ == '__main__':
    while True:
        # Verify if the service is available (is_alive)
        if is_alive():
            pokemons = get_pokemon()
            print_pokemons(pokemons)

            # get the list of pokemons
            # otherwise
            # return a inactivity message
        else:
            # print "not available"
            print("The service is not available!")

        time.sleep(5)
