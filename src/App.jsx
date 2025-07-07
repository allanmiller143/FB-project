// App.jsx
import Routes from './Routes/Routes.jsx'
import Header from './Utils/Components/Header/Header.jsx'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Toaster } from 'sonner';

function App() {
  return (
    <>
      <Toaster richColors position="top-right" />
      <Header />
      <Routes />
    </>
  )
}

export default App
