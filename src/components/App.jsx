import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';
import 'normalize.css/normalize.css';
import '../styles/styles.scss';
import NotFoundPage from './NotFoundPage';
import Header from './Header';
import ExpenseDashboardPage from './ExpenseDashboardPage';
import AddExpensePage from './AddExpensePage';
import EditExpensePage from './EditExpensePage';
import HelpPage from './HelpPage';

const App = () => {
  return (
    <Router history={history}>
      <Header />
      <Switch>
        <Route exact path='/' component={ExpenseDashboardPage} />
        <Route exact path='/create' component={AddExpensePage} />
        <Route exact path='/edit/:id' component={EditExpensePage} />
        <Route exact path='/help' component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default App;
