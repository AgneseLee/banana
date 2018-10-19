<template>
    <div>{{msg}}
        <render-tag v-model="tags">
            <!-- <h3 slot-scope="{exampleProp}">
                hello {{exampleProp}}
            </h3> -->
            <div slot-scope="{tags, removeTag, inputAttrs, inputEvent}" class="tags-input">
                <span v-for="tag in tags" :key="tag" class="tags-input-tag">
                    <span>{{tag}}</span>
                    <button type="button" class="tags-input-remove" @click="removeTag(tag)">&times;</button>
                </span>
                <input v-bind="inputAttrs" v-on="inputEvent" class="tags-input-text" placeholder="Add tag...">
            </div>
        </render-tag>
    </div>
</template>
<script>
    import renderTag from './vuedemo/renderTag';

    export default {
        data() {
            return {
                msg: 'hello! webpack4-vue-demo!'
            }
        },
        components: {

        }
    }
</script>