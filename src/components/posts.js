import * as React from 'react';
import { useState, useEffect } from 'react';

export default function MyPosts(props) {
    const id = props.value;
    const [allpost, setallpost] = useState([]);
    const [post, setpost] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
            if (res.status === 200 && res.ok) {
                return res.json();
            }
        }).then((res) => setallpost(res)).then(() => {
            if (post.userID === id)
                setpost(...post, post);

        }
        )
    }
        , []);

    return (
        < div >
            {post}
        </div >
    )
}