import * as React from 'react';
import './App.css';
import Hello from '../components/Hello';

const logo = require('./logo.svg');

export interface st {
  value: string;
}

class App extends React.Component<{}, st> {

  constructor (props: {}) {
    super(props);
    this.state = {
      value: '0'
    };
  }

  componentDidMount () {
    setInterval(async () => {
      let data = await this.getFetch('https://weixin.healthweather.cn/showyd/api/v1/pvyear'); 
      this.setState({
        value: data[0].value
      });
    }, 1000);
      
  }
  
  getFetch = (url: string) => {
    return new Promise((reslove, reject) => {
      fetch(url)
       .then((response) => {
         return response.json();
       })
        .then( data => {
          reslove(data);
        })
       .catch(err => {
         reject(err);
       }); 
    });
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div>
          <Hello />
        </div>
        <div>
          {this.state.value}
        </div>
      </div>
    );
  }
}

export default App;
