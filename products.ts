// {
//   id: 1, // id itself
//   categoryId: 7, // id of parent category
//   productName: "LINNMON / ADILS",
//   productSlug: "linnmon-adils",
//   productDescription:
//     "Pre-drilled holes for legs, for easy assembly. Adjustable feet make the table stand steady also on uneven floors.",
//   productImages:"link1,link2 link3"
//   room: "Bed room, Office, Study room",
// },
const products = [
  {
    id: 1, // id of product
    categoryId: 7, // id of parent category
    productName: "LINNMON / ADILS",
    productSlug: "linnmon-adils",
    productDescription:
      "Pre-drilled holes for legs, for easy assembly. Adjustable feet make the table stand steady also on uneven floors.",
    productImages:
      "https://www.ikea.com/sg/en/images/products/lagkapten-adils-desk-white__1028363_pe835300_s5.jpg?f=xl,https://www.ikea.com/sg/en/images/products/linnmon-adils-table-white__0737165_pe740925_s5.jpg?f=xl,https://www.ikea.com/sg/en/images/products/linnmon-adils-table-white__0734654_pe739562_s5.jpg?f=xl",
    room: "Bed room, Office, Study room",
  },
  {
    id: 2,
    categoryId: 7,
    productName: "BEKANT",
    productSlug: "bekant",
    productDescription:
      "This sturdy desk is guaranteed to outlast years of coffee and hard work. You get a generous work surface and a clever solution to keep cables in place underneath.",
    productImages:
      "https://www.ikea.com/sg/en/images/products/bekant-desk-white__0855220_pe714635_s5.jpg?f=xl,https://www.ikea.com/sg/en/images/products/bekant-desk-white__0736420_pe740535_s5.jpg?f=xl,https://www.ikea.com/sg/en/images/products/bekant-desk-white__0735163_pe739791_s5.jpg?f=xl,https://www.ikea.com/sg/en/images/products/bekant-desk-white__0854885_pe714612_s5.jpg?f=xl",
    room: "Bed room, office, Study room",
  },
  {
    id: 3,
    categoryId: 8,
    productName: "BORGEBY",
    productSlug: "borgeby",
    productDescription:
      "Let your eyes rest on BORGEBY table. The stylish and airy shape creates a visual calm in the room – and the practical storage under the table top makes it easy to keep all your small things organised.",
    productImages:
      "https://www.ikea.com/sg/en/images/products/borgeby-coffee-table-black__0987517_pe817555_s5.jpg?f=xl,https://www.ikea.com/sg/en/images/products/borgeby-coffee-table-black__0986529_pe817181_s5.jpg?f=xl,https://www.ikea.com/sg/en/images/products/borgeby-coffee-table-black__0986529_pe817181_s5.jpg?f=xl,https://www.ikea.com/sg/en/images/products/borgeby-coffee-table-black__0990328_pe818861_s5.jpg?f=xl,https://www.ikea.com/sg/en/images/products/borgeby-coffee-table-black__0977133_pe813414_s5.jpg?f=xl",
    room: "Living room",
  },

  {
    id: 4,
    categoryId: 8,
    productName: "YPPERLIG",
    productSlug: "ypperlig",
    productDescription:
      "A small, easy-to-use coffee table in solid birch and powder-coated steel – simple and honest materials that also match the stylish and clean shape. Use individually or buy several and place around a room.",
    productImages:
      "https://www.ikea.com/sg/en/images/products/ypperlig-coffee-table-dark-grey-birch__0836326_pe634510_s5.jpg?f=xl,https://www.ikea.com/sg/en/images/products/ypperlig-coffee-table-dark-grey-birch__0592809_ph147699_s5.jpg?f=xl,https://www.ikea.com/sg/en/images/products/ypperlig-coffee-table-dark-grey-birch__0731747_pe738427_s5.jpg?f=xl",
    room: "Living room",
  },
  {
    id: 5,
    categoryId: 9,
    productName: "MÖRBYLÅNGA / KARLPETTER",
    productSlug: "moerbylanga-karlpetter",
    productDescription:
      "May be completed with FIXA self-adhesive floor protectors to protect the underlying surface against wear.",
    productImages:
      "https://www.ikea.com/sg/en/images/products/moerbylanga-karlpetter-table-and-4-chairs-oak-veneer-brown-stained-gunnared-medium-grey-chrome-plated__1106916_pe868881_s5.jpg?f=xl,https://www.ikea.com/sg/en/images/products/moerbylanga-karlpetter-table-and-4-chairs-oak-veneer-brown-stained-gunnared-medium-grey-chrome-plated__1106917_pe868880_s5.jpg?f=xl",
    room: "Dining room,Kitchen",
  },
  {
    id: 6,
    categoryId: 9,
    productName: "LISABO",
    productSlug: "lisabo",
    productDescription:
      "We’re proud of our LISABO series, awarded with the prestigious, international Red Dot Award, for its design. The products are durable, sturdy and easy to assemble, yet look light and hand-crafted.",
    productImages:
      "https://www.ikea.com/sg/en/images/products/lisabo-odger-table-and-4-chairs-black-beige__0871356_pe674065_s5.jpg?f=xl,https://www.ikea.com/sg/en/images/products/lisabo-odger-table-and-4-chairs-black-beige__0871315_pe648693_s5.jpg?f=xl,https://www.ikea.com/sg/en/images/products/lisabo-odger-table-and-4-chairs-black-beige__0949244_pe799576_s5.jpg?f=xl",
    room: "Dining room,Kitchen",
  },
  {
    id: 7,
    categoryId: 10,
    productName: "LOBERGET / MALSKÄR",
    productSlug: "loberget-malskaer",
    productDescription:
      "The safety castors have a pressure-sensitive brake mechanism that keeps the chair in place when you stand up, and releases automatically when you sit down.",
    productImages:
      "https://www.ikea.com/sg/en/images/products/loberget-malskaer-swivel-chair-white__1078478_pe857214_s5.jpg?f=xl,image.png,https://www.ikea.com/sg/en/images/products/loberget-malskaer-swivel-chair-white__1078460_pe857204_s5.jpg?f=xl",
    room: "Office Chair",
  },
  {
    id: 8,
    categoryId: 10,
    productName: "ELDBERGET / MALSKÄR",
    productSlug: "eldberget-malskaer",
    productDescription:
      "Lower back support, adjustable height and sturdy castors – this desk chair really has it all. Use it at the desk, roll it to the dining table and enjoy the soft and comfortable seat pad.",
    productImages:
      "https://www.ikea.com/sg/en/images/products/eldberget-malskaer-swivel-chair-pad-dark-grey-black__0814542_pe772658_s5.jpg?f=xl,https://www.ikea.com/sg/en/images/products/eldberget-malskaer-swivel-chair-pad-dark-grey-black__0814539_pe772626_s5.jpg?f=xl,https://www.ikea.com/sg/en/images/products/eldberget-malskaer-swivel-chair-pad-dark-grey-black__0814541_pe772657_s5.jpg?f=xl",
    room: "Office Chair",
  },
  {
    id: 9,
    categoryId: 11,
    productName: "KARLJAN",
    productSlug: "karljan",
    productDescription:
      "KARLJAN chair has a fresh, modern expression and gives great comfort thanks to the upholstered seat and back. The chair can be assembled in no time - but the strong construction will last.",
    productImages:
      "https://www.ikea.com/sg/en/images/products/karljan-chair-dark-grey-kabusa-dark-grey__0985639_ph173594_s5.jpg?f=xl,https://www.ikea.com/sg/en/images/products/karljan-chair-dark-grey-kabusa-dark-grey__0745241_pe743639_s5.jpg?f=xl,https://www.ikea.com/sg/en/images/products/karljan-chair-dark-grey-kabusa-dark-grey__0798276_pe767204_s5.jpg?f=xl",
    room: "Dining Chair",
  },
  {
    id: 10,
    categoryId: 9,
    productName: "ADDE",
    productSlug: "adde",
    productDescription:
      "You can stack the chairs, so they take less space when you're not using them.",
    productImages:
      "https://www.ikea.com/sg/en/images/products/adde-chair-black__0720893_ph004838_s5.jpg?f=xl,https://www.ikea.com/sg/en/images/products/adde-chair-black__1052583_pe846238_s5.jpg?f=xl,https://www.ikea.com/sg/en/images/products/adde-chair-black__0872127_pe594887_s5.jpg?f=xl",
    room: "Dining Chair",
  },
  {
    id: 11,
    categoryId: 12,
    productName: "GLOSTAD",
    productSlug: "glostad",
    productDescription:
      "It should be easy to get a sofa and GLOSTAD sofa is easy to buy, bring home, assemble and live with. So you can enjoy more time and space to hang out with friends and family and do other important things.",
    productImages:
      "https://www.ikea.com/sg/en/images/products/glostad-2-seat-sofa-knisa-dark-grey__1059523_ph180677_s5.jpg?f=xl,https://www.ikea.com/sg/en/images/products/glostad-2-seat-sofa-knisa-dark-grey__0950897_pe800737_s5.jpg?f=xl,https://www.ikea.com/sg/en/images/products/glostad-2-seat-sofa-knisa-dark-grey__0987395_pe817517_s5.jpg?f=xl",
    room: "Living Room",
  },
  {
    id: 12,
    categoryId: 12,
    productName: "ÄPPLARYD",
    productSlug: "aepplaryd",
    productDescription:
      "ÄPPLARYD sofa will be your home’s comfy oasis. An eye-catcher that reflects your personality and style. Great to sit, lie down and hang out on. And with lots of space for the whole family, year after year.",
    productImages:
      "https://www.ikea.com/sg/en/images/products/aepplaryd-2-seat-sofa-djuparp-dark-blue__1023703_pe833221_s5.jpg?f=xl,https://www.ikea.com/sg/en/images/products/aepplaryd-2-seat-sofa-djuparp-dark-blue__1032002_pe836728_s5.jpg?f=xl,https://www.ikea.com/sg/en/images/products/aepplaryd-2-seat-sofa-djuparp-dark-blue__1032004_pe836729_s5.jpg?f=xl",
    room: "Living Room",
  },
  {
    id: 13,
    categoryId: 13,
    productName: "SONGESAND",
    productSlug: "songesand",
    productDescription:
      "The classic design with panelled doors never goes out of style. Are you on your way? Use the full-length mirror so you can see your outfit from top to toe. Psst! Please attach to the wall.",
    productImages:
      "https://www.ikea.com/sg/en/images/products/songesand-wardrobe-white__0858618_pe660187_s5.jpg?f=xl,https://www.ikea.com/sg/en/images/products/songesand-wardrobe-white__0818036_ph167731_s5.jpg?f=xl,https://www.ikea.com/sg/en/images/products/songesand-wardrobe-white__0858614_pe660184_s5.jpg?f=xl",
    room: "Masterbed Room,Common Room",
  },
  {
    id: 14,
    categoryId: 13,
    productName: "NORDKISA",
    productSlug: "nordkisa",
    productDescription:
      "This wardrobe is inspired by classic Scandinavian furniture design with clean lines and an airy expression. It works as storage for your clothes and belongings – and will be a statement piece in your home.",
    productImages:
      "https://www.ikea.com/sg/en/images/products/nordkisa-open-wardrobe-with-sliding-door-bamboo__0813677_ph165857_s5.jpg?f=xl,https://www.ikea.com/sg/en/images/products/nordkisa-open-wardrobe-with-sliding-door-bamboo__0813688_ph165568_s5.jpg?f=xl,https://www.ikea.com/sg/en/images/products/nordkisa-open-wardrobe-with-sliding-door-bamboo__0756113_pe748741_s5.jpg?f=xl",
    room: "Masterbed Room,Common Room",
  },
  {
    id: 15,
    categoryId: 14,
    productName: "FIXA",
    productSlug: "fixa-17-piece-tool-set",
    productDescription:
      "The FIXA series has all the tools and equipment you need to get your home just the way you want it. Complement the tools you already have or build a DIY starter kit for all your future projects.",
    productImages:
      "https://www.ikea.com/sg/en/images/products/fixa-17-piece-tool-set__0911876_pe617583_s5.jpg?f=xl,https://www.ikea.com/sg/en/images/products/fixa-17-piece-tool-set__0479074_pe618087_s5.jpg?f=xl,https://www.ikea.com/sg/en/images/products/fixa-17-piece-tool-set__0478620_pe617648_s5.jpg?f=xl",
    room: "Storeroom,Toolbox",
  },
    {
    id: 16,
    categoryId: 14,
    productName: "FIXA",
    productSlug: "fixa-screwdriver-drill-li-ion",
    productDescription: "",
    productImages: "",
    room: "Storeroom,Toolbox",
  },
   {
    id: 17,
    categoryId: 14,
    productName: "FIXA",
    productSlug: "fixa-200-piece-wood-screw-set",
    productDescription: "The FIXA series has all the tools and equipment you need to get your home just the way you want it. Complement the tools you already have or build a DIY starter kit for all your future projects.",
    productImages: "https://www.ikea.com/sg/en/images/products/fixa-200-piece-wood-screw-set__0912036_pe617581_s5.jpg?f=xl,https://www.ikea.com/sg/en/images/products/fixa-200-piece-wood-screw-set__0479069_pe618080_s5.jpg?f=xl,https://www.ikea.com/sg/en/images/products/fixa-200-piece-wood-screw-set__0478618_pe617646_s5.jpg?f=xl",
    room: "Storeroom,Toolbox",
  },
    {
    id: 18,
    categoryId: 15,
    productName: "FEJKA",
    productSlug: "fejka-artificial-potted-plant-in-outdoor-bamboo",
    productDescription: "FEJKA artificial potted plants that don’t require a green thumb. Perfect when you have better things to do than water plants and tidy up dead leaves. You’ll have everyone fooled because they look so lifelike.",
    productImages: "https://www.ikea.com/sg/en/images/products/fejka-artificial-potted-plant-in-outdoor-bamboo__0900617_pe594646_s5.jpg?f=xl,https://www.ikea.com/sg/en/images/products/fejka-artificial-potted-plant-in-outdoor-bamboo__0247703_pe386542_s5.jpg?f=xl,https://www.ikea.com/sg/en/images/products/fejka-artificial-potted-plant-in-outdoor-bamboo__1079585_pe857616_s5.jpg?f=xl",
    room: "Bedroom,Kitchen,Living Room,Bathroom,Workspace",
  },
    {
    id: 19,
    categoryId: 15,
    productName: "FEJKA",
    productSlug: "fejka-artificial-potted-plant-in-outdoor-monstera",
    productDescription: "FEJKA artificial potted plants that don’t require a green thumb. Perfect when you have better things to do than water plants and tidy up dead leaves. You’ll have everyone fooled because they look so lifelike.",
    productImages: "https://www.ikea.com/sg/en/images/products/fejka-artificial-potted-plant-in-outdoor-monstera__0901227_pe687834_s5.jpg?f=xl,https://www.ikea.com/sg/en/images/products/fejka-artificial-potted-plant-in-outdoor-monstera__1036752_pe838537_s5.jpg?f=xl,https://www.ikea.com/sg/en/images/products/fejka-artificial-potted-plant-in-outdoor-monstera__0901230_pe687835_s5.jpg?f=xl",
    room: "Bedroom,Kitchen,Living Room,Bathroom,Workspace",
  },
    {
    id: 20,
    categoryId: 15,
    productName: "FEJKA",
    productSlug: "fejka-artificial-potted-plant-with-pot-in-outdoor-succulent",
    productDescription: "FEJKA artificial potted plants that don’t require a green thumb. Perfect when you have better things to do than water plants and tidy up dead leaves. You’ll have everyone fooled because they look so lifelike.",
    productImages: "https://www.ikea.com/sg/en/images/products/fejka-artificial-potted-plant-with-pot-in-outdoor-succulent__0945926_pe797833_s5.jpg?f=xl,https://www.ikea.com/sg/en/images/products/fejka-artificial-potted-plant-with-pot-in-outdoor-succulent__0901062_pe687829_s5.jpg?f=xl,https://www.ikea.com/sg/en/images/products/fejka-artificial-potted-plant-with-pot-in-outdoor-succulent__0928729_ph166548_s5.jpg?f=xl",
    room: "Bedroom,Kitchen,Living Room,Bathroom,Workspace",
  },
    {
    id: 21,
    categoryId: 16,
    productName: "TROSS",
    productSlug: "tross-ceiling-track-3-spots-white",
    productDescription: "This ceiling track with 3 spots is almost invisible on a white ceiling and gives light where you like since each spot can be directed individually. Goes just as well in a hallway as over a kitchen island.",
    productImages: "https://www.ikea.com/sg/en/images/products/tross-ceiling-track-3-spots-white__0879704_pe616429_s5.jpg?f=xl",
    room: "Living Room,Kitchen",
  },
    {
    id: 22,
    categoryId: 16,
    productName: "NYMÅNE",
    productSlug: "nymane-ceiling-spotlight-with-4-spots-white",
    productDescription: "Brilliant and timeless design. NYMÅNE lamps have attitude and blend in with most decors. Why not combine several different lamps for a uniform style at home?",
    productImages: "https://www.ikea.com/sg/en/images/products/nymane-ceiling-spotlight-with-4-spots-white__0896486_pe648820_s5.jpg?f=xl,https://www.ikea.com/sg/en/images/products/nymane-ceiling-spotlight-with-4-spots-white__0879941_pe648821_s5.jpg?f=xl",
    room: "Common Room,Living Room",
  },
    {
    id: 23,
    categoryId: 16,
    productName: "SKURUP",
    productSlug: "skurup-ceiling-track-3-spots-black",
    productDescription: "Metal, rugged constructions and timeless design – enjoy the SKURUP lamp series for a long time. Simple adjustments and different types of lamps make the series practical and flexible throughout the home.",
    productImages: "https://www.ikea.com/sg/en/images/products/skurup-ceiling-track-3-spots-black__0751052_pe746893_s5.jpg?f=xl,https://www.ikea.com/sg/en/images/products/skurup-ceiling-track-3-spots-black__0975650_ph172913_s5.jpg?f=xl,https://www.ikea.com/sg/en/images/products/skurup-ceiling-track-3-spots-black__0751051_pe746891_s5.jpg?f=xl",
    room: "Kitchen,Bathroom,Common Room,Living Room",
  },
    {
    id: 24,
    categoryId: 17,
    productName: "STÖTTAP",
    productSlug: "stoetta-led-cabinet-lighting",
    productDescription: "The simplest way to light up your wardrobe without waking your partner in the morning. A soft light switches on as you open the door. It’s battery-operated, so you don’t have to deal with cables.",
    productImages: "https://www.ikea.com/sg/en/images/products/skurup-ceiling-track-3-spots-black__0751052_pe746893_s5.jpg?f=xl,https://www.ikea.com/sg/en/images/products/skurup-ceiling-track-3-spots-black__0975650_ph172913_s5.jpg?f=xl,https://www.ikea.com/sg/en/images/products/skurup-ceiling-track-3-spots-black__0751051_pe746891_s5.jpg?f=xl",
    room: "Wardobe,Bathroom",
  }
    {
    id: 25,
    categoryId: 17,
    productName: "STÖTTA",
    productSlug: "stoetta-led-spotlight-and-clamp-battery-operated",
    productDescription: "The simplest way to light up small or multi-purpose spaces. The clamp lets you move the spotlight to where it’s needed and it’s battery-operated, so you don’t have to worry about cables.",
    productImages: "https://www.ikea.com/sg/en/images/products/stoetta-led-spotlight-and-clamp-battery-operated-white__0882386_pe619368_s5.jpg?f=xl,https://www.ikea.com/sg/en/images/products/stoetta-led-spotlight-and-clamp-battery-operated-white__0737607_pe620607_s5.jpg?f=s,https://www.ikea.com/sg/en/images/products/stoetta-led-spotlight-and-clamp-battery-operated-white__0882413_pe654868_s5.jpg?f=xl",
    room: "Wardobe",
  },
    {
    id: 26,
    categoryId: 17,
    productName: "LEDBERG",
    productSlug: "ledberg-led-lighting-strip-white",
    productDescription: "Be creative with your lighting. This LED strip can be used in so many ways – in drawers, behind the TV, by your favourite work of art or under your bed. The only limit is your imagination.",
    productImages: "https://www.ikea.com/sg/en/images/products/ledberg-led-lighting-strip-white__0881882_pe620470_s5.jpg?f=xl,https://www.ikea.com/sg/en/images/products/ledberg-led-lighting-strip-white__0391898_pe223800_s5.jpg?f=xl,https://www.ikea.com/sg/en/images/products/ledberg-led-lighting-strip-white__1053608_pe847059_s5.jpg?f=xl",
    room: "Wardobe",
  },
];
  // {
  //   id: 6,
  //   categoryId: 9,
  //   productName: "",
  //   productSlug: "",
  //   productDescription: "",
  //   productImages: "",
  //   room: "",
  // },
];

module.exports = products;
