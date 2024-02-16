import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './fonts/Saira-400.woff2'
import './fonts/Saira-700.woff2'
import './i18n'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
