<template>
    <div>
        <!-- Container for demo purpose -->
        <div class="container my-24 px-6 mx-auto">

            <!-- Section: Design Block -->
            <section class="mb-32 text-gray-800">

                <div class="relative overflow-hidden bg-no-repeat bg-cover"
                    style="background-position: 50%; background-image: url('https://mdbootstrap.com/img/new/textures/full/284.jpg'); height: 300px;">
                </div>
                <div class="container text-gray-800 px-4 md:px-12">
                    <div class="block rounded-lg shadow-lg py-10 md:py-12 px-2 md:px-6"
                        style="margin-top: -100px; background: hsla(0, 0%, 100%, 0.8); backdrop-filter: blur(30px);">
                        <div class="flex flex-wrap">
                            <div class="grow-0 shrink-0 basis-auto w-full xl:w-5/12 px-3 lg:px-6 mb-12 xl:mb-0">
                                <h1>Contact Us</h1>
                                <form>
                                    
                                    <div class="form-group mb-6">
                                        <input type="text" class="form-control block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
                                            placeholder="Name">
                                    </div>
                                    <div class="form-group mb-6">
                                        <input type="email" class="form-control block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
                                            placeholder="Email address">
                                    </div>
                                    <div class="form-group mb-6">
                                        <textarea ref="inputRef" class="
                  form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                " id="exampleFormControlTextarea13" rows="3" placeholder="Message"></textarea>
                                    </div>
                                    <div class="form-group form-check text-center mb-6">
                                        <input type="checkbox"
                                            class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                                            id="exampleCheck87" checked>
                                        <label class="form-check-label inline-block text-gray-800" for="exampleCheck87">Send
                                            me a copy of this
                                            message</label>
                                    </div>
                                    <button type="submit" class="
                w-full
                px-6
                py-2.5
                bg-sky-600
                text-white
                font-medium
                text-xs
                leading-tight
                uppercase
                rounded
                shadow-md
                hover:bg-blue-700 hover:shadow-lg
                focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                active:bg-blue-800 active:shadow-lg
                transition
                duration-150
                ease-in-out" @click="handleContact">Send</button>
                                </form>
                            </div>
                            <div class="grow-0 shrink-0 basis-auto w-full xl:w-7/12">
                                <div class="flex flex-wrap">
                                    <div class="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                                        <div class="flex items-start">
                                            <div class="shrink-0">
                                                <div
                                                    class="p-4 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas"
                                                        data-icon="headset" class="w-5 text-white" role="img"
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                        <path fill="currentColor"
                                                            d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z">
                                                        </path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div class="grow ml-6">
                                                <p class="font-bold mb-1">Technical support</p>
                                                <p class="text-gray-500">speedyrentals@gmail.com</p>
                                                <p class="text-gray-500">0116 888333</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Section: Design Block -->
        </div>
        <!-- Container for demo purpose -->

    </div>
</template>

<script setup>
definePageMeta({
    layout: "sr-browse"
})

//changes head to cars in (adds dynamic [] name)
useHead({
    title: "Get in touch",
});

const inputRef = ref(null);

const handleContact = () => {
  alert("Your message has been sent!");
  navigateTo("/");
  if (inputRef.value) {
    inputRef.value.value = ""; // clear input field if it exists
  }
};

</script>

<style lang="scss" scoped></style>