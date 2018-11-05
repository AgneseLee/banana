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
body {
  background: #ffbd1e;
}
ul,
li {
  list-style: none;
  padding: 0;
  margin: 0;
}
/*下拉框样式*/
#select {
  margin: 100px;
  background: rgba(0, 0, 0, 0);
  width: 249px;
  height: 40px;
  font-family: "微软雅黑";
  font-size: 18px;
  color: white;
  border: 1px #1a1a1a solid;
  border-radius: 5px;
}
.select-head {
  overflow: hidden;
  width: 249px;
  height: 40px;
  box-sizing: border-box;
  padding: 0 10px;
  line-height: 40px;
}
.select-head .select-head-cont {
  float: left;
}
.select-head .select-icon {
  float: right;
}
.option {
  text-indent: 10px;
  margin-top: 1px;
  width: 249px;
  color: black;
  background: rgba(236, 111, 111, 0.1);
  line-height: 25px;
  border: 1px #cfcfcf solid;
  display: none;
}
.option-item:hover {
  background: rgba(204, 106, 67, 0.3);
}
</style>

