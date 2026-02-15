import './App.css'
import Banner from './components/Banner'
import Link from './components/Link'

function App() {
  return (
    <>
      <Banner src="./public/Imagens/Banner principal/Banner principal desktop.png" alt="Banner" />
      <Link href="/" target="_blank">
        Link
      </Link>
    </>
  )
}

export default App
