<template>
    <div>
        <div>
            <!-- <TextInputs class="w-100 " name="Select Deafult Fabricator" type="text" design="floating"></TextInputs> -->

            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Instruction</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div v-for="(instruction, index) in instructions" :key="index">

                <TextInputs class="w-100 " :name="instruction.name" type="text" design="floating"></TextInputs>
            </div>
            <Button class="w-100 btn btn-success" @click="addIns()">Add More</Button>
        </div>
    </div>
</template>

<script>
import TextInputs from './TextInputs.vue';

export default {
    name: "InstructionInput",
    data() {
        return {
            instructions: [
                { name: "Instruction 1" },
                { name: "Instruction 2" },
            ],
        };
    },
    methods: {
        addIns() {
            const newIndex = this.instructions.length;
            this.instructions.push({ name: `Instruction ${newIndex + 1}` });
        },
    },
    components: { TextInputs }
}
</script>

<style lang="scss" scoped></style>