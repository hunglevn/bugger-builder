import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BuggerBuilder from './containers/BuggerBuilder/BuggerBuilder';

class App extends Component {
  render = (props) => {
    return (
      <div>
        <Layout>
          <BuggerBuilder></BuggerBuilder>
        </Layout>
      </div>
    );
  }
}
export default App;
