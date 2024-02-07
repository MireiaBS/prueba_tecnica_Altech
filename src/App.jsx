import './css/App.css'
import { Header } from './components/Header'
import { Form } from './components/Form'
import { Inicio } from './components/Inicio'
import { Route, Routes, Link} from 'react-router-dom'

function App() {

  return (
    <div className='containerApp'>
      <Routes>
        <Route path='/' element= {
          <Inicio></Inicio>
        }>
        </Route>

        <Route path='/home' element= {
          <Header></Header>
        }>          
        </Route>

        <Route path='/profile' element = {
          <Form></Form>
        }>          
        </Route>

      </Routes>
      
    </div>
  )
}

export default App
