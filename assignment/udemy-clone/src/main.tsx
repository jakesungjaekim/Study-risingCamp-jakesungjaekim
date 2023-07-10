import { createRoot } from 'react-dom/client'
import './styles/index.css'

import Router from './Router.tsx'

const el = document.getElementById('root')
const root = createRoot(el!);


root.render(
  <Router />
)


