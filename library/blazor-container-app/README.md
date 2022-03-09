<h1 align="center">Host a Blazor App in Azure Container Apps</h1>

**Duration**: 15 Minutes <br />
**Participation target**: Individual <br />

**Goal**: Create a Docker image for an existing Blazor app and host it using Azure Container Apps

### Prerequisites

- A local Blazor app using either of the below options:
  - Reuse a Blazor app from a previous Kata
  - Create a new Blazor app: `dotnet new blazorwasm -ho -o SampleBlazorApp`
- [.NET 6 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/6.0)
- [Visual Studio Code](https://code.visualstudio.com/download)
- [Docker Extension for VS Code](https://code.visualstudio.com/docs/containers/overview)

## Steps

### Check your dotnet CLI version 
The CLI version must be 6 for you to continue. 
1. Open a terminal and run:
   ```
   dotnet --version
   ```
2. Confirm 6+ version is printed


### Create a Docker Image
1. Open VS Code and open the folder containing your Blazor app
2. Open the Command Palette, located under the `View --> Command Palette` menu, or CTRL(CMD on Mac)-SHIFT-P
3. Choose the `Docker: Add Docker Files to Workspace` option and select the following parameters:
    1. ASP.NET Core
    2. Server project
    3. Linux OS
    4. Default port
         > Make note of this port as you'll need to use it in later steps
    5. Choose the Server project to launch
    6. No optional Docker Compose

> This will create a Dockerfile for the Server project. Feel free to peruse the file at your discretion.

### Build Docker Image
1. Open a terminal and navigate to the parent folder of your app. For example, if you created an app called blazorchatapp under your home directory as part of a previous kata, run
    ``` bash
    cd ~/blazorchatapp
    ```
2. Build the container (your path to the Dockerfile may be different)
    ``` bash
    docker build -t blazorchatapp -f BlazorChatApp/Server/Dockerfile .
    ```
    > While not part of this kata, once the build completes, you could run it locally using:
    >``` bash
    >docker run -d -p 8080:5297 blazorchatapp
    >```
3. Continue with next steps while the image builds

### Create Resource Group and Azure Container Registry
1. Resource group
   > Do not change the location from eastus2. Container Apps is currently only available in certain regions.
   ``` bash
   RESOURCE_GROUP="blazor-wasm-rg"
   az group create --name $RESOURCE_GROUP --location eastus2
   ```
2. Container Registry
   > If using an existing registry, skip the `az acr create` step but populate the `REGISTRY_NAME` variable with your registry. The existing registry must have the admin user enabled for the ACR login steps below to work.
   ``` bash
   REGISTRY_NAME="blazorwasmacr" #(can't use this, though, create unique)
   az acr create --resource-group $RESOURCE_GROUP \
     --admin-enabled \
     --name $REGISTRY_NAME --sku Basic
   ```

### Login to ACR and Push Image
``` bash
REGISTRY_LOGIN_SERVER=`az acr show -n $REGISTRY_NAME -g $RESOURCE_GROUP --query loginServer -o tsv`

REGISTRY_USERNAME=$REGISTRY_NAME

REGISTRY_PASSWORD=`az acr credential show -n $REGISTRY_NAME -g $RESOURCE_GROUP --query passwords[0].value -o tsv`

CONTAINER_IMAGE_NAME=$REGISTRY_LOGIN_SERVER/blazorchatapp:1.0

az acr login --name $REGISTRY_NAME

docker tag blazorchatapp $CONTAINER_IMAGE_NAME
docker push $CONTAINER_IMAGE_NAME
```
### Create Azure Container App
1. Add and register the Container App az provider
   ``` bash
   az extension add --source https://workerappscliextension.blob.core.windows.net/azure-cli-extension/containerapp-0.2.2-py2.py3-none-any.whl
      
   az provider register --namespace Microsoft.Web
   ```
2. Create a new Log Analytics Workspace (required for Azure Container App)
   ``` bash
   RESOURCE_GROUP="blazor-wasm-rg"
   LOCATION="eastus2"
   LOG_ANALYTICS_WORKSPACE="blazor-wasm-logs"
   CONTAINERAPPS_ENVIRONMENT="blazor-wasm-environment"

   az monitor log-analytics workspace create \
      --resource-group $RESOURCE_GROUP \
      --workspace-name $LOG_ANALYTICS_WORKSPACE

   LOG_ANALYTICS_WORKSPACE_CLIENT_ID=`az monitor log-analytics workspace show --query customerId -g $RESOURCE_GROUP -n $LOG_ANALYTICS_WORKSPACE -o tsv | tr -d '[:space:]'`

   LOG_ANALYTICS_WORKSPACE_CLIENT_SECRET=`az monitor log-analytics workspace get-shared-keys --query primarySharedKey -g $RESOURCE_GROUP -n $LOG_ANALYTICS_WORKSPACE -o tsv | tr -d '[:space:]'`
   ```
3. Create the Container App Environment and associated Container App to run the Blazor app
   ``` bash
   # Creating Container App Environment
   az containerapp env create \
      --name $CONTAINERAPPS_ENVIRONMENT \
      --resource-group $RESOURCE_GROUP \
      --logs-workspace-id $LOG_ANALYTICS_WORKSPACE_CLIENT_ID \
      --logs-workspace-key $LOG_ANALYTICS_WORKSPACE_CLIENT_SECRET \
      --location $LOCATION
   ```
   > Update the --target-port parameter to match the port of the app created earlier
   ```
   # Creating the Container App to run the Blazor application
   az containerapp create \
      --name blazor-wasm-app \
      --resource-group $RESOURCE_GROUP \
      --image $CONTAINER_IMAGE_NAME \
      --environment $CONTAINERAPPS_ENVIRONMENT \
      --registry-login-server $REGISTRY_LOGIN_SERVER \
      --registry-username $REGISTRY_USERNAME \
      --registry-password $REGISTRY_PASSWORD \
      --min-replicas 2 --max-replicas 4 \
      --ingress external \
      --target-port 5297 \
      --query configuration.ingress.fqdn
   ```
4. Take the URL that was output from the previous step and paste it in a browser window to verify the application is running

### (Optional) Azure Container App Inspection
1. Navigate to the [portal](https://portal.azure.com) and open the new Resource Group and investigate the options available to manage and monitor the Container App

END

### Reflect

 - When and why would you use this for a partner project?
 - When and why would you use this for local development? Is this easier or more difficult than using a local kubernetes instance?

### Reflections
* Interesting local dev scenario possibilities, especially with the automatic Log Analytics integration.
* Creating Dockerfile through VS Code extension will help accelerate the move to a container.
* This kata would be good to send to partners for them to get ramped up quickly.

### Feedback
* Kata layout was good, commands straightforward.
* Liked the use of CLI instead of the GUI
* The command to get the ACR password didn't work, needed to use double quotes
* While everything finished successfully, browsing to the site didn't work for one participant, although Log Analytics showed traffic.
* Instead of letting participants choose an app during prerequisites, provide a basic app for download so all are at the same starting point.
