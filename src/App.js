import React from 'react';
import { useDispatch } from 'react-redux';
import HomePage from './pages/HomePage';

import * as actions from './redux/actions';

function App() {
  const dispatch = useDispatch(); // trigger 1 action

  dispatch(actions.getPosts.getPostRequest());

  return (
    <HomePage />
  );
}

export default App;
