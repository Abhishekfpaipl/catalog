<template>
    <nav >
        <div class="nav d-flex justify-content-between nav-tabs py-2" style="font-size: 13px; font-weight: 500;" id="nav-tab" role="tablist">
            <a class="nav-link " :class="active === 'Create' ? 'active' : ''" href="/CreatePage">Create</a>
            <a class="nav-link " :class="active === 'Draft' ? 'active' : ''" href="/DraftPage">Draft</a>
            <a class="nav-link " :class="active === 'Live' ? 'active' : ''" href="/LivePage">Live</a>
            <!-- <a class="nav-link " :class="active === 'Manage' ? 'active' : ''" href="/ManagerPage">Manage</a>
            <a class="nav-link " :class="active === 'Notes' ? 'active' : ''" href="/NotesPage">Notes</a> -->
        </div>
    </nav>
</template>

<script>
export default {
    props: ['active']
}
</script>