<!--
// resources/js/components/Posts.vue
Usage:
    props
    1: Required - posts: the array of all post objects
    2: Required - visible: the switch of posts list visibility

    events
    1: post-clicked, payload: {type: String, value: Number, index: Number}
-->
<template>
    <div class="posts-wrapper p-30" v-show="visible">
        <h2 class="posts-title text-orange">POSTS</h2>
        <div class="row" v-for="(post, idx) in posts" :key="'post'+idx">
            <post-widget :post="post" :index="idx" @post-clicked="onPostClicked"></post-widget>
        </div>
    </div>
</template>

<script>
import PostWidget from "./PostWidget";
export default {
    name: "Posts",
    components:{
        PostWidget
    },
    props:{
        posts:{
            type: Array,
            required: true,
        },
        visible:{
            type:Boolean,
            required: true,
        }
    },
    methods:{
        /**
         * Event handler of the post. It will pass the payload to upstream directly.
         * @param payload: Object
         */
        onPostClicked: function(payload){
            this.$emit('post-clicked', payload);
        }
    }
}
</script>

<style scoped lang="scss">
.posts-wrapper{
    .posts-title{
        font-size: 24px;
        font-weight: bold;
    }
    .row{
        margin-top: 20px;
        margin-bottom: 40px;
    }
}
</style>
