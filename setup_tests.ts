import { Window } from "npm:happy-dom"

const window = new Window()

// Assign all window properties to globalThis
for (const key of Object.getOwnPropertyNames(window)) {
  if (key in globalThis) continue
  // @ts-ignore: dynamic assignment
  globalThis[key] = window[key]
}
