import { useEffect, useState } from 'react';
// import { useAppSelector } from '../app/hooks';
import {
  DocumentData,
  Query,
  collection,
  onSnapshot,
  query,
} from 'firebase/firestore';
import { db } from '../firebase';
import { Channel } from '../interface';

const UseCollection = (data: string) => {
  const [documents, setDocuments] = useState<Channel[]>([]);

  const collectionRef: Query<DocumentData> = query(collection(db, data));

  useEffect(() => {
    onSnapshot(collectionRef, (QuerySnapshot) => {
      const channelsResults: Channel[] = [];
      QuerySnapshot.forEach((doc) => {
        channelsResults.push({
          id: doc.id,
          channel: doc.data(),
        });
      });
      setDocuments(channelsResults);
    });
  }, []);
  return { documents };
};

export default UseCollection;
