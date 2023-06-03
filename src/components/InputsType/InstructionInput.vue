<template>
    <div>
        <div>
            <TextInputs class="w-100 " name="Select Deafult Fabricator" type="text" design="floating"></TextInputs>

            <textarea placeholder="Type Additional Note" id="" cols="40" rows="5"></textarea>
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
                { name: "Instruction" },
                { name: "Instruction" },
            ],
        };
    },
    methods: {
        addIns() {
            this.instructions.push({ name: "Instruction" });
        },
    },
    components: { TextInputs }
}
</script>

<style lang="scss" scoped></style>