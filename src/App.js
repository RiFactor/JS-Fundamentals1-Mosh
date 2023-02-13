// import logo from "./logo.svg";
import "./App.css";

// Misc
import TestIf from "src/pages/testIf";

/* #region JS1 */
// // Objects
import AddressObject from "src/pages/JS1/Objects/Exercises/AddressObject";
import EnumeratingProperties from "src/pages/JS1/Objects/EnumeratingProperties";
import FactoryAndConstructorFunctions from "src/pages/JS1/Objects/Exercises/FactoryAndConstructorFunctions";
import ObjectEquality from "src/pages/JS1/Objects/Exercises/ObjectEquality";
import BlogPostObject from "src/pages/JS1/Objects/Exercises/BlogPostObject";
import ConstructorFunctions from "src/pages/JS1/Objects/Exercises/ConstructorFunctions";
import PriceRangeObject from "src/pages/JS1/Objects/Exercises/PriceRangeObject";

// //Arrays
import Elements from "src/pages/JS1/Arrays/Elements";
import CombiningAndSlicingArrays from "src/pages/JS1/Arrays/CombiningAndSlicingArrays";
import ShallowCopy from "src/pages/JS1/Arrays/ShallowCopy";
import SpreadOperator from "src/pages/JS1/Arrays/SpreadOperator";
import IteratingAnArray from "src/pages/JS1/Arrays/IteratingAnArray";
import JoiningArrays from "src/pages/JS1/Arrays/JoiningArrays";
import SortingArrays from "src/pages/JS1/Arrays/SortingArrays";
import TestingArrayElements from "src/pages/JS1/Arrays/TestingArrayElements";
import FilteringAnArray from "src/pages/JS1/Arrays/FilteringAnArray";
import MappingAnArray from "src/pages/JS1/Arrays/MappingAnArray";
import ReducingAnArray from "src/pages/JS1/Arrays/ReducingAnArray";

// //Exercises
import ArrayFromRange from "src/pages/JS1/Arrays/Exercises/arrayFromRange";
import Includes from "src/pages/JS1/Arrays/Exercises/includes";
import Except from "src/pages/JS1/Arrays/Exercises/except";
import MovingAnElement from "src/pages/JS1/Arrays/Exercises/movingAnElement";
import CountOccurences from "src/pages/JS1/Arrays/Exercises/countOccurences";
import GetMax from "src/pages/JS1/Arrays/Exercises/getMax";
import Movies from "src/pages/JS1/Arrays/Exercises/movies";

// // Functions
import FunctionDeclarationsvsExpressions from "src/pages/JS1/Functions/FunctionDeclarationsvsExpressions";
import Hoisting from "src/pages/JS1/Functions/Hoisting";
import Arguments from "src/pages/JS1/Functions/Arguments";
import RestOperator from "src/pages/JS1/Functions/RestOperator";
import DefaultParameters from "src/pages/JS1/Functions/DefaultParameters";
import GettersSetters from "src/pages/JS1/Functions/GettersSetters";
import TryCatch from "src/pages/JS1/Functions/TryCatch";
import LocalGlobalScope from "src/pages/JS1/Functions/LocalGlobalScope.jsx";
import ThisKeyword from "src/pages/JS1/Functions/ThisKeyword";
import LetVar from "src/pages/JS1/Functions/LetVar";

// // Exercises
import SumOfArgumets from "src/pages/JS1/Functions/Exercises/SumOfArguments";
import Circle from "src/pages/JS1/Functions/Exercises/Circle";
import ErrorHandling from "src/pages/JS1/Functions/Exercises/ErrorHandling";
// /* #endregion */

// Basics
import Variables from "src/pages/JS1/Basics/Variables";
import Constants from "src/pages/JS1/Basics/Constants";
import PrimitiveTypes from "src/pages/JS1/Basics/PrimitiveTypes";
import Objects from "src/pages/JS1/Basics/Objects";
import Arrays from "src/pages/JS1/Basics/Arrays";
import Functions from "src/pages/JS1/Basics/Functions";

// /* #region JS2 */
import OOPIntro from "src/pages/JS2/OOPIntro";
import ObjectLiterals from "src/pages/JS2/Objects/ObjectLiterals";
import FactoryConstructorFunctions from "src/pages/JS2/Objects/FactoryConstructorFunctions";
import FunctionsAreObjects from "src/pages/JS2/Objects/FunctionsAreObjects";
import ValueVsReferenceTypes from "src/pages/JS2/Objects/ValueVsReferenceTypes";
import ModifyingProperties from "src/pages/JS2/Objects/ModifyingProperties";
import Abstraction from "src/pages/JS2/Objects/Abstraction";
import Stopwatch from "src/pages/JS2/Objects/Stopwatch";
import StopWatch2 from "src/pages/JS2/Objects/StopWatch2";

/* #endregion */

function App() {
  return (
    <main>
      <section>{/* <TestIf /> */}</section>
      <section className="JS1">
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
      </section>
      <section className="JS2">
        <OOPIntro />
        <section className="objects">
          <ObjectLiterals />
          <FactoryConstructorFunctions />
          <FunctionsAreObjects />
          <ValueVsReferenceTypes />
          <ModifyingProperties />
          <Abstraction />
          <Stopwatch />
          <StopWatch2 />
        </section>
        {/* <section className="JS1basics">
          <Variables />
          <Constants />
          <PrimitiveTypes />
          <Objects />
          <Arrays />
          <Functions />
        </section> */}
      </section>
    </main>
  );
}

export default App;
