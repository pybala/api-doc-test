<template>
    <div class="apiListItem" v-bind:id="apiRandomKey" v-bind:class="apiTypeClass">
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
            <span v-bind:data-key="apiRandomKey" @click="runApi" class="runApi"><i class="fa fa-play"></i> Run</span>
        </div>

        <api-response :response-data="respData"></api-response>
    </div>
</template>

<script>
import ApiParameter from './ApiParameter'
import ApiResponse from './ApiResponse'
import apiService from '../utils/clientUtil'

export default {
  name: 'ApiItem',

  components: {
      'api-parameter': ApiParameter,
      'api-response': ApiResponse
  },

  props: ['item'],

  data () {
      return {
      	  'expandBody': false,
          'apiRandomKey': (new Date().getTime()).toString(36),
          'apiTypeClass': this.item.type + 'ApiItem',
          'respData': {},
          'curlData': {}
      }
  },

  methods: {
      expandApiInfo: function () {
          this.expandBody = !this.expandBody;
      },

      runApi: function () {
      	  let self = this;
          let itemNode = this.$el;
          let formData = new FormData();

      	  let postParams = {};
      	  let hasFile = false;
      	  let ipAttr, ipData;
          let params = itemNode.querySelectorAll('.apiInput');
          let apiMethod = itemNode.querySelector('.apiType').innerText;
          let apiUrl = itemNode.querySelector('.apiUrl').innerText;

          postParams['url'] = apiUrl.trim();
          postParams['method'] = apiMethod.trim().toLowerCase();

          params.forEach( function(param) {
              ipAttr = param.getAttribute('data-param');
              ipData = self.getInputValues(param);
              if ( ipData['hasFile'] === true ) {
                  hasFile = true;
              }
              if ( ipData['value'] !== '' ) {
                  postParams[ipAttr] = ipData['value'];
              }
          });

          for ( let paramKey in postParams ) {
              formData.append(paramKey, postParams[paramKey]);
          }

          apiService.postApiService(formData, hasFile).then( function(respData) {
              console.log( respData );
              let respCont = itemNode.querySelector('.apiResultCont');
              //respData = JSON.parse(respData);
              self.respData = respData;
              //respCont.style.display = 'block';
          }).catch(function(err) {});
      },

      getInputValues: function (formInput) {
      	  let tagName = formInput.tagName.toLowerCase();
      	  let elemDet = {
      	  	  'value': '',
              'hasFile': false
          };

      	  if ( tagName === 'input' ) {
      	  	  if ( formInput.type === 'file' && formInput.files.length !== 0) {
                  elemDet['value'] = formInput.files[0];
                  elemDet['hasFile'] = true;
              } else {
                  elemDet['value'] = formInput.value;
              }
          } else {
              elemDet['value'] = formInput.value;
          }

          return elemDet;
      },
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
