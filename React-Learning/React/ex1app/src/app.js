import Fetchposts from './components/Fetchposts';

import {lazy, Suspense} from 'react';
const Fetchget2= lazy(() => import('./ApiEx/Fetchget2'));

function App() {
  return (
    <div className="App">
      <Fetchposts />
      <Suspense fallback={<h3>Loading...</h3>}>
        <Fetchget2 />
      </Suspense>
    </div>
  );
}

export default App;