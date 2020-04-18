import {ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDER} from '../types'

export const add_reminder = (text,date) => {
    const action = {
        type : ADD_REMINDER,
        text : text,
        date : date
    }
    console.log("Add",action)
    return action
}

export const delete_reminder = (id) =>{
    const action = {
        type : DELETE_REMINDER,
        id : id
    }
    console.log("Delete",action)
    return action
}

export const clear_reminder = () => {
    const action = {
        type : CLEAR_REMINDER
    }
    return action
}