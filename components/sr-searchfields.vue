<script setup>
const city = ref("");
const router = useRouter();

const handleSearch = ( ) => {
    router.push(`/city/${city.value}/car`)
}
</script>
<template>
    <div>
        <div class="text-white space-x-2 ">
            <h2 class="mb-4 text-4xl font-semibold">Fast and easy way to <u>share</u> and <u>rent</u> a car</h2>
            <h4 class="mb-6 text-xl font-semibold">Subheading</h4>
            <input type="text" placeholder="Location" v-model="city"
                class="rounded border-2 border-neutral-50 
                        px-3 pt-[10px] pb-[8px] text-sm font-medium uppercase 
                        leading-normal text-neutral-50 bg-transparent 
                        hover:text-neutral-500 focus:border-neutral-100 
                        focus:text-neutral-100 focus:outline-none focus:ring-0 
                        active:border-neutral-200 active:text-neutral-200 
                        dark:hover:bg-neutral-100 dark:hover:bg-opacity-10">
            <input type="date"
                class="rounded border-2 border-neutral-50 px-1 pt-[10px] pb-[8px] 
                text-sm font-medium uppercase leading-normal text-neutral-50 bg-transparent 
                hover:text-neutral-500 focus:border-neutral-100 focus:text-neutral-100 
                focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 
                dark:hover:bg-neutral-100 dark:hover:bg-opacity-10">
            <input type="date"
                class="rounded border-2 border-neutral-50 px-1 pt-[10px] pb-[8px] text-sm font-medium uppercase leading-normal text-neutral-50 bg-transparent hover:text-neutral-500 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10">

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