<template>
    <div>
        <CatalogLink active="Draft"></CatalogLink>
        <!-- <SearchBar></SearchBar> -->

        <div class="" style="padding-bottom: 100px;">
            <div v-for="(design , index) in designs" :key="index">
                <div class="d-flex justify-content-between container mt-2" @click="showCatelog(design)">
                    <div class="d-flex">
                        <img :src="design.img"
                            class="rounded-circle border border-3 d-flex justify-content-center align-items-center"
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
                        <!-- <i class="bi bi-pencil-square fs-3 me-2" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" @click="showCatelog(Catalog)"></i>
                         -->
                        <i class="bi bi-eye fs-3 me-2"></i>
                    </div>
                </div>
            </div>

            <div v-if="Object.keys(activeCatelog).length !== 0">
                <div class="offcanvas offcanvas-end show" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop"
                    aria-labelledby="staticBackdropLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="staticBackdropLabel">Edit</h5>
                        <button type="button" class="btn" @click="hideCatelog()"><i class="bi bi-x fs-4"></i></button>
                    </div>
                    <!-- <div class="offcanvas-body">



                            <div class="card">
                                <div class="accordion accordion-flush" id="accordionFlushAreas">

                                    <div class="accordion-item" v-for="(area, index) in activeCatelog.areas" :key="index">
                                        <h2 class="accordion-header">
                                            {{ activeCatelog.oid }}
                                            <div class="accordion-button collapsed" data-bs-toggle="collapse"
                                                :data-bs-target="'#flush-collapse' + index" aria-expanded="false"
                                                :aria-controls="'flush-collapse' + index">
                                                <div class="d-flex align-items-center">

                                                    <div class="me-5 rounded-circle d-flex align-items-center justify-content-center"
                                                        style="border:1px solid green;height:50px;width: 50px;">{{ index
                                                            +
                                                            1 }}</div>

                                                    <i class="bi bi-1-circle fs-2 text-success"></i>
                                                    <span>{{ area.title }}</span>
                                                </div>
                                            </div>
                                        </h2>
                                        <div :id="'flush-collapse' + index" class="accordion-collapse collapse"
                                            data-bs-parent="#accordionFlushAreas">
                                            <div class="accordion-body">
                                                <div v-if="area.type === 'TextInput'">
                                                    <div class="form-floating my-3" v-for="(section, key) in area.sections"
                                                        :key="key">
                                                        <input type="text" class="form-control " id="floatingInput"
                                                            :placeholder="section.name" required v-model="section.value">
                                                        <label for="floatingInput">{{ section.name }}</label>
                                                    </div>
                                                </div>
                                                <div v-if="area.type === 'SizeAdd'">
                                                    <SizeAdd></SizeAdd>
                                                </div>
                                                <div v-if="area.type === 'ColorAdd'">
                                                    <ColorAdd></ColorAdd>
                                                </div>
                                                <div v-if="area.type === 'Search'">
                                                    <SearchInput></SearchInput>
                                                </div>
                                                <div v-if="area.type === 'Instruction'">
                                                    <InstructionInput></InstructionInput>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div> -->



                    <div class="offcanvas-body">
                        <div class="d-flex justify-content-center">
                            <img :src="activeCatelog.img" style="height: 400px; width: 300px; object-fit: contain;">
                        </div>
                        <!-- {{ activeCatelog.oid }} -->
                        <div v-for="(d,index) in activeCatelog.sections" :key="index">
                            {{ d.value }}
                        </div>

                        <!-- <div class="mt-4 d-flex flex-column">
                            <h5 class="text-center">{{ activeCatelog.name }}</h5>
                            <div v-for="(fa, index) in activeCatelog.areas" :key="index">
                                <div class="accordion" id="accordionExample">

                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" :data-bs-target="'#collapseTwo' + index"
                                                aria-expanded="false" :aria-controls="'collapseTwo' + index">
                                                {{ fa.title }}
                                            </button>
                                        </h2>
                                        <div :id="'collapseTwo' + index" class="accordion-collapse collapse "
                                            data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                <div v-if="fa.type === 'TextInput'">
                                                    <div v-for="(sec, key) in fa.sections" :key="key"
                                                        class="form-floating my-3 d-flex justify-content-between ">
                                                        <p class="m-0">{{ sec.name }}</p>
                                                        <input type="type" name="name" id="floatingInput1"
                                                            class="text-center" :placeholder="sec.value"
                                                            style="border:none; border-bottom:1px solid" readonly>
                                                    </div>
                                                </div>
                                                <div v-if="fa.type === 'SizeAdd'">
                                                    <div class="d-flex my-3 justify-content-between">
                                                        <p class="m-0">Size</p>
                                                        <input type="type" name="name" id="floatingInput1"
                                                            class="text-center" placeholder="XS"
                                                            style="border:none; border-bottom:1px solid" readonly>
                                                    </div>
                                                    <div class="d-flex my-3 justify-content-between">
                                                        <p class="m-0">Size</p>
                                                        <input type="type" name="name" id="floatingInput1"
                                                            class="text-center" placeholder="XL"
                                                            style="border:none; border-bottom:1px solid" readonly>
                                                    </div>
                                                </div>
                                                <div v-if="fa.type === 'ColorAdd'">
                                                    <div class="d-flex my-3 justify-content-between">
                                                        <p class="m-0">Colour</p>
                                                        <input type="type" name="name" id="floatingInput1"
                                                            class="text-center" placeholder="Red"
                                                            style="border:none; border-bottom:1px solid" readonly>
                                                    </div>
                                                    <div class="d-flex my-3 justify-content-between">
                                                        <p class="m-0">Colour</p>
                                                        <input type="type" name="name" id="floatingInput1"
                                                            class="text-center" placeholder="Green"
                                                            style="border:none; border-bottom:1px solid" readonly>
                                                    </div>

                                                </div>
                                                <div v-if="fa.type === 'Search'">
                                                    <input type="search" placeholder="Search">
                                                </div>
                                                <div v-if="fa.type === 'Instruction'">
                                                    <div class="mb-3">
                                                        <label for="exampleFormControlTextarea1"
                                                            class="form-label">Instruction</label>
                                                        <textarea class="form-control" id="exampleFormControlTextarea1"
                                                            rows="3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, doloremque!</textarea>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <router-link to="/CatalogForm" class="d-flex justify-content-center mt-3">
                                <button class=" btn btn-info">Edit</button>
                            </router-link>
                        </div> -->
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>


// import CatalogForm from './CatalogForm.vue';
// import ColorAdd from '../InputsType/ColorAdd.vue';
// import InstructionInput from '../InputsType/InstructionInput.vue';
// import SearchInput from '../InputsType/SearchInput.vue';
// import SizeAdd from '../InputsType/SizeAdd.vue';
import CatalogLink from './CatalogLink.vue';

export default {
    components: {
        CatalogLink,
        // SizeAdd,
        // ColorAdd,
        // SearchInput,
        // InstructionInput
    },
    data() {
        return {
            publicPath: process.env.BASE_URL,
        }
    },
    computed: {
        Catalogs() {
            return this.$store.getters.getCatalog;
        },
        activeCatelog() {
            return this.$store.getters.getCatelog;
        },
        designs(){
            return this.$store.getters.getDesign
        }
        // areas() {
        //     return this.$store.getters.getAreas
        // }

    },
    methods: {
        showCatelog(design) {
            return this.$store.dispatch('selectCatelog', design);
        },
        hideCatelog() {
            return this.$store.dispatch('hideCatelog');
        }

    }
}
</script>

<style scoped></style>