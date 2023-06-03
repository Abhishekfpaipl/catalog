<template>
    <div>
        <CatalogLink active="Live"></CatalogLink>
        <div class="">
            <div v-for="(Catalog, index) in Catalogs" :key="index">
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
                        <i class="bi bi-x fs-2 "></i>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import CatalogLink from './CatalogLink.vue';
export default {
    components: {
        CatalogLink,
    },
    data() {
        return {
            publicPath: process.env.BASE_URL,
        }
    },
    computed: {
        Catalogs(){
            return this.$store.getters.getCatalog;
        }

    },
    methods: {

    }

}
</script>

<style scoped></style>