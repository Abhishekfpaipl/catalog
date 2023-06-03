<template>
    <div>
        <FabricLinks active="FabricNotes" ></FabricLinks>

        Iam FabricNotes
    </div>
</template>

<script>
import FabricLinks from './FabricLinks.vue';

export default {
    name:'DeliveryPage',
    computed: {
        chats() {
            return this.$store.getters.getChats;
        }
    },
    components: { FabricLinks}
}
</script>

<style lang="scss" scoped></style>