import Home from './components/pages/Home';
import Sidebar from './components/sidebar';

function App() {
  return (
    <>
      <div className="w-full min-h-screen bg-white flex flex-row">
        <Sidebar />
        <Home />
      </div>
    </>
  );
}

export default App;
