<template>
    <div>
        <div v-for="(Sample, index) in Sampling" :key="index">
            <div class="card">
                <div class="d-flex justify-content-evenly mt-2">
                    <img :src="Sample.img"
                        class="rounded-circle border border-3 d-flex justify-content-center align-items-center"
                        style="height:80px; width:80px;object-fit: contain;">
                    <div class="d-flex flex-column  justify-content-center">
                        <span class="fw-bold text-start" style="font-size: 12px;">{{ Sample.name }}</span>
                        <div class="d-flex">
                            <span class="me-2 text-start" style="font-size: 12px;">{{ Sample.length }} mtr</span><span
                                style="font-size: 12px;">@</span>
                            <span class="mx-2" style="font-size: 12px;">Rs.{{ Sample.price }} pm</span>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center align-items-center">
                        <i class="bi bi-pencil-square fs-4   me-2" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"></i>
                        <i class="bi bi-x fs-1"></i>
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
                        helo
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
export default {
    name: 'SamplingPage',
    computed: {
        Sampling() {
            return this.$store.getters.getSampling
        }
    }
}
</script>

<style lang="scss" scoped></style>