const { sendEmailJob } = require("../cron/index")

const managerJobs = () => {
    const job = sendEmailJob()
    return job.start()
}

module.exports = { managerJobs }