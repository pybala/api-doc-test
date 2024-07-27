<template>
    <div class="apiGroupCont">
        <app-header></app-header>
        <div class="row">
            <div v-for="grpInfo in apiGroups" class="apiGroup">
                 <span class="apiGrpIndex">{{ (grpInfo.index + 1) }}</span>
                 <h2><router-link :to="{ name: 'api-list', params: { id: grpInfo.index+1 }}">{{ grpInfo.title }}</router-link></h2>
            </div>
        </div>
    </div>
</template>

<script>
import AppHeader from '../pages/AppHeader'
import ApiItem from './ApiItem'
import apiData from '../mock/apis.json';

export default {
  name: 'ApiGroups',

  components: {
      'app-header': AppHeader,
  },

  data () {
      return {
          appTitle: 'API Testing',
          apiGroups: []
      }
  },

  created: function () {
      this.loadApiData()
  },

  methods: {
      loadApiData: function () {
          let self = this;

          if ( apiData.length >= 1 ) {
              apiData.forEach( function(api, i) {
                  self.apiGroups[i] = {
                  	  "title": api.title,
                  	  "index": i
                  };
              });
          }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .apiGroupCont {
    text-align: left;
  }
  .apiGroup {
    text-align: left;
    margin-bottom: 8px;
  }
  .apiGrpIndex {
    display: inline-block;
    font-size: 28px;
    margin-right: 10px;
    color: #ffae00;
  }
  .apiGroup h2 {
    display: inline-block;
    color: #2199e8;
    cursor: pointer;
  }
  .apiGroup h2:hover {
    color: #1d7ca7;
  }
</style>
