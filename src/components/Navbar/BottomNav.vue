<template lang="">
    <div class=" position-fixed w-100 bg-white" style="bottom: 0; z-index:1;">
      <div class=" nav-bottom justify-content-evenly" style="height: 63px; padding: 0 18px;">
       <div class="items">
          <routerLink to="/CreatePage"  :class="{'text-danger' : currentRoute ==='CreatePage' }" style="text-decoration:none;color:black;">
            <div class="inner-items py-1 d-flex flex-column"> 
              <i class="bi bi-shop-window fs-5"></i>
              <p class="m-0" style="font-size:12px">Catalogue</p>
            </div>
          </routerLink>
        </div>
        <div class="items">
          <router-link to="/FabricCreate" :class="{'text-danger' : currentRoute ==='FabricCreate' }" style="text-decoration:none;color:black;">
          <div class="inner-items py-1 d-flex flex-column">
            <i class="bi bi-grid-1x2 fs-5"></i>
            <p class="m-0" style="font-size:12px">Fabric</p>
          </div>
        </router-link>
        </div>
        
      </div>
    </div>
  </template>
<script>
export default {
  name: 'BottomNav',
  computed: {
    currentRoute() {
      return this.$route.name;
    }
  }
};
</script>
<style>
.items {
  display: flex;
  text-align: center;
}

.nav-bottom {
  height: 20%;
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  background: #F6F6F6;
}
</style>
  