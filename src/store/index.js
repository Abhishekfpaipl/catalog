import { createStore } from "vuex";

export default createStore({
  state: {
    lists: [
      {
        id: 1,
        img: "images/c1.jpg",
        tag: "#23269",
        name: "1/1 Top",
        sp: "85",
        panna: "59 Inch | 1.4986 Mtr",
        fc: "115 Grm",
        stag: "23269, 23269, Massa Rib, 1/1 top"
      },
      {
        id: 2,
        img: "images/c2.jpg",
        tag: "#23252",
        name: "1/1 Top",
        sp: "85",
        panna: "59 Inch | 1.4986 Mtr",
        fc: "115 Grm",
        stag: "23269, 23269, Massa Rib, 1/1 top"
      },
      {
        id: 3,
        img: "images/c3.jpg",
        tag: "#232234",
        name: "1/1 Top",
        sp: "85",
        panna: "59 Inch | 1.4986 Mtr",
        fc: "115 Grm",
        stag: "23269, 23269, Massa Rib, 1/1 top"
      },
      {
        id: 4,
        img: "images/c4.jpg",
        tag: "#232123",
        name: "1/1 Top",
        sp: "85",
        panna: "59 Inch | 1.4986 Mtr",
        fc: "115 Grm",
        stag: "23269, 23269, Massa Rib, 1/1 top"
      },
      {
        id: 5,
        img: "images/c5.jpg",
        tag: "#232565",
        name: "1/1 Top",
        sp: "85",
        panna: "59 Inch | 1.4986 Mtr",
        fc: "115 Grm",
        stag: "23269, 23269, Massa Rib, 1/1 top"
      },
      {
        id: 6,
        img: "images/c6.jpg",
        tag: "#69646",
        name: "1/1 Top",
        sp: "85",
        panna: "59 Inch | 1.4986 Mtr",
        fc: "115 Grm",
        stag: "23269, 23269, Massa Rib, 1/1 top"
      },
      {
        id: 7,
        img: "images/c1.jpg",
        tag: "#232565",
        name: "1/1 Top",
        sp: "85",
        panna: "59 Inch | 1.4986 Mtr",
        fc: "115 Grm",
        stag: "23269, 23269, Massa Rib, 1/1 top"
      },
      {
        id: 8,
        img: "images/c2.jpg",
        tag: "#69646",
        name: "1/1 Top",
        sp: "85",
        panna: "59 Inch | 1.4986 Mtr",
        fc: "115 Grm",
        stag: "23269, 23269, Massa Rib, 1/1 top"
      },
      {
        id: 9,
        img: "images/c3.jpg",
        tag: "#69646",
        name: "1/1 Top",
        sp: "85",
        panna: "59 Inch | 1.4986 Mtr",
        fc: "115 Grm",
        stag: "23269, 23269, Massa Rib, 1/1 top"
      },
    ],
    Catalogs: [
      {
        id: 1,
        img: 'https://img101.urbanic.com/v1/goods-pic/626c54fdfd92417e835c5ef39e8fc920UR_w540_h720_q85.webp',
        oid: '01-20-23188',
        price: '180',
        moq: '700',
      },
      {
        id: 2,
        img: 'https://img101.urbanic.com/v1/goods-pic/9d3710a05d0a46dabf4c4c9d8b566df4UR_w540_h720_q85.webp',
        oid: '01-20-23189',
        price: '190',
        moq: '800',
      },
      {
        id: 3,
        img: 'https://img101.urbanic.com/v1/goods-pic/11fc9a2e71974e8a80a4b62fd573b272UR_w540_h720_q85.webp',
        oid: '01-20-23190',
        price: '200',
        moq: '750',
      },
      {
        id: 4,
        img: 'https://img101.urbanic.com/v1/goods-pic/3891a987e29641cfb2d96147cb7f4707UR_w540_h720_q85.webp',
        oid: '01-20-23230',
        price: '190',
        moq: '840',
      },
      {
        id: 5,
        img: 'https://img101.urbanic.com/v1/goods-pic/2109d980fd1046fea7f456cafa0228fe_w540_h720_q85.webp',
        oid: '01-20-23220',
        price: '290',
        moq: '850',
      },
      {
        id: 6,
        img: 'https://img101.urbanic.com/v1/goods-pic/86ca6a251e2646afa1002e0b80960ee8_w540_h720_q85.webp',
        oid: '01-20-23210',
        price: '590',
        moq: '850',
      },

    ],
    activeCatelog: {},
    Fabrics: [
      {
        id: 1,
        img: 'https://img101.urbanic.com/v1/goods-pic/626c54fdfd92417e835c5ef39e8fc920UR_w540_h720_q85.webp',
        length: '10000',
        price: '150',
        name: 'Cheese Fabric'
      },
      {
        id: 2,
        img: 'https://img101.urbanic.com/v1/goods-pic/9d3710a05d0a46dabf4c4c9d8b566df4UR_w540_h720_q85.webp',
        length: '10000',
        price: '150',
        name: 'Crepe Fabric'
      },
      {
        id: 3,
        img: 'https://img101.urbanic.com/v1/goods-pic/11fc9a2e71974e8a80a4b62fd573b272UR_w540_h720_q85.webp',
        length: '10000',
        price: '150',
        name: 'Chiffon Fabric'
      },
      {
        id: 4,
        img: 'https://img101.urbanic.com/v1/goods-pic/3891a987e29641cfb2d96147cb7f4707UR_w540_h720_q85.webp',
        length: '10000',
        price: '150',
        name: 'Georgette Fabric'
      },
      {
        id: 5,
        img: 'https://img101.urbanic.com/v1/goods-pic/2109d980fd1046fea7f456cafa0228fe_w540_h720_q85.webp',
        length: '10000',
        price: '150',
        name: 'Cotton Fabric'
      },
      {
        id: 6,
        img: 'https://img101.urbanic.com/v1/goods-pic/86ca6a251e2646afa1002e0b80960ee8_w540_h720_q85.webp',
        length: '10000',
        price: '150',
        name: 'Poplin Fabric'
      },
    ],
    sampling: [
      {
        id: 1,
        img: 'https://img101.urbanic.com/v1/goods-pic/626c54fdfd92417e835c5ef39e8fc920UR_w540_h720_q85.webp',
        length: '10000',
        price: '150',
        name: 'Cheese Fabric'
      },
      {
        id: 2,
        img: 'https://img101.urbanic.com/v1/goods-pic/9d3710a05d0a46dabf4c4c9d8b566df4UR_w540_h720_q85.webp',
        length: '10000',
        price: '150',
        name: 'Crepe Fabric'
      },
      {
        id: 3,
        img: 'https://img101.urbanic.com/v1/goods-pic/11fc9a2e71974e8a80a4b62fd573b272UR_w540_h720_q85.webp',
        length: '10000',
        price: '150',
        name: 'Chiffon Fabric'
      },
      {
        id: 4,
        img: 'https://img101.urbanic.com/v1/goods-pic/3891a987e29641cfb2d96147cb7f4707UR_w540_h720_q85.webp',
        length: '10000',
        price: '150',
        name: 'Georgette Fabric'
      },
      {
        id: 5,
        img: 'https://img101.urbanic.com/v1/goods-pic/2109d980fd1046fea7f456cafa0228fe_w540_h720_q85.webp',
        length: '10000',
        price: '150',
        name: 'Cotton Fabric'
      },
      {
        id: 6,
        img: 'https://img101.urbanic.com/v1/goods-pic/86ca6a251e2646afa1002e0b80960ee8_w540_h720_q85.webp',
        length: '10000',
        price: '150',
        name: 'Poplin Fabric'
      },
    ],
    areas: [
      {
        title: "Basic Details",
        type: "TextInput",
        sections: [
          {
            name: "Article No.",
            value: '',
          },

          {
            name: "Catalog Name",
            value: '',
          },

          {
            name: "Whole Selling Price",
            value: '',
          },

          {
            name: "MOQ",
            value: '',
          },

          {
            name: "No. of Pieces",
            value: '',
          },
        ]
      },
      {
        'title': "Cost Pricing",
        'type': "TextInput",
        'sections': [
          {
            name: "Fabric Cost",
            value: "",
          },
          {
            name: "Process Outsourcing Cost",
            value: "",
          },
          {
            name: "Cutting Rate",
            value: "",
          },
          {
            name: "Single Needle Rate",
            value: "",
          },
          {
            name: "Assessories Cost",
            value: "",
          },
          {
            name: "Over Locking Rate",
            value: "",
          },
          {
            name: "Finishing Rate",
            value: "",
          },
          {
            name: "Packaging Rate",
            value: "",
          },
          {
            name: "Other Cost",
            value: "",
          },
          {
            name: "Fabricating Rate",
            value: "",
          },

        ]
      },
      {
        'title': "Color Variations",
        'type': "ColorAdd",
      },
      {
        'title': "Size Variations",
        'type': "SizeAdd",
      },
      {
        'title': "Fabric Detials",
        'type': "TextInput",
        'sections': [
          {
            name: "select Fabric",
            value: '',
          },
          {
            name: "Pana (Inch)",
            value: '',
          },
          {
            name: "FC / Unit",
            value: '',
          },
          {
            name: "Unit",
            value: '',
          },
        ]
      },
      {
        'title': "Attributes",
        'type': "TextInput",
        'sections': [
          {
            name: "Select Stretchability",
            value: '',
          },
          {
            name: "Select Occasion",
            value: '',
          },
          {
            name: "Select Pattern",
            value: '',
          },
          {
            name: "Select Neckline",
            value: '',
          },
          {
            name: "select Length Type",
            value: '',
          },
          {
            name: "select Sleeve Type",
            value: '',
          },
        ]
      },
      {
        'title': "Searching Details",
        'type': "Search",
      },
      {
        'title': "Fabricator Instructions",
        'type': "Instruction",
      },
      {
        'title': "Production Instructions",
        'type': "Instruction",
      },
      {
        'title': "QC Instructions",
        'type': "Instruction",
      },

    ],
    fabricareas:[
      {
        title: "Basic Details",
        type: "TextInput",
        sections: [
          {
            name: "Fabric No.",
            value: '',
          },

          {
            name: "Fabric Name",
            value: '',
          },

          {
            name: "Pana (Inch)",
            value: '',
          },

          {
            name: "Length (Inch)",
            value: '',
          },
        ]
      },
      {
        'title': "Cost Pricing",
        'type': "TextInput",
        'sections': [
          {
            name: "Fabric Price / mtr",
            value: "",
          },
        ]
      },
      {
        'title': "Color Variations",
        'type': "ColorAdd",
      },
      // {
      //   'title': "Size Variations",
      //   'type': "SizeAdd",
      // },
      // {
      //   'title': "Processing Detials",
      //   'type': "TextInput",
      //   'sections': [
      //     {
      //       name: "select Fabric",
      //       value: '',
      //     },
      //     {
      //       name: "Pana (Inch)",
      //       value: '',
      //     },
      //     {
      //       name: "FC / Unit",
      //       value: '',
      //     },
      //     {
      //       name: "Unit",
      //       value: '',
      //     },
      //   ]
      // },
      // {
      //   'title': "Attributes",
      //   'type': "TextInput",
      //   'sections': [
      //     {
      //       name: "Select Stretchability",
      //       value: '',
      //     },
      //     {
      //       name: "Select Occasion",
      //       value: '',
      //     },
      //     {
      //       name: "Select Pattern",
      //       value: '',
      //     },
      //     {
      //       name: "Select Neckline",
      //       value: '',
      //     },
      //     {
      //       name: "select Length Type",
      //       value: '',
      //     },
      //     {
      //       name: "select Sleeve Type",
      //       value: '',
      //     },
      //   ]
      // },
      {
        'title': "Processing Details",
        'type': "Instruction",
      },
      {
        'title': "Searching Details",
        'type': "Search",
      },
      {
        'title': "Supplier Instructions",
        'type': "Instruction",
      },
      // {
      //   'title': "QC Instructions",
      //   'type': "Instruction",
      // },
      {
        'title': "QC Instructions",
        'type': "Instruction",
      },
    ]

  },
  getters: {
    getCatalog(state) {
      return state.Catalogs;
    },
    getFabric(state) {
      return state.Fabrics;
    },
    getLists(state) {
      return state.lists;
    },
    getCatelog(state) {
      return state.activeCatelog;
    },
    getAreas(state) {
      return state.areas;
    },
    getFabricAreas(state){
      return state.fabricareas
    },
    getSampling(state) {
      return state.sampling;
    }
  },
  mutations: {
    selectCatelog(state, catelog) {
      state.activeCatelog = catelog;
    },
    hideCatelog(state) {
      state.activeCatelog = {};
    },
    updateInputValue(state, value) {
      state.areas.sections = value;
    },
    updateFabricInputValue(state, value) {
      state.fabricareas.sections = value;
    }
  },
  actions: {
    selectCatelog({ commit }, catelog) {
      commit("selectCatelog", catelog);
    },
    hideCatelog({ commit }) {
      commit("hideCatelog");
    },
    setInputValue({ commit }, value) {
      commit('updateInputValue', value);
    },
    setFabricInputValue({ commit }, value) {
      commit('updateFabricInputValue', value);
    }
  },
  modules: {},
});
