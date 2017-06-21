<template>
  <div class="apiListCont">

    <div class="row">
        <h1>{{ appTitle }}</h1>

        <div class="apiListItem postApiItem">
            <api-item v-if="apiItems" v-for="(item, index) in apiItems" :item="item" :key="index"></api-item>
        </div>
    </div>

  </div>
</template>

<script>
import ApiItem from './ApiItem'
import apiData from '../mock/apis.json';

export default {
  components: {
    'api-item': ApiItem
  },

  data () {
      return {
          appTitle: 'API Documentation',
          apiItems: []
      }
  },

  created: function () {
  	 console.log( apiData.length );
      this.loadApiData()
  },

  methods: {
    loadApiData: function () {
          let self = this;

          if ( apiData.length >= 1 ) {
              apiData.forEach( function(api) {
                  console.log( api.title );
              });
          }

          self.apiItems = [
            {
              "url": "https://readyadminqa.ice.citrix.com/bin/ready/upload",
              "title": "Profile Logo upload",
              "summary": "",
              "type": "post",
              "params": [
                {
                  "name": "path",
                  "type": "text",
                  "default": "",
                  "description": "",
                  "note": ""
                },
                {
                  "name": "operation",
                  "type": "text",
                  "default": "logo",
                  "description": "",
                  "note": ""
                },
                {
                  "name": "file",
                  "type": "file",
                  "default": "",
                  "description": "",
                  "note": ""
                }
              ]
            }
          ];
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .apiListCont h1 {
    margin-bottom: 20px;
  }
</style>
