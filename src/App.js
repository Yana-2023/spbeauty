import Sidebar from './Layouts/Sidebar/Sidebar';
import Page from './Layouts/Page/Page';

function App() {
  return (
    <div className='d-flex flex-row'>
      <Sidebar/>
      <Page/>
    </div>
  );
}

export default App;