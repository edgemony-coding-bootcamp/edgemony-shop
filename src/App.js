import './App.scss';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Main from './containers/Main';

const fakeProducts = require('./mocks/data/products.json');

const data = {
	title: 'Edgemony Shop',
	description: 'A fake e-commerce with a lot of potential',
	logo: 'https://edgemony.com/wp-content/uploads/2020/03/cropped-Logo-edgemony_TeBIANCO-04.png',
	cover: 'https://images.pexels.com/photos/4123897/pexels-photo-4123897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
	products: fakeProducts,
};

const { title, description, logo, cover, products } = data;

function App() {
	console.log(title);
	console.log(description);
	console.log(logo);
	console.log(cover);
	console.log(products);
	return (
		<>
			<Header logo={logo} title={title} />
			<Main>
				<Hero cover={cover} description={description} />
			</Main>
			<Footer title={title} />
		</>
	);
}

export default App;
