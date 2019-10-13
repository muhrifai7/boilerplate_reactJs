// import React from 'react';

// import './App.css'
// import {NewsProvider} from './Context/Context'
// import Footer from './Components/Footer/Footer'
// import Navbar from './Layout/Navbar/Navbar'


// function App() {
//   return (
//     <NewsProvider>
//       <Navbar />
//       <Footer />
//     </NewsProvider>
//   );
// }

// export default App;


import React , {Fragment} from 'react';

import './App.css'
import GlobalProvider from './Context/Context'
import Footer from './Components/Footer/Footer'
import Navbar from './Layout/Navbar/Navbar'


function App() {
  return (
    <Fragment>
      <Navbar />
      <Footer />
    </Fragment>
  );
}

export default GlobalProvider(App);
