// import logo from "./logo.svg";
import "./App.css";

// Misc
// import TestIf from "./pages/testIf";

// Objects
import AddressObject from "./pages/JS1/Objects/Exercises/AddressObject";
import EnumeratingProperties from "./pages/JS1/Objects/EnumeratingProperties";
import FactoryAndConstructorFunctions from "./pages/JS1/Objects/Exercises/FactoryAndConstructorFunctions";
import ObjectEquality from "./pages/JS1/Objects/Exercises/ObjectEquality";
import BlogPostObject from "./pages/JS1/Objects/Exercises/BlogPostObject";
import ConstructorFunctions from "./pages/JS1/Objects/Exercises/ConstructorFunctions";
import PriceRangeObject from "./pages/JS1/Objects/Exercises/PriceRangeObject";

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
import DefaultParameters from "./pages/JS1/Functions/DefaultParameters";
import GettersSetters from "./pages/JS1/Functions/GettersSetters";
import TryCatch from "./pages/JS1/Functions/TryCatch";
import LocalGlobalScope from "./pages/JS1/Functions/LocalGlobalScope.jsx";
import ThisKeyword from "./pages/JS1/Functions/ThisKeyword";
import LetVar from "./pages/JS1/Functions/LetVar";

// Exercises
import SumOfArgumets from "./pages/JS1/Functions/Exercises/SumOfArguments";
import Circle from "./pages/JS1/Functions/Exercises/Circle";
import ErrorHandling from "./pages/JS1/Functions/Exercises/ErrorHandling";

function App() {
  return (
    <main>
      {/* <section><TestIf/></section> */}
      <section className="objects">
        <EnumeratingProperties />
        <AddressObject />
        <FactoryAndConstructorFunctions />
        <ObjectEquality />
        <BlogPostObject />
        <ConstructorFunctions />
        <PriceRangeObject />
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
        <DefaultParameters />
        <GettersSetters />
        <TryCatch />
        <LocalGlobalScope />
        <ThisKeyword />
        <LetVar />
      </section>
      <section className="functions--exercises">
        <SumOfArgumets />
        <Circle />
        <ErrorHandling />
      </section>
    </main>
  );
}

export default App;
