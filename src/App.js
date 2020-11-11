import React, { Component } from 'react';
import { Layout } from 'antd';
import { Switch, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar/Sidebar';
import LiveTraffic from './components/LiveTraffic/LiveTraffic';
import Simulate from './components/LiveTraffic/Simulate';
import AmbulanceTracker from './components/LiveTraffic/AmbulanceTracker';
import Heatmap from './components/LiveTraffic/Heatmap';
import Statistics from './components/LiveTraffic/Statistics';
import Fine from './components/Fine/Fine';
import RegisterationForm from './components/registerationForm/registration'

const { Header, Content } = Layout;

class App extends Component {
  render() {
    return (
      <Layout style={{ flexDirection: 'row' }} >
        <Sidebar />
        <Layout className={styles.header}>
          <Header
            style={{
              padding: '0 30px',
              color: 'white',
              fontSize: 20,
              fontWeight: 100,
              backgroundColor:'#17172f'
            }}
          >
            Dashboard
          </Header>
          <Content style={{ padding: 20 }}>
            <div style={styles.card}>
              <Switch>
                <Route path="/vehicleRegisteration" component={RegisterationForm} />
                <Route path="/heatmap" component={Heatmap} />
                <Route path="/corridor" component={AmbulanceTracker} />
                <Route path="/stats" component={Statistics} />
                <Route path="/sim" component={Simulate} />
                <Route path="/fine" component={Fine} />
                <Route path="/" component={LiveTraffic} />
              </Switch>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

const styles = {
  card: {
    width: '100%',
    height: 'calc(90vh)',
    background: 'white',
    boxShadow: '0px 2px 15px rgba(0,0,0,.2)',
    borderRadius: '3px'
  },
  header: {
    backgroundColor: 'green',
  }
};
export default App;
