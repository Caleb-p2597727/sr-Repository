


<template>
  <div>
    <div class="mt-24">
      <h1 class="text-6xl">Create a New Listing</h1>
    </div>
    <div class="shadow rounded p-3 mt-5 flex flex-wrap justify-between">
        <!-- make selector -->
      <CarAdSelect
        title="Make *"
        :options="makes"
        name="make"
        @change-input="onChangeInput"
      />
      <!-- rest of the inputs -->
      <CarAdInput
        v-for="input in inputs"
        :key="input.id"
        :title="input.title"
        :name="input.name"
        :placeholder="input.placeholder"
        @change-input="onChangeInput"
      />
        <!-- listing description -->
      <CarAdTextarea
        title="Description *"
        name="description"
        placeholder=""
        @change-input="onChangeInput"
      />
        <!-- listing image upload -->
      <CarAdImage />
      <div>
        <button :disabled="isButtonDisabled" 
        @click="handleSubmit"
        class="bg-sky-300 text-white rounded py-2 px-7 mt-3">Submit</button>
        
      </div>
      <p v-if="errorMessage" class="mt-3 text-red-400"> {{ errorMessage }}</p>

    </div>
  </div>
</template>


<script setup>
definePageMeta({
  layout: "sr-browse",
  //authorisation
  middleware: ["auth"]
});

const { makes } = useCars();
const user =useSupabaseUser()
const supabase = useSupabaseClient()

const info = useState("adInfo", () => {
  return {
    make: "",
    model: "",
    year: "",
    miles: "",
    price: "",
    city: "",
    seats: "",
    features: "",
    description: "",
    image: null,
  };
});
const errorMessage = ref("")

const onChangeInput = (data, name) => {
  info.value[name] = `${data}`;
  console.log(data)
};

const inputs = [
  {
    id: 1,
    title: "Model *",
    name: "model",
    placeholder: "Civic",
  },
  {
    id: 2,
    title: "Year *",
    name: "year",
    placeholder: "2019",
  },
  {
    id: 3,
    title: "Price *",
    name: "price",
    placeholder: "100",
  },
  {
    id: 4,
    title: "Miles *",
    name: "miles",
    placeholder: "10000",
  },
  {
    id: 5,
    title: "City *",
    name: "city",
    placeholder: "Austin",
  },
  {
    id: 6,
    title: "Number of Seats *",
    name: "seats",
    placeholder: "5",
  },
  {
    id: 7,
    title: "Features *",
    name: "features",
    placeholder: "Leather Interior, No Accidents",
  },
];

// const isButtonDisabled = computed(() => {
//   for( let key in info.value){
//     if(!info.value[key]) return true
//   };
//   return false
// })

const handleSubmit = async () => {
  //randomise image file name to reduce chances of getting image file number as someone else
  const fileName = Math.floor(Math.random() * 100000000)

  // convert the image data to a Blob object
  const imageData = new Blob([info.value.image], );

  const {data, error} = await supabase.storage.from("images").upload("public/" +fileName, imageData, {
     contentType: imageData.type 
  })
  console.log("data:", data.path);
  console.log("error:", error); 
  console.log(data.path);

  if(error){
    return errorMessage.value = "Cannot upload image"; 

  }
  // destructure body
  const body = {
    ...info.value,
    city: info.value.city.toLowerCase(),
    features: info.value.features.split(", "),
    numberOfSeats: parseInt(info.value.seats),
    miles: parseInt(info.value.miles),
    price: parseInt(info.value.price),
    year: parseInt(info.value.year),
    name: `${info.value.make} ${info.value.model}`,
    listerId: user.value.id,
    //url path for my image
    image: data.path,
  };

  // we dont need
  delete body.seats;

  try {
    const response = await $fetch("/api/car/listings", {
      method: "post",
      body,
    })
    navigateTo('/profile/listings')
  } catch (err){
    errorMessage.value = err.statusMessage; 
    await supabase.storage.from("images").remove(data.path)
  }
}
</script>