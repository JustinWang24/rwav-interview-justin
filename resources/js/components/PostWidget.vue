<!--
// resources/js/components/PostWidget.vue
Usage:
    props
    1: Required - post: the post object.

    events
    1: post-clicked, payload: {type: String, value: Number, index: Number}
-->
<template>
    <div class="post-widget">
        <div class="post-content bg-gray-light p-15">
            <h3 class="post-title text-blue">{{ post.title }}</h3>
            <div class="post-brief" v-html="post.body"></div>
        </div>
        <div class="post-footer bg-gray">
            <div class="btn post-id" @click.prevent.stop="onBtnClick('post_id', post.id)">
                Post ID: {{ post.id }}
            </div>
            <div class="btn user-id" @click.prevent.stop="onBtnClick('user_id', post.userId)">
                User ID: {{ post.userId }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PostWidget",
    props:{
        post:{
            type:Object,
            required: true,
        },
        index:{
            type:Number,
            required: true,
        }
    },
    methods:{
        /**
         * Click event handler for buttons in footer
         * @param eventTarget: String
         * @param value: Number
         */
        onBtnClick: function(eventTarget, value){
            this.$emit('post-clicked',{
                type: eventTarget,
                value: value,
                index: this.index,
            })
        }
    }
}
</script>

<style scoped lang="scss">
.post-widget{
    .post-content{
        .post-title{
            line-height: 24px;
            margin-bottom: 20px;
            font-weight: bold;
        }
        .post-brief{
            line-height: 20px;
            margin-bottom: 20px;
        }
    }
    .post-footer{
        display: flex;
        justify-content: space-around;
    }
}
</style>
