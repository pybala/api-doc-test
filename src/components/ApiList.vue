<template>
  <div class="apiListCont">
    <app-header></app-header>
    <div class="row">
        <h2>{{ apiItem.group }}</h2>
        <api-item v-if="apiItem.data" v-for="(item, index) in apiItem.data" :item="item" :key="index"></api-item>
    </div>

  </div>
</template>

<script>
import AppHeader from '../pages/AppHeader'
import ApiItem from './ApiItem'
import apiData from '../mock/apis.json';

export default {
  name: 'ApiList',

  components: {
    'app-header': AppHeader,
    'api-item': ApiItem
  },

  data () {
      return {
          appTitle: 'API Testing',
          apiIndex: this.$route.params.id-1,
          apiItem: {}
      }
  },

  created: function () {
      this.loadApiData()
  },

  methods: {
      loadApiData: function () {
          let self = this;
          let dataJson;

          let item = apiData[this.apiIndex];
          let apiFiles = item.files;

          self.apiItem['group'] = item.title;
          self.apiItem['data'] = [];

          if ( apiFiles.length !== 0 ) {
              apiFiles.forEach( function(apiFile) {
                  dataJson = require( '../mock/' + apiFile + '.json');
                  self.apiItem['data'].push( dataJson );
              });
          }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .apiListCont {
    text-align: left;
  }
  .apiListCont h2 {
    margin-bottom: 20px;
  }
</style>
