import { ProxyState } from "../AppState.js"
import { getJobForm } from "../Components/JobForm.js"
import { jobsService } from "../Services/JobsService.js"



function _drawJobs() {
    let jobs = ProxyState.jobs
    let template = ''
    jobs.forEach(j => { template += j.Template })


    document.getElementById('listings').innerHTML = template

}







export class JobsControllers {
    constructor() {
        ProxyState.on('jobs', _drawJobs)
        _drawJobs()
        this.viewJobs()
    }

    viewJobs() {
        let form = getJobForm()
        document.getElementById('form-body').innerHTML = form
        _drawJobs()
    }
    createJob() {
        window.event.preventDefault()
        let form = window.event.target

        let jobData = {


            company: form.company.value,
            title: form.title.value,
            wage: form.wage.value,
            description: form.description.value

        }

        jobsService.createJob(jobData)
        form.reset()
        bootstrap.Modal.getOrCreateInstance(document.getElementById('form-modal')).hide()
    }

    deleteJob(id) {
        jobsService.deleteJob(id)

    }
}