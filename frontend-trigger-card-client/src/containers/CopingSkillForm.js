import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createCopingSkill } from '../actions/copingSkillActions'

export class CopingSkillForm extends Component {
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

        const coping_skill = {
            coping_skill: this.state
        }

        this.props.createCopingSkill(coping_skill)

        this.setState({
            name: "",
            description: ""
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <label htmlFor="name">Name: </label>
                        <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="description">Description: </label>
                        <input type="text" name="description" id="description" value={this.state.description} onChange={this.handleChange} />
                    </div>

                    <input type="submit" value="Add Coping Skill" />
                </form>
            </div>
        )
    }
}

export default connect(null, { createCopingSkill })(CopingSkillForm)
