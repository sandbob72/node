import React, {Component} from 'react'
import axios from 'axios';

class Weather extends Component {

    state = { user:'sandbob72' , data:''}
 
    componentDidMount = () => this.fetchUser(this.state.user)
 
    fetchUser = (USER) => {
        axios.get('https://samples.openweathermap.org/data/2.5/weather?zip=94040,us&appid=b6907d289e10d714a6e88b30761fae22')
            .then(response => {
                this.setState({data: response.data})
                console.log(response.data)
            })
    }
 
    render() {
        const {data} = this.state
        if (data)
            return ( <div>{data.name}</div> )
        return (<div>.</div>);
    }
 }
 
 export default Weather