import './App.css';
import Mensaje from './Mensaje';

function App() {
  const Description = ()=>{
    return <p>Este es la descripcion del proyecto</p>
  }
  return (
    <div className="App">
      <Mensaje message="Hola mundo estamos" color="lightgreen"/>
      <Mensaje message="trabajando en un curso de React" color="lightblue"/>
      <Description />
    </div>
  );
}

export default App;
