// if not loogged in you cant acces and you are redirected to /logger
export default defineNuxtRouteMiddleware((to, from) => {
    const user = useSupabaseUser()
    if(user.value) {
      return
    }
    return navigateTo("/logger")
  
});