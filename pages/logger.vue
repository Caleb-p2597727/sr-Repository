<template>
    <div class="mt-10">
        {{ user }}
        <h1 class="text-5xl font-bold mb-7">
            Log in to continue
        </h1>
        <button @click="login" class="button bg-red-400 p-3 rounded text-white font-bold">
            Log in with Google
        </button>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "sr-browse"
})

useHead({
  title: "Access Denied",
});

const supabase = useSupabaseAuthClient()
const user = useSupabaseUser()

const login = async () => {
    console.log("clicked");
    
    const {error} = supabase.auth.signInWithOAuth({
        provider: "google"
    })

    if (error) {
        console.log(error);
    }
}

</script>

<style lang="scss" scoped>

</style>