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
import ShallowCopy from './pages/shallowCopy';

function App() {
  return (
    <>
    <section className='additionalLearning'>
      <ShallowCopy/>
    </section>
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
      </section>
      </>
  );
}

export default App;
