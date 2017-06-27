<template>
  <div class="apiListCont">

    <div class="row">
        <h1>{{ appTitle }}</h1>

        <div v-for="apiInfo in apiItems" class="apiGroupCont">
             <h2>{{ apiInfo.group }}</h2>
             <api-item v-if="apiInfo.data" v-for="(item, index) in apiInfo.data" :item="item" :key="index"></api-item>
        </div>
    </div>

  </div>
</template>

<script>
import ApiItem from './ApiItem'
import apiData from '../mock/apis.json';

export default {
  name: 'ApiList',

  components: {
    'api-item': ApiItem
  },

  data () {
      return {
          appTitle: 'API Testing',
          apiItems: []
      }
  },

  created: function () {
      this.loadApiData()
  },

  methods: {
      loadApiData: function () {
          let self = this;
          let dataJson;

          if ( apiData.length >= 1 ) {
              apiData.forEach( function(api, i) {
                  self.apiItems[i] = {
                  	  "group": api.title,
                      "data": []
                  };

                  if ( api.files.length !== 0 ) {
                      api.files.forEach( function(apiFile) {
                          dataJson = require( '../mock/' + apiFile + '.json');
                          self.apiItems[i]['data'].push( dataJson );
                      });
                  }
              });
          }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .apiListCont h1 {
    margin-bottom: 20px;
  }
  .apiGroupCont {
    position: relative;
    margin-bottom: 40px;
  }
  .apiGroupCont h2 {
    position: absolute;
    left: -175px;
    font-size: 16px;
    font-weight: bold;
  }
</style>
