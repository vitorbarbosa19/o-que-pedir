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
			redirectPath: null,
			//control modals open/close states of filters
			modalFilterCuisineIsOpen: false
		}
		//bind here to improve React performance
		this.userFilterSelectionCuisine = this.userFilterSelectionCuisine.bind(this)	
		this.openModalFilterCuisine = this.openModalFilterCuisine.bind(this)
		this.closeModalFilterCuisine = this.closeModalFilterCuisine.bind(this)
		this.clearFilter = this.clearFilter.bind(this)
	}

	userFilterSelectionCuisine(event) {
		this.setState({
			filterByCuisine: event.target.value, 
			modalFilterCuisineIsOpen: false,
			filterCuisineIsSelected: true
		})
	}

	clearFilter() {
		this.setState({
			modalFilterCuisineIsOpen: false,
			redirectPath: null,
			filterByCuisine: null
		})
	}

	componentDidUpdate() {
		if(this.state.filterCuisineIsSelected) {
			this.setState({ 
				redirectPath: '/dishes-list-by-cuisine',
				filterCuisineIsSelected: false
			})
		}
	}

	openModalFilterCuisine(event) {
		event.preventDefault()
		this.setState({ modalFilterCuisineIsOpen: true })
	}

	closeModalFilterCuisine(event) {
		event.preventDefault()
		this.setState({ modalFilterCuisineIsOpen: false })
	}

	render () {
		return (
			<div>
			{this.state.redirectPath && <Redirect to={this.state.redirectPath} />}
				<Navbar
					userFilterSelectionCuisine={this.userFilterSelectionCuisine} 
					openModalFilterCuisine={this.openModalFilterCuisine}
					closeModalFilterCuisine={this.closeModalFilterCuisine}
					modalFilterCuisineIsOpen={this.state.modalFilterCuisineIsOpen}
					filterByCuisine={this.state.filterByCuisine}
					redirectPath={this.state.redirectPath}
					clearFilter={this.clearFilter}
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
