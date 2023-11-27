import './App.css'

//Components
import Form from './components/Form/Form'
import Table from './components/Table/Table'

//Context
import { UserProvider } from './context/userContext.tsx'

function App() {
  
  return (
    <div>
      <UserProvider>
        <h1>USUÁRIOS</h1>
        <Form/>
        <Table/>
      </UserProvider>
    </div>
  )
}

export default App
