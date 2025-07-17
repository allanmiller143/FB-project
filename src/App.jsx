// App.jsx
import Routes from './Routes/Routes.jsx'
import Header from './Utils/Components/Header/Header.jsx'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Toaster } from 'sonner';
import Footer from './Utils/Components/Footer/Footer.jsx';
import AllProjectsContextProvider from './Pages/AllProjects/Context/AllProjectsContextProvider.jsx';
import InfoBox from './Utils/Components/Utils/InfoBox.jsx';

function App() {
  return (
    <>
      <Toaster richColors position="top-right" />
      <AllProjectsContextProvider>
        <Header />
        {/* <InfoBox/> */}
        <Routes />
        <Footer/>
      </AllProjectsContextProvider>
    </>
  )
}

export default App
