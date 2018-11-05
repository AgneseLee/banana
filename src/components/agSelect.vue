<template>
  <div class="select">
    <div class="inner" v-clickOut="hideList">
      <div class="inputWrapper">
        <input type="text" readonly placeholder="请选择菜品" :value="selected">
        <span class="iconfont"></span>
      </div>
      <ul class="options" v-show="showOptions">
        <li v-for="(item, index) in options" :key="index" @click="choose(item.name)">{{item.name}}</li>
      </ul>
    </div>
  </div>

</template>


<script>
export default {
  props: ["options"],
  methods: {
    choose(name) {
      console.log(name);
    },
    hideList() {
      console.log("outside");
      this.showOptions = !this.showOptions;
    }
  },
  data() {
    return {
      selected: this.options[0].name,
      showOptions: false
    };
  },
  directives: {
    clickOut: {
      bind: function(el, binding) {
        function handler(e) {
          if (el.contains(el.target)) return false;
          if (binding.expression) {
            binding.value();
          }
        }
        el.handler = handler;
        document.addEventListener("click", el.handler);
      },
      unbind: function(el) {
        document.removeEventListener("click", el.handler);
      }
    }
  }
};
</script>

<style>

</style>

