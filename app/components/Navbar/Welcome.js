import React from 'react'

export default class Welcome extends React.Component {
  render() {
    return (
      <div className='welcome-container'>
        <p className='close-btn' onClick={this.props.closeMenuProfile}> X </p>
        <p className='welcome-header'>O Que Pedir?</p>
        <div className='welcome-text'>
        	<p>
  	      	Não tenha mais dúvidas sobre o que pedir nos restaurantes.
        	</p>
					<p>
						Escolha sempre os melhores pratos, votados pela comunidade.
					</p>
					<p>
						Para cadastrar seus pratos favoritos ou votar nos já existentes, basta fazer login.
					</p>
        </div>
        <div className='login-btn' onClick={this.props.login}>
          Login
        </div>
      </div>
    )
  }
}