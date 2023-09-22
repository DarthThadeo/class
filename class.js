// JavaScript source code
class Pokemon {//creer une class pokemon avec les parametres name,attack,defense,hp,luck 
    constructor(name, attack, defense, hp, luck) {
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = luck
    }
    attackPokemon(pokemon) {
        if (this.isLucky()) {
            let damage = this.attack - pokemon.defense
            pokemon.hp -= damage
            console.log(this.name + ' a attqu� ' + pokemon.name + ' pour ' + damage + ' de degat il lui reste ' + pokemon.hp + " points de vie");
        } else {
            console.log(this.name + " a rat� son attaque");
        }
    }
    isLucky() {
        return this.luck > Math.random()
    }
}
let dracofeu = new Pokemon('Dracofeu', 14, 8, 100, 0.5);//crer un pokemon
let boulbi = new Pokemon('Boulbi', 18, 4, 70, 0.8);//creer un autre pokemon

while (dracofeu.hp > 0 && boulbi.hp > 0) {
    dracofeu.attackPokemon(boulbi)
    if (boulbi.hp <= 0) {
        console.log(boulbi.name + " is dead !");
        break;
    }
    boulbi.attackPokemon(dracofeu)
    if (dracofeu.hp <= 0) {
        console.log(dracofeu.name + " is Dead !");//afficher une message de fin pour le pokemon perdant
        break
    }
}