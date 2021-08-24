import requests
import json
from time import sleep

POKEMONS = "/media/hemerson/96AA0066AA0044E9/Desenvolvimento/IFBA/Pg_Mobile/backend_pokeinfo/version_04/server/pokemons.json"

URL_POKEMONS = "http://172.19.1.1:5000/write/"


def send(url, json_pokemons):
    file = open(json_pokemons, "r")
    data = json.load(file)
    file.close()

    response = "There is no pokemons to send"
    if data:
        response = requests.post(url, json=json.dumps(data))
        if response.ok:
            response = "pokemons sent successfully"
        else:
            response = "ERROR: Something went wrong, while sending: " + response.text

    return response


if __name__ == "__main__":
    print("Crawler")

    while True:
        response = send(URL_POKEMONS, POKEMONS)
        print(response, "[Pokemons]")

        sleep(10)
