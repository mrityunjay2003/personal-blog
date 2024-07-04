import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Post = () => {
    const { _id } = useParams();
    const [post, setPost] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(`http://localhost:5000/post/${_id}`);
                const received = await response.json();
                setPost(received.data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };
        fetchPosts();
    }, [_id]);

    return (
        <div>
            {post ? (
                <div className="whitespace-pre-wrap p-6">
                    <h1 className="text-6xl font-bold flex items-center justify-center">{post.title}</h1>
                    <p className="mt-2 ">{post.body}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default Post


