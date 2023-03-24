import Olympics from "./images/Olympics.jpg"
import './App.css';
import Header from "./Header/Header";
function App() {
  return (
    <div className="App">
     <Header/>
      <img src={Olympics} height={900} width={1300} />
    </div>
  );
}

export default App;
