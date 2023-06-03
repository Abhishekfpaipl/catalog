<template>
    <div>
        <div class="">
            <div class="accordion accordion-flush" id="accordionFlushAreas">
                <div class="accordion-item" v-for="(fabricarea, index) in fabricareas" :key="index">
                    <h2 class="accordion-header">
                        <div class="accordion-button collapsed" data-bs-toggle="collapse"
                            :data-bs-target="'#flush-collapse' + index" aria-expanded="false"
                            :aria-controls="'flush-collapse' + index">
                            <div class="d-flex align-items-center">

                                <div class="me-5 rounded-circle d-flex align-items-center justify-content-center"
                                    style="border:1px solid green;height:50px;width: 50px;">{{ index + 1 }}</div>

                                <i class="bi bi-1-circle fs-2 text-success"></i>
                                <span>{{ fabricarea.title }}</span>
                            </div>
                        </div>
                    </h2>
                    <div :id="'flush-collapse' + index" class="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushAreas">
                        <div class="accordion-body">
                            <div v-if="fabricarea.type === 'TextInput'">
                                <div class="form-floating my-4" v-for="(section, key) in fabricarea.sections" :key="key">
                                    <input type="text" class="form-control " id="floatingInput" :placeholder="section.name"
                                        required v-model="section.value" @input="updateStore">
                                    <label for="floatingInput">{{ section.name }}</label>
                                </div>
                            </div>
                            <div v-if="fabricarea.type === 'SizeAdd'">
                                <SizeAdd></SizeAdd>
                            </div>
                            <div v-if="fabricarea.type === 'ColorAdd'">
                                <ColorAdd></ColorAdd>
                            </div>
                            <div v-if="fabricarea.type === 'Search'">
                                <SearchInput></SearchInput>
                            </div>
                            <div v-if="fabricarea.type === 'Instruction'">
                                <InstructionInput></InstructionInput>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import ColorAdd from '../InputsType/ColorAdd.vue';
import InstructionInput from '../InputsType/InstructionInput.vue';
import SearchInput from '../InputsType/SearchInput.vue';
import SizeAdd from '../InputsType/SizeAdd.vue';

export default {
    name: "FabricForm",
    components: {
        InstructionInput,
        SearchInput,
        ColorAdd,
        SizeAdd
    },
    data() {
        return {
            colors: [
                { name: "Color" },
                { name: "Color" }
            ]
        };
    },
    computed: {
        ...mapState({ fabricareas: (state) => state.fabricareas })
    },
    methods: {
        addColor() {
            this.colors.push({ name: "Color" });
        },
        ...mapActions(['setFabricInputValue']),
        updateStore(event) {
            this.setFabricInputValue(event.target.value);
        }
    }

}
</script>

<style lang="scss" scoped></style>