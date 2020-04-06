import React from 'react'
import { connect } from 'react-redux'
//import {startGetUsers} from './actions/usersAction'
class UserShow extends React.Component {
    
    render() {
        return (
            <div>
                {
                    this.props.user ? ( <div> 
                        <h2>User Show - {this.props.match.params.id}</h2>
                        <p> {this.props.user.name} - {this.props.user.email}</p> 
                    </div> ) : (
                        <p> loading....</p>
                            //{this.props.dispatch(startGetUsers())}
                    )
                }
                
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        user: state.users.find(user => user.id == props.match.params.id)
    }
}
export default connect(mapStateToProps)(UserShow)

