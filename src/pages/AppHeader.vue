<template>
    <div class="row">
        <router-link :to="{ name: 'home'}"><span class="apiHome"><i class="fa fa-home"></i></span></router-link>
        <h1>{{ appTitle }}</h1>
    </div>
</template>

<script>
export default {
  name: 'AppHeader',

  data () {
      return {
          appTitle: 'API Testing',
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .apiHome {
    display: inline-block;
    font-size: 36px;
    color: #116ca8;
    cursor: pointer;
  }
  .apiHome:hover {
    color: #2199e8;
  }
  h1 {
    display: inline-block;
    margin: 0 0 35px 20px;
    color: #881f0e;
    font-size: 35px;
  }
</style>
