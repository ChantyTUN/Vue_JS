<template>
  <h1>Header</h1>
  <dir>
    <router-link to="/">Home</router-link>
    <br />
    <router-link to="/about">About</router-link>
    <!-- view router  -->
    <br />
    <router-link :to="{ name: 'Home' }">Home</router-link>
    <br />
    <router-link :to="{ name: 'About' }">About </router-link>
    <br />
  </dir>
</template>
