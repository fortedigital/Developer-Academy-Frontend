const dummyImage =
  "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80";

export const dummyOrders = [
  {
    id: "434243",
    orderedBy: "1278",
    items: [
      {
        id: "id_prosc",
        name: "Prosciutto (DUMMY)",
        price: 180,
        image: dummyImage,
      },
      {
        id: "id_funghi",
        name: "Funghi (DUMMY)",
        price: 160,
        image: dummyImage,
      },
    ],
    price: 175,
    date: new Date(2022, 7, 18),
    status: "ORDERED",
  },
  {
    id: "656427",
    orderedBy: "1278",
    items: [
      {
        id: "id_hawaii",
        name: "Hawaii (DUMMY)",
        price: 175,
        image: dummyImage,
      },
      {
        id: "id_hawaii",
        name: "Hawaii (DUMMY)",
        price: 175,
        image: dummyImage,
      },
    ],
    price: 350,
    date: new Date(2022, 7, 18),
    status: "IN_PROGRESS",
  },
  {
    id: "986335",
    orderedBy: "1278",
    items: [
      {
        id: "id4727426",
        name: "Margarita (DUMMY)",
        price: 140,
        image: dummyImage,
      },
    ],
    price: 140,
    date: new Date(2022, 6, 25),
    status: "DELIVERED",
  },
  {
    id: "228575",
    orderedBy: "1278",
    items: [
      {
        id: "id_marg",
        name: "Margarita (DUMMY)",
        price: 140,
        image: dummyImage,
      },
      {
        id: "id_funghi",
        name: "Funghi (DUMMY)",
        price: 160,
        image: dummyImage,
      },
      {
        id: "id_prosc",
        name: "Prosciutto (DUMMY)",
        price: 180,
        image: dummyImage,
      },
    ],
    price: 480,
    date: new Date(2022, 6, 25),
    status: "DELIVERED",
  },
];
