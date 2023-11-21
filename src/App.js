
import './App.css';
import About from './components/about';
import Home from './components/home';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
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
      </QueryClientProvider>
      
    </div>
  );
}

export default App;
