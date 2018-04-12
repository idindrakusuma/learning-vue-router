<template>
    <div>
      <h3>Some User Details</h3>
      <!-- because this component is child of user, watch and method no required to showing id user -->
      <p>Hello User {{ $route.params.id }}</p>
      <router-link
        tag="button"
        class="btn btn-primary"
        :to="{ name: 'userEdit', params: { id: $route.params.id }, query: { locale: 'en', num: 100 } }">Edit User</router-link>
    </div>
</template>
