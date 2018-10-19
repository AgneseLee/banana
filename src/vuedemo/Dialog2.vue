
<script>
// render函数的基本用法
  export default {
    name: 'dialog-2',
    props: {
      reset: {
        type: Boolean,
        default: false
      },
      width: {
        type: String,
        default: '500'
      },
      height: {
        type: String,
        default: '380'
      },
      title: {
        type: String,
        default: '我是标题'
      },
      content: {
        type: String,
        default: ''
      },
    },
    data() {
      return {
        showMask: this.$attrs.showMask
      }
    },
    methods: {
      closeMask() {
        console.log('clickHandler');
        this.showMask = false;
        // this.$destroy();
      }
    },
    render(h) {
      console.log('~~~~~~~~~~~', this.$attrs, this.$data)
      if (!this.showMask && this.reset) return;
      return h('div', {
        'class': {
          dialog: true,
          'dialog-hidden': !this.reset && !this.showMask
        }
      }, [
        h('div', {
          'class': {
            'dialog-container': true
          },
          style: {
            width: this.width + 'px',
            height: this.height + 'px'
          }
        }, [
          h('div', {
            class: {
              'dialog-title': true
            }
          }, this.title),
          h('div', {
            class: {
              'dialog-content': true
            }
          }, this.$slots.default),
          h('div', {
            class: {
              'dialog-close-btn': true
            },
            on: {
              click: this.closeMask
            }
          }, [
            h('i', {
              class: {
                "dialog-close": true
              }
            })
          ]),
        ])
      ])
    }

  }

</script>
<style>
  .dialog {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 9999;
  }

  .dialog-hidden {
    visibility: hidden;
  }

  .dialog-container {
    background: #ffffff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 8px;
    position: relative;
  }

  .dialog-title {
    width: 100%;
    height: 60px;
    font-size: 18px;
    color: #696969;
    font-weight: 600;
    padding: 16px 50px 0 20px;
    box-sizing: border-box;
    text-align: left;
  }

  .dialog-content {
    color: #797979;
    line-height: 26px;
    padding: 0 20px;
    box-sizing: border-box;
  }

  .dialog-default-btn {
    color: #787878;
  }

  .dialog-btns {
    width: 100%;
    height: 60px;
    line-height: 60px;
    position: absolute;
    bottom: 0;
    left: 0;
    text-align: right;
    padding: 0 16px;
    box-sizing: border-box;
  }

  .dialog-close-btn {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
  }

  .dialog-close {
    color: #1f1d1d;
    border-radius: 12px;
    line-height: 20px;
    text-align: center;
    height: 20px;
    width: 20px;
    font-size: 18px;
    padding: 1px;
  }

  .dialog-close::before {
    content: '\2716';
  }

</style>
