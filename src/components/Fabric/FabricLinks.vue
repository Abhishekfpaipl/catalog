<template>
    <nav >
        <div class="nav d-flex justify-content-evenly nav-tabs py-2" style="font-size: 13px; font-weight: 500;" id="nav-tab" role="tablist">

            <router-link  class="nav-link " to="/FabricCreate" :class=" active === 'FabricCreate' ? 'active' : ''" >Create </router-link>
            <router-link  class="nav-link " :class="active === 'FabricSampling' ? 'active' : ''" to="/FabricSampling">Sampling</router-link>
            <router-link  class="nav-link " :class="active === 'FabricPO' ? 'active' : ''" to="/FabricPO">PO</router-link>
            <!-- <router-link  class="nav-link " :class="active === 'FabricManage' ? 'active' : ''" to="/FabricManage">Manage</router-link>
            <router-link  class="nav-link " :class="active === 'FabricNotes' ? 'active' : ''" to="/FabricNotes">Notes</router-link> -->
        </div>
    </nav>
</template>

<script>
export default {
    props: ['active']
}
</script>