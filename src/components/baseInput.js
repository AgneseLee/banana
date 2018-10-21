import Vue from 'vue';

// 可以手动决定这些特性会被赋予哪个元素:此处$attrs被赋予input标签而不是label！！！
Vue.component('base-input', {
    inheritAttrs: false,
    props: ['label', 'value'],
    template: `
    <label>
      {{ label }}
      <input
        v-bind="$attrs"
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
      >
    </label>
  `,
  created(){
      console.log(this.$attrs)
  }
})