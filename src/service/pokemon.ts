interface Pokemon {
    name: string,
    position?: PostitionCustom,
    iconUrl?: string,
    hp: Number
};

interface PostitionCustom {
    x: number,
    y: number,
    zone: string
}

export type PokeDex = Pokemon[];

const makePokemon = (name: string, hp: number): Pokemon => {
    return {
        name,
        hp
    };
};

type justHP = Omit<Pokemon, 'name'>;
const pokeDex:PokeDex = [
    makePokemon('Charmander', 455),
    makePokemon('Pikachu', 225)
];

const pokeHPList = pokeDex.map(a => {
    const b:justHP = a
    return b
})

console.log(JSON.stringify(pokeDex));
console.log(JSON.stringify(pokeHPList));

const noNamesRuntime = pokeDex.map(pokemon => {
    const { name, ...rest } = pokemon;
    return rest;
});

console.log(JSON.stringify(noNamesRuntime));

