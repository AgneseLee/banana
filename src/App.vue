<template>
  <div>
    <router-view></router-view>
    <h1>Hello World!!!!</h1>
    <h1>{{name}}</h1>
    <render-tag v-model="tags">
      <!-- <h3 slot-scope="{exampleProp}">
                 hello {{exampleProp}}
            </h3>-->
      <div slot-scope="{tags, removeTag, inputAttrs, inputEvent}" class="tags-input">
        <span v-for="tag in tags" :key="tag" class="tags-input-tag">
          <span>{{tag}}</span>
          <button type="button" class="tags-input-remove" @click="removeTag(tag)">&times;</button>
        </span>
        <input v-bind="inputAttrs" v-on="inputEvent" class="tags-input-text" placeholder="Add tag...">
      </div>
    </render-tag>
    <jsx-sample></jsx-sample>
    <component-a></component-a>
    <base-hello></base-hello>
    <base-input v-model="username" class="username-input" placeholder="Enter your username" lgclass="smile" key="fososo"></base-input>
    <render-cp></render-cp>
    <ag-select :list="opList"></ag-select>
    <cache-test v-if="showCache" @brod="showCache= false"></cache-test>
    <button @click="showCache=true">恢复cache-test</button>
    <button @click="goToHome">按钮</button>

  </div>
</template>

<script>
  import './css/dialog/dialog.css';
  import renderTag from "./vuedemo/renderTag";
  import cacheTest from "./vuedemo/cacheTest";
  import jsxSample from "./components/jsxSample";
  import componentA from "./components/componentA";
  import renderCp from "./components/renderCp.js";
  import agSelect from "./components/agSelect";

  import baseInput from "./components/baseInput"; //v-bind="$attrs"的用法
  import {
    mixinTest1
  } from "./lib/mixins";
  import {
    sixValid
  } from "./lib/rules";
import {normalizedData } from "./lib/normalizr"


  export default {
    name: "App",
    //   mixins: [mixinTest1],
    data() {
      return {
        tags: ["vue2", "vue3"],
        name: "name",
        username: '',
        opList: [{
            name: 'vue2',
            value: 123
          },
          {
            name: 'vue3',
            value: 456
          }
        ],
        showCache:true
      };
    },
    created() {
      console.log("APP!!");
    },
    components: {
      jsxSample,
      componentA,
      // renderCp
      agSelect,
      cacheTest
    },
    mounted() {
      console.log('**************',this.tags)
      console.log('999999999999999999 ', normalizedData)
    },
    watch: {
      username(newVal) {
        sixValid.name = newVal;
      }
    },
    methods:{
      goToHome(){
        this.$router.push('./home')
      }
    }
  };
</script>

<style>
  html,
  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: 16px;
  }
</style>