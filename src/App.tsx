import OneView from "./views/OneView.tsx";
import TwoView from "./views/TwoView.tsx";
import Footer from "./views/Footer.tsx";
import Banner from "./components/Banner.tsx";


function App() {


  return (
      <main className='flex items-center justify-center flex-col bg-black font-poppins text-white'>
        <OneView/>
          <TwoView/>
          <Banner/>
          <Footer/>
      </main>
  )
}

export default App
