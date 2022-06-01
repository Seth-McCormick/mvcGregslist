import { Car } from "./Models/Car.js"
import { House } from "./Models/House.js"
import { Job } from "./Models/Job.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []
  /** @type {import('./Models/Car').Car[]} */
  cars = []


  houses = []


  jobs = [
    new Job({ company: 'Hurd Construction', title: 'Framer', wage: 7.25, description: 'You will use a Hammer' }),
    new Job({ company: 'Lariat Tech', title: 'Engineer', wage: 40, description: 'Yes' })
  ]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
