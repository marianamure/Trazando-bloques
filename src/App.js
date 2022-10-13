import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import styles from './components/App.module.css';

                
function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Navigation />
      <Main />
    </div>
  );
}

export default App;
