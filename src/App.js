import './App.css';
import CustomComponent from './CustomComponent';

function App() {
  return (
    <div className="App">
      <CustomComponent>
        <div>
          <h1 className='text-3xl text-blue-600'>Title</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, in.</p>
        </div>
      </CustomComponent>
    </div>
  );
}

export default App;
