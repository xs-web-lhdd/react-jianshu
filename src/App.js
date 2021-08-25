import { GlobalStyle } from './style.js';
import { Provider } from 'react-redux'
import Header from './common/header/index'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Header/>
      <GlobalStyle/>
    </Provider>
  )
}

export default App;
