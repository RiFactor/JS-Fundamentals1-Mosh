import logo from "./logo.svg";
import "./App.css";

// Misc
import TestIf from "./pages/testIf";

// Objects
import ObjEnumerateProps from "./pages/JS1/Objects/Enumeratingproperties";
import ExerciseAddressObject from "./pages/JS1/Objects/Exercises/Addressobject";
import ExerciseFactoryAndConstructorFunctions from "./pages/JS1/Objects/FactoryAndConstructorFunctions";
import ExerciseObjectEquality from "./pages/JS1/Objects/Exercises/ObjectEquality";
import ExerciseBlogPostObject from "./pages/JS1/Objects/BlogPostObject";
import ExerciseConstructorFunctions from "./pages/JS1/Objects/ConstructorFunctions";
import ExercisePriceRangeObject from "./pages/JS1/Objects/Exercises/PriceRangeObject";

//Arrays
import Elements from "./pages/JS1/Arrays/Elements";
import CombiningAndSlicingArrays from "./pages/JS1/Arrays/CombiningAndSlicingArrays";
import ShallowCopy from "./pages/JS1/Arrays/ShallowCopy";
import SpreadOperator from "./pages/JS1/Arrays/SpreadOperator";
import IteratingAnArray from "./pages/JS1/Arrays/IteratingAnArray";
import JoiningArrays from "./pages/JS1/Arrays/JoiningArrays";
import SortingArrays from "./pages/JS1/Arrays/SortingArrays";
import TestingArrayElements from "./pages/JS1/Arrays/TestingArrayElements";
import FilteringAnArray from "./pages/JS1/Arrays/FilteringAnArray";
import MappingAnArray from "./pages/JS1/Arrays/MappingAnArray";
import ReducingAnArray from "./pages/JS1/Arrays/ReducingAnArray";
//Exercises
import ArrayFromRange from "./pages/JS1/Arrays/Exercises/arrayFromRange";
import Includes from "./pages/JS1/Arrays/Exercises/includes";
import Except from "./pages/JS1/Arrays/Exercises/except";
import MovingAnElement from "./pages/JS1/Arrays/Exercises/movingAnElement";
import CountOccurences from "./pages/JS1/Arrays/Exercises/countOccurences";
import GetMax from "./pages/JS1/Arrays/Exercises/getMax";
import Movies from "./pages/JS1/Arrays/Exercises/movies";

// Functions
import FunctionDeclarationsvsExpressions from "./pages/JS1/Functions/FunctionDeclarationsvsExpressions";
import Hoisting from "./pages/JS1/Functions/Hoisting";
import Arguments from "./pages/JS1/Functions/Arguments";
import RestOperator from "./pages/JS1/Functions/RestOperator";
import ThisKeyword from "./pages/JS1/Functions/ThisKeyword";
import LetVar from "./pages/JS1/Functions/LetVar";

function App() {
  return (
    <main>
      {/* <section><TestIf/></section> */}

      <section className="objects">
        <ObjEnumerateProps />
        <ExerciseAddressObject />
        <ExerciseFactoryAndConstructorFunctions />
        <ExerciseObjectEquality />
        <ExerciseBlogPostObject />
        <ExerciseConstructorFunctions />
        <ExercisePriceRangeObject />
      </section>
      <section className="arrays">
        <Elements />
        <ShallowCopy />
        <CombiningAndSlicingArrays />
        <SpreadOperator />
        <IteratingAnArray />
        <JoiningArrays />
        <SortingArrays />
        <TestingArrayElements />
        <FilteringAnArray />
        <MappingAnArray />
        <ReducingAnArray />
      </section>
      <section className="arrays--exercises">
        <ArrayFromRange />
        <Includes />
        <Except />
        <MovingAnElement />
        <CountOccurences />
        <GetMax />
        <Movies />
      </section>
      <section className="functions">
        <FunctionDeclarationsvsExpressions />
        <Hoisting />
        <Arguments />
        <RestOperator />
        <ThisKeyword />
        <LetVar />
      </section>
    </main>
  );
}

export default App;
