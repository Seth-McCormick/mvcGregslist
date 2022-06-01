import { generateId } from "../Utils/generateId.js"

export class House {
    constructor(houseData) {
        this.id = houseData.id || generateId()
        this.bedrooms = houseData.bedrooms
        this.bathrooms = houseData.bathrooms
        this.levels = houseData.levels
        this.year = houseData.year
        this.price = houseData.price
        this.imgUrl = houseData.imgUrl
        this.description = houseData.description

    }


    get Template() {
        return `
<div class="col-md-3  text-center">
    <div class="bg-secondary rounded shadow p-2">
        <img class="img-fluid" src="${this.imgUrl}" alt="">
        <h5>Bedrooms: <span>${this.bedrooms}</span> | Bathrooms: <span>${this.bathrooms}</span> Levels: <span>${this.levels}</span.</h5>
        <p>${this.description}</p>
        <p>${this.year}</p>
        <p><b>${this.price}</b></p>
        <button class="btn btn-danger" onclick="app.housesController.deleteHouse('${this.id}')">Delete</button> 
    </div>
</div>
`
    }

}