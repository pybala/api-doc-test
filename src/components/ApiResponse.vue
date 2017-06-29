<template>
  <div class="apiResultCont clearfix">
      <div class="large-12 medium-12 small-12 columns">
          <div class="apiResponseCont">
              <h6>RESPONSE</h6>
              <p class="respStatus">Status: <span>{{ status }}</span></p>
              <div class="apiResponseBody" >
                  <pre>
                      {{ prettyResp }}
                  </pre>
              </div>
              <span class="respDetails"></span>
          </div>
      </div>
      <!--div class="large-5 medium-6 small-12 columns">
          <div class="apiCurlCont">
              <h6>CURL</h6>
              <div class="apiCurlBody">
              </div>
          </div>
      </div-->
  </div>
</template>

<script>
export default {
  name: 'ApiResponse',

  props: ['responseData'],

  data () {
      return {
          'prettyResp': JSON.stringify( this.responseData, undefined, 5 ),
          'status': this.responseData.status
      }
  },

  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .apiResultCont {
    display: none;
    margin: 30px 0;
  }
  .apiResponseCont, .apiCurlCont {
    background: #191e10;
    border-radius: 3px;
    border-left: 4px solid #77b300;
    text-align: left;
    padding: 10px 10px 10px 12px;
    color: #FFF;
  }
  .apiResponseCont {
    position: relative;
  }
  .apiCurlCont {
    background: #222;
  }
  .apiResponseBody {
    margin-top: 20px;
    font-size: 14px;
  }
  .respStatus {
    position: absolute;
    right: 20px;
    top: 10px;
    font-weight: bold;
    color: #995200;
  }
  .respStatus span {
    color: #2a9fd6;
  }
  .respDetails {
    display: none;
  }
</style>
