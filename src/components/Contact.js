import React from 'react'
import axios from 'axios'

class Contact extends React.Component
{
    state={
        posts: []
    }

    componentDidMount()
    {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res);
            this.setState({
            posts:res.data.slice(0,10)
        })
    })
    }

    render() {
        //destructure
        const { posts } = this.state;

        const postList = posts.length ? (
            posts.map(post => {
                return(<div className="post card" key={post.id}>
                    <div className="card-content">
                        <span className="card-title">
                            {post.title}
                        </span>
                        <p>{post.body}</p>
                    </div>
                    
                </div>)
            })
        ) : (
            <div className="center">No contacts present</div>
        );
        return(
            <div className="container">
                <h1>Contact</h1>
                {postList}
            </div>
        )
    }
}

export default Contact