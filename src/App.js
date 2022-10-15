import './App.css';
import CreatePost from './components/CreatePost';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar title="MyFeedback.com" />
      <div className="my-5 container">
        <CreatePost title="Write your post here..." />
        <hr />
      </div>
    </>
  );
}

export default App;
