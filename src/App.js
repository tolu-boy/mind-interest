import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router } from 'react-router-dom';
import Views from './views';
import { Route, Switch } from 'react-router-dom';
import { ThemeSwitcherProvider } from "react-css-theme-switcher";
import { THEME_CONFIG } from './configs/AppConfig';
import  axios from 'axios'
import {useStore}  from './zustand'

const themes = {
  dark: `${process.env.PUBLIC_URL}/css/dark-theme.css`,
  light: `${process.env.PUBLIC_URL}/css/light-theme.css`,
};

 const Axios = axios.create({
  baseURL: 'https://stormy-castle-63253.herokuapp.com/admin'
})


Axios.interceptors.request.use(
  async config => {
   
    config.headers = { 
      'Authorization': `Bearer ${useStore.getState().token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    return config;
  },
  error => {
    Promise.reject(error)
});



function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <ThemeSwitcherProvider themeMap={themes} defaultTheme={THEME_CONFIG.currentTheme} insertionPoint="styles-insertion-point">
          <Router>
            <Switch>
              <Route path="/" component={Views}/>
            </Switch>
          </Router>
        </ThemeSwitcherProvider>
      </Provider>
    </div>
  );
}
export {Axios}
export default App;
