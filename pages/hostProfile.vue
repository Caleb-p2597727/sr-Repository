<template>
    <section>
      <div class=" m-8">
        <div class=" grid grid-cols-12 gap-6 bg-gray-200  border-2 border-slate-300 border-opacity-60 overflow-hidden rounded-lg bg-white shadow-lg dark:bg-neutral-700  ">
            <div class="col-span-5">
                <NuxtImg class=" w-full object-cover object-center" src="profileIcon.jpeg" alt="" />
            </div>
            <div class=" col-span-7">
                <div class="m-2 p-2 hover:bg-sky-100 hover:text-white transition duration-300 ease-in">
                    <h5 class="mb-2 mt-4 text-2xl font-medium text-neutral-800 dark:text-neutral-50">
                      Host: Caleb Atsu
                    </h5>
                    <p class="mb-4 text-base  text-xl text-neutral-600 dark:text-neutral-200">
                      p2597727@gmail.com
                    </p>
                    <p class="mb-4 text-base  text-xl text-neutral-600 dark:text-neutral-200">
                      on SpeedyRentals since: 01/2023
                    </p>
                    <p class="mb-4 text-base  text-neutral-600 dark:text-neutral-200">
                      SpeedyRental Verified user
                    </p>

                </div>
            </div>
        </div>

  
        <p class="ml-12 mt-12">Host reviews</p>
        <div class="h-auto w-92 border-2 mt-1 border-slate-300 border-opacity-60 overflow-hidden rounded-lg bg-white shadow-lg dark:bg-neutral-700">
          <div class="rounded shadow mt-0" v-for="(item,index) in reviews">
            <div class=" rounded-2xl p-2 border-gray border-1 mt-1">
            <p>Rating: {{ item.stars }}/5</p>
            <p>{{ item.message }}</p>
          </div>
          </div>
        </div>
        <NuxtLink
            type="button"
            class="px-7 py-3 mt-12 ml-0 bg-blue text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
           to="/reviews"
          >
            Leave review
          </NuxtLink>
      </div>
    </section>
  </template>
  
<script setup>
const {reviews} = useCars()

definePageMeta({
  layout: "sr-browse",
});

  //changes head to cars in (adds dynamic [] name)
useHead({
  title: "Caleb Atsu",
});

</script>

  