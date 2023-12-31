import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Modal } from './components/Modal'
import {useModal} from './hooks/useModal';

function App() {
  const {openModal} = useModal();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <button onClick={openModal}>Open Modal</button>
      <Modal />
    </>
  )
}

export default App
