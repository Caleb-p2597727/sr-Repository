<template>
  <div class="h-screen flex-col text-gray-800">
    <div>
    <h2 class="text-2xl font-bold mb-10 mx-12 py-4 text-center">
        Type your review
      </h2>
    </div>
    <!-- main div -->
    <div class="h-52 w-92 px-3 rounded-2xl mx-56">

      <input type="input" ref="input" class="h-32 w-72 border-2" />
      <br />
      <button
        type="button"
        class="px-7 py-3 mt-12 ml-14 bg-blue text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        @click="handleReview"
      >
        Leave review
      </button>
      <div v-if="reviewSubmitted" class="text-center mt-4 text-green-600 font-bold">
    Review submitted!
  </div>
    </div>
</div>
</template>

<script setup>

import { ref } from 'vue';
// import { navigateTo } from 'nuxt-link';

definePageMeta({
  layout: "sr-browse",
});

useHead({
  title: "Leave a review",
});

const reviewSubmitted = ref(false);

const handleReview = () => {
  reviewSubmitted.value = true;
//   navigateTo("/");
};
</script>


