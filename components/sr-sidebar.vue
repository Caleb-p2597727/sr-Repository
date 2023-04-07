<template>
  <div
    class="grid grid-cols-1 border border-sky-700 divide-y divide-sky-700 rounded-lg p-1 gap-x-4 relative w-2/5 mr-10 h-3/5"
  >
  <!-- LOCATION STARTS -->
    <div>
      <h3 class="px-4 py-2">City</h3>
      <div
        class="relative m-1 mb-4 p-2 flex w-full"
      >
        <span
          class="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 "
          id="basic-addon1"
          >{{ route.params.city }}</span
        >
        <input
          type="text"
          class="relative m-0 w-0.5 min-w-0 flex-auto rounded-r border border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition ease-in-out focus:z-[3] focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none"
          placeholder="City"
          aria-label="City"
          aria-describedby="basic-addon1"
          
          v-model="city"
        />
      </div>
    </div>
    <!-- LOCATION ENDS -->
    <!-- MAKE STARTS -->
    <div class="px-4 py-2 mb-6">
      <h3 class="font-bold mb-4">Make {{route.params.make || "Any"}}</h3>
      <div class="grid">
        <select
          class="border border-neutral-300 flex-grow p-2 rounded text-gray-600 text-sm"
          data-te-select-init
          multiple
        >
          <option
            v-for="(item, index) in listOfCarMakes"
            :key="index"
            :value="index"
            @click="onChangeMake(item)"
          >
            {{ item }}
          </option>
        </select>
      </div>
    </div>
    <!-- MAKE ENDS -->

    <!-- PRICE STARTS -->
    <div class="px-4 py-2 mb-6 ">
      <h3 class="font-bold mb-4">Price {{ priceRangeText }}</h3>
      <div class="grid grid-cols-3 gap-4">
        <div class="flex items-center justify-center pl-3">
          <span>£ </span>
          <input
            type="number"
            min="0"
            class="border border-neutral-300 rounded  w-20 mx-2 px-2 py-1 text-sm"
            placeholder="Min"
            v-model="priceRange.min"
            
          />
        </div>
        <h3 class="flex items-center justify-center">to</h3>
        <div class="flex items-center justify-center">
          <span>£</span>
          <input
            type="number"
            min="0"
            class="border border-neutral-300 rounded w-20 mx-2 px-2 py-1 text-sm"
            placeholder="Max"
            v-model="priceRange.max"
            
          />
        </div>
      </div>
    </div>
    <!-- PRICE ENDS -->

    <div class="grid place-items-center px-4 py-4 mb-2">
      <button
        @click="onChangeLocation"
        type="submit"
        class="px-4 py-2 bg-indigo-300 text-white font-semibold rounded-md hover:bg-indigo-600"
      >
        Show all results
      </button>
    </div>
  </div>
</template>



<script setup>
const city = ref("");

const route = useRoute();

const router = useRouter()

const priceRangeText = computed(() => {
  const minPrice = route.query.minPrice;
  const maxPrice = route.query.maxPrice;

  if (!minPrice && !maxPrice) return "Any"
  else if (!minPrice && maxPrice) {
    return `< $${maxPrice}`
  } 
  else if (minPrice && !maxPrice) {
    return `> $${minPrice}`
  }
  else{
    return `$${minPrice}-$${maxPrice}`
  }
});
//we push the path /city/input value/car
const onChangeLocation = () => {
  //updateModal("location");
  navigateTo(`/city/${city.value}/cars`);
  //we empty input
  city.value = "";

  //if we give min and max price this if will be ran
  if(priceRange.value.max && priceRange.value.min){
    // if min price entered is bigger than max price entered we return
    if(priceRange.value.min > priceRange.value.max) return;
  }

  //we push the query onto the router
  router.push({
    query: {
      minPrice: priceRange.value.min,
      maxPrice: priceRange.value.max
    }
  })

};

//we push the path /city/input value/car
const onChangeMake = (make) => {

  navigateTo(`/city/${route.params.city}/cars/${make}`);
  //we empty input
  city.value = "";
};
const listOfCarMakes = useCarMakes();

const priceRange = ref({
  min: "",
  max: ""
})







// Redundant
  // if input is empty we return
  // if (!city.value) return;
  // //we check if the input is a number
  // if (!isNaN(parseInt(city.value))) {
  //   //throws error message if input is a number
  //   throw createError({
  //     statusCode: 400,
  //     message: "Invalid city format",
  //   });
  // }

// //filters
// const modal = ref({
//   make: false,
//   location: false,
//   price: false,
// });

// //update filters boolean value
// const updateModal = (key) => {
//   //chnage value of modal. to what its not
//   modal.value[key] = !modal.value[key];
// };
</script>

<style lang="scss" scoped></style>
