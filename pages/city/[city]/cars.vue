

<template>
    <div>
        <div class="mt-20 flex">
            <!--this sidebar will now be static even when we access different paths within car-->
            <Sr-sidebar></Sr-sidebar>
            <!--any other path inside of car folder will be rendered by <NuxtPage>-->
            <sr-cars v-if="cars.length" :cars="cars" />
            <h1 v-else class="text-red-600">No Cars Found in {{city}}</h1>
        </div>
    </div>
</template>

<script setup>
import { useCars } from "@/composables/useCars";
//override default layout
definePageMeta({
    layout: "sr-browse"
})

//gets the whole route and puts it into variable route
const route = useRoute()

//splits router up to form array with help of / and takes index 2 and puts it into city
let city = route.path.split("/")[2]

//changes head to cars in (adds dynamic [] name)
useHead({
    title: `${route.params.make || ""} Cars in ${toTitleCase(city)}`,
});

//fuction returns title case
function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

//applies query parameters and filters
const {data: cars, refresh} = await useFetchCars(route.params.city, {
  minPrice: route.query.minPrice,
  maxPrice: route.query.maxPrice,
  make: route.params.make
})

//refreshes the page when query is updated
watch(
  () => route.query, 
  () => {
    window.location.reload(true);
  });

</script>



<style lang="scss" scoped></style>