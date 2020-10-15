import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteCopingSkill } from '../actions/copingSkillActions'

export class CopingSkillButtons extends Component {
    handleClick = () => {
        this.props.deleteCopingSkill(this.props.coping_skill.id)
    }
    
    render() {
        return (
            <button onClick={this.handleClick}>x</button>
        )
    }
}

export default connect(null, { deleteCopingSkill })(CopingSkillButtons)
