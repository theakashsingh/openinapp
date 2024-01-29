
import { Provider } from 'react-redux'
import './App.css'
// import DropZone from './component/DropZone'
// import LoginPage from './page/LoginPage'
import Upload from './page/Upload'
import { store } from './redux/store'

function App() {

  return (
    <Provider store={store}>
    <Upload/>
    </Provider>
  )
}

export default App
