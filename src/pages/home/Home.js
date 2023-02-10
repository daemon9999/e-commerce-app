import React from 'react'
import Offers from 'components/first-body-components/Offers'
import Tab from 'components/first-body-components/Tab'
import ItemsList from 'components/first-body-components/ItemsList'
import products1 from "api/products1.json"
import products2 from "api/products2.json"
import QuoteForm from 'components/first-body-components/QuoteForm'
import Recommended from 'components/first-body-components/Recommended'
import Services from 'components/first-body-components/Services'
import Regions from 'components/first-body-components/Regions'
const Home = () => {
   

    
  
  return (
    <div className='px-[130px] flex flex-col container '>
      <Tab/>
      <Offers/>
      <ItemsList categoryTitle={"Home and outdoor"} products={products1} categoryBackground={"furniture"}/>
      <ItemsList categoryTitle={"Consumer electronics and gadgets"} products={products2} categoryBackground={"electronic"}/>
      <QuoteForm/>
      <Recommended/>
      <Services/>
      <Regions/>
    </div>
  )
}

export default Home