export default {
  headers: [
    { id: "header1", title: "ID" },
    { id: "header2", title: "Brand" },
    { id: "header3", title: "Model" },
    { id: "header4", title: "Year" },
    { id: "header5", title: "Price" },
  ],

  cars: [
    {
      brand: "Volkswagen",
      model: "Passat",
      year: "2018",
      price: "25000 $",
    },
    {
      brand: "BMW",
      model: "3 series",
      year: "2017",
      price: "31000 $",
    },
  ],

  inputs: [
    {
      id: "input1",
      name: "brand",
      type: "text",
      playceholder: "Brand",
    },

    {
      id: "input2",
      name: "model",
      type: "text",
      playceholder: "Model",
    },

    {
      id: "input3",
      name: "year",
      type: "text",
      playceholder: "Year",
    },

    {
      id: "input4",
      name: "price",
      type: "text",
      playceholder: "Price",
    },
  ],
};
