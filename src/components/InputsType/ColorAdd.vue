<template>
    <div>
        <div v-for="(color, index) in colors" :key="index">
            <input type="text" class="form-control my-3" id="floatingInput" :placeholder="color.name" required
                v-model="color.value" @input="updateStore" :name="color.slug">
            <!-- <label for="floatingInput">{{ color.name }}</label> -->
            <!-- <TextInputs class="w-100 " :name="color.name" type="text" design="floating"></TextInputs> -->
        </div>
        <Button class="w-100 btn btn-success" @click="addColor()">Add More Color</Button>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
// import TextInputs from './TextInputs.vue';

export default {
    data() {
        return {
            colors: [
                { name: "Color", slug:'color', value:'' },
                { name: "Color", slug:'color', value:'' },
            ],
        };
    },
    methods: {
        addColor() {
            this.colors.push({ name: "Color", slug:'Color' });
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