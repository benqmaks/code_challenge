import React from 'react';
import styles from './Settings.styl';

class SettingsPage extends React.Component {
  static getInitialProps = () => {
    return {};
  };

  render() {
    return (
      <div className={styles.settings}>
        <nav>
          <a href='/'>Go Home</a>
        </nav>
        This is settings page
      </div>
    )
  }
}

export default SettingsPage;
