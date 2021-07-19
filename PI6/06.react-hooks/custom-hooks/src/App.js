import './App.css';
import useTimer from './hooks/use-timer.js'
function App() {


   const hour = useTimer(24, 1000*60*60);
   const min = useTimer(59, 1000*60);
   const sec = useTimer(59, 1000);


  return (

    <div>
      {hour}:{min}:{sec}
    </div>

  );
}

export default App;
