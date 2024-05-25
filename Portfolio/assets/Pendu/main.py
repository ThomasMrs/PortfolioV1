import random


with open("liste_francais.txt", "r") as file:
    LesMots = file.read()
    mots = list(map(str, LesMots.split()))


MotAleatoire = random.choice(mots)


compteur = 0
lettre_trouver = ''
MotAChercher = ['_'] * len(MotAleatoire)


def display_pendue(nb):
    potence = [
        '   ==========Y===',
        '  ||  /      |',
        '  || /       |',
        '  ||/        O',
        '  ||        /|\\',
        '  ||        / \\',
        '  ||\n'
        '||\n'
        '//||\n'
        '============'
    ]
    for e in range(nb):
        print(potence[e])


while compteur < 7 and '_' in MotAChercher:

    display_pendue(compteur)


    lettre = input('Choisir une lettre :').lower()


    if lettre in MotAleatoire:
        lettre_trouver = lettre
        for i, letter in enumerate(MotAleatoire):
            if letter == lettre:
                MotAChercher[i] = lettre
    else:
        compteur += 1


    print(' '.join(MotAChercher))


if compteur == 7:
    print("You Lose")
    print(MotAleatoire)
else:
    print("You Win!")
