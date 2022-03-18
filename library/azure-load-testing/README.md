<h1 align="center">Execute a JMeter Load Test Using Azure Load Testing</h1>

**Duration**: 7 Minutes <br />
**Participation target**: Individual <br />

**Goal**: Create a Load Testing service with a test plan and execute it.

### Prerequisites

- Azure Portal
- Cloud Shell

## Steps

### Create the service
1. Launch a browser tab and go to [Azure Portal](https://ms.portal.azure.com/#home)
2. Click the **Cloud Shell icon** in the header to open Cloud Shell
3. Select **Bash** from the dropdown, if not already selected 
2. git clone the kata's repository
   ```bash
   git clone --depth=1 https://github.com/gpsuscodewith/katas.git
   ```
3. Change directory to the src for this Kata:
   ```bash
   cd katas/library/azure-load-testing
   ```
4. Copy and paste the commands below into the shell:
   ```bash
   export RESOURCE_GROUP=kataloadtesting
   export NAME="kataloadtest$RANDOM"

   {
   az group create -n $RESOURCE_GROUP -l eastus
   az deployment group create \
      --resource-group $RESOURCE_GROUP \
      --template-file ./template/template.json \
      --parameters name=$NAME
   }
   ```

### View the Load Test file
1. In Cloud Shell, enter the below command:
   ```bash
   cat src/LoadTest.jmx 
   ```
2. Review the contents of the JMeter test plan
3. Type ```clear``` in the shell

### Download the Load Test file
1. In Cloud Shell, click **Upload/Download icon** on Shell Editor (with up/down arrow)
2. Choose Download
3. Copy and paste the path: ```katas/library/azure-load-testing/src/LoadTest.jmx``` into the input field
4. Click the _"Click here to download your file"_ link that appears, bottom right corner of the shell

### Create load test
1. Enter "Load Testing" in the Azure Portal search bar
2. Under _Services_, Click on **Azure Load Testing**
3. Click the instance you created
4. Click the **Tests** menu item
5. Click **+ Create test** menu bar button
6. Leave Basics tab as-is. Click **Test plan** tab
7. Select the LoadTest.jmx file from your Downloads
8. Click Upload button
9. Click **Review + create** Button
   > OPTIONAL: Click the other tabs to review the capabilities and features available
10. Click **Create** button
   > INFO: The load testing metrics screen will display, testing **msn.com**

### View the load testing metrics
1. Watch the load test run. Metrics' graphs will populate
2. Upon test completion, click **Download -> Results**, downloading the CSV file
3. Open the CSV file using Excel on your local machine
4. Review the detailed fields that are collected, including HTTP code, latency, and more

**END**

### Reflect

#### Feedback
