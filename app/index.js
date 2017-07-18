import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { 
	ApolloClient, 
	createNetworkInterface,
	ApolloProvider } from 'react-apollo'
import App from './components/App'

const client = new ApolloClient({
	networkInterface: createNetworkInterface({
		uri: 'https://api.graph.cool/simple/v1/Dishes'
	})
})

ReactDOM.render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>,
	document.getElementById('app')
)