<h1 align="center">Send an SMS with Azure Communication Services</h1>

**Duration**: 10 Minutes <br />
**Participation target**: Individual <br />

**Goal**: Create a communication service and send an SMS message to yourself

### Prerequisites

- Cloud Shell
- Git CLI
- Node.js 10+
- A Cell Phone

## Steps

### Create an Azure Communication Service
The CLI version must be 6 for you to continue. 
1. Open [cloud shell](https://portal.azure.com/#cloudshell/) 
2. Copy/paste and run the below command:
   ```bash
   export NAME="katacomsvc$(echo $RANDOM)"
   export RESOURCE_GROUP=kata-comsvcs
   az group create -n $RESOURCE_GROUP -l eastus2
   az communication create --name $NAME --location "Global" --data-location "United States" --resource-group $RESOURCE_GROUP
   ```
3. If prompted to install an azure CLI extension, Confirm Y.

### Get the connection string
1. In cloud shell, run the below command:
   ```bash
   export COMMUNICATION_SERVICES_CONNECTION_STRING=$(az communication list-key --name $NAME --resource-group $RESOURCE_GROUP -o tsv --query primaryConnectionString)
   ```

### Claim a phone number for the service
1. Open a browser and go to https://portal.azure.com/#blade/HubsExtension/BrowseResource/resourceType/Microsoft.Communication%2FCommunicationServices
2. Click the instance of the communication service
3. Click the "Phone Numbers" menu item
4. Click "Get +"
5. Enter the following as inputs:
   - Country or region: United States
   - Number type: Toll Free
   - Features: Send and receive SMS (Radio button option)
6. Select: 
   - Prefix: any Toll Free area code
   - Quantity: 1
7. Click "Search"
8. Click "Next Summary"
9. Click "Place Order"

### Get source code and execute Node.js program
1. Git clone the source and prepare the program to  send the SMS message:
   ```bash
   git clone --depth=1 https://github.com/gpsuscodewith/katas.git
   cd katas/library/communication-services/src
   npm install
   ```
2. Enter the following command to view the simple program code:
   ```bash
   cat ./send-sms.js
   ```
3. In the cloud shell, set the FROM phone number. run:
   ```bash
   # Uses $COMMUNICATION_SERVICES_CONNECTION_STRING environment variable to execute
   az communication phonenumbers list-phonenumbers -o json
   ```
4. Next, type command below, with the phone number listed (replacing ``'<The Phone Number>'```):
   ```bash
   export COMMUNICATION_SERVICES_PHONE_NUMBER=<The Phone Number>
   ```
5. Next, type command to execute the node.js app, typing out your phone number in "international format":
   ```bash
   # Example: node ./send-sms.js +14255550123
   node ./send-sms.js <your cell phone number>
   ```
6. Hit Enter to run the program.
7. Review the output in the console.
8. Once received, view the message received on your mobile phone

**END**

### Reflect

#### Feedback
