import "./App.css";
import Auth0ProviderWithHistory from "./Components/Auth0Provider";
import LoginButton from "./Components/LoginButton/LoginButton";
import Register from "./Components/Register/Register";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { user, isLoading } = useAuth0();
  return (
    <>
      <div className="App">
        <Register />
      </div>
      {user ? <div>Logged in</div> : <LoginButton />}
    </>
  );
}

export default App;
