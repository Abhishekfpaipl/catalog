<template>
    <div>
        <FabricLinks active="FabricPO"></FabricLinks>

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
                            <i class="bi bi-x fs-2 "></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import FabricLinks from './FabricLinks.vue';
export default {
    components: {

        FabricLinks,

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

<style scoped>
@media only screen and (max-width: 600px) {
    .list {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .btnlist img {
        width: 180px;
        height: 300px;
        /* overflow: auto; */
    }

    .btnsar {
        margin-top: 10px;
    }
}

@media only screen and (min-width: 601px) {
    .list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
}

.eabtn i:hover {
    color: black;
}
</style>