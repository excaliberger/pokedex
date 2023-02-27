export function filterPokesByTypeAndWeakness(list, type, style) {
    if (type) return list.filter((pokemon) => {
      let found = false;
      pokemon[style].forEach((singleType) => {
        if (singleType == type) {
          found = true;
        }
      });
      return found;
    });
    else return list;
  }

  export function filterPokesByName(list, name) {
    if (name) return list.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(name);
    });
    else return list;
  }

export function getListOf(list, prop) {
  let alltypes=[]
  list.pokemon.forEach((item) => {
    alltypes.push(...item.type)
  })
  return [...new Set(alltypes)]
};
 