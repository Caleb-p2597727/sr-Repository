// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        "@nuxtjs/tailwindcss",
        "@nuxtjs/supabase",
        '@nuxt/image-edge',
        "@vueuse/nuxt", 
    ]
    
    // supabase: {
    //     url: 'https://ntfctrcbyqfkinnqjqql.supabase.co',
    //     key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im50ZmN0cmNieXFma2lubnFqcXFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA5MDA0MjAsImV4cCI6MTk5NjQ3NjQyMH0.XaooMXCDvTzpej2QxKxBJq5v6eOfqfURcV_cTvIpMMU',
    //   }
})
