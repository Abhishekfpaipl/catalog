<template>
    <div>
        <div v-for="(size, index) in sizes" :key="index">
            <input type="text" class="form-control my-3" id="floatingInput" :placeholder="size.name" required
                v-model="size.value" @input="updateStore" :name="size.slug">
            <!-- <TextInputs class="w-100 " :name="size.name" type="text" design="floating"></TextInputs> -->
        </div>
        <Button class="w-100 btn btn-success" @click="addSize()">Add More Size</Button>
        <div class="d-flex justify-content-center">
            <!-- <button class="btn btn-info" data-bs-toggle="collapse" :data-bs-target="'#flush-collapse' + index"
                aria-expanded="false" :aria-controls="'flush-collapse' + index" @click="changeColor">Submit</button> -->
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
// import TextInputs from './TextInputs.vue';

export default {
    data() {
        return {
            sizes: [
                { name: "Size 1", slug:'size',value:'' },
                { name: "Size 2", slug:'size',value:'' },
            ],
            divColor: 'initial',
        };
    },
    methods: {
        // addSize() {
        //     this.sizes.push({ name: "Size" });
        // },
        addSize() {
            const newIndex = this.sizes.length;
            this.sizes.push({ name: `Size ${newIndex + 1}` ,  slug: 'Size'});
        },

        changeColor() {
            this.divColor = 'green'; // Change the color to green
        },
        ...mapActions(['setInputValue']),
        updateStore(event) {
            this.setInputValue(event.target.value);
        },
    },
    // components: { TextInputs }
}
</script>

<style lang="scss" scoped></style>