import React from 'react'
import { withApollo } from 'react-apollo'
//import queries
import allFiltersQuery from '../queries/allFiltersQuery'
//import components
import Navbar from './Navbar/Navbar'
import DishesList from './DishesList/index'
import AddNewDish from './AddNewDish'
//import utils
import arrayOfUniqueValues from '../utils/arrayOfUniqueValues'

class App extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			//control which filter keyword to apply to the data query
			filterByRestaurant: null,
			filterByCity: null,
			filterByCuisine: null,
			//fetches database for a complete list to feed the filters
			allRestaurants: null,
			allCities: null,
			allCuisines: null,
			//control modals open/close states of filters
			modalFilterRestaurantIsOpen: false,
			modalFilterCityIsOpen: false,
			modalFilterCuisineIsOpen: false
		}
		//bind here instead of in the props call. This improves React performance
		//methods for Restaurant Filter
		this.userFilterSelectionRestaurant = this.userFilterSelectionRestaurant.bind(this)	
		this.openModalFilterRestaurant = this.openModalFilterRestaurant.bind(this)
		this.closeModalFilterRestaurant = this.closeModalFilterRestaurant.bind(this)		
		//methods for City Filter
		this.userFilterSelectionCity = this.userFilterSelectionCity.bind(this)	
		this.openModalFilterCity = this.openModalFilterCity.bind(this)
		this.closeModalFilterCity = this.closeModalFilterCity.bind(this)
		//methods for Cuisine Filter
		this.userFilterSelectionCuisine = this.userFilterSelectionCuisine.bind(this)	
		this.openModalFilterCuisine = this.openModalFilterCuisine.bind(this)
		this.closeModalFilterCuisine = this.closeModalFilterCuisine.bind(this)
	}

	async componentDidMount() {
		const result = await this.props.client.query({
			query: allFiltersQuery
		})
		const allFilters = arrayOfUniqueValues(result.data.allDishes)
		this.setState({
			allRestaurants: allFilters[0],
			allCities: allFilters[1],
			allCuisines: allFilters[2],
			filterByRestaurant: allFilters[0],
			filterByCity: allFilters[1],
			filterByCuisine: allFilters[2]
		})
	}

	//--------------------------------------------------//
	//-----------METHODS FOR RESTAURANT FILTER----------//
	//--------------------------------------------------//

	userFilterSelectionRestaurant(event) {
		if(event.target.value === 'Todas') {
			this.setState({
				filterByRestaurant: this.state.allRestaurants, 
				modalFilterRestaurantIsOpen: false,
			})	
		}
		else {
			this.setState({
				filterByRestaurant: event.target.value, 
				modalFilterRestaurantIsOpen: false,
			})
		}
	}

	openModalFilterRestaurant(event) {
		event.preventDefault()
		this.setState({ modalFilterRestaurantIsOpen: true })
	}

	closeModalFilterRestaurant(event) {
		event.preventDefault()
		this.setState({ modalFilterRestaurantIsOpen: false })
	}

	//--------------------------------------------------//
	//--------------METHODS FOR CITY FILTER-------------//
	//--------------------------------------------------//

	userFilterSelectionCity(event) {
		if(event.target.value === 'Todas') {
			this.setState({
				filterByCity: this.state.allCities, 
				modalFilterCityIsOpen: false,
			})	
		}
		else {
			this.setState({
				filterByCity: event.target.value, 
				modalFilterCityIsOpen: false,
			})
		}
	}

	openModalFilterCity(event) {
		event.preventDefault()
		this.setState({ modalFilterCityIsOpen: true })
	}

	closeModalFilterCity(event) {
		event.preventDefault()
		this.setState({ modalFilterCityIsOpen: false })
	}

	//--------------------------------------------------//
	//------------METHODS FOR CUISINE FILTER------------//
	//--------------------------------------------------//

	userFilterSelectionCuisine(event) {
		if(event.target.value === 'Todas') {
			this.setState({
				filterByCuisine: this.state.allCuisines, 
				modalFilterCityIsOpen: false,
			})	
		}
		else {
			this.setState({
				filterByCuisine: event.target.value, 
				modalFilterCuisineIsOpen: false,
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

	//--------------------------------------------------//
	//------------------RENDER METHOD-------------------//
	//--------------------------------------------------//

	render () {
		return (
			<div>
				<Navbar
					//Filter Restaurant
					userFilterSelectionRestaurant={this.userFilterSelectionRestaurant}
					openModalFilterRestaurant={this.openModalFilterRestaurant}
					closeModalFilterRestaurant={this.closeModalFilterRestaurant}
					modalFilterRestaurantIsOpen={this.state.modalFilterRestaurantIsOpen}
					filterByRestaurant={this.state.filterByRestaurant}
					allRestaurants={this.state.allRestaurants}
					//Filter City
					userFilterSelectionCity={this.userFilterSelectionCity}
					openModalFilterCity={this.openModalFilterCity}
					closeModalFilterCity={this.closeModalFilterCity}
					modalFilterCityIsOpen={this.state.modalFilterCityIsOpen}
					filterByCity={this.state.filterByCity}
					allCities={this.state.allCities}
					//Filter Cuisine
					userFilterSelectionCuisine={this.userFilterSelectionCuisine} 
					openModalFilterCuisine={this.openModalFilterCuisine}
					closeModalFilterCuisine={this.closeModalFilterCuisine}
					modalFilterCuisineIsOpen={this.state.modalFilterCuisineIsOpen}
					filterByCuisine={this.state.filterByCuisine}
					allCuisines={this.state.allCuisines}
				/>
				<DishesList
					filterByRestaurant={this.state.filterByRestaurant}
					filterByCity={this.state.filterByCity}
					filterByCuisine={this.state.filterByCuisine}
				/>
				<AddNewDish />
			</div>
		)
	}
}

export default withApollo(App)
