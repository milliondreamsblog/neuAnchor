import { Hero } from '../components/Hero'
import Header from '../components/Header'
import About from '../components/About'
import Brands from '../components/Brands'
import Trust from '../components/Trust'
import Footer from '../components/Footer'
import CTA from '../components/CTA'
import Stories from '../components/Stories'

const Homepage =() => {
    return(
        <div>
            <Header />
            <Hero />
            <About />
            <Brands />
            <Trust />
            <Stories />
            <CTA />
            <Footer />
        </div>
    )
}

export default Homepage;