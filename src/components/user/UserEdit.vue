<template>
   <div>
     <h3>Edit the User</h3>
     <!-- showing the query data -->
     <p>
       locale: {{ $route.query.locale }} <br>
       Number: {{ $route.query.num }}
     </p>
     <router-link
       tag="button"
       class="btn btn-danger"
       @click="confirmed = true"
       to="/">Confirm?</router-link>
     <!--<div style="height: 800px; background-color: aqua">-->

     <!--</div>-->
     <br>
     <b id="data">Hello i'm here!</b>
   </div>
</template>

<script>
  export default {
    data(){
      return {
        confirmed: false,
      }
    },
    beforeRouteLeave(to, from, next){
      if(this.confirmed){
        next();
      }
      else{
        if (confirm('Are you sure?')){
          next();
        }
        else{
          next(false);
        }
      }
    }

  }
</script>
