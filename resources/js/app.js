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
            axios.get(
                'https://jsonplaceholder.typicode.com/posts'
            ).then(res => {
                for (let i = 0; i < 10; i++) {
                    this.posts.push(res.data[i]);
                }
            }).catch(err => {
                alert(err);
            }).finally(() => {
                this.inAction = false;
            })
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
