import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import db from './firebase';
import './SidebarChat.css';
import { Link } from 'react-router-dom';

function SidebarChat({ id, name, addNewChat }) {
    const [seed, setSeed] = useState('');
    const [message, setMessage] = useState('');
    useEffect(() => {
        if (id) {
            db.collection('rooms').doc(id).collection('messages').orderBy('timestamp', 'desc').onSnapshot((snapshot) => setMessage(snapshot.docs.map((doc) => doc.data()))
            );
        }
    }, [id])
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);
    const createChat = () => {
        const roomName = prompt("Please enter name for chat room :");
        if (roomName) {
            //do something here from the database
            db.collection('rooms').add({
                name: roomName,
            })
        }
    }
    const imageLink = `https://avatars.dicebear.com/api/human/${seed}.svg`;
    return !addNewChat ? (
        <Link to={{
            pathname: `/rooms/${id}`,
            query: { link: imageLink }
        }}>
            <div className="sidebarChat">
                <Avatar src={imageLink} />
                <div className="sidebarChat__info">
                    <h2>{name}</h2>
                    <p>{message[0]?.message}</p>
                </div>
            </div>
        </Link >
    ) : (
        <div onClick={createChat} className="sidebarChat">
            <h2>Add new Chat</h2>
        </div>
    );
}

export default SidebarChat
