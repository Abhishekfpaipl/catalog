<template>
    <div>
        <FabricLinks active="FabricSampling"></FabricLinks>
        <div class="" style="padding-bottom: 100px;">
            <div v-for="(Fabric, index) in Fabrics" :key="index">
                <div class="card">
                    <div class="d-flex justify-content-evenly mt-2">
                        <img :src="Fabric.img"
                            class="rounded-circle border border-3 d-flex justify-content-center align-items-center"
                            style="height:80px; width:80px;object-fit: contain;">
                        <div class="d-flex flex-column  justify-content-center">
                            <span class="fw-bold text-start" style="font-size: 12px;">{{ Fabric.name }}</span>
                            <div class="d-flex">
                                <span class="me-2 text-start" style="font-size: 12px;">{{ Fabric.length }} mtr</span><span
                                    style="font-size: 12px;">@</span>
                                <span class="mx-2" style="font-size: 12px;">Rs.{{ Fabric.price }} pm</span>
                            </div>
                        </div>
                        <div class="d-flex justify-content-center align-items-center">
                            <!-- <i class="bi bi-eye fs-3 me-2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
                                aria-controls="offcanvasExample"></i> -->
                            <i class="bi bi-eye fs-3" @click="showFabric(Fabric)"></i>
                            <!-- <i class="bi bi-check2 fs-3 me-2"></i> -->
                            <!-- <i class="bi bi-upload fs-3"></i> -->
                        </div>
                    </div>
                </div>

                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample"
                    aria-labelledby="offcanvasExampleLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <div>
                            <FabricForm></FabricForm>
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="Object.keys(activeFabric).length !== 0">
                <div class="offcanvas offcanvas-end show" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop"
                    aria-labelledby="staticBackdropLabel">
                    <div class="offcanvas-header border">
                        <h5 class="offcanvas-title" id="staticBackdropLabel">View</h5>
                        <button type="button" class="btn" @click="hideFabric()"><i class="bi bi-x fs-4"></i></button>
                    </div>
                    <div class="offcanvas-body">
                        <div class="d-flex justify-content-center">
                            <img :src="activeFabric.img" style="height: 400px; width: 300px; object-fit: contain;">
                        </div>
                        <div class="mt-4 d-flex flex-column">
                            <h5 class="text-center">{{ activeFabric.name }}</h5>
                            <div v-for="(fa, index) in fabricareas" :key="index">
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
                                                        <b>{{ sec.name }}</b>
                                                        <input type="type" name="name" id="floatingInput1" class="text-center"
                                                            :placeholder="sec.value"
                                                            style="border:none; border-bottom:1px solid" readonly>
                                                    </div>
                                                </div>
                                                <div v-if="fa.type === 'SizeAdd'">
                                                    <SizeAdd></SizeAdd>
                                                </div>
                                                <div v-if="fa.type === 'ColorAdd'">
                                                    <ColorAdd></ColorAdd>

                                                </div>
                                                <div v-if="fa.type === 'Search'">
                                                    <SearchInput></SearchInput>
                                                </div>
                                                <div v-if="fa.type === 'Instruction'">
                                                    <InstructionInput></InstructionInput>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <router-link to="/FabricForm" class="d-flex justify-content-center mt-3">
                                <button class=" btn btn-info">Edit</button>
                            </router-link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import FabricLinks from './FabricLinks.vue';
import FabricForm from './FabricForm.vue';
import InstructionInput from '../InputsType/InstructionInput.vue';
import ColorAdd from '../InputsType/ColorAdd.vue';
import SearchInput from '../InputsType/SearchInput.vue';
import SizeAdd from '../InputsType/SizeAdd.vue';


export default {
    components: {
    FabricLinks,
    FabricForm,
    InstructionInput,
    ColorAdd,
    SearchInput,
    SizeAdd
},
    data() {
        return {
            publicPath: process.env.BASE_URL,
        }
    },
    computed: {
        Fabrics() {
            return this.$store.getters.getFabric
        },
        activeFabric() {
            return this.$store.getters.getActiveFabric
        },
        fabricareas() {
            return this.$store.getters.getFabricAreas
        },

    },
    methods: {
        showFabric(Fabric) {
            return this.$store.dispatch('selectFabric', Fabric)
        },
        hideFabric() {
            return this.$store.dispatch('hideFabric');
        },
    }
}
</script>
