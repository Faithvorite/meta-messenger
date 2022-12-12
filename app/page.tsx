import { Message } from '../typings';
import ChatInput from './ChatInput'
import MessageList from './MessageList'

async function HomePage() {
  const data = await fetch(`${"https://my-meta-messenger.vercel.app" || 'http://localhost:3000'}/api/getMessages`)
  .then(
    (res) => res.json()
    );

    const messages: Message[]= data.messages;
  return  (
    <main>
        <MessageList initialMessages={messages}/>
        <ChatInput />
    </main>)

}

export default HomePage