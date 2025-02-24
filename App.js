import { NavigationContainer } from '@react-navigation/native';
import Main from './screens/MainComponent';
import { store } from './redux/store';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </Provider>
  );
}

