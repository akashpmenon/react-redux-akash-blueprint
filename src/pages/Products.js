import { Link } from 'react-router-dom'

function Products() {
  return <h1>Test123 <Link to={'..'} relative={'path'}>Back</Link></h1>;
}

export default Products;