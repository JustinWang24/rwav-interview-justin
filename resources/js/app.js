require('./bootstrap');

import { createApp } from "vue";
import Top from "./components/Top";
import ActionsBar from "./components/ActionsBar";
import Posts from "./components/Posts";

const app = createApp({
    components:{
        Top,ActionsBar,Posts
    },
    computed:{
        hasPosts: function(){
            return this.posts.length > 0;
        }
    },
    data(){
        return {
            // Posts array
            posts:[],
            // Flag: is loading posts data from remote API
            inAction: false,
        }
    },
    methods:{
        onActionsBarBtnClicked: function (payload){
            if(payload.action === 'load-posts'){
                this.loadPosts();
            }
        },
        loadPosts: function(){
            this.inAction = true;

            this.posts = [
                {
                    post_id: 1,
                    user_id: 1,
                    title: 'title 1',
                    brief: 'brief 1',
                },
                {
                    post_id: 2,
                    user_id: 3,
                    title: 'title 2',
                    brief: 'brief 2',
                }
            ];

            this.inAction = false;
        },
        /**
         * Handler when the post was clicked
         * @param payload: Object
         */
        onPostClicked: function(payload){
            // Todo: handle when the post was clicked
            console.log(payload);
        }
    }
});
app.mount("#app");
