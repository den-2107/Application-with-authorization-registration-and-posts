import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styles from './Card.module.css';

const Card = () => {
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
        <div className={styles.container}>
          {posts.map(post => (
            <div key={post.id}>
              <img className={styles.userImage} alt='' src={photos.find(photo => photo.albumId === post.userId)?.url} />
              <h1>{users.find(user => user.id === post.userId)?.name}</h1>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      );
};

export default Card;