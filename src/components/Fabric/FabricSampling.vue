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

                            <div class="accordion" id="accordionExample">

                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            tes
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse show"
                                        data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <div  class="form-floating ">
                                                <input value="" type="inline" name="name" class="form-control "
                                                    id="floatingInput" placeholder="name" required>
                                                <label for="floatingInput">Fabric no</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Accordion Item #3
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <strong>This is the third item's accordion body.</strong> It is hidden by default,
                                        until the collapse plugin adds the appropriate classes that we use to style each
                                        element. These classes control the overall appearance, as well as the showing and
                                        hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                                        our default variables. It's also worth noting that just about any HTML can go within
                                        the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div> -->

                            <router-link to="/FabricForm">
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
        },
        activeFabric() {
            return this.$store.getters.getActiveFabric
        }

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
