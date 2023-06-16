<template>
    <div>
        <div v-for="(design, index) in designs" :key="index">
            <div class="d-flex justify-content-between container mt-2" @click="showDesign(design)">
                <div class="d-flex">
                    <img :src="design.img"
                        class="rounded-circle border border-3 d-flex justify-content-center align-items-center "
                        style="height:80px; width:80px;object-fit: contain;">
                    <div class="ms-2">
                        <span class="fw-bold" style="font-size: 12px;">{{ design.oid }}</span>
                        <div class="d-flex">
                            <span class="" style="font-size: 12px;">MOQ : {{ design.moq }}</span><span
                                style="font-size: 12px;">|</span>
                            <span class="" style="font-size: 12px;">Sale Price : {{ design.price }}</span>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-center align-items-center">
                    <i class="bi bi-pencil-square fs-3 me-2" @click="showDesign(design)"></i>
                </div>
            </div>
        </div>

        <div v-if="Object.keys(activeDesign).length !== 0">
            <div class="offcanvas offcanvas-end show" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop"
                aria-labelledby="staticBackdropLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="staticBackdropLabel">Edit</h5>
                    <button type="button" class="btn" @click="hideDesign()"><i class="bi bi-x fs-4"></i></button>
                </div>
                <div class="offcanvas-body">
                    <div class="d-flex justify-content-center">
                        <img :src="activeDesign.img" class="border"
                            style="height: 400px; width: 300px; object-fit: contain;">
                    </div>
                    <div class=" mt-2">
                        <p class="m-0">{{ activeDesign.name }}</p>
                        <div class="d-flex justify-content-between">
                            <h3 class="m-0 my-2">MRP ₹{{ activeDesign.price }}</h3>
                            <p class="m-0">MOQ: {{ activeDesign.moq }}</p>
                        </div>
                        <p class="m-0 text-secondary">Inclusive of all Taxes</p>

                        <div class="d-flex">
                            <p v-if="selectedColor" class="text-muted m-0">Selected Color: </p>
                            <p class="fw-bold m-0"> {{ selectedColor.name }}</p>
                        </div>
                        <div class="d-flex gap-2 mt-3">
                            <div v-for="(color, index) in colors" :key="index" @click="displayColorName(color)"
                                style="border-radius: 50%;"
                                :style="{ border: color === selectedColor ? '2px solid black' : 'none' }">
                                <div class="rounded-circle"
                                    :style="{ backgroundColor: color.value, width: '20px', height: '20px', cursor: 'pointer' }">
                                </div>
                            </div>
                        </div>

                        <div class="">
                            <h6 class="mb-0 mt-3">Size</h6>
                            <div class="d-flex gap-2">
                                <button v-for="(size, index) in sizes" :key="index"
                                    class="btn btn-outline-primary rounded-0 w-25" @click="makeActiveSize(size)">{{
                                        size.name }}</button>
                            </div>
                            <div class="row g-0 mt-2 w-100 " style="box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.075);">
                                <div class="col-6 " v-for="(size, index) in activeSize.mesurements" :key="index">
                                    <div class="border-start p-3">
                                        <h6>{{ size.name }}:</h6>
                                        <div class="text-muted"> {{ size.value }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-3">
                        <p class="fs-5 p-2 border d-block  m-0 text-white" style="background-color: #606C5D;">Fabric Details
                        </p>
                        <div class="d-flex w-100 container border border-1 rounded-0">
                            <div class="row g-0 mt-2 w-100">
                                <div class="col-6" v-for="(a, index) in details" :key="index">
                                    <h6>{{ a.name }}:</h6>
                                    <p style="color:grey">{{ a.value }}</p>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="accordion" id="accordionPanelsStayOpenExample">
                            <div class="accordion-item rounded-0 border-top-0">
                                <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
                                    <div class="accordion-body p-0">
                                        <div class="d-flex w-100 container">
                                            <div class="row g-0 mt-2 w-100">
                                                <div class="col-6" v-for="(at, index) in details2" :key="index">
                                                    <h6 class="fw-bold">{{ at.name }}:</h6>
                                                    <p style="color:grey">{{ at.value }}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h2 class="accordion-header">
                                    <button class="accordion-button border collapsed" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree"
                                        aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                        Know More
                                    </button>
                                </h2>
                            </div>
                        </div> -->
                    </div>

                    <div class="mt-3">
                        <p class="fs-5 p-2 border d-block border-1 m-0 text-white" style="background-color: #606C5D;">
                            Attributes</p>
                        <div class="d-flex w-100 container border border-1 border-bottom-0">
                            <div class="row g-0 mt-2 w-100">
                                <div class="col-6" v-for="(a, index) in atts" :key="index">
                                    <h6 class="">{{ a.name }}:</h6>
                                    <p style="color:grey">{{ a.value }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion" id="accordionPanelsStayOpenExample">
                            <div class="accordion-item rounded-0 border-top-0">
                                <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
                                    <div class="accordion-body p-0">
                                        <div class="d-flex w-100 container">
                                            <div class="row g-0 mt-2 w-100">
                                                <div class="col-6" v-for="(at, index) in atts2" :key="index">
                                                    <h6>{{ at.name }}:</h6>
                                                    <p style="color:grey">{{ at.value }}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h2 class="accordion-header">
                                    <button
                                        class="accordion-button border border-end-0 border-bottom-0 border-start-0  collapsed rounded-0 "
                                        type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo"
                                        aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                        Know More
                                    </button>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div class="mt-3">
                        <p class="fs-5 p-2 border d-block  m-0 text-white" style="background-color: #606C5D;">Cost Pricing
                        </p>
                        <div class="d-flex w-100 container border border-1 border-bottom-0">
                            <div class="row g-0 mt-2 ">
                                <div class="col-6" v-for="(a, index) in costs" :key="index">
                                    <h6>{{ a.name }}:</h6>
                                    <p style="color:grey">{{ a.value }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion" id="accordionPanelsStayOpenExample">
                            <div class="accordion-item rounded-0 border-top-0">
                                <div id="panelsStayOpen-collapsefour" class="accordion-collapse collapse">
                                    <div class="accordion-body p-0">
                                        <div class="d-flex w-100 container">
                                            <div class="row g-0 mt-2 ">
                                                <div class="col-6" v-for="(at, index) in costs2" :key="index">
                                                    <h6>{{ at.name }}:</h6>
                                                    <p style="color:grey">{{ at.value }}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h2 class="accordion-header">
                                    <button
                                        class="accordion-button border border-end-0 border-bottom-0 border-start-0 collapsed rounded-0 "
                                        type="button" data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapsefour" aria-expanded="false"
                                        aria-controls="panelsStayOpen-collapsefour">
                                        Know More
                                    </button>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div class="mt-3">
                        <ReadMore v-for="(readmore, index) in readmores" :key="index" :readmore="readmore"></ReadMore>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ReadMore from './ReadMore.vue';

export default {
    data() {
        return {
            readmores: [
                {
                    id: 1,
                    heading: 'Production Plan Instruction',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident iusto sint dolor sapiente, nostrum accusamus dolore, tempora neque nisi iste voluptates quidem consectetur eum.Reprehenderit odio aut cumque architecto, repellat veniam distinctio exercitationem animi possimus dolorem, veritatis quisquam qui iure.Praesentium rem quasi facilis magnam fuga ',
                    text1: 'Provident iusto sint dolor sapiente, nostrum accusamus dolore, tempora neque nisi iste voluptates quidem consectetur eum.Reprehenderit odio aut cumque architecto, repellat veniam distinctio exercitationem animi possimus dolorem, veritatis quisquam qui iure.Praesentium rem quasi facilis magnam fuga ',
                    text2: 'dolor sapiente, nostrum accusamus dolore, tempora neque nisi iste voluptates quidem consectetur eum.Reprehenderit odio aut cumque architecto, repellat veniam distinctio exercitationem animi possimus dolorem, veritatis quisquam qui iure.Praesentium rem quasi facilis magnam fuga ',
                },
                {
                    id: 2,
                    heading: 'Production Guidline Instruction',
                    text: 'ipsum dolor sit amet consectetur adipisicing elit. Provident iusto sint dolor sapiente, nostrum accusamus dolore, tempora neque nisi iste voluptates quidem consectetur eum.Reprehenderit odio aut cumque architecto, repellat veniam distinctio exercitationem animi possimus dolorem, veritatis quisquam qui iure.Praesentium rem quasi facilis magnam fuga ',
                    text1: 'adipisicing elit. Provident iusto sint dolor sapiente, nostrum accusamus dolore, tempora neque nisi iste voluptates quidem consectetur eum.Reprehenderit odio aut cumque architecto, repellat veniam distinctio exercitationem animi possimus dolorem, veritatis quisquam qui iure.Praesentium rem quasi facilis magnam fuga ',
                    text2: 'Provident iusto sint dolor sapiente, nostrum accusamus dolore, tempora neque nisi iste voluptates quidem consectetur eum.Reprehenderit odio aut cumque architecto, repellat veniam distinctio exercitationem animi possimus dolorem, veritatis quisquam qui iure.Praesentium rem quasi facilis magnam fuga ',

                },
                {
                    id: 3,
                    heading: 'QC Plans Instructions',
                    text: 'dolor sit amet consectetur adipisicing elit. Provident iusto sint dolor sapiente, nostrum accusamus dolore, tempora neque nisi iste voluptates quidem consectetur eum.Reprehenderit odio aut cumque architecto, repellat veniam distinctio exercitationem animi possimus dolorem, veritatis quisquam qui iure.Praesentium rem quasi facilis magnam fuga ',
                    text1: 'adipisicing elit. Provident iusto sint dolor sapiente, nostrum accusamus dolore, tempora neque nisi iste voluptates quidem consectetur eum.Reprehenderit odio aut cumque architecto, repellat veniam distinctio exercitationem animi possimus dolorem, veritatis quisquam qui iure.Praesentium rem quasi facilis magnam fuga ',
                    text2: 'iusto sint dolor sapiente, nostrum accusamus dolore, tempora neque nisi iste voluptates quidem consectetur eum.Reprehenderit odio aut cumque architecto, repellat veniam distinctio exercitationem animi possimus dolorem, veritatis quisquam qui iure.Praesentium rem quasi facilis magnam fuga ',
                },
                {
                    id: 4,
                    heading: 'QC Guidlines Instructions',
                    text: 'dolor sit amet consectetur adipisicing elit. Provident iusto sint dolor sapiente, nostrum accusamus dolore, tempora neque nisi iste voluptates quidem consectetur eum.Reprehenderit odio aut cumque architecto, repellat veniam distinctio exercitationem animi possimus dolorem, veritatis quisquam qui iure.Praesentium rem quasi facilis magnam fuga ',
                    text1: 'iusto sint dolor sapiente, nostrum accusamus dolore, tempora neque nisi iste voluptates quidem consectetur eum.Reprehenderit odio aut cumque architecto, repellat veniam distinctio exercitationem animi possimus dolorem, veritatis quisquam qui iure.Praesentium rem quasi facilis magnam fuga ',
                    text2: 'sapiente, nostrum accusamus dolore, tempora neque nisi iste voluptates quidem consectetur eum.Reprehenderit odio aut cumque architecto, repellat veniam distinctio exercitationem animi possimus dolorem, veritatis quisquam qui iure.Praesentium rem quasi facilis magnam fuga ',
                }
            ],
            activeSize: {},
            sizes: [
                {
                    name: "S",
                    mesurements: [
                        {
                            name: "Bottom Length",
                            value: "40in"
                        },
                        {
                            name: "Hips",
                            value: "38.2in"
                        },
                        {
                            name: "Thigh",
                            value: "25.1in"
                        },
                        {
                            name: "Waist",
                            value: "38.6in"
                        },
                        {
                            name: "Bust",
                            value: "38.6in"
                        },
                        {
                            name: "Sleeve Width",
                            value: "38.6in"
                        },
                    ]
                },
                {
                    name: "M",
                    mesurements: [
                        {
                            name: "Length",
                            value: "45.2in"
                        },
                        {
                            name: "Hips",
                            value: "41.7in"
                        },
                        {
                            name: "Thigh",
                            value: "24.8in"
                        },
                        {
                            name: "Waist",
                            value: "32.6in"
                        },
                    ]
                },
                {
                    name: "L",
                    mesurements: [
                        {
                            name: "Length",
                            value: "38.2in"
                        },
                        {
                            name: "Hips",
                            value: "40.7in"
                        },
                        {
                            name: "Thigh",
                            value: "22.8in"
                        },
                        {
                            name: "Waist",
                            value: "32.6in"
                        },
                    ]
                },
                {
                    name: "XL",
                    mesurements: [
                        {
                            name: "Length",
                            value: "38.2in"
                        },
                        {
                            name: "Hips",
                            value: "40.7in"
                        },
                        {
                            name: "Thigh",
                            value: "22.8in"
                        },
                        {
                            name: "Waist",
                            value: "32.6in"
                        },
                    ]
                },
                {
                    name: "XXL",
                    mesurements: [
                        {
                            name: "Length",
                            value: "38.2in"
                        },
                        {
                            name: "Hips",
                            value: "40.7in"
                        },
                        {
                            name: "Thigh",
                            value: "22.8in"
                        },
                        {
                            name: "Waist",
                            value: "32.6in"
                        },
                    ]
                },
            ],
            atts: [
                {
                    name: "Occasion",
                    value: "asdf"
                },
                {
                    name: "Chest Pad",
                    value: "123"
                },
                {
                    name: "Neckline",
                    value: "234"
                },
                {
                    name: "Pattern",
                    value: "Chesee"
                },
            ],
            atts2: [
                {
                    name: "Trim",
                    value: "Jagsd"
                },
                {
                    name: "Length",
                    value: "60"
                },
                {
                    name: "Trim",
                    value: "Jagsd"
                },
                {
                    name: "Length",
                    value: "60"
                },
            ],
            details: [
                {
                    name: "Select Fabric",
                    value: "Cotton"
                },
                {
                    name: "Pana (Inch)",
                    value: "400"
                },
                {
                    name: "FC/ Unit",
                    value: "200"
                },
                {
                    name: "Unit",
                    value: "60"
                },
            ],
            // details2: [
            //     {
            //         name: "FC/ Unit",
            //         value: "200"
            //     },
            //     {
            //         name: "Unit",
            //         value: "60"
            //     }, 
            // ],
            colors: [
                {
                    name: "Red",
                    value: "red"
                },
                {
                    name: "Yellow",
                    value: "yellow"
                },
                {
                    name: "Cyan",
                    value: "cyan"
                }
            ],
            selectedColor: null,
            costs: [
                {
                    name: "Fabric Cost",
                    value: "300"
                },
                {
                    name: "Processing",
                    value: "800"
                },
                {
                    name: "Cutting",
                    value: "400"
                },
                {
                    name: "Single Needle",
                    value: "600"
                },
            ],
            costs2: [
                {
                    name: "Accessories",
                    value: "200"
                },
                {
                    name: "Over Locking",
                    value: "100"
                },
                {
                    name: "Finishing",
                    value: "80"
                },
                {
                    name: "Packaging",
                    value: "180"
                },
                {
                    name: "Other Cost",
                    value: "50"
                },
                {
                    name: "Fabricating Rate",
                    value: "60"
                },
            ],
        };
    },
    computed: {
        designs() {
            return this.$store.getters.getDesign;
        },
        activeDesign() {
            return this.$store.getters.getActiveDesign;
        },
    },
    mounted() {
        this.selectedColor = this.colors[0]; // Set the first color as the default selected color
    },
    methods: {
        showDesign(design) {
            return this.$store.dispatch("selectDesign", design);
        },
        hideDesign() {
            return this.$store.dispatch("hideDesign");
        },
        displayColorName(color) {
            this.selectedColor = color;
        },
        makeActiveSize(size) {
            this.activeSize = size;
        },
    },
    components: { ReadMore }
}
</script>

<style  scoped>.accordion {
    --bs-accordion-active-bg: none;
    --bs-accordion-btn-focus-box-shadow: none;
    --bs-accordion-active-color: none;
}</style>