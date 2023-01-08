import Link from "next/link"
const HomePage = (props) => {
  const { products } = props
  return (
    <div>
      <h1> The Home Page </h1>
      <ul>
        <li><Link href="/portfolio">Portfolio</Link></li>
        <li><Link href="/clients">Clients</Link></li>
        <li><Link href="/about">About</Link></li>
      </ul>
      <hr />
      <ul>
        {  products.map(product => (
          <li key={product.id}> {product.title} </li>
        ))}
      </ul>
    </div>
  )
}
export async function getStaticProps() {
  //always return object has props key
  return {
    props: {
      products: [{ id: '1', title: 'Product 1' }]
    }
  }
}
export default HomePage