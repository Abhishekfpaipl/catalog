<template>
    <div>
        <CatalogLink active="Draft"></CatalogLink>
        <!-- <SearchBar></SearchBar> -->

        <div class="" style="padding-bottom: 100px;">
            <div v-for="(Catalog, indexz) in Catalogs" :key="indexz">
                <div class="d-flex justify-content-evenly mt-2">
                    <img :src="Catalog.img"
                        class="rounded-circle border border-3 d-flex justify-content-center align-items-center"
                        style="height:80px; width:80px;object-fit: contain;">
                    <div class="d-flex flex-column align-items-center justify-content-center">
                        <span class="fw-bold" style="font-size: 12px;">{{ Catalog.oid }}</span>
                        <div class="d-flex">
                            <span class="mx-2" style="font-size: 12px;">MOQ : {{ Catalog.moq }}</span><span
                                style="font-size: 12px;">|</span>
                            <span class="mx-2" style="font-size: 12px;">Sale Price : {{ Catalog.price }}</span>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center align-items-center">
                        <!-- <i class="bi bi-pencil-square fs-3 me-2" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" @click="showCatelog(Catalog)"></i>
                         -->
                        <i class="bi bi-pencil-square fs-3 me-2" @click="showCatelog(Catalog)"></i>

                        <i class="bi bi-upload fs-3"></i>
                    </div>
                </div>

                <div v-if="Object.keys(activeCatelog).length !== 0">
                    <div class="offcanvas offcanvas-end show" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop"
                        aria-labelledby="staticBackdropLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="staticBackdropLabel">Edit</h5>
                            <button type="button" class="btn" @click="hideCatelog()"><i class="bi bi-x fs-4"></i></button>
                        </div>
                        <div class="offcanvas-body">


                            <div class="card">
                                <div class="accordion accordion-flush" id="accordionFlushAreas">
                                    <!-- <div class="accordion-item" v-for="(catalog, dex) in activeCatelog" :key="dex"> -->
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
                                    <!-- </div> -->
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <!-- <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample"
                    aria-labelledby="offcanvasExampleLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <div>


                            <CatalogForm></CatalogForm>
                        </div>
                    </div>
                </div> -->

            </div>
        </div>
    </div>
</template>

<script>


// import CatalogForm from './CatalogForm.vue';
import ColorAdd from '../InputsType/ColorAdd.vue';
import InstructionInput from '../InputsType/InstructionInput.vue';
import SearchInput from '../InputsType/SearchInput.vue';
import SizeAdd from '../InputsType/SizeAdd.vue';
import CatalogLink from './CatalogLink.vue';

export default {
    components: {
        CatalogLink,
        SizeAdd,
        ColorAdd,
        SearchInput,
        InstructionInput
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
        // areas() {
        //     return this.$store.getters.getAreas
        // }

    },
    methods: {
        showCatelog(catelog) {
            return this.$store.dispatch('selectCatelog', catelog);
        },
        hideCatelog() {
            return this.$store.dispatch('hideCatelog');
        }

    }
}
</script>

<style scoped></style>