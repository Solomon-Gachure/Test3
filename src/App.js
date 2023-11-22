
import './App.css';
import About from './components/about';
import Home from './components/home';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import Jokes from './components/jokes';
function App() { 
  const client= new QueryClient({defaultOptions:{
    queries:{
      refetchOnWindowFocus:false
    }
  }});
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Home/>
        <About/>
        <Jokes/>
      </QueryClientProvider>
      
    </div>
  );
}

export default App;
