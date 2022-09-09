import './App.module.css';
import { CreateTask } from './components/CreateTask';
import { Header } from './components/Header'
import { List } from './components/List';

export function App() {
  return (
    <div>
      <Header />
      <List />
    </div>
  )
}