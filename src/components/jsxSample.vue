<script>
import Vue from "vue";
export default {
    name: 'jsx-sample',
    render(h) {
        // <-- h must be in scope
        return (<div id = "foo" > bar </div>);
    },
    methods:{
        doco(){
            let foo = () => 'foo';
            console.log(foo)
        }
    }
}
</script>


