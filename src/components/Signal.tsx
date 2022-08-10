import {Component, createSignal} from 'solid-js'

const [active, setActive] = createSignal(false)
const toggle = () => setActive((v) => !v)

export const SignalToggle: Component = () => {
  return <button onClick={toggle}>{active() ? 'Hide' : 'Show'}</button>
}

export {active, setActive}
