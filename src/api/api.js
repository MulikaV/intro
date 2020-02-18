import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://5e4aae066eafb7001488c7c7.mockapi.io/'
});


export const postApi = {
        getPosts() {
            return instance.get('posts').then(response => response.data)
        },

        addPost(text) {
            return instance.post('posts',{text}).then(response => response.data)
        },
    deletePost(id) {
            return instance.delete(`posts/${id}`).then(response => response.data)
        }
    }

;