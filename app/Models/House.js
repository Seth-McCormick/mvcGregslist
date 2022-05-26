import { generateId } from "../Utils/generateId.js"

export class House {
    constructor(houseData) {
        this.id = generateId()
        this.bedrooms = houseData.bedrooms
        this.bathrooms = houseData.bathrooms
        this.imgUrl = houseData.imgUrl
        this.description = houseData.description
        this.price = houseData.price

    }


    get Template() {
        return `
<div class="col-md-3  text-center">
    <div class="bg-secondary rounded shadow p-2">
        <img class="img-fluid" src="${this.imgUrl}" alt="">
        <h5>Bedrooms: <span>${this.bedrooms}</span> | Bathrooms: <span>${this.bathrooms}</span></h5>
        <p>${this.description}</p>
        <p><b>${this.price}</b></p>
        <button class="btn btn-danger" onclick="app.housesController.deleteHouse('${this.id}')">Delete</button> 
    </div>
</div>
`
    }

}