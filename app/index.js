import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { 
	ApolloClient, 
	createBatchingNetworkInterface, //enables batch requests to the server. Improves performance a lot
	ApolloProvider } from 'react-apollo'
import App from './components/App'

const networkInterface = createBatchingNetworkInterface({
	uri: 'https://api.graph.cool/simple/v1/Dishes',
	batchInterval: 10
})

networkInterface.use( [{
	applyBatchMiddleware(req, next) {
		if (!req.options.headers) {
			req.options.headers = {}
		}
		const token = localStorage.getItem('id_token')
		req.options.headers.authorization = token ? `Bearer ${token}` : null
		next()
	}
}])

const client = new ApolloClient({
	networkInterface,
	dataIdFromObject: o => o.id,
	queryDeduplication: true
})

ReactDOM.render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>,
	document.getElementById('app')
)