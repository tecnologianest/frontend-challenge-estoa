import './styles/components/app.sass'
import {Routes, Route} from 'react-router-dom'
import People from './components/People'
import Person from './components/Person'


function App() {

  const renderRouter = () => {
    return (
      <Routes>
        <Route path='/' element={<People/>} />
        <Route path='/people/:name' element={<Person/>} />
      </Routes>
    )
  }

  return (
    <>
    {renderRouter()}
    </>
  )
}

export default App
