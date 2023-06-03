<template>
    <div>
        <FabricLinks active="FabricManage" ></FabricLinks>

        Iam Manage
    </div>
</template>

<script>
import FabricLinks from './FabricLinks.vue';

export default {
    computed: {
        chats() {
            return this.$store.getters.getChats;
        }
    },
    components: { FabricLinks}
}
</script>

<style lang="scss" scoped></style>