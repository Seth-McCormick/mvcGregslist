import { ProxyState } from "../AppState.js";
import { Job } from "../Models/Job.js";

class JobsService {
    createJob(jobData) {
        ProxyState.jobs = [...ProxyState.jobs, new Job(jobData)]
    }

    deleteJob(id) {
        ProxyState.jobs = ProxyState.jobs.filter(j => j.id != id)
    }

}

export const jobsService = new JobsService()