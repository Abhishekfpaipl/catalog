<template>
    <div>
        <CatalogLink active="Delivered" ></CatalogLink>

        Iam Delivered
    </div>
</template>

<script>
import CatalogLink from './CatalogLink.vue';

export default {
    name:'NotesPage',
    computed: {
        chats() {
            return this.$store.getters.getChats;
        }
    },
    components: { CatalogLink}
}
</script>

<style lang="scss" scoped></style>