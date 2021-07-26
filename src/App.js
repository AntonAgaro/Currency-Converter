import React, {useCallback} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCurrencyCourses } from './redux/actions/coursesActions';
import Converter from './components/Converter/Converter';
import NavBar from "./components/NavBar/NavBar";
import Courses from './components/Courses/Courses';


function App() {
    const dispatch = useDispatch();
    const getCourses = useCallback(
      () => dispatch(getCurrencyCourses()),
      [dispatch]
    )
    getCourses();

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path="/" exact component={Converter}/>
          <Route path="/courses" component={Courses}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
