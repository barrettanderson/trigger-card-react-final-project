import React, { Component } from 'react';
import { connect } from 'react-redux'

class TriggerForm extends Component {
    state = {
        name: "",
        description: ""
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    render() {
        return (
            <div>
                <p>test</p>
                <form>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default TriggerForm
