import './App.css'
import NavBar from './components/NavBar'
import Front from './components/Front'
import Videos from './components/Videos'
import { useEffect } from 'react'

const App = () => {
//ComponentDidMount
useEffect(() => {
      console.log("La App se ha montado")
}, [])

return (
  <>
<Front/>
<NavBar />
<Videos/>
</>
)
}
export default App;
