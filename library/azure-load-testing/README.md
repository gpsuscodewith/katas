<h1 align="center">Execute a Load Test in Azure Load Testing</h1>

**Duration**: 10 Minutes <br />
**Participation target**: Individual <br />

**Goal**: Create a Load Testing service with a test plan and execut it.

### Prerequisites

- Cloud Shell

## Steps

### Create the service
1. Open Cloud Shell in Bash mode
2. git clone the kata's repository
   ```bash
   git clone --depth=1 https://github.com/gpsuscodewith/katas.git
   ```
3. Change directory to the src for this Kata:
   ```bash
   cd katas/library/azure-load-testing
   ```
4. Copy and paste the commands below, **append a custom prefix (such as your alias**:
   ```bash
   export RESOURCE_GROUP=kataloadtesting
   export NAME="kataloadtest$RANDOM"

   az group create -n $RESOURCE_GROUP -l eastus
   ```
5. Execute the deployment template for the service
   ```bash
   az deployment group create \
      --resource-group $RESOURCE_GROUP \
      --template-file ./template/template.json \
      --parameters name=$NAME
   ```

### Create load test
1. Click this [link to open the Load Testing Blade](https://portal.azure.com/#blade/HubsExtension/BrowseResource/resourceType/Microsoft.LoadTestService%2FLoadTests) in the portal.
2. Click the instance you created
3. Click the **Tests** menu item
4. Click **+ Create test** menu bar button
5. Leave Basics tab as-is. Click **Test plan** tab

**END**

### Reflect

#### Feedback
