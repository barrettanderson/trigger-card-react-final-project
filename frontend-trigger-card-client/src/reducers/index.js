import{ combineReducers } from 'redux';
import triggersReducer from './triggersReducers';
import warningSignsReducer from './warningSignsReducers'
import copingSkillsReducer from './copingSkillsReducers'


export default combineReducers({
    triggersReducer,
    warningSignsReducer, 
    copingSkillsReducer
})