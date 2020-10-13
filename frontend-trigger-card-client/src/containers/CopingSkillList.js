import React, { Component } from 'react';
import CopingSkillCard from '../components/CopingSkillCard';
import { connect } from 'react-redux';

export class CopingSkillList extends Component {
    render() {
        // console.log(this.props)
        const coping_skills = this.props.coping_skills.map((coping_skill, i) => <CopingSkillCard key={i} coping_skill={coping_skill}/>)
        return (
            <div>
                <h2>Coping Skills</h2>
                <ul>
                    { coping_skills }
                </ul>
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
