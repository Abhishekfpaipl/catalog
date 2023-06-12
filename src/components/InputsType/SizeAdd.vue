<template>
    <div>
        <div v-for="(size, index) in sizes" :key="index">
            <TextInputs class="w-100 " :name="size.name" type="text" design="floating"></TextInputs>
        </div>
        <Button class="w-100 btn btn-success" @click="addSize()">Add More Size</Button>
        <div class="d-flex justify-content-center">
            <button class="btn btn-info" data-bs-toggle="collapse" :data-bs-target="'#flush-collapse' + index"
                aria-expanded="false" :aria-controls="'flush-collapse' + index" @click="changeColor">Submit</button>
        </div>
    </div>
</template>

<script>
import TextInputs from './TextInputs.vue';

export default {
    data() {
        return {
            sizes: [
                { name: "Size" },
                { name: "Size" },
            ],
            divColor: 'initial',
        };
    },
    methods: {
        addSize() {
            this.sizes.push({ name: "Size" });
        },
        changeColor() {
            this.divColor = 'green'; // Change the color to green
        },
    },
    components: { TextInputs }
}
</script>

<style lang="scss" scoped></style>