import { ProxyState } from "../AppState.js";
import { getHouseForm } from "../Components/HouseForm.js";
import { housesService } from "../Services/HousesService.js";



function _drawHouses() {
  // get all the houses and build a template
  let houses = ProxyState.houses
  let template = ''
  houses.forEach(h => {
    template += h.Template

    // console.log('houses', _drawHouses)
  })
  document.getElementById('listings').innerHTML = template

}


export class HousesController {
  constructor() {
    // console.log('Houses controller loaded', ProxyState.houses);
    ProxyState.on('houses', _drawHouses)
    _drawHouses()

    // Note what does this do???
    this.viewHouses()
  }

  viewHouses() {
    //  Get Car Form and inject into modal body
    let form = getHouseForm()
    document.getElementById('form-body').innerHTML = form
    _drawHouses()
  }

  createHouse() {
    window.event.preventDefault()
    let form = window.event.target
    // console.log('hello', form);

    let houseData = {
      bedrooms: form.bedrooms.value,
      bathrooms: form.bathrooms.value,
      imgUrl: form.imgUrl.value,
      description: form.description.value,
      price: form.price.value

    }
    console.log('new house', houseData);
    housesService.createHouse(houseData)
    form.reset()
    bootstrap.Modal.getOrCreateInstance(document.getElementById('form-modal')).hide()
  }

  deleteHouse(id) {
    housesService.deleteHouse(id)

  }
}