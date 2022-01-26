const itemsOfProduct = {
  name: '',
  salads: {
    /* lettuce: { pos: 0, prices: [0, 0, 0, 4, 0] },
    tomato: { pos: 0, prices: [0, 0, 0, 4, 0] },
    cucumber: { pos: 0, prices: [0, 0, 0, 4, 0] },
    pickle: { pos: 0, prices: [0, 0, 0, 4, 0] },
    onion: { pos: 0, prices: [0, 0, 0, 4, 0] },
    fried_onion: { pos: 0, prices: [0, 0, 0, 4, 0] },*/
  },
  sauces: {
    /* garlic: { pos: 0, prices: [0, 0, 0, 0, 0] },
    garlic_honey: { pos: 0, prices: [0, 0, 0, 0, 0] },
    plums: { pos: 0, prices: [0, 0, 0, 0, 0] },
    sweet_chilli: { pos: 0, prices: [0, 0, 0, 0, 0] },*/
  },
  salad: {
    /*green_salad: { pos: 0, prices: [0, 65] },
    live_salad: { pos: 0, prices: [0, 54] },*/
  },
  breads: {
    /*burger_bun: { pos: 0, prices: [0, 10] },
    finger_bun: { pos: 0, prices: [0, 5] },
    baggt: { pos: 0, prices: [0, 13] },
    plate: { pos: 0, prices: [0, 25] },*/
  },
  extras: {
    /* onion_rings: { pos: 0, prices: [0, 6] },
    mashed_potatoes: { pos: 0, prices: [0, 12, 15] },
    Fries: { pos: 0, prices: [0, 12, 15] },
    sweet_potato_chips: { pos: 0, prices: [0, 12, 15] },*/
  },
  meat: {
    /*shnitzel: { pos: 0, prices: [0, 20, 25] },
    burger: { pos: 0, prices: [0, 25, 35] },
    hotDogs: { pos: 0, prices: [0, 10, 15] },*/
  },
  drink: {
    /*cola: { pos: 0, prices: [0, 8, 12] },
    water: { pos: 0, prices: [0, 5, 8] },
    funta: { pos: 0, prices: [0, 8, 12] },*/
  },
};
export function get_OBJ_by_ID(key) {
  return itemsOfProduct[key];
}
export function set_OBJ_by_ID(key, itemOfKey) {
  itemsOfProduct[key] = { ...itemOfKey };
}
export function getPrice(key) {
  let sum = 0;
  for (let i in itemsOfProduct[key]) {
    sum += itemsOfProduct[key][i].prices[itemsOfProduct[key][i].pos];
  }
  return sum;
}
export default itemsOfProduct;

/*
                  extras: {
potato: { pos: 0, prices: [0, 12, 15] },
survivors: { pos: 0, prices: [0, 15, 20] },
kinds_of_sausages: { pos: 0, prices: [0, 10, 18] },
fish: { pos: 0, prices: [0, 25] },*/
