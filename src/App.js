import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor() {
        super()
        this.state = {
            your_url: ''
        }
    
    }


    handleSubmit = (e) => {
        e.preventDefault()
        const data = this.state
        //console.log(data)

        fetch('http://localhost:8000/url/create', {  
            method: 'POST',  
            headers: {
                'Content-Type': 'application/json'
            },
            //body: JSON.stringify(collection)
            body: JSON.stringify({'url' : data.your_url})
        })
        .then((res) => res.json() )
        .then((res) => console.log(res) )
        .catch((err) => console.warn(err) );
    }


    handleOnchange = (e) => {
        this.setState({
            your_url : e.target.value
        })
    }




  render() {
    return (
        <div className="App">
            <form onSubmit={this.handleSubmit}>

                <input type="text" name='your_url'
                    value={this.state.your_url} placeholder="Enter Url"
                    onChange={this.handleOnchange}/>

                <div> <input type='submit' value='Shorten'/> </div>
            </form>
            <div> {this.state.your_url} </div>
        </div>
    );
  }
}

export default App;
