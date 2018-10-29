var OrderedList = {
  template: `<div>OrderedList</div>`
};
var UnorderedList = {
  template: `<div>UnorderedList</div>`
};

import ComponentA from "./componentA";
import Vue from 'vue';

Vue.component("render-cp", {
  functional: true,
  props: {
    hasGuild: Boolean
  },
  render: function(h, context) {
    console.log(context);

    // return h(appropriateListComponent(), context.data, context.children);
    return(UnorderedList)
  }
});

// Vue.component 表示全局引入组件，无需在.vue中的components 中再次引入。