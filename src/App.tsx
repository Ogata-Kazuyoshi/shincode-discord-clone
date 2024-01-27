import './App.scss';
import Sidebar from './components/sidebar/Sidebar';
import Chat from './components/chat/Chat';
import Login from './components/login/Login';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { useEffect } from 'react';
import { auth } from './firebase';
import { login, logout } from './features/userSlice';

function App() {
  // const user = null;
  const user = useAppSelector((state) => state.user);
  console.log(user);

  const dispath = useAppDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((loginUser) => {
      console.log(loginUser);
      if (loginUser) {
        dispath(
          login({
            uid: loginUser.uid,
            photo: loginUser.photoURL,
            email: loginUser.email,
            displayName: loginUser.displayName,
          })
        );
      } else {
        dispath(logout());
      }
    });
  }, [dispath]);

  return (
    <>
      <div className="App">
        {user ? (
          <>
            <Sidebar />
            <Chat />
          </>
        ) : (
          <Login />
        )}
      </div>
    </>
  );
}

export default App;
