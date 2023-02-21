export function filterPokesByType(list, type) {
    if (type) return list.pokemon.filter((pokemon) => pokemon.type === type);
    else return list;
  }

export function filterPokesByWeakness(list, weakness) {
    if (weakness) return list.pokemon.filter((pokemon) => pokemon.weakness === weakness);
    else return list;
}

export function getListOf(list, prop) {
  let alltypes=[]
  list.pokemon.forEach((item) => {
    alltypes.push(...item.type)
  })
  return [...new Set(alltypes)]
};
 