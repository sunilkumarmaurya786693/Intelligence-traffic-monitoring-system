import React, { Component } from 'react';
import red from '../../images/red_light.png';
import yellow from '../../images/yellow_light.png';
import green from '../../images/green_light.png';

// class Lights extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       num: 0
//     }
//     this.update = this.update.bind(this);
//   }
//   update = () => {
//     if(this.state.num >= 3){
//       this.setState((prevState) => ({
//         num: 0
//       }));
//     }
//     else {
//       this.setState((prevState) => ({
//         num: prevState.num + 1
//     }));
//   }
//     console.log(this.state.num)
//   }
//
//   componentDidMount(){
//     this.interval = setInterval(() => this.update(), 3000);
//   }
//   componentWillUnmount() {
//     clearInterval(this.interval);
//   }
//
//   render(){
//     const pos = [{top: -10, left: 0}, {top: -10, right: 0}, {bottom: -10, right: 0}, {bottom: -10, left: 0}]
//   return(
//     <div style={{width:80, height: 80, position: 'relative', transform: 'scaleX(-1)'}}>
//     <img src={red_light} style={{width: "20%", position: 'absolute', top: -10, left: 0}}/>
//     <img src={red_light} style={{width: "20%", position: 'absolute', top: -10, right: 0}}/>
//     <img src={green_light} style={{zIndex: 1000, width: "20%", position: 'absolute', ...pos[this.state.num]}}/>
//     <img src={red_light} style={{width: "20%", position: 'absolute', bottom: -10, right: 0}}/>
//     <img src={red_light} style={{width: "20%", position: 'absolute', bottom: -10, left: 0}}/>
//     </div>
//   )
//   }
// }

export default class Trafficlight extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const color = this.props.color;
    let newColor;
    if(color === 'red'){
      newColor = red;
    }
    if(color === 'yellow'){
      newColor = yellow
    }
    if(color === 'green'){
      newColor = green
    }

    return (
      <div>
        <img
          src={newColor}
          alt="light"
          style={{
            width: '20px' //, position: 'absolute', top: -10, left: 0
          }}
        />
        <h1 style={{position: 'absolute', right: 5, top: 0, background: '#ecf0f1', width: 70, textAlign: 'center', padding: 5, borderRadius: 5, border: '1px solid #ddd'}}>{this.props.count} 🚗</h1>

      </div>
    );
  }
}
