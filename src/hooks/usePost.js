import {useSelector} from "react-redux";

export const usePosts = () => {
    const posts = useSelector(state => state.posts.posts);
    const currentPage = useSelector(state => state.posts.currentPage);
    const total = useSelector(state => state.posts.total);

    return [posts, currentPage, total]

};