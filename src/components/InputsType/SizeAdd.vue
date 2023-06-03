<template>
    <div>
        <div v-for="(size, index) in sizes" :key="index">
            <TextInputs class="w-100 " :name="size.name" type="text" design="floating"></TextInputs>
        </div>
        <Button class="w-100 btn btn-success" @click="addSize()">Add More Size</Button>
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
            ]
        };
    },
    methods: {
        addSize() {
            this.sizes.push({ name: "Size" });
        }
    },
    components: { TextInputs }
}
</script>

<style lang="scss" scoped></style>