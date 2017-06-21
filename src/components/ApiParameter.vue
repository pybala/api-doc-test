<template>
  <div class="apiParamItem clearfix">
      <div class="large-2 medium-2 small-4 columns">
          <span class="apiParamKey">{{ apiParam.name }}</span>
      </div>
      <div class="large-6 medium-6 small-8 columns">
          <div class="apiParamInput">
              <input type="text" id="" value=""/>
          </div>
      </div>
      <div class="large-4 medium-4 small-12 columns">
          <p>{{ apiParam.description }}</p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ApiParameter',

  props: ['apiParam'],

  data () {
      return {
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .apiParamItem {
    padding: 20px 0 5px;
    border-bottom: 1px solid #DDD;
  }
</style>
