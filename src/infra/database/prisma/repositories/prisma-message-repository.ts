import { BadRequestException, Injectable } from '@nestjs/common';
import { FirebaseApp, initializeApp } from 'firebase/app';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import { Message } from '@domain/message/Message';
import { MessageRepository } from '@app/repositories/Message/message';
import { Firestore, getFirestore } from 'firebase/firestore';
interface MessageProps {
  id?: string;
  title: string;
  content: string;
  senderId: string;
  receiverId: string;
  createdAt: string;
}

@Injectable()
export class FirebaseMessagesRepository implements MessageRepository {
  private firestore: Firestore;
  private app: FirebaseApp;

  constructor() {
    this.app = initializeApp({
      apiKey: 'AIzaSyAp4bA4T2HAnk6QPF9CDcfCq_2XWerkzqY',
      authDomain: 'chat-btm.firebaseapp.com',
      projectId: 'chat-btm',
      storageBucket: 'chat-btm.appspot.com',
      messagingSenderId: '330622068920',
      appId: '1:330622068920:web:211816e6f006a1ea126c4d',
      measurementId: 'G-81XGHZ9F45',
    });
    this.firestore = getFirestore(this.app);
  }

  async register(message: Message,): Promise<string> {
    try {
      const { title, content, senderId, receiverId } = message.props;

      const messagesRef = collection(this.firestore, 'messages');
      await addDoc(messagesRef, {
        title,
        content,
        senderId,
        receiverId,
        createdAt: new Date(),
        resolved:false,
        resolutionDescription: ''
      });

      return 'Registramos sua mensagem';
    } catch (error) {
      throw new BadRequestException('Erro ao registrar mensagem');
    }
  }

  async findMessageByUserId(id: string): Promise<MessageProps[] | Error> {
    try {
      const messagesRef = collection(this.firestore, 'messages');
      const senderQuery = query(messagesRef, where('senderId', '==', id));
      const receivedQuery = query(messagesRef, where('receiverId', '==', id));

      const [senderSnapshot, receivedSnapshot] = await Promise.all([
        getDocs(senderQuery),
        getDocs(receivedQuery),
      ]);

      const messages: MessageProps[] = [];
      senderSnapshot.forEach((doc) => {
        const messageData = doc.data() as MessageProps;
        const messageWithId: MessageProps = {
          id: doc.id,
          ...messageData,
        };
        messages.push(messageWithId);
      });
      receivedSnapshot.forEach((doc) => {
        const messageData = doc.data() as MessageProps;
        const messageWithId: MessageProps = {
          id: doc.id,
          ...messageData,
        };
        messages.push(messageWithId);
      });
      return messages;
    } catch (error) {
      throw new BadRequestException('Erro ao buscar mensagem do Usuário');
    }
  }

  async findMessageById(id: string): Promise<any | Error> {
    try {
      const messageRef = doc(this.firestore, 'messages', id);
      const messageSnapshot = await getDoc(messageRef);

      if (!messageSnapshot.exists()) {
        throw new BadRequestException('Mensagem não encontrada');
      }

      const messageData = messageSnapshot.data() as MessageProps;
      return [messageData];
    } catch (error) {
      console.error('Erro:', error); 
      throw new BadRequestException('Erro ao buscar mensagem');
    }
  }
}
