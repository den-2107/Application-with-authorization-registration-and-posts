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
        <div>
          <div className={styles.container} >
          {posts.map(post => (
            <div className={styles.card} key={post.id}>
                <div className={styles.cardUserInfo}>
                <img className={styles.cardUserImage} alt='' src={photos.find(photo => photo.albumId === post.userId)?.url} />
                  <div className={styles.cardUserInfoText}>
                  <p>Автор: {users.find(user => user.id === post.userId)?.name}</p>
                  <p>Компания: Romaguera-Crona</p>                
                  </div>
              </div>
              <p><b>Заголовок: </b>{post.title}</p>
              <p><b>Пост: </b>{post.body}</p>
            </div>
          ))}            
          </div>
        </div>
      );
};

export default Card;