<template>
   <div class="">
      <CatalogLink active="Create"></CatalogLink>
      <!-- <SearchBar></SearchBar> -->
         <div class="container"  style="padding-bottom: 100px;">
            <div class="d-flex justify-content-between  w-100 my-3">
               <div class="text-center">
                  <p class="d-flex align-items-center m-0 fs-4">Create New Catelog</p>
               </div>
               <div class="">
                  <button class="btn"><i class="bi bi-download"></i> Import</button>
               </div>
            </div>
            <CatalogForm></CatalogForm>
         </div>
   </div>
</template>

<script>
// import TextInputs from '../InputsType/TextInputs.vue';
import CatalogForm from './CatalogForm.vue';
import CatalogLink from './CatalogLink.vue';
// import SearchBar from '../SearchBar/SearchBar.vue';

export default {
   components: {
   //  TextInputs,
   CatalogLink,
    CatalogForm
},

}
</script>

<style lang="scss" scoped></style>