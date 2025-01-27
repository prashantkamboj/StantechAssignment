/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import Navigator from './src/Navigator/Navigator';
import { createInitialyTable } from './src/Utils/UtilityMethods';
import {Provider} from 'react-redux';
import { store } from './src/redux/store';


function App(): React.JSX.Element {
  useEffect(() => {
    createInitialyTable();
  }, []);
  return (
    <Provider store={store}>
   <Navigator />
   </Provider>
  );
}


export default App;
