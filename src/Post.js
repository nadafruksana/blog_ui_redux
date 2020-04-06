import React from 'react'
import { connect } from 'react-redux'
import { startGetPosts } from './actions/postAction'
import {Link} from 'react-router-dom'

class Post extends React.Component{
    componentDidMount() {
        if (this.props.posts.length === 0) {
            this.props.dispatch(startGetPosts())
        }
    }

    render(){
        return(
            <div>
                <h1>Listing Posts - {this.props.posts.length}</h1>
                <ul>
                    {
                        this.props.posts.map(post => {
                            return <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

 export default connect(mapStateToProps)(Post)

// import React from 'react'
// import axios from 'axios'
// import { startGetPosts } from './actions/postAction'
// import { connect } from 'react-redux'
// import {Link} from 'react-router-dom'

//  class Post extends React.Component{
   
//     componentDidMount(){
//         if (this.props.posts.length === 0) {
//             this.props.dispatch(startGetPosts())
//         }
//     }
//     render() {
//         console.log('render') 
//         return (
//             <div> 
//                  <h2>Listing Posts {this.props.posts.length}</h2>
//                  <ul>
//                      {this.props.posts.map(post =>{
//                          return <li key={post.id}><Link to={`/post/${post.id}`}>
//                              {post.title}
//                              </Link></li>
//                      })}
//                  </ul>
//             </div>
//         )
//     }
// }
// const mapStateToProps = (state) => {
//     return {
//         posts: state.posts
//     }
// }
// export default connect(mapStateToProps)(Post)

