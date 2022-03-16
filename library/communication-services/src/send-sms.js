const { SmsClient } = require('@azure/communication-sms');


const connectionString = process.env['COMMUNICATION_SERVICES_CONNECTION_STRING'];
const fromPhoneNumber = process.env['COMMUNICATION_SERVICES_PHONE_NUMBER']
const toPhoneNumber = process.argv[2];

const smsClient = new SmsClient(connectionString);

async function main() {

    console.log("\nSending SMS Message...");
    console.log("  FROM: %s", fromPhoneNumber);
    console.log("  TO: %s\n", toPhoneNumber);

    const sendResults = await smsClient.send({
        from: fromPhoneNumber,
        to: [toPhoneNumber],
        message: "Hello from Communication Services Kata!"
    });

    for (const sendResult of sendResults) {
        if (sendResult.successful) {
            console.log("Success: ", sendResult);
        } else {
            console.error("Something went wrong when trying to send this message: ", sendResult);
        }
    }
}

main();