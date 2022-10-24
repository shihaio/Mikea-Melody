// {
//   id: generateShortUuid(), // all variant , copy this line
//   productId: 1,
//   qtyInStock: 10,
//   variantDescription: "Table, white, 100x60 cm",
//   price: 59,
//   color: "white",
//   size: "100x60",
//   material: "",
//   variantImages:
//     "https://www.ikea.com/sg/en/images/products/linnmon-adils-table-white__0737165_pe740925_s5.jpg?f=xl",
// },

const variants = [
  {
    id: generateShortUuid(),
    productId: 1,
    qtyInStock: 10,
    variantDescription: "Table, white, 100x60 cm",
    price: 59,
    color: "white",
    size: "100x60",
    material: "",
    variantImages:
      "https://www.ikea.com/sg/en/images/products/linnmon-adils-table-white__0737165_pe740925_s5.jpg?f=xl",
  },
  {
    id: generateShortUuid(),
    productId: 1,
    qtyInStock: 5,
    variantDescription: "Desk, black-brown, 100x60 cm",
    price: 59,
    color: "black-brown",
    size: "100x60",
    material: "",
    variantImages:
      "https://www.ikea.com/sg/en/images/products/linnmon-adils-desk-black-brown__0974302_pe812345_s5.jpg?f=xl",
  },
  {
    id: generateShortUuid(),
    productId: 2,
    qtyInStock: 5,
    variantDescription: "Desk, white, 160x80 cm",
    price: 329,
    color: "white",
    size: "100x60",
    material: "",
    variantImages:
      "https://www.ikea.com/sg/en/images/products/bekant-desk-white__0736420_pe740535_s5.jpg?f=xl",
  },
  {
    id: generateShortUuid(),
    productId: 2,
    qtyInStock: 5,
    variantDescription: "Desk, linoleum blue/black, 160x80 cm",
    price: 329,
    color: "black",
    size: "160x80",
    material: "",
    variantImages:
      "https://www.ikea.com/sg/en/images/products/bekant-desk-linoleum-blue-black__0736416_pe740531_s5.jpg?f=xl",
  },
  {
    id: generateShortUuid(),
    productId: 3,
    qtyInStock: 10,
    variantDescription: "Coffee table, black, 70 cm",
    price: 99,
    color: "black",
    size: "70",
    material: "",
    variantImages:
      "https://www.ikea.com/sg/en/images/products/bekant-desk-linoleum-blue-black__0736416_pe740531_s5.jpg?f=xlhttps://www.ikea.com/sg/en/images/products/borgeby-coffee-table-black__0983032_pe815898_s5.jpg?f=xl",
  },
  {
    id: generateShortUuid(),
    productId: 3,
    qtyInStock: 10,
    variantDescription: "Coffee table, birch veneer, 70 cm",
    price: 99,
    color: "birch veneer",
    size: "70",
    material: "",
    variantImages:
      "https://www.ikea.com/sg/en/images/products/borgeby-coffee-table-birch-veneer__0987623_pe817609_s5.jpg?f=xl",
  },
  {
    id: generateShortUuid(),
    productId: 4,
    qtyInStock: 10,
    variantDescription: "Coffee table, dark grey/birch, 50 cm",
    price: 99,
    color: "dark grey,birch",
    size: "50",
    material: "",
    variantImages:
      "https://www.ikea.com/sg/en/images/products/ypperlig-coffee-table-dark-grey-birch__0505344_pe633869_s5.jpg?f=xl",
  },
  {
    id: generateShortUuid(),
    productId: 5,
    qtyInStock: 10,
    variantDescription:
      "Table and 4 chairs, oak veneer brown stained/Gunnared medium grey chrome-plated, 140x85 cm",
    price: 1179,
    color: "Grey,brown",
    size: "140x85",
    material: "oak veneer",
    variantImages:
      "https://www.ikea.com/sg/en/images/products/moerbylanga-karlpetter-table-and-4-chairs-oak-veneer-brown-stained-gunnared-medium-grey-chrome-plated__1106917_pe868880_s5.jpg?f=xl",
  },
  {
    id: generateShortUuid(),
    productId: 6,
    qtyInStock: 10,
    variantDescription: "Table and 4 ODGER chairs, black/beige, 140x78 cm",
    price: 689,
    color: "Black,Ash veneer",
    size: "140x78",
    material: "",
    variantImages:
      "https://www.ikea.com/sg/en/images/products/lisabo-odger-table-and-4-chairs-black-beige__0737980_pe741295_s5.jpg?f=xl",
  },
  {
    id: generateShortUuid(),
    productId: 6,
    qtyInStock: 10,
    variantDescription: "Table and 4 JANINGE chairs, ash veneer/white,",
    price: 689,
    color: "White,Ash veneer",
    size: "140x78",
    material: "",
    variantImages:
      "https://www.ikea.com/sg/en/images/products/lisabo-janinge-table-and-4-chairs-ash-veneer-white__0737947_pe741267_s5.jpg?f=s",
  },
  {
    id: generateShortUuid(),
    productId: 7,
    qtyInStock: 10,
    variantDescription: "Swivel chair, white",
    price: 49.9,
    color: "white",
    size: "",
    material: "",
    variantImages:
      "https://www.ikea.com/sg/en/images/products/loberget-malskaer-swivel-chair-white__1078458_pe857202_s5.jpg?f=xl",
  },
  {
    id: generateShortUuid(),
    productId: 8,
    qtyInStock: 10,
    variantDescription: "Swivel chair + pad, dark grey/black",
    price: 59.9,
    color: "Black",
    size: "",
    material: "",
    variantImages:
      "https://www.ikea.com/sg/en/images/products/eldberget-malskaer-swivel-chair-pad-dark-grey-black__0814543_pe772659_s5.jpg?f=xl",
  },
  {
    id: generateShortUuid(),
    productId: 9,
    qtyInStock: 10,
    variantDescription: "Chair, dark grey/Kabusa dark grey",
    price: 55,
    color: "Dark Grey",
    size: "",
    material: "",
    variantImages:
      "https://www.ikea.com/sg/en/images/products/karljan-chair-dark-grey-kabusa-dark-grey__0714669_pe730181_s5.jpg?f=xl",
  },
  {
    id: generateShortUuid(),
    productId: 9,
    qtyInStock: 10,
    variantDescription: "Chair, turquoise/Kabusa turquoise",
    price: 55,
    color: "turquoise",
    size: "",
    material: "",
    variantImages:
      "https://www.ikea.com/sg/en/images/products/karljan-chair-turquoise-kabusa-turquoise__0926961_pe789600_s5.jpg?f=xl",
  },
  {
    id: generateShortUuid(),
    productId: 10,
    qtyInStock: 10,
    variantDescription: "Chair, black",
    price: 17.5,
    color: "Black",
    size: "",
    material: "",
    variantImages:
      "https://www.ikea.com/sg/en/images/products/adde-chair-black__0728277_pe736167_s5.jpg?f=xl",
  },
  {
    id: generateShortUuid(),
    productId: 11,
    qtyInStock: 10,
    variantDescription: "2-seat sofa, Knisa dark grey",
    price: 159,
    color: "Dark Grey",
    size: "",
    material: "",
    variantImages:
      "https://www.ikea.com/sg/en/images/products/glostad-2-seat-sofa-knisa-dark-grey__0950864_pe800736_s5.jpg?f=xl",
  },
  {
    id: generateShortUuid(),
    productId: 11,
    qtyInStock: 10,
    variantDescription: "2-seat sofa, Knisa medium blue",
    price: 159,
    color: "Medium Blue",
    size: "",
    material: "",
    variantImages:
      "https://www.ikea.com/sg/en/images/products/glostad-2-seat-sofa-knisa-medium-blue__0950900_pe800740_s5.jpg?f=xl",
  },
  {
    id: generateShortUuid(),
    productId: 12,
    qtyInStock: 10,
    variantDescription: "2-seat sofa, Djuparp dark blue",
    price: 1399,
    color: "Dark Blue",
    size: "",
    material: "",
    variantImages:
      "https://www.ikea.com/sg/en/images/products/aepplaryd-2-seat-sofa-djuparp-dark-blue__0992860_pe820287_s5.jpg?f=xl",
  },
  {
    id: generateShortUuid(),
    productId: 12,
    qtyInStock: 10,
    variantDescription: "2-seat sofa, Djuparp red-brown",
    price: 1399,
    color: "Red Brown",
    size: "",
    material: "",
    variantImages:
      "https://www.ikea.com/sg/en/images/products/aepplaryd-2-seat-sofa-djuparp-red-brown__0992861_pe820288_s5.jpg?f=xl",
  },
  {
    id: generateShortUuid(),
    productId: 13,
    qtyInStock: 10,
    variantDescription: "Wardrobe, white, 120x60x191 cm",
    price: 449,
    color: "White",
    size: "120x60x191 cm",
    material: "",
    variantImages:
      "https://www.ikea.com/sg/en/images/products/songesand-wardrobe-white__0555120_pe660185_s5.jpg?f=xl",
  },
  {
    id: generateShortUuid(),
    productId: 13,
    qtyInStock: 10,
    variantDescription: "Wardrobe, brown, 120x60x191 cm",
    price: 449,
    color: "Brown",
    size: "120x60x191 cm",
    material: "",
    variantImages:
      "https://www.ikea.com/sg/en/images/products/songesand-wardrobe-brown__0555114_pe660180_s5.jpg?f=xl",
  },
  {
    id: generateShortUuid(),
    productId: 14,
    qtyInStock: 10,
    variantDescription: "Open wardrobe with sliding door, bamboo, 120x186 cm",
    price: 429,
    color: "",
    size: "",
    material: "",
    variantImages:
      "https://www.ikea.com/sg/en/images/products/nordkisa-open-wardrobe-with-sliding-door-bamboo__0756084_pe748766_s5.jpg?f=xl",
  },
  {
    id: generateShortUuid(),
    productId: 15,
    qtyInStock: 10,
    variantDescription: "17-piece tool set",
    price: 16.9,
    color: "",
    size: "",
    material: "",
    variantImages:
      "https://www.ikea.com/sg/en/images/products/fixa-17-piece-tool-set__0711971_pe728599_s5.jpg?f=xl",
  },
  {
    id: generateShortUuid(),
    productId: 16,
    qtyInStock: 10,
    variantDescription: "Screwdriver/drill, li-ion, 14.4 V",
    price: 69,
    color: "",
    size: "",
    material: "",
    variantImages:
      "https://www.ikea.com/sg/en/images/products/fixa-screwdriver-drill-li-ion__0711977_pe728604_s5.jpg?f=xl",
  },
  {
    id: generateShortUuid(),
    productId: 17,
    qtyInStock: 10,
    variantDescription: "200-piece wood screw set",
    price: 10.9,
    color: "",
    size: "",
    material: "",
    variantImages:
      "https://www.ikea.com/sg/en/images/products/fixa-200-piece-wood-screw-set__0711967_pe728596_s5.jpg?f=xl",
  },
  {
    id: generateShortUuid(),
    productId: 18,
    qtyInStock: 10,
    variantDescription: "Artificial potted plant, in/outdoor bamboo",
    price: 75,
    color: "",
    size: "23 vm",
    material: "",
    variantImages:
      "https://www.ikea.com/sg/en/images/products/fejka-artificial-potted-plant-in-outdoor-bamboo__0748884_pe745273_s5.jpg?f=xl",
  },
  {
    id: generateShortUuid(),
    productId: 19,
    qtyInStock: 10,
    variantDescription: "Artificial potted plant, in/outdoor Monstera",
    price: 75,
    color: "",
    size: "19 cm",
    material: "",
    variantImages:
      "https://www.ikea.com/sg/en/images/products/fejka-artificial-potted-plant-in-outdoor-monstera__0614197_pe686822_s5.jpg?f=xl",
  },
  {
    id: generateShortUuid(),
    productId: 20,
    qtyInStock: 10,
    variantDescription:
      "Artificial potted plant with pot, in/outdoor Succulent, 3 pieces",
    price: 7.9,
    color: "",
    size: "6 cm",
    material: "",
    variantImages:
      "https://www.ikea.com/sg/en/images/products/fejka-artificial-potted-plant-with-pot-in-outdoor-succulent__0614187_pe686812_s5.jpg?f=xl",
  },
  {
    id: generateShortUuid(),
    productId: 21,
    qtyInStock: 10,
    variantDescription: "Ceiling track, 3-spots",
    price: 10.9,
    color: "White",
    size: "",
    material: "",
    variantImages:
      "https://www.ikea.com/sg/en/images/products/tross-ceiling-track-3-spots-white__0426984_pe582505_s5.jpg?f=xl",
  },
  {
    id: generateShortUuid(),
    productId: 22,
    qtyInStock: 10,
    variantDescription: "Ceiling spotlight with 4 spots",
    price: 59,
    color: "White",
    size: "",
    material: "",
    variantImages:
      "https://www.ikea.com/sg/en/images/products/nymane-ceiling-spotlight-with-4-spots-white__0607350_pe682899_s5.jpg?f=xl",
  },
  {
    id: generateShortUuid(),
    productId: 23,
    qtyInStock: 10,
    variantDescription: "Ceiling track, 3-spots",
    price: 29.9,
    color: "Black",
    size: "",
    material: "",
    variantImages:
      "https://www.ikea.com/sg/en/images/products/skurup-ceiling-track-3-spots-black__0751053_pe746892_s5.jpg?f=xl",
  },
  {
    id: generateShortUuid(),
    productId: 24,
    qtyInStock: 10,
    variantDescription: "LED cabinet lighting strip w sensor, battery-operated",
    price: 14.9,
    color: "White",
    size: "32 cm",
    material: "",
    variantImages:
      "https://www.ikea.com/sg/en/images/products/stoetta-led-cabinet-lighting-strip-w-sensor-battery-operated-white__0637301_pe698224_s5.jpg?f=xl",
  },
  {
    id: generateShortUuid(),
    productId: 24,
    qtyInStock: 10,
    variantDescription: "LED spotlight and clamp, battery-operated",
    price: 14.9,
    color: "White",
    size: "",
    material: "",
    variantImages:
      "https://www.ikea.com/sg/en/images/products/stoetta-led-cabinet-lighting-strip-w-sensor-battery-operated-white__0637301_pe698224_s5.jpg?f=xl",
  },
  {
    id: generateShortUuid(),
    productId: 25,
    qtyInStock: 10,
    variantDescription: "LED spotlight and clamp, battery-operated",
    price: 11.9,
    color: "White",
    size: "",
    material: "",
    variantImages:
      "https://www.ikea.com/sg/en/images/products/stoetta-led-spotlight-and-clamp-battery-operated-white__0606496_pe682379_s5.jpg?f=xl",
  },
  {
    id: generateShortUuid(),
    productId: 26,
    qtyInStock: 10,
    variantDescription: "LED lighting strip",
    price: 12.9,
    color: "White",
    size: "",
    material: "",
    variantImages:
      "https://www.ikea.com/sg/en/images/products/ledberg-led-lighting-strip-white__0392132_pe560275_s5.jpg?f=xl",
  },
  // {
  //   id: generateShortUuid(),
  //   productId: 5,
  //   qtyInStock: 10,
  //   variantDescription: "",
  //   price: ,
  //   color: "",
  //   size: "",
  //   material: "",
  //   variantImages:"",
  // },
];

module.exports = variants;
