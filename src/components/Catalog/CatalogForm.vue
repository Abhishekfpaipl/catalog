<template>
    <form @submit.prevent="createCatalog" style="text-align: left;">
        <div class="card">

            <div class="accordion accordion-flush" id="accordionFlushAreas">
                <div class="accordion-item" v-for="(area, index) in newAreas" :key="index">
                    <h2 class="accordion-header">
                        <div class="accordion-button collapsed" data-bs-toggle="collapse"
                            :data-bs-target="'#flush-collapse' + index" aria-expanded="false"
                            :aria-controls="'flush-collapse' + index">
                            <div class="d-flex align-items-center">

                                <div class="me-5 rounded-circle d-flex align-items-center justify-content-center"
                                    style="border:1px solid green;height:50px;width: 50px;">{{ index + 1 }}</div>
                                <i class="bi bi-1-circle fs-2 text-success"></i>
                                <span>{{ area.title }}</span>
                            </div>
                        </div>
                    </h2>
                    <div :id="'flush-collapse' + index" class="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushAreas">
                        <div class="accordion-body">
                            <div v-if="area.type === 'checkbox'">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" v-model="area.active" id="flexCheckDefault">
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Make active
                                    </label>
                                </div>
                            </div>
                            <div v-if="area.type === 'TextInput'">
                                <div class="form-floating my-4 " v-for="(section, key) in area.sections" :key="key">
                                    <input type="text" class="form-control " id="floatingInput" :placeholder="section.name"
                                        required v-model="section.value" @input="updateStore" :name="section.slug">
                                    <label for="floatingInput">{{ section.name }}</label>
                                </div>
                            </div>
                            <div v-if="area.type === 'ColorAdd'">
                                <ColorAdd></ColorAdd>
                            </div>
                            <!-- <div v-if="area.type === 'SizeAdd'">
                                <SizeAdd></SizeAdd>
                            </div>
                            <div v-if="area.type === 'Search'">
                                <SearchInput></SearchInput>
                            </div>
                            <div v-if="area.type === 'Instruction'">
                                <InstructionInput></InstructionInput>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="border p-2 mt-3 rounded mb-3">
            <label for="formFile" class="form-label">Upload Catalog Image</label>
            <input class="form-control" type="file" id="formFile">
        </div>
        <div class="border p-2 rounded mb-3">
            <div class="">
                <label for="formFile" class="form-label">Upload CAD</label>
                <input class="form-control" type="file" id="formFile">
            </div>
        </div>
        <div class="d-flex justify-content-between">
            <button class="btn btn-primary w-100 m-2 rounded-0">Create Catalog</button>
        </div>
    </form>
</template>

<script>
// import SizeAdd from '../InputsType/SizeAdd.vue';
import ColorAdd from '../InputsType/ColorAdd.vue';
// import SearchInput from '../InputsType/SearchInput.vue';
// import InstructionInput from '../InputsType/InstructionInput.vue';
import { mapActions } from 'vuex';
// import { mapState } from 'vuex';

export default {
    name: "CatalogForm",
    data() {
        return {
            newAreas: [],
            // colors: [
            //     { name: "Color" },
            //     { name: "Color" },
            // ],
            // sizes: [
            //     { name: "Size" },
            //     { name: "Size" },
            // ]
        }
    },
    components: {
    //     SizeAdd,
        ColorAdd,
    //     SearchInput,
    //     InstructionInput
    },
    mounted() {

        this.newAreas = this.$store.getters.getAreas

        // ...mapState({ areas: (state) => state.areas }),
        // ...mapState({catalogs: (state) => state.catalogs}),
    },
    methods: {
        addColor() {
            this.colors.push({ name: "Color" });
        },
        addSize() {
            this.sizes.push({ name: "Size" });
        },
        ...mapActions(['setInputValue']),
        updateStore(event) {
            this.setInputValue(event.target.value);
        },
        createCatalog() {
            this.$store.dispatch('createNewCatalog', this.newAreas)
        }
    }

}
</script>

<style lang="scss" scoped></style>