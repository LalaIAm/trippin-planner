import { Routes, Route } from 'react-router-dom';

import Layout from './Layout';

import Dashboard from './pages/Dashboard';
import Gallery from './pages/Gallery';
import Trip from './pages/Trip';
import NewTrip from './pages/Trip/NewTrip';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path='/trips' element={<Trip />} />
        <Route path='/trips/new' element={<NewTrip />} />
        <Route path='/gallery' element={<Gallery />} />
      </Route>
    </Routes>
  );
};

export default App;
