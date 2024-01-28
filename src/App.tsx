import './App.scss';
import Sidebar from './components/sidebar/Sidebar';
import Chat from './components/chat/Chat';
import Login from './components/login/Login';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { useEffect } from 'react';
import { auth } from './firebase';
import { login, logout } from './features/userSlice';
// import { ErrorBoundary } from 'react-error-boundary';
// import { ErrorFallBack } from './utils/ErrorFailBack';

function App() {
  // const user = null;
  const user = useAppSelector((state) => state.user.user);
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
            {/* <ErrorBoundary FallbackComponent={ErrorFallBack}> */}
            <Sidebar />
            {/* </ErrorBoundary> */}
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
