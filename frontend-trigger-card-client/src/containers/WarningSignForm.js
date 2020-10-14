import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createWarningSign } from '../actions/warningSignActions';

class WarningSignForm extends Component {
    state = {
        name: "",
        description: ""
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();

        const warning_sign = {
            warning_sign: this.state
        }

        this.props.createWarningSign(warning_sign)

        this.setState({
            name: "",
            description: ""
        })
    }
    
    render() {
        return (
            <div>
                <p>test</p>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <label htmlFor="name">Name: </label>
                        <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label htmlFor="description">Description: </label>
                        <input type="text" name="description" id="description" value={this.state.description} onChange={this.handleChange} />
                    </div>

                    <input type="submit" value="Add Warning Sign" />
                </form>
            </div>
        )
    }
}

export default connect(null, { createWarningSign })(WarningSignForm)
