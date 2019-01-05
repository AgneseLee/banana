<template>
    <div>
        <p @click="rmEvent">啦啦啦啦啦啦啦啦绿绿绿绿绿</p>
    </div>
</template>
<script>
    export default {

        data() {
            return {
                showCont: true,
                timer: null,
                cache: ''
            };
        },
        created() {
            // this._handleTimer()
        },
        beforeDestroy() {
            // v-if 并不触发自身的beforeDestroy()
            console.log('beforeDestroy')
            // let self = this;
            // clearTimeout(self.timer)
            // this.timer = null;
        },
        mounted() {
            this.cache = 2;
            console.log('mounted')

            this.$nextTick(function () {
                console.log('222222222')
            })
            setTimeout(() => { // macroTask
                console.log('3')
            }, 0)
            Promise.resolve().then(function () { //microTask
                console.log('promise!')
            })
            console.log('############')


        },
        methods: {
            rmEvent() {
                console.log('clickkckc')
                // this.showCont = false;
                this.$emit('brod')
                // this.$destroy();
            },
            _handleTimer() {
                let self = this;
                let dove = self.cache
                self.timer = setTimeout(() => {
                    // self.getGroupOnline();
                    // self.cache = self.cache.concat(new Array(1000000).join('*'));
                    dove = dove.concat(new Array(1000000).join('*'));
                    console.log(self.cache.length, dove.length)
                    self._handleTimer();
                }, 5000);
            }
        }
    };
</script>