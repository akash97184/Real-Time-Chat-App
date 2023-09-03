import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed  from './components/ChatFeed'; 
import LoginForm from './components/LoginForm';

const projectID = "335a1714-a192-4e12-8848-7465e9ecf0a7";

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine 
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

export default App