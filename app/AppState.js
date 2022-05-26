import { Car } from "./Models/Car.js"
import { House } from "./Models/House.js"
import { Job } from "./Models/Job.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []
  /** @type {import('./Models/Car').Car[]} */
  cars = [
    new Car({ make: 'Chevrolet', model: 'Impala', description: 'It balla', price: 10, year: 1964, color: '#000000', imgUrl: 'https://m.media-amazon.com/images/I/51IpgyJ3GmL._AC_SX466_.jpg' }),
    new Car({ make: 'Buick', model: 'Grand National', description: 'It is grand', price: 15, year: 1984, color: '#ff0000', imgUrl: 'http://www.deansgarage.com/wp-content/uploads/GNpropsals.jpg' })
  ]
  houses = [
    new House({ bedrooms: 3, bathrooms: 2, description: 'it is smol', price: 500000, imgUrl: './assets/img/toy house.jpg' }),
    new House({ bedrooms: 10, bathrooms: 5, description: 'You can not afford', price: '♾️', imgUrl: './assets/img/small house.jpg' })]


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
