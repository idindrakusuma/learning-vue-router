<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
              <h1>Routing</h1>
              <router-view name="header-top"></router-view>
              <!-- showing the route component -->
              <!--<transition name="slide" mode="slide-in">-->
                <router-view></router-view>
              <!--</transition>-->
              <router-view name="header-bottom"></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header';

    export default {
      components: {
        appHeader: Header
      }
    }
</script>

<style>
  .slide-leave-active {
    transition: opacity 1s ease;
    opacity: 0;
    animation: slide-out 9ms ease-out forwards;
  }

  .slide-leave {
    opacity: 1;
    transform: translateX(0);
  }

  .slide-enter-active {
    animation: slide-in 1s ease-out forwards;
  }

  @keyframes slide-out {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-30px);
    }
  }

  @keyframes slide-in {
    0% {
      transform: translateY(-30px);
    }
    100% {
      transform: translateY(0);
    }
  }
</style>
