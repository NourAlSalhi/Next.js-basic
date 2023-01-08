import React from 'react'
import Link from 'next/link'
const About = (props) => {
  return (
    <div>
      <h1>This Is About Page</h1>
      {
        props.posts.map(post=>{
          <div key={post.id}>
            <Link href={`/about/${post.id}`}>{post.title}</Link>
          </div>
        })
      }
      <h3>$$$$$$$$$$$</h3>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
  const data = await res.json()

  return {
    props: { posts: data }
  }
}
export default About