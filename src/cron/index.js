const cron = require("node-cron")

const sendEmailJob = () => {
    const job = cron.schedule("* * * * * *", () => {
        console.log("Rodando Job")
    }, {
        scheduled: false
    })

    return job
}

module.exports = { sendEmailJob }