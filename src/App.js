import Basic3, { Basic1, Basic2 } from "./BasicComponents";
import { SamplebootstrapExample } from "./BootstrapSample";
import { Parameters } from "./ParameterizedComponents";
import { TableFrom } from "./TableCreation";
import { TernaryOperator } from "./TernaryOperator";
import { FirstHook } from "./UserStateSample";
import { UseState2 } from "./useStateusingNumbers";


function App() {
  return (
    <>
    <Parameters where="./zealous.jpg" uyaram="200px" agalam="1000px" />
    <p>welcome to react js</p>
    <Basic1/>
    <Basic2/>
    <Basic3/>
    <TableFrom/>
    <SamplebootstrapExample/>
    <FirstHook/>
    <UseState2/>
    <TernaryOperator/>
    </>
  );
}

export default App;
