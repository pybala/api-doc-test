<template>
    <div class="apiListItem postApiItem">
        <div class="apiItemHead">
            <span><i class="fa fa-plus-circle"></i></span>
            <span class="apiType">{{ item.type }}</span>
            <span class="apiUrl">{{ item.url }}</span>
        </div>
        <div class="apiItemBody">
            <div class="apiDescCont">
                <h3>Description</h3>
                <p>Retrieves the list of webinars for an account within a given date range. Page and size parameters are optional. Default page is 0 and default size is 20.
                  For technical reasons, this call cannot be executed from this documentation. Please use the curl command to execute it.</p>
            </div>

            <div class="apiParamsCont clearfix">
                <h3>Parameters</h3>

                <api-parameter v-for="(apiParam, index) in item.params" :apiParam="apiParam" :key="index"></api-parameter>

            </div>
        </div>
    </div>
</template>

<script>
import ApiParameter from './ApiParameter'

export default {
  name: 'ApiItem',

  components: {
    ApiParameter,
    'api-parameter': ApiParameter
  },

  props: ['item'],

  data () {
      return {
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .apiListItem {
    margin-bottom: 30px;
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
  .apiItemBody {
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

  .postApiItem {
    border: 1px solid #15B946;
  }
  .postApiItem .apiItemHead {
    background-color: #15B946;
  }
  .postApiItem .apiType {
    background-color: #334d00;
  }

</style>
