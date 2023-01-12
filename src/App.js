import logo from './logo.svg';
import './App.css';
import ObjEnumerateProps from './pages/JS1/Objects/enumeratingproperties';
import ExerciseAddressObject from './pages/JS1/Objects/exerciseaddressobject';
import ExerciseFactoryAndConstructorFunctions from './pages/JS1/Objects/exerciseFactoryAndConstructorFunctions';
import ExerciseObjectEquality from './pages/JS1/Objects/exerciseObjectEquality';
import ExerciseBlogPostObject from './pages/JS1/Objects/exerciseBlogPostObject';
import ExerciseConstructorFunctions from './pages/JS1/Objects/exerciseConstructorFunctions';

function App() {
  return (
    <>
      <ObjEnumerateProps/>
      <ExerciseAddressObject/>
      <ExerciseFactoryAndConstructorFunctions/>
      <ExerciseObjectEquality/>
      <ExerciseBlogPostObject/>
      <ExerciseConstructorFunctions/>
      </>
  );
}

export default App;
