import './App.css';
import CreatePost from './components/CreatePost';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar title="MyFeedback.com" />
      <div className="my-5 container">
        <CreatePost/>
      </div>
    </>
  );
}

export default App;
