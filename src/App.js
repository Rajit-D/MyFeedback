import './App.css';
import CreatePost from './components/CreatePost';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar title="MyFeedback.com" />
      <CreatePost/>
    </>
  );
}

export default App;
