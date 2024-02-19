import logo from './assets/logo.png'

function App() {
  return (
    <div className="App">
      <h1>Task: Add an image below</h1>
      <h1><img src={logo} alt="logo" width={500}/></h1>
    </div>
  );
}

export default App;
