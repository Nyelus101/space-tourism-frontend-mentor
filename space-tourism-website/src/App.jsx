import { useState } from 'react';

import './App.css';
import Navbar from './components/Navbar.jsx';

function App() {
  

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello WORLD</h1>

      <span class="relative flex h-3 w-3">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75">NEDU</span>
        <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500">I LOVE YOU</span>
      </span>
      <Navbar />
    </>
  )
}

export default App





// import { useState } from 'react'

// import './App.css'

// function App() {
  

//   return (
//     <>
//       <h1>Hello World</h1>
//     </>
//   )
// }

// export default App
