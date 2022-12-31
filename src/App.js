import './App.css';
import CreatePost from './components/CreatePost';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signuppage from './components/Signuppage';

function App() {
  return (
    <>
      <Navbar title="MyFeedback.com" />
      {/* <div className="my-5 container">
        <CreatePost/>
      </div> */}
      {/* <Signuppage/> */}
      <Login/>
    </>
  );
}

export default App;
