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
                        <p>Calm: I can calm by?</p>
                        <p>Options: My options/choices are?</p>
                        <p>Perform: My best options are?</p>
                        <p>Evaluate: How did my option work?</p>
                        <br />
                        <h3>Add Coping Skill</h3>
                        <CopingSkillForm />
                    </div>
            </div>
    //     <div className="container-fluid bg-danger">
        //     <div className="card-header"><h2>Warning Signs</h2></div>
        //         <div className="card-body">
        //             <h5 className="card-title">Others know I am mad, sad, or upset because:</h5>
        //             <ul>
        //                 { warning_signs }
        //             </ul>
        //             <h3>Add Warning Sign</h3>
        //             <WarningSignForm />
        //         </div>
        // </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        coping_skills: state.copingSkillsReducer
    }
} 

export default connect(mapStateToProps)(CopingSkillList)
