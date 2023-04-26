<template>
    <div class="mt-10">
        <div class="flex w-[600px] justify-between">
            <input v-model="message.name" type="text" class="border p-1" placeholder="Name" />
            <input v-model="message.email" type="text" class="border p-1" placeholder="Email" />
            <input v-model="message.phone" type="text" class="border p-1" placeholder="Phone" />
        </div>
        <div class="flex mt-4 w-[600px]">
            <textarea v-model="message.message" class="border p-1 w-full" placeholder="Message"></textarea>
        </div>
        <button class="bg-indigo-700 text-white px-10 py-3 rounded mt-4" @click="onSubmit" :disabled="disabledButton">
            Submit
        </button>
        <p v-if="errorMessage" class="mt-3 text-red-400"> {{ errorMessage }}</p>
        <p v-if="successMessage" class="mt-3 green-red-400"> {{ successMessage }}</p>
    </div>
</template>

<script setup>
// Import the `useRoute` method to access the current route object
const route = useRoute();

// Define a reactive `message` object containing user data
const message = ref({
    name: "",
    email: "",
    phone: "",
    message: ""
});
//error message
const errorMessage = ref("")
const successMessage = ref("")

//computed property to check if any fields in `message` are empty
//validation client side
const disabledButton = computed(() => {
    for(let key in message.value){
        if(!message.value[key]) return true;
    }
    return false;
});

const onSubmit = async() => {
    try {
        // Send a POST request to the server with the user data
    const response = await $fetch(`/api/car/listings/${route.params.id}/message`, {
      method: "post",
      body: message.value,
    });

    // Clear the `message` object and display a success message
    message.value = {
        name: "",
        email: "",
        phone: "",
        message: ""
        
    };
    successMessage.value = "Message sent!"
    errorMessage.value = err.statusMessage;
    successMessage.value = ""
    //sucess message needed
  } catch (err){
    // Display an error message if the server returns an error
    errorMessage.value = err.statusMessage; 
  }
}

</script>

<style lang="scss" scoped></style>