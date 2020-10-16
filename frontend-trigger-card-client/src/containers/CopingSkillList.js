import React, { Component } from 'react';
import CopingSkillCard from '../components/CopingSkillComponents/CopingSkillCard';
import { connect } from 'react-redux';
import CopingSkillForm from './CopingSkillForm'

export class CopingSkillList extends Component {
    render() {
        const coping_skills = this.props.coping_skills.map((coping_skill, i) => <CopingSkillCard key={i} coping_skill={coping_skill}/>)
        return (
            <div className="container-fluid bg-success">
                <div className="card-header"><h2>Coping Skills</h2></div>
                    <div className="card-body">
                        <h5 className="card-title">When I am mad, sad, or upset I manage by:</h5>
                        <ul>
                            { coping_skills }
                        </ul>
                        <br />
                        <h3>"New" Cope Sequence</h3>
                        <p><u>C</u>alm: I can calm by?</p>
                        <p><u>O</u>ptions: My options/choices are?</p>
                        <p><u>P</u>erform: My best options are?</p>
                        <p><u>E</u>valuate: How did my option work?</p>
                        <br />
                        <h3>Add Coping Skill</h3>
                        <CopingSkillForm />
                    </div>
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
