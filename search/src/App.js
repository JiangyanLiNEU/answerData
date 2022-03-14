import './App.css'
import {Search} from './Components/Search'
import {Add} from './Components/Add'
import {Header} from './Components/Header'
import styled from 'styled-components'
import {Component} from 'react'

class App extends Component {
  render(){
    const height = window.innerHeight;
    const width = window.innerWidth;
    const Div = styled.div`
    height: ${height*0.9+"px"};
    width: ${width*0.9+'px'};
    margin-top: 20px;
    margin-left: ${width*0.1/2+'px'};
    padding: 10px;
    `
    return (
      <Div className="App">
        <Header/>
        <hr/> 
        <Search/>
        <hr/>
        <Add/>
        <hr/>
      </Div>
    );
  }
}

export default App;
