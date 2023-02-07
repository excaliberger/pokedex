export function filterPokesByType(list, type) {
    if (type) return list.filter((pokemon) => pokemon.type == type);
    else return list;
  }

export function filterPokesByWeakness(list, weakness) {
if (type) return list.filter((pokemon) => pokemon.weakness == weakness);
else return list;
}

export function getPokemonStats(list) {
    // is there a better way to do this than reduce?
    // return list.reduce((stats, pokemon) => {
    //     return stats;
    // });
 }
 