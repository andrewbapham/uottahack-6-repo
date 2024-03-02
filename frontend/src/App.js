import "./App.css";
import Auth0ProviderWithHistory from "./Components/Auth0Provider";
import Register from "./Components/Register/Register";

function App() {
  return (
    <Auth0ProviderWithHistory>
      <div className="App">
        <Register />
      </div>
    </Auth0ProviderWithHistory>
  );
}

export default App;
