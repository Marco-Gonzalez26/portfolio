// containers
import About from './containers/About'
import Work from './containers/Work'
import Testimonial from './containers/Testimonial'
import Header from './containers/Header'
import Skills from './containers/Skills'
import Footer from './containers/Footer'

// Components
import Navbar from './components/Navbar'

// Styles
import './App.scss'

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App
