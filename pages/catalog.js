import Layout from '../components/Layout'
//import TeamCard from '../components/teamCard'

import Products from '../components/catalog/products'
import Entertain from '../components/catalog/entertain'

import MinFooter from '../components/catalog/minFooter'
const catalog = () => (
  <Layout >

    <div>

      <Entertain />
      <Products />
      <MinFooter />
      
    </div>

  </Layout>
)
export default catalog