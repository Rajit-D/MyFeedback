import './App.css';
import CreatePost from './components/CreatePost';
import Navbar from './components/Navbar';
import Signuppage from './components/Signuppage';

function App() {
  return (
    <>
      <Navbar title="MyFeedback.com" />
      {/* <div className="my-5 container">
        <CreatePost/>
      </div> */}
      <Signuppage/>
    </>
  );
}

export default App;
