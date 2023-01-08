import React from 'react'

const About = (props) => {
  return (
    <div>
      <h1>This Is About Page</h1>
      <ul>
        {
          props.posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))
        }
      </ul>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
  const data = await res.json()

  return {
    props: { posts: data }
  }
}

export default About