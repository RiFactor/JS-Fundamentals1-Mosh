import logo from './logo.svg';
import './App.css';

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

function App() {
  return (
    <main>
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
      </section>
      </main>
  );
}

export default App;
