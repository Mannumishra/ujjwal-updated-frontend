import About from "../../Component/About/About"
import MapSection from "../../Component/MapSection/MapSection"
import Product from "../../Component/Product/Product"
import Testimonial from "../../Component/Testimonial/Testimonial"
import CategoryPage from "../CategoryPage/CategoryPage"
import ProductPage from "../ProductPage/ProductPage"

function Home() {
    
  return (
    <div>
        <ProductPage/>
        <Product/>
        <CategoryPage />
        <About/>
        <Testimonial/>
        <MapSection/>
    </div>
  )
}

export default Home