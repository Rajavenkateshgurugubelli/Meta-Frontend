import Bag from "./Bag";
import Apples from "./Apples";
import Pears from "./Pears";

function App() {
  return (
    <div className="App">
      <Bag children={<Apples color="yellow" number="5" />} />
      <Bag children={<Pears friend="Peter" />} />
      <Bag>
        <Apples color="yellow" number="5" />
      </Bag>

      <Bag>
        <Pears friend="Peter" />
      </Bag>

      <Bag>
        <Apples color="yellow" number="5" />
        <Pears friend="Peter" />
    </Bag>
    </div>
  );
};

export default App;
