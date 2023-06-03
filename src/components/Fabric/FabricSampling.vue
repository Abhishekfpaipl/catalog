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
                            <i class="bi bi-pencil-square fs-3 me-2" data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"></i>
                            <i class="bi bi-check2 fs-3 me-2"></i>
                            <i class="bi bi-upload fs-3"></i>
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
        </div>
    </div>
</template>

<script>
import FabricLinks from './FabricLinks.vue';
import FabricForm from './FabricForm.vue';


export default {
    components: {
        FabricLinks,
        FabricForm
    },
    data() {
        return {
            publicPath: process.env.BASE_URL,
        }
    },
    computed: {
        Fabrics() {
            return this.$store.getters.getFabric
        }

    },
    methods: {


    }
}
</script>
