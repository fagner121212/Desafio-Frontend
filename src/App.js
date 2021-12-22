import Home from './screens/home/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Results from './screens/results/Results'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/results'>
            <Results />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
