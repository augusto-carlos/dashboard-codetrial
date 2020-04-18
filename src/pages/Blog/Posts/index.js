import React, { useState, useEffect } from 'react';
import { FiMoreHorizontal, FiClock } from 'react-icons/fi';
import { GoSearch } from 'react-icons/go';
import api from '../../../services/api';

import './styles.css'

const Posts = () => {


    const [posts, setPosts] = useState([]);

    useEffect(() => {

        api.get('posts')
            .then(res => setPosts(res.data))

    }, [posts]);

    return (

        <div className="content">

            <div className="posts-header">
                <form>
                    <div className="search">
                        <input type="search" /><GoSearch />
                    </div>
                </form>
            </div>

            <div className="posts-container">

                {posts.map(post => (

                    <div className="post-card" key={post._id}>
                        <div className="post-card-header">
                            <FiMoreHorizontal />
                            <small className="category">{post.category.name}</small>
                            <h2>{post.title}</h2>
                            <small><FiClock /> {post.date}</small>
                        </div>
                        <div className="post-card-body">
                            <p>{post.content}</p>
                        </div>
                        <div className="post-card-footer">
                            <small>{post.slug}</small>
                            <small>Nome do autor</small>
                        </div>
                    </div>

                ))}

            </div>

        </div>
    );
}

export default Posts;
