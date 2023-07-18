import './styles/index.css'
import { createRoot } from 'react-dom/client'

import Router from './Router.tsx'


const el = document.getElementById('root') as HTMLElement
const root = createRoot(el)

root.render(<Router />)


