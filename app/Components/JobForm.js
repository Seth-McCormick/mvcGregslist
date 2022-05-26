export function getJobForm() {
    return `
    <form class="mb-3 col-12 bg-white p-3 mt-4" onsubmit="app.jobsController.createJob()">
    <h3> List a Job </h3>
      <div class="row">
        <div class="col-3 mb-2">
          <label for="" class="form-label">Company Name</label>
          <input required type="text" name="company" id="company" placeholder="Enter Company Name..." maxlength="15"
            minlength="1" class="form-control" placeholder="" aria-describedby="helpId"
            >
        </div>
        <div class="col-3 mb-2">
          <label for="" class="form-label">Title</label>
          <input required type="text" name="title" id="title" placeholder="Enter position..."
            class="form-control" placeholder="" aria-describedby="helpId">
        </div>
        <div class="col-3 mb-2">
          <label for="" class="form-label">Wage</label>
          <input required type="number" name="wage" id="wage" value="7.25" min="5" class="form-control"
            placeholder="" aria-describedby="helpId">
        </div>
        <div class="col-12 mb-2">
          <label for="" class="form-label">Description</label>
          <input required type="text" name="description" id="description"
            placeholder="Tell us about the Job..." class="form-control" maxlength="75" placeholder=""
            aria-describedby="helpId">
        </div>
      </div>
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="submit" class="btn btn-primary px-3 py-2" title="create a job">
        Submit</button>
    </form>
`


}