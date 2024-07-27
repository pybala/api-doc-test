<template>
  <div class="apiParamItem clearfix">
      <div class="large-2 medium-2 small-4 columns">
          <span class="apiParamKey">{{ apiParam.name }}</span>
      </div>
      <div class="large-6 medium-6 small-8 columns">
          <div class="apiParamInput" v-html="getInputHtml()">
          </div>
      </div>
      <div class="large-4 medium-4 small-12 columns">
          <p class="apiParamDesc">{{ apiParam.description }}</p>
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
  },

  methods: {
      getInputHtml: function () {
          let ipHtml = '';
          let defaultVal = this.apiParam.default;
          let elemAttrs = 'data-param=' + this.apiParam.name;
          elemAttrs += ' class="apiInput"';

          if ( this.apiParam.type !== 'textarea' ) {
              elemAttrs += ' value=' + this.apiParam.default;
          }

          if ( typeof defaultVal === 'object' ) {
              defaultVal = JSON.stringify(defaultVal);
          }

          switch (this.apiParam.type) {

              case 'text':
                  ipHtml = '<input type="text" '+ elemAttrs +' />';
                  break;

              case 'textarea':
                  ipHtml = '<textarea '+ elemAttrs +'>'+ defaultVal +'</textarea>';
                  break;

              case 'file':
                  ipHtml = '<input type="file" '+ elemAttrs +' />';
                  break;

              default:
          }

          return ipHtml;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  textarea {
    height: 250px;
  }
  .apiParamItem {
    padding: 20px 0 5px;
    border-bottom: 1px solid #DDD;
  }
  .apiParamKey {
    font-weight: bold;
  }
  .apiParamDesc {
    color: #666;
  }
</style>
