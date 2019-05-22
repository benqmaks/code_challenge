import React from 'react';
import styles from './Home.styl';

class HomePage extends React.Component {
  static getInitialProps = () => {
    return {

    }
  };

  render() {
    return (
      <div className={styles.home}>
        <nav>
          <a href='/settings'>Go to Settings</a>
        </nav>
        This is home page;
      </div>
    )
  }
}

export default HomePage;
