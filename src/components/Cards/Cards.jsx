import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Cards = () => {
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    const [photos, setPhotos] = useState([])

  useEffect(() => {
    const fetchDataPosts = async () => {
      const result = await axios(
        'https://jsonplaceholder.typicode.com/posts',
      );
      setPosts(result.data);
    };
    fetchDataPosts();
  }, []);

  useEffect(() => {
    const fetchDataUsers = async () => {
      const result = await axios (
        'https://jsonplaceholder.typicode.com/users',
      );
      setUsers(result.data);
    };
    fetchDataUsers();
  }, []);
  
  useEffect(() => {
    const fetchDataPhotos = async () => {
      const result = await axios (
        'https://jsonplaceholder.typicode.com/photos',
      );
      setPhotos(result.data);
    };
    fetchDataPhotos();
  }, []);

    if (posts.length === 0)
      return (<p>Loading...</p>)

    return (
        <div>
          {posts.map(post => (
            <div key={post.id}>
              <img alt='' src={photos.find(photo => photo.albumId === post.userId).url} />
              <h1>{users.find(user => user.id === post.userId)?.name}</h1>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      );
};

export default Cards;