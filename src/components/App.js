import React, { Component } from 'react'
import {add_reminder,delete_reminder,clear_reminder} from '../actions'
import { connect } from 'react-redux'
import moment from 'moment'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
class App extends Component{
    state = {
        text: '',
        date: new Date()
    }

    render_reminders = () =>{
        const {reminders} = this.props
        return (
            <div>

            
            <ul className="list-group">
                {
                    reminders.map(reminder => {
                        return(
                                <li key={reminder.id}className="list-group-item"> 
                                    <div>{reminder.text}</div>
                                    <div>{moment(new Date(reminder.date)).fromNow()}</div>
                                    <button 
                                        className="closeIcon remove btn btn-danger" 
                                        onClick={() => this.props.delete_reminder(reminder.id)}>X</button>
                                </li>
                            )
                    })
                }
            </ul>
             <button 
             className="clearReminder btn btn-danger btn-block"
             onClick={() => this.props.clear_reminder()}>Clear reminder</button>
             </div>
        )
        
        
    }

    render(){
        console.log(this.props)
        return (
           
            <div className="App">
                <img src=""/>
                <div className="reminder-title">
                    <h2>What should you do?</h2>
                </div>
               
                    <input 
                        className="form-control"
                        type="text"
                        placeholder="Enter what you will do.."
                        onChange = {(e) => this.setState({text: e.target.value})}
                        value={this.state.text}
                        required
                    />

                    <DatePicker
                    className="form-control"
                    selected={this.state.date}
                    onChange={date => this.setState({date: date})}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeCaption="time"
                    dateFormat="MMMM d, yyyy h:mm aa"
                    value={this.state.date}
                    />
                    <button 
                        className="btn btn-primary btn-block"
                        onClick={() => {
                            this.props.add_reminder(this.state.text,this.state.date) 
                            this.setState({text:'',date:this.state.date})
                            }}>Add reminder</button>
                        {this.render_reminders()}

                   
                
            </div>
        )
    }
}

// function mapDispatchToProps(dispatch){
//     return{
//         add_reminder : () => dispatch(add_reminder())
//     }
// }

export default connect(state => {
    return {
        reminders : state
    }
}, {
    add_reminder,
    delete_reminder,
    clear_reminder
})(App)