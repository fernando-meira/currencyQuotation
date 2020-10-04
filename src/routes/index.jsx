import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Main } from '../pages';
import GlobalStyle from '../themes/global';

export default function Routes() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={Main} />
      </Switch>
    </>
  );
}
