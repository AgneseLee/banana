<template>
    <div>
        <h1>Hello World!!!!</h1>
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
    </div>
</template>

<script>
import renderTag from "./vuedemo/renderTag";
import jsxSample from "./components/jsxSample";

export default {
  name: "App",
  data() {
    return {
      tags: ["vue2", "vue3"]
    };
  },
  components: {
    jsxSample
  },
  mounted() {
    jsxSample.methods.doco();
    console.log(jsxSample)
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
