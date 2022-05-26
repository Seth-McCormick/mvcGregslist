import { generateId } from "../Utils/generateId.js"

export class Job {
    constructor(jobData) {
        this.id = generateId()
        this.company = jobData.company
        this.title = jobData.title
        this.wage = jobData.wage
        this.description = jobData.description

    }

    get Template() {
        return `
<div class="col-md-3  text-center">
    <div class="bg-secondary rounded shadow p-2">
        <h1>${this.company}</h1>
        <h5>Title: <span>${this.title}</span> | Wage: <span>$${this.wage}</span></h5>
        <p>${this.description}</p>
        <button class="btn btn-danger" onclick="app.jobsController.deleteJob('${this.id}')">Delete</button> 
    </div>
</div>

`

    }


}