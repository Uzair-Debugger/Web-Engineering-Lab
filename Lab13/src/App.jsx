import './App.css'
import Counter from './components/counter'
import TogglePara from './components/toggle-para'
import TrackState from './components/track-state'
import ThemeProvider from './components/theme'
import CounterReducer from './components/counter-reducer'
import FocusInput from './components/focus-input'

function App() {
  return (
    <main>
      <h1 className='header'>Web Engineering Lab 13</h1>
      <h2>Task 1 - useState Counter</h2>
      <Counter />
      {/* <h2>Task 2 - Toggle Paragraph</h2>
      <TogglePara />
      <h2>Task 3 - Track Clicks (useEffect)</h2>
      <TrackState />
      <h2>Task 4 - Theme Context</h2>
      <ThemeProvider /> */}


      {/* <h2>Task 5 - useReducer Counter</h2>
      <CounterReducer /> */}

      {/* <h2>Task 6 - useRef Focus</h2>
      <FocusInput /> */}
    </main>
  )
}

export default App
