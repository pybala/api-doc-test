<template>
    <div class="apiListItem" v-bind:class="apiTypeClass">
        <div class="apiItemHead">
            <span class="apiInfoExpand" @click="expandApiInfo"><i class="fa fa-plus-circle" v-bind:class="{ 'fa-minus-circle': expandBody }"></i></span>
            <span class="apiType">{{ item.type }}</span>
            <span class="apiUrl">{{ item.url }}</span>
            <span class="apiTitle">{{ item.title }}</span>
        </div>
        <div class="apiItemBody" v-show="expandBody">
            <div class="apiDescCont">
                <h3>Description</h3>
                <p>{{ item.summary }}</p>
            </div>

            <div class="apiParamsCont clearfix">
                <h3>Parameters</h3>

                <api-parameter v-for="(apiParam, index) in item.params" :apiParam="apiParam" :key="index"></api-parameter>
            </div>
            <span class="runApi"><i class="fa fa-play"></i> Run</span>
        </div>
    </div>
</template>

<script>
import ApiParameter from './ApiParameter'

export default {
  name: 'ApiItem',

  components: {
      'api-parameter': ApiParameter
  },

  props: ['item'],

  data () {
      return {
      	  'expandBody': false,
          'apiTypeClass': this.item.type + 'ApiItem'
      }
  },

  methods: {
      expandApiInfo: function () {
          this.expandBody = !this.expandBody;
      },

      runApi: function () {
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .apiListItem {
    margin-bottom: 20px;
    border-radius: 6px;
  }
  .apiItemHead {
    padding: 8px;
    border-radius: 4px;
    text-align: left;
  }
  .apiItemHead .fa {
    color: #FFF;
    font-size: 25px;
    vertical-align: top;
    margin: 3px 0 0 5px;
  }
  .apiItemHead .apiType {
    display: inline-block;
    padding: 6px 12px;
    background-color: #77b300;
    color: #fff;
    border-radius: 3px;
    margin: 0 10px 0 10px;
    text-transform: uppercase;
  }
  .apiItemHead .apiUrl {
    display: inline-block;
    padding: 3px 10px;
    background-color: #2b2b2b;
    color: #fff;
    border-radius: 3px;
    border: 1px solid #282828;
    font-size: 15px;
  }
  .apiInfoExpand {
    cursor: pointer;
  }
  .apiItemBody {
    position: relative;
    padding: 20px;
    text-align: left;
  }
  .apiDescCont {
    margin-bottom: 20px;
  }
  .apiDescCont h3 {
    margin-bottom: 5px;
  }
  .apiParamsCont h3 {
    margin-bottom: 10px;
  }
  .apiTitle {
    display: inline-block;
    font-size: 15px;
    color: #FFF;
    float: right;
    vertical-align: top;
    margin-top: 5px
  }
  .runApi {
    display: block;
    position: absolute;
    top: 20px;
    right: 20px;
    padding: 9px 15px 10px;
    background: #282828;
    border: 1px solid #1b1b1b;
    color: #FFF;
    border-radius: 5px;
    cursor: pointer;
  }
  .runApi .fa {
    font-size: 14px;
    margin-right: 3px;
  }

  .postApiItem {
    border: 1px solid #15B946;
  }
  .postApiItem .apiItemHead {
    background-color: #15B946;
  }
  .postApiItem .apiType {
    background-color: #334d00;
  }

  .getApiItem {
    border: 1px solid #1D7CA7;
  }
  .getApiItem .apiItemHead {
    background-color: #1D7CA7;
  }
  .getApiItem .apiType {
    background-color: #0e3042;
  }
</style>
