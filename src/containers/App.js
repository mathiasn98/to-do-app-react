import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import ToDoListPage from '../components/ToDoListPage';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={ToDoListPage}/>
    </Switch>
  );
}

export default App;
