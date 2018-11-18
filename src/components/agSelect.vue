<template>
  <div ref="select" class="g-dropdown" :class="{'show':option}" v-clickoutside>
    <span :class="{'dropdown-text':true ,'six-select-disabled':isDisabled}" @click="toggle">{{activeName}}</span>
    <div class="dropdown-menu">
      <ul class="dropdown-list" :style="{'max-height':height+'px'}">
        <li class="dropdown-item" v-for="(item,index) in list" :key="'select-'+index" :value="item.value" @click.stop="choose(item)">{{item.name}}
          <i v-if="canDel" @click.stop="delItem(item)" class="icon-delete"></i>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    directives: {
      clickoutside: {
        bind(el, binding) {
          console.log('hsfofofo')
          el.outsider = function (e) {
            console.log('********')
            if (e.target !== el && !el.contains(e.target)) {
              console.log('hahah')
              this.option = false;
            }
          }
          el.addEventListener('click', el.outsider)
        },
        unbind(el) {
          el.removeEventListener('click', el.outsider)
        }
      }
    },
    props: {
      selectWidth: {
        type: Number,
        default: 100
      },
      list: {
        type: Array,
        default: function () {
          return [];
        }
      },
      height: {
        type: String,
        default: '172'
      },
      selectContent: {
        type: Object,
        default: function () {
          return {
            id: 0,
            value: 0,
            name: '请选择'
          };
        }
      },
      defaultCont: {
        type: String,
        default: ''
      },
      isDisabled: {
        type: Boolean,
        default: false
      },
      canDel: {
        type: Boolean,
        default: false
      },
      canUpdateList: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        select: this.selectContent,
        option: false
      };
    },
    computed: {
      activeName() {
        return this.select.name || this.selectContent.name || this.defaultCont;
      }
    },
    watch: {
      // 外部对list进行增减时，组件内的变化
      list(newVal, oldVal) {
        if (!this.canUpdateList) return;
        if (newVal[0]) {
          if (newVal.length < oldVal.length) {
            // 删除时默认显示列表第一个
            this.changeActiveOne(newVal[0]);
          } else {
            this.changeActiveOne(newVal[newVal.length - 1]);
          }
          return;
        } else {
          // 清空列表时
          this.changeActiveOne({
            id: 0,
            value: 0,
            name: this.defaultCont
          });
        }
      }
    },
    // created() {
    //   document.addEventListener('click', e => {
    //     if (this.$refs.select && !this.$refs.select.contains(e.target)) {
    //       this.option = false;
    //     }
    //   });
    // },
    methods: {
      choose(item) {
        this.select = item;
        this.$emit('changeSelect', this.select);
        this.option = false;
      },
      toggle() {
        if (this.isDisabled) return;
        this.option = !this.option;
      },
      delItem(item) {
        this.$emit('delFunc', item);
      },
      changeActiveOne(channel) {
        this.select = {
          id: channel.id,
          value: 0,
          name: channel.name
        };
      },
      status() {
        const actions = () => {
          const functionA = () => { /*do sth*/ }
          const functionB = () => { /*do sth*/ }
          const functionC = () => { /*send log*/ }
          return new Map([
            [/^guest_[1-4]$/, functionA],
            [/^guest_5$/, functionB],
            [/^guest_.*$/, functionC],
            //...
          ])
        }

        const onButtonClick = (identity, status) => {
          let action = [...actions()].filter(([key, value]) => (key.test(`${identity}_${status}`)))
          action.forEach(([key, value]) => value.call(this))
        }
      }
    }
  };
</script>
<style>
  .six-select-disabled {
    color: grey !important;
  }

  .g-dropdown .six-select-disabled:hover {
    border-color: grey;
    border-top-color: grey;
    border-right-color: grey;
    border-bottom-color: grey;
    border-left-color: grey;
  }
</style>