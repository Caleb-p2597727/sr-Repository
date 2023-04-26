<template>
    <section>
      <div class="h-screen text-gray-800">
        <div
          class="flex xl:justify-center lg:justify-between flex-wrap h-auto justify-center"
        >
        <h1>Leave your review</h1>
          <!-- main div -->
          <div class="h-52 w-92 px-3 rounded-2xl mt-12 justify-center">
            <sr-star :rating="0" :star-size="'3rem'" class="ml-5"></sr-star>
            <br />
  
            <input type="input" ref="input" class="h-32 w-72 border-2" />
            <br />
            <button
              type="button"
              class="px-7 py-3 mt-12 ml-14 bg-blue text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              @click="handleReview"
            >
              Leave review
            </button>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>

  
  definePageMeta({
    layout: "sr-browse",
  });

  const handleReview =  () => {
    navigateTo('/')
  }
  

  </script>
  

  