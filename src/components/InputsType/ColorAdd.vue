<template>
    <div>
        <div v-for="(color, index) in colors" :key="index">
            <TextInputs class="w-100 " :name="color.name" type="text" design="floating"></TextInputs>
        </div>
        <Button class="w-100 btn btn-success" @click="addColor()">Add More Color</Button>
    </div>
</template>

<script>
import TextInputs from './TextInputs.vue';

export default {
    data() {
        return {
            colors: [
                { name: "Color" },
                { name: "Color" },
            ],
        };
    },
    methods: {
        addColor() {
            this.colors.push({ name: "Color" });
        },
    },
    components: { TextInputs }
}
</script>

<style lang="scss" scoped></style>