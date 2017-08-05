import React from 'react'
import { graphql } from 'react-apollo'
import AlertContainer from 'react-alert'
//import queries
import newDish from '../../queries/newDishMutation'
//import utils
import typesOfCuisines from '../../utils/typesOfCuisines'
//import components
import Welcome from './Welcome'
import StarIcon from '../../assets/StarIcon'

class AddNewDishModal extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			country: '',
			state: '',
			city: '',
			restaurant: '',
			dish: '',
			cuisine: '',
			stars: null,
			comment: '',
			radioState: '',
			buttonDisabled: true
		}
		//bindings
		this.newDishFormChange = this.newDishFormChange.bind(this)
		this.newDishRadioChange = this.newDishRadioChange.bind(this)
		this.submitForm = this.submitForm.bind(this)
	}

	newDishFormChange(event) {
		switch (event.target.name) {
			case 'country':
				this.setState({ country: event.target.value })
				break
			case 'state':
				this.setState({ state: event.target.value })
				break
			case 'city':
				this.setState({ city: event.target.value })
				break
			case 'restaurant':
				this.setState({ restaurant: event.target.value })
				break
			case 'dish':
				this.setState({ dish: event.target.value })
				break
			case 'cuisine':
				if(event.target.value !== 'Tipo de cozinha')
					this.setState({ cuisine: event.target.value })
				break
			case 'comment':
				this.setState({ comment: event.target.value })
				break
		}
	}
	//radio buttons need their own handler
	newDishRadioChange(event) {
		this.setState({ stars: Number(event.target.value) })
		switch (event.target.id) {
			case 'one-star':
				this.setState({ radioState: 'one-star' })
				break
			case 'two-star':
				this.setState({ radioState: 'two-star' })
				break
			case 'three-star':
				this.setState({ radioState: 'three-star' })
				break
		}
	}

	componentDidUpdate() {
		if(this.state.country && this.state.state && this.state.city && this.state.restaurant && this.state.dish && this.state.cuisine && this.state.stars && this.state.buttonDisabled) {
			this.setState({ buttonDisabled: false })
		}
		if((!this.state.country || !this.state.state || !this.state.city || !this.state.restaurant || !this.state.dish || !this.state.cuisine || !this.state.stars) && !this.state.buttonDisabled ) {
			this.setState({ buttonDisabled: true })
		}
	}

	submitForm() {
		if(!this.state.buttonDisabled) {
			this.props.mutate({
				variables: {
					  country: this.state.country,
  					state: this.state.state,
  					city: this.state.city,
  					restaurant: this.state.restaurant,
  					name: this.state.dish,
  					cuisine: this.state.cuisine,
  					stars: this.state.stars,
  					comments: this.state.comment,
  					rating: this.state.stars, //change this in the future versions of the app
  					creatorId: this.props.userId
				}
			}).then( (data) => {
				this.msg.show('Seu prato foi criado')
				this.setState({
					country: '',
					state: '',
					city: '',
					restaurant: '',
					dish: '',
					cuisine: '',
					stars: null,
					comment: '',
					radioState: '',
					buttonDisabled: true
				})
				
			}).catch( (error) => {
				console.log('Error sending query:', error)
			})
		}
	}

	render () {
		return (
			<div className={this.props.newDishModalIsOpen ? 'new-dish-modal-open' : 'new-dish-modal-closed'}>
				{ this.props.isLoggedIn ? 
					<div className='new-dish-container'>
						<p className='close-btn' onClick={this.props.closeMenuAndModal}> X </p>
						<p className='new-dish-title'> Adicionar novo prato </p>
						<div className='new-dish-form' onChange={this.newDishFormChange}>
							<p className='new-dish-label'>1. Localização</p>	
							<input className='new-dish-input' type='text' name='country' value={this.state.country} placeholder='País' /> <br />
							<input className='new-dish-input' type='text' name='state' value={this.state.state} placeholder='Estado' /> <br />
							<input className='new-dish-input' type='text' name='city' value={this.state.city} placeholder='Cidade' /> <br />
							<p className='new-dish-label'>2. Prato</p>
							<input className='new-dish-input' type='text' name='restaurant' value={this.state.restaurant} placeholder='Restaurante' /> <br />
							<input className='new-dish-input' type='text' name='dish' value={this.state.dish} placeholder='Nome do prato' /> <br />
							<select className='new-dish-input-cuisine' name='cuisine' value={this.state.cuisine}>
								<option>Tipo de cozinha</option>
								{typesOfCuisines.map( (cuisine, id) => {
									return <option key={id} value={cuisine}>{cuisine}</option>
								})}
							</select>
							<p className='new-dish-label'>3. Avaliação</p>
							<ul className='star-rating-form' onChange={this.newDishRadioChange}>
								<li className='star-radio-option'>
									<input className='new-dish-input' type='radio' id='one-star' name='stars' value={1} checked={this.state.radioState === 'one-star' ? true : false}/>
									<div className='new-dish-rating-star-container'>
										<StarIcon starFill='star-fill' />
										<StarIcon starFill='star-nofill' />
										<StarIcon starFill='star-nofill' />
									</div>
									<p>Bom</p>
								</li>
								<li className='star-radio-option'>
									<input className='new-dish-input' type='radio' id='two-star' name='stars' value={2} checked={this.state.radioState === 'two-star' ? true : false}/>
									<div className='new-dish-rating-star-container'>
										<StarIcon starFill='star-fill' />
										<StarIcon starFill='star-fill' />
										<StarIcon starFill='star-nofill' />
									</div>
									<p>Muito Bom</p>
								</li>
								<li className='star-radio-option'>
									<input className='new-dish-input' type='radio' id='three-star' name='stars' value={3} checked={this.state.radioState === 'three-star' ? true : false}/>
									<div className='new-dish-rating-star-container'>
										<StarIcon starFill='star-fill' />
										<StarIcon starFill='star-fill' />
										<StarIcon starFill='star-fill' />
									</div>
									<p>Fora de série</p>
								</li>
							</ul>
							<textarea 
								className='new-dish-textarea' 
								rows='4' 
								name='comment'
								value={this.state.comment}
								placeholder='Descreva o que achou do prato'>
							</textarea>
						</div>
						<button className={this.state.buttonDisabled ? 'submit-new-dish-btn-disabled' : 'submit-new-dish-btn'} onClick={this.submitForm}>
							Enviar novo prato
						</button>
						<AlertContainer 
							ref={a => this.msg = a} { 
								...{
									offset: 21,
									position: 'bottom left',
									theme: 'light',
									time: 3000,
									type: 'success',
									transition: 'scale'
								}
							}
						/>
					</div>
					:
					<Welcome 
						login={this.props.login}
						closeMenuAndModal={this.props.closeMenuAndModal} 
					/>
				}
			</div>
		)
	}
}

export default graphql(newDish)(AddNewDishModal)