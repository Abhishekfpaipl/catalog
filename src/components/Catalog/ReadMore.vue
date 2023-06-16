<template>
    <div>
        <div class="accordion py-3" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        :data-bs-target="'#collapseOne' + readmore.id" aria-expanded="true"
                        :aria-controls="'collapseOne' + readmore.id">
                        <b>{{ readmore.heading }}</b>
                    </button>
                </h2>
                <div :id="'collapseOne' + readmore.id" class="accordion-collapse collapse " aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <div v-if="!showFull">
                            <ul class="truncate-text mb-0">
                                <li class="m-0">{{ readmore.text }}</li>
                            </ul>
                            <span class="text-primary ms-4" @click="showFull = true">Read More</span>
                        </div>
                        <ul v-else class="">
                            <li>{{ readmore.text }}</li>
                            <span class="text-primary" @click="showFull = false">Read Less</span>
                        </ul>

                        <div v-if="!showFull1">
                            <ul class="truncate-text mb-0">
                                <li class="m-0">{{ readmore.text1 }}</li>
                            </ul>
                            <span class="text-primary ms-4" @click="showFull1 = true">Read More</span>
                        </div>
                        <ul v-else class="">
                            <li>{{ readmore.text1 }}</li>
                            <span class="text-primary" @click="showFull1 = false">Read Less</span>
                        </ul>

                        <div v-if="!showFull2">
                            <ul class="truncate-text mb-0">
                                <li class="m-0">{{ readmore.text2 }}</li>
                            </ul>
                            <span class="text-primary ms-4" @click="showFull2 = true">Read More</span>
                        </div>
                        <ul v-else class="">
                            <li>{{ readmore.text2 }}</li>
                            <span class="text-primary" @click="showFull2 = false">Read Less</span>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="border border-dark px-2 py-1">
            <b>{{ readmore.heading }}</b>
            <div v-if="!showFull">
                <div class="truncate-text">
                    {{ readmore.text }}
                </div>
                <span class="text-primary" @click="showFull = true">Read More</span>
            </div>
            <div v-else class="">
                {{ readmore.text }}
                <span class="text-primary" @click="showFull = false">Read Less</span>
            </div>
        </div> -->
    </div>
</template>

<script>
export default {
    props: ["readmore"],
    data() {
        return {
            showFull: false,
            showFull1: false,
            showFull2: false,
        }
    },

}
</script>

<style lang="scss" scoped>
.truncate-text {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    //     width: 250px;
    //   white-space: nowrap;
    //   overflow: hidden;
    //   text-overflow: ellipsis;
}

.accordion-button:not(.collapsed) {
    color: #fff;
    background-color: none;
    border-left: none;
}

// .accordion-button{
//     border-left: 4px solid #000;
// }

.accordion {
    --bs-accordion-active-bg: #606C5D;
    --bs-accordion-btn-focus-box-shadow: none;
    --bs-accordion-active-color: #ffffff;
    --bs-accordion-btn-icon-width: 1rem;

}
</style>