import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/Search'
import { IconName } from "react-icons/io"
import api from './components/TwitterApiConection'



class App extends Component {

  state = {
    twitts: []
  }

  async componentDidMount() {
    const response = await api.get();
    console.log(response.data)
    this.setState({ twits: response.data })
  }

  render() {
    return (
      <div>
        <h1>listar</h1>
      </div>
    )
  }
}

export default App;


// function App() {
//   return (
//     <div className="App">
//       <header >
//         <h1>Search test</h1>
//       </header>
//       <body style={{ marginLeft: '20px', marginRight: '20px' }}>
//         <Search ></Search>
//         <card>este é um card</card>
//       </body>
//     </div >
//   );
// }

