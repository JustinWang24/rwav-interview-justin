<!--
// resources/js/components/ActionsBar.vue
Usage:
    props
    1: Required - visible: the switch of the actions bar visibility.
    2: Required - inAction: tells the component if the action is taken in the outside world.

    events
    1: btn-clicked, payload: {action: String}
-->
<template>
    <div class="actions-bar p-30" v-show="visible">
        <button class="btn bg-blue text-white btn-load-post" @click.prevent="loadPostsBtnClicked">
            {{ inAction ? 'Loading posts ...' : 'Load Posts' }}
        </button>
    </div>
</template>

<script>
export default {
    name: "ActionsBar",
    props:{
        visible: {
            type: Boolean,
            required: true,
        },
        inAction:{
            type: Boolean,
            required: false,
            default: function(){
                return false;
            }
        }
    },
    methods:{
        loadPostsBtnClicked: function(){
            this.$emit('btn-clicked', {'action':'load-posts'})
        }
    }
}
</script>

<style scoped>
.actions-bar{
    display: flex;
    justify-content: center;
    .btn-load-post{

    }
}
</style>
