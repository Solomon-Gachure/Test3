
import './App.css';
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
      </QueryClientProvider>
      
    </div>
  );
}

export default App;
