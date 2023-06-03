<template>
    <div>
        <CatalogLink active="Manage" ></CatalogLink>

        Iam Manage
    </div>
</template>

<script>
import CatalogLink from './CatalogLink.vue';

export default {
    computed: {
        chats() {
            return this.$store.getters.getChats;
        }
    },
    components: { CatalogLink}
}
</script>

<style lang="scss" scoped></style>