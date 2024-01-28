import React, { useEffect, useState } from 'react';
import './Chat.scss';
import ChatHeader from './ChatHeader';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifBoxIcon from '@mui/icons-material/GifBox';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ChatMessage from './ChatMessage';
import { useAppSelector } from '../../app/hooks';
import {
  CollectionReference,
  DocumentData,
  Query,
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from '../../firebase';
import { Messages } from '../../interface';

const Chat = () => {
  const channelName = useAppSelector((state) => state.channel.channelname);
  const channleId = useAppSelector((state) => state.channel.channelId);
  const user = useAppSelector((state) => state.user.user);
  const [input, setInput] = useState<string>('');
  const [messages, setMessages] = useState<Messages[]>([]);

  const collectionRef: Query<DocumentData> = query(
    collection(db, 'channels', String(channleId), 'messages'),
    orderBy('timestamp', 'desc')
  );

  useEffect(() => {
    onSnapshot(collectionRef, (QuerySnapshot) => {
      const results: Messages[] = [];
      console.log(QuerySnapshot);
      QuerySnapshot.forEach((doc) => {
        results.push({
          timestamp: doc.data().timestamp,
          message: doc.data().message,
          user: doc.data().user,
        });
      });
      setMessages(results);
      console.log(results);
    });
  }, [channleId]);

  const sendMessage = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    //channelsコレクションの中にあるmessageコレクションに入れる
    const collectionRef: CollectionReference<DocumentData> = collection(
      db,
      'channels',
      String(channleId),
      'messages'
    );
    await addDoc(collectionRef, {
      message: input,
      timestamp: serverTimestamp(),
      user: user,
    });
    setInput('');
  };

  return (
    <div className="chat">
      {/* chatHeader */}
      <ChatHeader channelName={channelName} />
      {/* chatMessage */}
      <div className="chatMessage">
        {messages.map((elm, index) => {
          return <ChatMessage messages={elm} key={index} />;
        })}
      </div>
      {/* chatInput */}
      <div className="chatInput">
        <AddCircleOutlineIcon />
        <form action="">
          <input
            type="text"
            placeholder="#Udemyへメッセージを送信"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInput(e.target.value)
            }
            value={input}
          />
          <button
            type="submit"
            className="chatInputbutton"
            onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
              sendMessage(e)
            }
          >
            送信
          </button>
        </form>
        <div className="chatInputIcons">
          <CardGiftcardIcon />
          <GifBoxIcon />
          <EmojiEmotionsIcon />
        </div>
      </div>
    </div>
  );
};

export default Chat;
