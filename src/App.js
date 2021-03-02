import "./App.css";
import Header from "./components/Header"
import Hero from "./components/Hero"
import Products from "./components/Products";
import Footer from "./components/Footer"

const fakeProducts = require("./mocks/data/products.json");
const currentYear=new Date().getFullYear();

const data = {
  title: "Edgemony Shop",
  description: "A fake e-commerce with a lot of potential",
  logo:
    "https://edgemony.com/wp-content/uploads/2020/03/cropped-Logo-edgemony_TeBIANCO-04.png",
  company: 'SZH Inc.',
  cover:
    "https://images.pexels.com/photos/4123897/pexels-photo-4123897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  products: fakeProducts,
};



function App() {
  return (
  <div className="App">
    <Header logo={data.logo} />
    <Hero title={data.title} image={data.cover} description={data.description}/>
    <Products products={data.products}/>
    <Footer logo={data.logo} company={data.company} year={currentYear}/>
  </div>
  )}

export default App;
