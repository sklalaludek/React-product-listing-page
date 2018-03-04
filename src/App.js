import React, {Component} from 'react';
import './App.css';
import Main from './Main.jsx';

class App extends Component {
    render() {
        const headerStyle = {
            height: '55px',
            backgroundColor: '#fffef9',
            padding: '20px',
            textAlign: 'center'
        }
        return (<div className="App">
            <header style={headerStyle}>
                Product listing page
            </header>
            <Main/>
        </div>);
    }
}

export default App;
