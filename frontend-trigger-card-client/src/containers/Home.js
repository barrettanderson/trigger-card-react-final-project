import React, { Component } from 'react';
import TriggerCard from '../components/TriggerComponents/TriggerCard';
import WarningSignCard from '../components/WarningSignComponents/WarningSignCard';
import CopingSkillCard from '../components/CopingSkillComponents/CopingSkillCard';
import { connect } from 'react-redux'

export class Home extends Component {
    render() {
        const triggers = this.props.triggers.map((trigger, i) => <TriggerCard key={i} trigger={trigger}/>)
        const warning_signs = this.props.warning_signs.map((warning_sign, i) => <WarningSignCard key={i} warning_sign={warning_sign} />)
        const coping_skills = this.props.coping_skills.map((coping_skill, i) => <CopingSkillCard key={i} coping_skill={coping_skill}/>)
        return (
            <div className="container-fluid">
                <h1>Trigger Card</h1>
                <div className="container-fluid card bg-warning">
                <div className="card-header font-weight-bold"><h2>Triggers</h2></div>
                    <div className="card-body">
                        <h5 className="card-title">Things that make me feel mad, sad, or upset</h5>
                        <ul>
                            { triggers }
                        </ul>
                        <br />
                    </div>
                </div>
                <div className="container-fluid bg-danger">
                <div className="card-header"><h2>Warning Signs</h2></div>
                    <div className="card-body">
                        <h5 className="card-title">Others know I am mad, sad, or upset because:</h5>
                        <ul>
                            { warning_signs }
                        </ul>
                        <br />
                    </div>
                </div>
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
                    </div>
                </div>
                <br />
                <footer className="text-right">
                    <p>Adapted from: Murphy MS, Tim and Maggie Bennington-Davis Md.</p>
                    <p><u>Restraint and Seclusion: The Model for Eliminating Their Use in Healthcare.</u></p>
                    <p>Marblehead: HCPro, Inc, 2005. 11-14.</p>
                </footer>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        triggers: state.triggersReducer,
        warning_signs: state.warningSignsReducer,
        coping_skills: state.copingSkillsReducer
    }
}

export default connect(mapStateToProps)(Home)
