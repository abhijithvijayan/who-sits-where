import React, {Component} from 'react';

import Layout from './src/components/layout';
import HomeScreen from './src/navigation/navigators';

class App extends Component {
  render() {
    return (
      <Layout>
        <HomeScreen />
      </Layout>
    );
  }
}

export default App;
