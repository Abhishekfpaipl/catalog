<template>
   <div class="">
      <FabricLinks active="FabricCreate"></FabricLinks>
      <!-- <NavLink active="Create"></NavLink> -->
      <!-- <SearchBar></SearchBar> -->
      <div class="container" style="padding-bottom: 100px;">
         <div class="d-flex justify-content-between  w-100 my-3">
            <div class="text-center">
               <p class="d-flex align-items-center m-0 fs-4">Create New Fabric</p>
            </div>
            <div class="">
               <button class="btn"><i class="bi bi-download"></i> Import</button>
            </div>
         </div>
         <FabricForm></FabricForm>
         
         <form action="" method="post" style="text-align: left;">
            <div class="border p-2 mt-3 rounded mb-3">
               <label for="formFile" class="form-label">Upload Catalog Image</label>
               <input class="form-control" type="file" id="formFile">
            </div>
            <div class="border p-2 rounded mb-3">
               <div class="">
                  <label for="formFile" class="form-label">Upload CAD</label>
                  <input class="form-control" type="file" id="formFile">
               </div>
            </div>
            <div class="d-flex justify-content-between">
               <button class="btn btn-primary w-100 m-2 rounded-0">Create Fabric</button>
            </div>
         </form>
      </div>

   </div>
</template>

<script>
import FabricLinks from './FabricLinks.vue';
// import SearchBar from '../SearchBar/SearchBar.vue';
import FabricForm from './FabricForm.vue';

export default {
   components: {
      //  SearchBar,
      FabricLinks,
      FabricForm
   }
}
</script>

<style lang="scss" scoped></style>