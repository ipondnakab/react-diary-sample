import TestPage from "./pages/Test";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TestPage title={"title1"}/>
      <TestPage title="title2" />
      <TestPage name="name1" title="title3" />
      <TestPage name="name2" />
    </div>
  );
}

export default App;
