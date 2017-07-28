import React from 'react'
import { withApollo } from 'react-apollo'
//import queries
import dishesListQuery from '../queries/dishesListQuery'
//import components
import Navbar from './Navbar/Navbar'
import DishesList from './DishesList/index'
import AddNewDish from './AddNewDish'
import Spinner from '../assets/Spinner'
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
			//control a visual feedback of 'loading' when app is requesting data
			loading: true,
			//saves information from database to supply the filters
			allRestaurantsInDatabase: null,
			allCitiesInDatabase: null,
			allCuisinesInDatabase: null,
			//state that will contain data from dishes
			listOfDishes: null,
			//control the values the filter will display as radio buttons
			filterListOfRestaurants: null,
			filterListOfCities: null,
			filterListOfCuisines: null,
			//control modals open/close states of filters
			modalFilterRestaurantIsOpen: false,
			modalFilterCityIsOpen: false,
			modalFilterCuisineIsOpen: false,
			//control if any filter was selected from the user
			filterRestaurantIsSelected: false,
			filterCityIsSelected: false,
			filterCuisineIsSelected: false,
			filterIsSelected: false
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
		//method to update the filters when an user makes a selection
		this.updateFilters = this.updateFilters.bind(this)
	}
	//load initial state of filters and dishesList
	async componentDidMount() {
		const result = await this.props.client.query({
			query: dishesListQuery
		})
		const allFilters = arrayOfUniqueValues(result.data.allDishes)
		this.setState({
			listOfDishes: result.data.allDishes,
			
			filterListOfRestaurants: allFilters[0],
			filterListOfCities: allFilters[1],
			filterListOfCuisines: allFilters[2],
			
			filterByRestaurant: allFilters[0],
			filterByCity: allFilters[1],
			filterByCuisine: allFilters[2],
			
			allRestaurantsInDatabase: allFilters[0],
			allCitiesInDatabase: allFilters[1],
			allCuisinesInDatabase: allFilters[2],
			
			loading: false
		})
	}
	//when an user clicks a filter, call a function to update the filters
	componentDidUpdate() {
		if(this.state.filterIsSelected) {
			this.updateFilters()
			this.setState({ filterIsSelected: false, loading: true })
		}
	}
	//update filters based on user selection
	async updateFilters() {
		const resultDishes = await this.props.client.query({
			query: dishesListQuery,
			variables: {
				filterByRestaurant: this.state.filterByRestaurant,
				filterByCity: this.state.filterByCity,
				filterByCuisine: this.state.filterByCuisine,
			}
		})
		this.setState({
			loading: false,
			listOfDishes: resultDishes.data.allDishes
		})
		
		//--------------------------------------------------//
		//---------------FILTER STATES MAPPING--------------//
		//--------------------------------------------------//
		
		if(this.state.filterRestaurantIsSelected && !this.state.filterCityIsSelected && !this.state.filterCuisineIsSelected) {			
			const resultFilters = await this.props.client.query({
				query: dishesListQuery,
				variables: {
					filterByRestaurant: this.state.filterByRestaurant,
				}
			})
			const newFilters = arrayOfUniqueValues(resultFilters.data.allDishes)
			this.setState({
				filterListOfRestaurants: this.state.allRestaurantsInDatabase,
				filterListOfCities: newFilters[1],
				filterListOfCuisines: newFilters[2],
			})
		}
		if(this.state.filterCityIsSelected && !this.state.filterRestaurantIsSelected && !this.state.filterCuisineIsSelected) {
			const resultFilters = await this.props.client.query({
				query: dishesListQuery,
				variables: {
					filterByCity: this.state.filterByCity,
				}
			})
			const newFilters = arrayOfUniqueValues(resultFilters.data.allDishes)
			this.setState({
				filterListOfRestaurants: newFilters[0],
				filterListOfCities: this.state.allCitiesInDatabase,
				filterListOfCuisines: newFilters[2],
			})
		}
		if(this.state.filterCuisineIsSelected && !this.state.filterRestaurantIsSelected && !this.state.filterCityIsSelected) {
			const resultFilters = await this.props.client.query({
				query: dishesListQuery,
				variables: {
					filterByCuisine: this.state.filterByCuisine,
				}
			})
			const newFilters = arrayOfUniqueValues(resultFilters.data.allDishes)
			this.setState({
				filterListOfRestaurants: newFilters[0],
				filterListOfCities: newFilters[1],
				filterListOfCuisines: this.state.allCuisinesInDatabase
			})
		}
		if(this.state.filterRestaurantIsSelected && this.state.filterCityIsSelected && !this.state.filterCuisineIsSelected) {
			let resultFilters = await this.props.client.query({
				query: dishesListQuery,
				variables: {
					filterByRestaurant: this.state.filterByRestaurant,
					filterByCity: this.state.filterByCity
				}
			})
			let newFilters = arrayOfUniqueValues(resultFilters.data.allDishes)
			this.setState({
				filterListOfCuisines: newFilters[2],
			})
			resultFilters = await this.props.client.query({
				query: dishesListQuery,
				variables: {
					filterByCity: this.state.filterByCity
				}
			})
			newFilters = arrayOfUniqueValues(resultFilters.data.allDishes)
			this.setState({
				filterListOfRestaurants: newFilters[0],
			})
			resultFilters = await this.props.client.query({
				query: dishesListQuery,
				variables: {
					filterByRestaurant: this.state.filterByRestaurant
				}
			})
			newFilters = arrayOfUniqueValues(resultFilters.data.allDishes)
			this.setState({
				filterListOfCities: newFilters[1],
			})
		}
		if(this.state.filterRestaurantIsSelected && !this.state.filterCityIsSelected && this.state.filterCuisineIsSelected) {
			let resultFilters = await this.props.client.query({
				query: dishesListQuery,
				variables: {
					filterByRestaurant: this.state.filterByRestaurant,
					filterByCuisine: this.state.filterByCuisine
				}
			})
			let newFilters = arrayOfUniqueValues(resultFilters.data.allDishes)
			this.setState({
				filterListOfCities: newFilters[1],
			})
			resultFilters = await this.props.client.query({
				query: dishesListQuery,
				variables: {
					filterByCuisine: this.state.filterByCuisine
				}
			})
			newFilters = arrayOfUniqueValues(resultFilters.data.allDishes)
			this.setState({
				filterListOfRestaurants: newFilters[0],
			})
			resultFilters = await this.props.client.query({
				query: dishesListQuery,
				variables: {
					filterByRestaurant: this.state.filterByRestaurant
				}
			})
			newFilters = arrayOfUniqueValues(resultFilters.data.allDishes)
			this.setState({
				filterListOfCuisines: newFilters[2],
			})
		}
		if(!this.state.filterRestaurantIsSelected && this.state.filterCityIsSelected && this.state.filterCuisineIsSelected) {
			let resultFilters = await this.props.client.query({
				query: dishesListQuery,
				variables: {
					filterByCity: this.state.filterByCity,
					filterByCuisine: this.state.filterByCuisine
				}
			})
			let newFilters = arrayOfUniqueValues(resultFilters.data.allDishes)
			this.setState({
				filterListOfRestaurants: newFilters[0],
			})
			resultFilters = await this.props.client.query({
				query: dishesListQuery,
				variables: {
					filterByCuisine: this.state.filterByCuisine
				}
			})
			newFilters = arrayOfUniqueValues(resultFilters.data.allDishes)
			this.setState({
				filterListOfCities: newFilters[1],
			})
			resultFilters = await this.props.client.query({
				query: dishesListQuery,
				variables: {
					filterByCity: this.state.filterByCity
				}
			})
			newFilters = arrayOfUniqueValues(resultFilters.data.allDishes)
			this.setState({
				filterListOfCuisines: newFilters[2],
			})
		}
		if(!this.state.filterRestaurantIsSelected && !this.state.filterCityIsSelected && !this.state.filterCuisineIsSelected) {
			this.setState({
				filterListOfRestaurants: this.state.allRestaurantsInDatabase,
				filterListOfCities: this.state.allCitiesInDatabase,
				filterListOfCuisines: this.state.allCuisinesInDatabase
			})
		}
	}

	//--------------------------------------------------//
	//-----------METHODS FOR RESTAURANT FILTER----------//
	//--------------------------------------------------//

	userFilterSelectionRestaurant(event) {
		document.body.className = ''
		if(event.target.value === 'Todos') {
			this.setState({
				filterByRestaurant: this.state.allRestaurantsInDatabase, 
				modalFilterRestaurantIsOpen: false,
				filterIsSelected: true,
				filterRestaurantIsSelected: false
			})	
		}
		else {
			this.setState({
				filterByRestaurant: event.target.value, 
				modalFilterRestaurantIsOpen: false,
				filterIsSelected: true,
				filterRestaurantIsSelected: true
			})
		}
	}

	openModalFilterRestaurant(event) {
		event.preventDefault()
		document.body.className = 'noscroll' //stops scrolling behind overlay on mobile
		this.setState({ modalFilterRestaurantIsOpen: true })
	}

	closeModalFilterRestaurant(event) {
		event.preventDefault()
		document.body.className = ''
		this.setState({ modalFilterRestaurantIsOpen: false })
	}

	//--------------------------------------------------//
	//--------------METHODS FOR CITY FILTER-------------//
	//--------------------------------------------------//

	userFilterSelectionCity(event) {
		document.body.className = ''
		if(event.target.value === 'Todas') {
			this.setState({
				filterByCity: this.state.allCitiesInDatabase, 
				modalFilterCityIsOpen: false,
				filterIsSelected: true,
				filterCityIsSelected: false
			})	
		}
		else {
			this.setState({
				filterByCity: event.target.value, 
				modalFilterCityIsOpen: false,
				filterIsSelected: true,
				filterCityIsSelected: true
			})
		}
	}

	openModalFilterCity(event) {
		event.preventDefault()
		document.body.className = 'noscroll'
		this.setState({ modalFilterCityIsOpen: true })
	}

	closeModalFilterCity(event) {
		event.preventDefault()
		document.body.className = ''
		this.setState({ modalFilterCityIsOpen: false })
	}

	//--------------------------------------------------//
	//------------METHODS FOR CUISINE FILTER------------//
	//--------------------------------------------------//

	userFilterSelectionCuisine(event) {
		document.body.className = ''
		if(event.target.value === 'Todas') {
			this.setState({
				filterByCuisine: this.state.allCuisinesInDatabase, 
				modalFilterCuisineIsOpen: false,
				filterIsSelected: true,
				filterCuisineIsSelected: false
			})	
		}
		else {
			this.setState({
				filterByCuisine: event.target.value, 
				modalFilterCuisineIsOpen: false,
				filterIsSelected: true,
				filterCuisineIsSelected: true
			})
		}
	}

	openModalFilterCuisine(event) {
		event.preventDefault()
		document.body.className = 'noscroll'
		this.setState({ modalFilterCuisineIsOpen: true })
	}

	closeModalFilterCuisine(event) {
		event.preventDefault()
		document.body.className = ''
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
					allRestaurants={this.state.filterListOfRestaurants}
					//Filter City
					userFilterSelectionCity={this.userFilterSelectionCity}
					openModalFilterCity={this.openModalFilterCity}
					closeModalFilterCity={this.closeModalFilterCity}
					modalFilterCityIsOpen={this.state.modalFilterCityIsOpen}
					filterByCity={this.state.filterByCity}
					allCities={this.state.filterListOfCities}
					//Filter Cuisine
					userFilterSelectionCuisine={this.userFilterSelectionCuisine} 
					openModalFilterCuisine={this.openModalFilterCuisine}
					closeModalFilterCuisine={this.closeModalFilterCuisine}
					modalFilterCuisineIsOpen={this.state.modalFilterCuisineIsOpen}
					filterByCuisine={this.state.filterByCuisine}
					allCuisines={this.state.filterListOfCuisines}
				/>
				{this.state.loading ? 
					<Spinner /> :
					<DishesList allDishes={this.state.listOfDishes} />
				}
				<AddNewDish />
			</div>
		)
	}
}

export default withApollo(App)
