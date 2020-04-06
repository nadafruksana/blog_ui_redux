import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class PostShow extends React.Component{
    constructor() {
        super()
        this.state = {
            user : {},
            posts : [],
            comments : []
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id

        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then( (response) => {
            const user = response.data
            this.setState({user})
        })

        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then( (response) => {
            const posts = response.data
            this.setState({posts})
        })

        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then( (response) => {
            const comments = response.data
            this.setState({comments})
        })

        .catch( (err) => {
            console.log(err)
        })
    }

    render(){
        return (
            <div>
                <h1>Username : {this.state.user.name}</h1>
                <h2>Title : {this.state.posts.title}</h2>

                <h3>Body :</h3>
                <p><b>{this.state.posts.body}</b></p>
                <hr />

                <h2>comments :</h2>
                <ul>
                    {
                        this.state.comments.map(function(comment){
                        return <li key={comment.id}>{comment.body}</li>
                        })
                    }
                </ul>
                <hr />

                <Link to={`/users/${this.state.user.id}`}>More posts of author: {this.state.user.name}</Link>
            </div>
        )
    }
}

export default PostShow




// import React from 'react'
// import { connect } from 'react-redux'
// //import {startGetUsers} from './actions/usersAction'
// class PostShow extends React.Component {
//     constructor(){
//         super()
//         this.state={
//             posts:[]
//         }
//     }
    
//     render() {
//         return (
//             <div>
//                 {
//                     this.props.post ? ( <div> 
//                         <h2>Post Show - {this.props.match.params.id}</h2>
//                         <p> {this.props.post.title} <br/>>Body{this.props.post.body}</p> 
//                     </div> ) : (
//                         <p> loading....</p>
//                             //{this.props.dispatch(startGetUsers())}
//                     )
//                 }
                
//             </div>
//         )
//     }
// }

// const mapStateToProps = (state, props) => {
//     return {
//     post: state.posts.find(post =>post.id === props.match.params.id)
//     }
// }
// export default connect(mapStateToProps)(PostShow)

