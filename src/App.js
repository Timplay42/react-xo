import Header from './components/Header'
import Promo from './components/Promo';
import Themes2 from './components/Themes2';
import Infocard from './components/Infocard';



function App() {
  return (
    <div>
      <div className="wrapper">
          <Header/>
          <Promo/>
      </div>
      <div className='wrapper_2'>
        <Themes2/>
      </div>
      <div className='wrapper_3'>
        <Infocard/>
      </div>
    </div>
  );
}

export default App;
