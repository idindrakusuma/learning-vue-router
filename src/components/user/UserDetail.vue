<template>
    <div>
      <h3>Some User Details</h3>
      <!-- because this component is child of user, watch and method no required to showing id user -->
      <p>Hello User {{ $route.params.id }}</p>
      <router-link
        tag="button"
        class="btn btn-warning"
        :to="link">Edit User</router-link>
      <hr>
    </div>
</template>

<script>
  export default {
    data() {
      return{
         link: {
           name: 'userEdit',
           params: {
             id: this.$route.params.id
           },
           query: {
             locale: 'en',
             num: 100,
           },
           hash: '#data'
         }
      }
    },
    beforeRouteEnter(to, from, next) {
      if (true){
        next();
      } else {
        // you don't have an access
        next(false);
      }
    }
  }
</script>
