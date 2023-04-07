

<template>
  <div class="col-md-5 offset-md-1 mt-2 w-[100%]">
    <label for="" class="text-sky-400 mb-1 text-sm">Image*</label>
    <form class="mt-2">
      <div class="form-group">
        <div class="relative">
            <!-- only accepts image file -->
          <input
            type="file"
            accept="image/*"
            class="mx-32 opacity-20 absolute cursor-pointer"
            @change="onImageUpload"
          />
          <span class="cursor-pointer">Browser File</span>
        </div>
        <!-- if we haev a image.preview we show the image -->
        <div class="border p-2 mt-3 w-56" v-if="image.preview">
          <img :src="image.preview" class="img-fluid" />
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>

const image = useState("carImage", () => {
  return {
    preview: null,
    image: null,
  };
});

const emits = defineEmits(["changeInput"]);

//
const onImageUpload = (event) => {
    //get input element
  const input = event.target;
  //check if input element has file within it
  if (input.files) {
    //read files if it does
    const reader = new FileReader();
    //preview - read and take value and pass it in
    reader.onload = (e) => {
      image.value.preview = e.target.result;
    };
    
    image.value.image = input.files[0];
    //we can read the url
    reader.readAsDataURL(input.files[0]);
    emits("changeInput", input.files[0], "image");
  }
};
</script>