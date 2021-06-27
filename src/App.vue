<template>
  <div id="app">
    <Navbar />
    <main class="mt-5">
      <router-view/>
    </main>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import Navbar from './components/Navbar'

export default {
  components: {
    Navbar
  }
}
</script>

