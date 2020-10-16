import React, { Component } from 'react';
import TriggerCard from '../components/TriggerCard';
import WarningSignCard from '../components/WarningSignCard';
import CopingSkillCard from '../components/CopingSkillCard';
import { connect } from 'react-redux'

export class Home extends Component {
    render() {
        console.log(this.props)
        const triggers = this.props.triggers.map((trigger, i) => <TriggerCard key={i} trigger={trigger} />)
        const warning_signs = this.props.warning_signs.map((warning_sign, i) => <WarningSignCard key={i} warning_sign={warning_sign} />)
        const coping_skills = this.props.coping_skills.map((coping_skill, i) => <CopingSkillCard key={i} coping_skill={coping_skill}/>)
        return (
            <div>
                <div>
                    Welcome to your trigger card
                </div>
                <div>
                    <h2>Triggers</h2>
                    <ul>
                        { triggers }
                    </ul>
                </div>
                <div>
                    <h2>Warning Signs</h2>
                    <ul>
                        { warning_signs }
                    </ul>
                </div>
                <div>
                    <h2>Coping Skills</h2>
                    <ul>
                        { coping_skills }
                    </ul>
                </div>
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
