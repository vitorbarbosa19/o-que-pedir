import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { 
	ApolloClient, 
	createBatchingNetworkInterface, //enables batch requests to the server. Improves performance a lot
	ApolloProvider } from 'react-apollo'
import App from './components/App'

const client = new ApolloClient({
	networkInterface: createBatchingNetworkInterface({
		uri: 'https://api.graph.cool/simple/v1/Dishes',
		batchInterval: 10
	}),
	dataIdFromObject: o => o.id,
	queryDeduplication: true
})

ReactDOM.render(
	<ApolloProvider client={client}>
		<Router>
			<App />
		</Router>
	</ApolloProvider>,
	document.getElementById('app')
)