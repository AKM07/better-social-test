import React, {useEffect, useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import NavigationStack from './src/routes/NavigationStack';


function App(): JSX.Element {

  return (
    <NavigationContainer>
      <NavigationStack />
    </NavigationContainer>
  );
}

export default App;
