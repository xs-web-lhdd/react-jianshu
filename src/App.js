import { GlobalStyle } from './style.js';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header/index'
import Home from './pages/home/index'
import Detail from './pages/detail/index'
import Login from './pages/login/index'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div>
        <GlobalStyle/>
        <BrowserRouter>
          <Header/>
          <div>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/login' component={Login}></Route>
            <Route exact path='/detail/:id' component={Detail}></Route>
          </div>
        </BrowserRouter>
      </div>
    </Provider>
  )
}

export default App;
