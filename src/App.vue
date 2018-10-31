<template>
    <div>
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
                <input
                    v-bind="inputAttrs"
                    v-on="inputEvent"
                    class="tags-input-text"
                    placeholder="Add tag..."
                >
            </div>
        </render-tag>
        <jsx-sample></jsx-sample>
        <component-a></component-a>
        <base-hello></base-hello>
        <base-input v-model="username" class="username-input" placeholder="Enter your username" lgclass="smile" key="fososo"></base-input>
        <render-cp></render-cp>
        <ag-select :options="opList"></ag-select>

    </div>
</template>

<script>
import renderTag from "./vuedemo/renderTag";
import jsxSample from "./components/jsxSample";
import componentA from "./components/componentA";
import renderCp from "./components/renderCp.js";
import agSelect from "./components/agSelect";
        
import baseInput from "./components/baseInput"; //v-bind="$attrs"的用法
import { mixinTest1 } from "./lib/mixins";
import { sixValid } from "./lib/rules";



export default {
  name: "App",
  //   mixins: [mixinTest1],
  data() {
    return {
      tags: ["vue2", "vue3"],
      name: "name",
      username:'',
      opList:[
        {name:'vue2'},
        {name: 'vue3'}
      ]
    };
  },
  created() {
    console.log("APP!!");
  },
  components: {
    jsxSample,
    componentA,
    // renderCp
    agSelect
  },
  mounted() {},
  watch:{
    username(newVal){
      sixValid.name = newVal;
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
