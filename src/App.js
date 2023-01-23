import logo from './logo.svg';
import './App.css';

// Misc
import TestIf from './pages/testIf';

// Objects
import ObjEnumerateProps from './pages/JS1/Objects/enumeratingproperties';
import ExerciseAddressObject from './pages/JS1/Objects/exerciseaddressobject';
import ExerciseFactoryAndConstructorFunctions from './pages/JS1/Objects/exerciseFactoryAndConstructorFunctions';
import ExerciseObjectEquality from './pages/JS1/Objects/exerciseObjectEquality';
import ExerciseBlogPostObject from './pages/JS1/Objects/exerciseBlogPostObject';
import ExerciseConstructorFunctions from './pages/JS1/Objects/exerciseConstructorFunctions';
import ExercisePriceRangeObject from './pages/JS1/Objects/exercisePriceRangeObject';

//Arrays
import Elements from './pages/JS1/Arrays/elements';
import CombiningAndSlicingArrays from './pages/JS1/Arrays/combiningAndSlicingArrays';
import ShallowCopy from './pages/JS1/Arrays/shallowCopy';
import SpreadOperator from './pages/JS1/Arrays/spreadOperator';
import IteratingAnArray from './pages/JS1/Arrays/iteratingAnArray';
import JoiningArrays from './pages/JS1/Arrays/joiningArrays';
import SortingArrays from './pages/JS1/Arrays/sortingArrays';
import TestingArrayElements from './pages/JS1/Arrays/testingArrayElements';
import FilteringAnArray from './pages/JS1/Arrays/filteringAnArray';
import MappingAnArray from './pages/JS1/Arrays/mappingAnArray';
import ReducingAnArray from './pages/JS1/Arrays/reducingAnArray';
//Exercises
import ArrayFromRange from './pages/JS1/Arrays/Exercises/arrayFromRange';
import Includes from './pages/JS1/Arrays/Exercises/includes';
import Except from './pages/JS1/Arrays/Exercises/except';
import MovingAnElement from './pages/JS1/Arrays/Exercises/movingAnElement';
import CountOccurences from './pages/JS1/Arrays/Exercises/countOccurences';
import GetMax from './pages/JS1/Arrays/Exercises/getMax';
import Movies from './pages/JS1/Arrays/Exercises/movies';



function App() {
  return (
    <main>
      {/* <section><TestIf/></section> */}

      <section className='Objects'>
        <ObjEnumerateProps/>
        <ExerciseAddressObject/>
        <ExerciseFactoryAndConstructorFunctions/>
        <ExerciseObjectEquality/>
        <ExerciseBlogPostObject/>
        <ExerciseConstructorFunctions/>
        <ExercisePriceRangeObject/>
      </section>
      <section className='Arrays'>
        <Elements/>
        <ShallowCopy/>
        <CombiningAndSlicingArrays/>
        <SpreadOperator/>
        <IteratingAnArray/>
        <JoiningArrays/>
        <SortingArrays/>
        <TestingArrayElements/>
        <FilteringAnArray/>
        <MappingAnArray/>
        <ReducingAnArray/>
      </section>
      <section className='Arrays--exercises'>
        <ArrayFromRange/>
        <Includes/>
        <Except/>
        <MovingAnElement/>
        <CountOccurences/>
        <GetMax/>
        <Movies/>
      </section>
      </main>
  );
}

export default App;
