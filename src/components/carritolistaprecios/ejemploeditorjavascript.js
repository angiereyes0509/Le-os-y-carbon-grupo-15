const menu = [
  {
    categoria: "entradas",
    platos: [
      {
        id: 1,
        nameProduct: "CHICHARRONES",
        price: "16.900",
      },
      {
        id: 2,
        nameProduct: "CHORIZOS LEÑOS",
        price: "13.900",
      },
    ],
  },
  {
    categoria: "sandwiches",
    platos: [
      {
        id: 3,
        nameProduct: " DE LOMO DE RES",
        price: "23.900",
      },

      {
        id: 4,
        nameProduct: "LOMO DE RES COMBO",
        price: "29.900",
      },

      {
        id: 5,
        nameProduct: "SANDWICH CON POLLO",
        price: "21.900",
      },

      {
        id: 6,
        nameProduct: "SANDWICH DE MORRILLO",
        price: "23.900",
      },

      {
        id: 7,
        nameProduct: "CON COSTILLITAS ST.LOUIS",
        price: "26.900",
      },
      {
        id: 8,
        nameProduct: "CON CHURRASCO",
        price: "27.900",
      },

      {
        id: 9,
        nameProduct: "CHORIPAN",
        price: "14.900",
      },

      {
        id: 10,
        nameProduct: "SANDWICH PARA 3",
        price: "69.900",
      },
    ],
  },
];

const result = menu.filter((data) => data.categoria == "entradas");
//console.log(result);
result[0].platos.map((data) => {
  console.log(data);
});
// expected output: Array ["exuberant", "destruction", "present"]
