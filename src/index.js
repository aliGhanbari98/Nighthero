import React from 'react'
import ReactDOM from 'react-dom'
import ReduxProvider from './setup/store'
import ThemeProvider from './setup/theme'
import 'src/setup/config/axios'

import App from './scenes/app'

ReactDOM.render(
	<React.StrictMode>
		<ReduxProvider>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</ReduxProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
