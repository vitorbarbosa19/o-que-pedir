import React from 'react'

const UserActions = (props) => (
	<div className='user-actions-container'>
		<p>Dúvidas</p>
		<p onClick={props.logout}>Log Out</p>
	</div>
)

export default UserActions