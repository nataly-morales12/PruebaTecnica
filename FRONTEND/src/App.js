import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import ListTasks from './components/Task/list'
function App() {
  return (
    <ChakraProvider>
      <ListTasks />
    </ChakraProvider>
  );
}

export default App;
