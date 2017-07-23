import React from 'react'
import { 
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom'
//import components
import Navbar from './Navbar/Navbar'
import DishesListAll from './DishesList/DishesListAll'
import DishesListByCuisine from './DishesList/DishesListByCuisine'
import AddNewDish from './AddNewDish'

export default class App extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			//control which filter to apply to the data query
			filterByRestaurant: null,
			filterByLocation: null,
			filterByCuisine: null,
			filterCuisineIsSelected: false,
			//control modals open/close states of filters
			modalFilterCuisineIsOpen: false
		}
		//bind here to improve React performance
		this.userFilterSelectionCuisine = this.userFilterSelectionCuisine.bind(this)	
		this.openModalFilterCuisine = this.openModalFilterCuisine.bind(this)
		this.closeModalFilterCuisine = this.closeModalFilterCuisine.bind(this)
	}

	userFilterSelectionCuisine (event) {
		this.setState({
			filterByCuisine: event.target.value, 
			modalFilterCuisineIsOpen: false, 
		})
	}

	openModalFilterCuisine (event) {
		event.preventDefault()
		this.setState({ modalFilterCuisineIsOpen: true })
	}

	closeModalFilterCuisine (event) {
		event.preventDefault()
		this.setState({ modalFilterCuisineIsOpen: false })
	}

	render () {
		return (
			<div>
				<Navbar
					userFilterSelectionCuisine={this.userFilterSelectionCuisine} 
					openModalFilterCuisine={this.openModalFilterCuisine}
					closeModalFilterCuisine={this.closeModalFilterCuisine}
					modalFilterCuisineIsOpen={this.state.modalFilterCuisineIsOpen}
					filterByCuisine={this.state.filterByCuisine}
				/>
				<Switch>
					<Route exact path='/' render={ () =>
						<DishesListAll
						/>}
					/>
					<Route path='/dishes-list-by-cuisine' render={ () =>
						<DishesListByCuisine
							filterByCuisine={this.state.filterByCuisine}
						/>}
					/>
				</Switch>
				<AddNewDish />
			</div>
		)
	}
}
