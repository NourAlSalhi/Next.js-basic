
const PostId = (props) => {
  return (
    <div>
        <h2>This page is details</h2>
        <p>{props.posts.title}</p>
        <p>{props.posts.body}</p>
    </div>
  )
}
export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    const data = await res.json()
  
    const paths = data.map(post => {
      return {
        params: { id: `${post.id}` }
      }
    })
  
    return {
      paths,
      fallback: false
    }
  }
  
  export const getStaticProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const data = await res.json()
  
    return {
      props: { posts: data }
    }
  }
  
export default PostId