import { useEffect, useState } from 'react';
import Main from './containers/Main';

import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Products from './components/Products';

import './App.scss';

const data = {
	title: 'Edgemony Shop',
	description: 'A fake e-commerce with a lot of potential',
	logo: 'https://edgemony.com/wp-content/uploads/2020/03/cropped-Logo-edgemony_TeBIANCO-04.png',
	cover: 'https://images.pexels.com/photos/4123897/pexels-photo-4123897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
};

const { title, description, logo, cover } = data;

function App() {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		setLoading(true);
		setError(false);
		fetch('https://fakestoreapi.com/products')
			.then((res) => res.json())
			.then((products) => {
				console.log(products);
				setProducts(products);
				setLoading(false);
			})
			.catch((err) => {
				setLoading(false);
				setError(true);
				console.log(err);
			});
	}, []);

	return (
		<>
			<Header logo={logo} />
			<Main>
				<Hero cover={cover} description={description} title={title} />
				<Products products={products} />
			</Main>
			<Footer title={title} />
		</>
	);
}

export default App;
