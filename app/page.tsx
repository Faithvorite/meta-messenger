
import ChatInput from './ChatInput'
import MessageList from './MessageList'

function Home() {
  return <div className="text-4xl">
    <main>
        {/* MessageList */}
        <MessageList />
        {/* ChatInput */}
        <ChatInput />
    </main>
    </div>
}

export default Home