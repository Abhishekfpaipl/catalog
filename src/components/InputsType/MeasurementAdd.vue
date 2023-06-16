<template>
    <div>
        <div v-for="(size, index) in sizes" :key="index">
            <input type="text" class="form-control my-3" id="floatingInput" :placeholder="size.name" required
                v-model="size.value" @input="updateStore" :name="size.slug">
            <!-- <TextInputs class="w-100 " :name="size.name" type="text" design="floating"></TextInputs> -->
        </div>
        <Button class="w-100 btn btn-success" @click="addSize()">Add More</Button>
        <div class="d-flex justify-content-center">
            <!-- <button class="btn btn-info" data-bs-toggle="collapse" :data-bs-target="'#flush-collapse' + index"
                aria-expanded="false" :aria-controls="'flush-collapse' + index" @click="changeColor">Submit</button> -->
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            sizes: [
                { name: "Size", slug:'size',value:'' },
                { name: "Size", slug:'size',value:'' },
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
        ...mapActions(['setInputValue']),
        updateStore(event) {
            this.setInputValue(event.target.value);
        },
    },
    // components: { TextInputs }
}
</script>

<style lang="scss" scoped></style>