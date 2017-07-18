import React from 'react'
//import components
import Navbar from './Navbar/Navbar'
import DishesList from './DishesList/DishesList'
import AddNewDish from './AddNewDish'

const App = () => (
	<div>
		<Navbar />
		<DishesList />
		<AddNewDish />
	</div>
)

export default App