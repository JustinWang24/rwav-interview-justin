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
