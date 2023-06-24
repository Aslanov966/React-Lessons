import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <h3>{process.env.NODE_ENV}</h3>
        <h1>Salam React</h1>
        <img src="/logo192.png"/>
        <img src={logo}/>
    </div>
  );
}

export default App;
