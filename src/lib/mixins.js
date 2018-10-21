// 创建一个需要混入的对象 
export const mixinTest1 = {
    // 如果是vue生命周期里的钩子函数，那将会进行合并，以此执行mixins以及组件的函数；
    // 如果是methods等方法，（不是钩子函数）那组件中的方法将会覆盖mixins中的方法。
    created() {
        let option = this.$options.doNotInit
        console.log('option: ', option)
        if (!option) {
            this.hello();
        }
        
    },
    methods: {
        hello() {
            console.log('***************************mixinTest1');
        },
        handlePlaylist() {
            // 如果引用的父组件没重写该方法就会抛出这个错误
            // throw new Error('component must implement handlePlaylist method')
            console.warn('pfpfp')
        }
    }
};