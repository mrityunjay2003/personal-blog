import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const API_BASE_URL = import.meta.env.VITE_API_URL || "";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [nextPage, setNextPage] = useState();
  const [hasNextPage, setHasNextPage] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/posts`);
        const received = await response.json();
        setPosts(received.data);
        setNextPage(received.nextPage);
        setHasNextPage(received.hasNextPage);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <section className="mt-16 p-9">
      <h2 className="font-semibold text-2xl">Latest Posts</h2>
      <ul className="list-none p-4 m-0 text-lg flex flex-col">
        {posts.map(post => (
          <li key={post._id} className="text-lg cursor-pointer transition-filter duration-100 border-b border-gray-300 last:border-b-0">
            <Link to={`/post/${post._id}`} className="flex flex-col justify-between no-underline my-4 md:flex-row md:items-center">
              <span>{post.title}</span>
              <span className="text-base text-gray-500 w-64 inline-block md:text-right">{new Date(post.createdAt).toDateString()}</span>
            </Link>
          </li>
        ))}
      </ul>
      {nextPage !== null && (
        <a href={`/?page=${nextPage}`} className="text-blue-500">&lt; View Older Posts</a>
      )}
    </section>
  );
}

export default Posts;
