import "./App.css";

function App() {
  const isUserLoggedIn = false;
  return <h1>{isUserLoggedIn ? "Hello User" : "Login Now"}</h1>;
}

export default App;
