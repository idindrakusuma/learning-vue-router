<template>
    <div>
      <h1>The User Page</h1>
      <p>
        You are on the User Page!
      </p>
      <button class="btn btn-default btn-success" @click="navigateToHome">Going to Home</button>
      <hr>
      <!-- showing the child router view -->
      <router-view></router-view>
      <!-- this route from code / using method -->
    </div>
</template>

<script>
  export default{
    data() {
      return {
        id: this.$route.params.id,
      }
    },
    watch: {
      '$route'(to, params){
        this.id = to.params.id;
      }
    },
    methods: {
      navigateToHome(){
        this.$router.push('/');
      }
    }
  }
</script>
