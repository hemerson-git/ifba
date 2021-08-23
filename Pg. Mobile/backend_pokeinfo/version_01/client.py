def is_alive():
    pass


if __name__ == '__main__':
    # Verify if the service is available (is_alive)
    is_alive = is_alive()

    # if the service is online...
    if is_alive:
        pokemons = get_pokemons()
    # get the list of pokemons
    # otherwise
    # return a inactivity message
