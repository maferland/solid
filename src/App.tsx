import {Component, Signal} from 'solid-js'

import styles from './App.module.css'
import {active, SignalToggle} from './components/Signal'

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>Learn Solid</header>

      <p>
        In Solid, the state does not need to belong to a component if you don't
        want to.
      </p>
      <p>
        The active string below is powered by a state extracted from
        SignalToggle.tsx
      </p>

      <p>{`${active() ? 'active' : 'inactive'}`}</p>

      <SignalToggle />
    </div>
  )
}

export default App
