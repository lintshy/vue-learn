<script setup>
import {ref} from 'vue'
const titleClass = ref('about')
const count = ref(0)
const text = ref('')
const awesome = ref(true)
function increment(){
  count.value++
  awesome.value = !awesome.value
}
function onInput(e){
  text.value = e.target.value
}
/* export default {
  data() {
    return {
      titleClass: 'about',
      count:0,
      text:''
    }
  },
  methods:{
    increment(){
      this.count++
    },
    onInput(e) {
      this.text = e.target.value
    }
  }
} */
</script>

<template>
  <div :class="titleClass">
    <h1>This is an {{titleClass}} page</h1>
    <input v-model="text" placeholder="Type here">
    <button @click="increment">count is: {{ count }}</button>
    <p>{{ text }}</p>
    <h1 v-if="awesome">Vue is awesome!</h1>
    <h1 v-else>Oh no 😢</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    color: #000;
    display: flex;
    align-items: center;
  }
}
</style>
