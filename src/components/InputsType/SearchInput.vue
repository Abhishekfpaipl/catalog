<template>
    <div>
        <TextInputs  class="w-100 " name="search" type="search" design="floating"></TextInputs>
    </div>
</template>

<script>
import TextInputs from './TextInputs.vue';

export default {
    name: "SearchInput",
    components: { TextInputs }
}
</script>

<style lang="scss" scoped></style>