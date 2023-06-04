import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchPosts } from '../actions/postActions';
import { fetchPosts } from '../store/actions/postActions';
import { Link } from 'react-router-dom';
import './Home.css';


const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className='container1'>
      <h1>Social Media App</h1>
      {posts.map((post) => (
        <div className='container2' key={post.id}>
          <h2>{post.title.slice(0, 20)}</h2>
          <p>{post.body.slice(0, 100)}{post.body.length > 100 && '...'}</p>
          <img src={`https://picsum.photos/200?random=${post.id}`} alt={`Post ${post.id}`} />
          <Link to={`/item/${post.id}`}>Read More...</Link>
        </div>
      ))}
    </div>
  );
};

export default Home;







