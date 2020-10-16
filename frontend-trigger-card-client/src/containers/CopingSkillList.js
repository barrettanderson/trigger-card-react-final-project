import React, { Component } from 'react';
import CopingSkillCard from '../components/CopingSkillComponents/CopingSkillCard';
import { connect } from 'react-redux';
import CopingSkillForm from './CopingSkillForm'

export class CopingSkillList extends Component {
    render() {
        const coping_skills = this.props.coping_skills.map((coping_skill, i) => <CopingSkillCard key={i} coping_skill={coping_skill}/>)
        return (
            <div className="container-fluid">
                <h2>Coping Skills</h2>
                <ul>
                    { coping_skills }
                </ul>
                <h3>Add Coping Skill</h3>
                <CopingSkillForm />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        coping_skills: state.copingSkillsReducer
    }
} 

export default connect(mapStateToProps)(CopingSkillList)
