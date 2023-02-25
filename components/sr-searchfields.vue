<script setup>
//Combined to v-model on input and we store value of input
const city = ref("");
const cityError  = ref(false)

//will direct us to the router within ()
//const router = useRouter();

//we push the path /city/input value/car
const handleSearch = ( ) => {
    //if its empty we return cityerror as true
    if(!city.value){
        return cityError.value = true
    }
    navigateTo(`/city/${city.value}/car`)
}
</script>
<template>
    <div>
        <!--dynamic class exists, and it's only used if cityError is true-->
        <div class="text-white space-x-2 ">
            <h2 class="mb-4 text-4xl font-semibold">Fast and easy way to <u>share</u> and <u>rent</u> a car</h2>
            <h4 class="mb-6 text-xl font-semibold">Subheading</h4>
            <input type="text" 
                class="rounded border-2 border-neutral-50 
                        px-3 pt-[10px] pb-[8px] text-sm font-medium uppercase 
                        leading-normal text-neutral-50 bg-transparent 
                        hover:text-neutral-500 focus:border-neutral-100 
                        focus:text-neutral-100 focus:outline-none focus:ring-0 
                        active:border-neutral-200 active:text-neutral-200 
                        dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                        :class="cityError ? 'border-red-500 border' : '' "
                        placeholder="Location" v-model="city">
            <input type="date"
                class="rounded border-2 border-neutral-50 px-1 pt-[10px] pb-[8px] 
                text-sm font-medium uppercase leading-normal text-neutral-50 bg-transparent 
                hover:text-neutral-500 focus:border-neutral-100 focus:text-neutral-100 
                focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 
                dark:hover:bg-neutral-100 dark:hover:bg-opacity-10">
            <input type="date"
                class="rounded border-2 border-neutral-50 px-1 pt-[10px] pb-[8px] text-sm 
                font-medium uppercase leading-normal text-neutral-50 bg-transparent hover:text-neutral-500 
                focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 
                active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10">

            <button type="button"
                class="rounded border-2 border-neutral-50 px-1 pt-[10px] pb-[8px] text-sm font-medium 
                uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out 
                hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 
                focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 
                active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                data-te-ripple-init data-te-ripple-color="light" @click="handleSearch">
                Find your drive
            </button>
        </div>
    </div>
</template>



<style lang="scss" scoped></style>