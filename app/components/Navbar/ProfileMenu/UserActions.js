import React from 'react'
//import components
import HelpIcon from '../../../assets/HelpIcon'
import LogoutIcon from '../../../assets/LogoutIcon'
import BackIcon from '../../../assets/BackIcon'

const UserActions = (props) => (
	props.help ?
		<div className='help-container'>
			<div className='help-back' onClick={props.backFromHelpLink}>
				<BackIcon />
				<span>Voltar</span>
			</div>
			<br />
			<p className='app-version'>oquepedir v0.0.1</p>
			<br />
			<p className='help-title'>Olá amigos beta testers!</p>
			<p className='help-text'>Esse é um projeto que estamos desenvolvendo para podermos melhorar
			nossas skills de programação. Esperamos que vocês possam nos ajudar a construir uma ferramenta que se
			torne útil para todos! Abraços, Patrícia e Vitor.
			</p>
			<br />
			<p className='help-title'>Qual a melhor forma de usar o site?</p>
			<p className='help-text'>Gostamos de usar quando já estamos em um restaurante. Então filtramos por
			nome e encontramos recomendações sobre o que pedir (daí o conceito do site). Outra forma de usar é
			filtrar por cozinha, ou então simplesmente ver a lista completa de pratos para ter ideias do que comer.
			</p>
			<br />
			<p className='help-title'>Qual o critério para cadastrar novos pratos?</p>
			<p className='help-text'>Apenas cadastre pratos que você recomendaria. Lembre-se que 1 estrela não significa um prato ruim. 
			Muito pelo contrário. As estrelas servem apenas para diferenciar entre pratos que já são considerados bons.</p>
			<br />
			<p className='help-title'>O que mais preciso saber para cadastrar?</p>
			<p className='help-text'>Cadastre seus pratos favoritos de qualquer cidade do Brasil (ou do mundo).
			No formulário de cadastro, apenas o comentário é opcional. Se não encontrar um tipo de cozinha adequado,
			mande uma mensagem para a gente.
			</p>
			<br />
			<p className='help-title'>E o que vem por aí?</p>
			<p className='help-text'>Em breve queremos que seja possível clicar no nome de um prato. Um menu abrirá 
			mostrando maiores detalhes e também os comentários e estrelas que outros usuários deixaram. Você então
			poderá avaliar o prato ou então favoritá-lo, para lembrar de comê-lo depois. Falem com a gente sobre outras ideias!
			</p>
			<br />
			<p className='help-title'>E esse design porco?</p>
			<p className='help-text'>Daqui a uns meses vai melhorar =)
			</p>
			<br />
			<p className='help-title'>Encontrei um erro, e agora?</p>
			<p className='help-text'>Deve ter um monte de erro. Pode mandar uma mensagem nos avisando, se quiser.
			</p>
			<br />
		</div>
		:
		<div className='user-actions-container'>
			<div className='user-actions' onClick={props.goToHelpLink}>
				<HelpIcon />
				<p>Dúvidas</p>
			</div>
			<div className='user-actions' onClick={props.logout}>
				<LogoutIcon />
				<p>Log Out</p>
			</div>
		</div>
	
)

export default UserActions