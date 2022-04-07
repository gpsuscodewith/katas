<h1>Create and use a Service Principal to access Azure resources</h1>

**Objective:** Quickly create and use a service principal for Azure resources with the Azure CLI. 
**Duration:** 7 minutes

### Prerequisites

- Azure Subscription
- Cloud Shell

## Task

**START**

### List your service principals
1. Launch [Cloud Shell](https://portal.azure.com/#cloudshell/) with Bash selected as the type in a browser
2. List out only your service principals and return appId and name
   ```bash
   filter="[].{appId:appId, name:appDisplayName}"
   az ad sp list --show-mine --query "$filter" -o table 
   ```
1. Define a function to return service principal info by name
   ```bash
   show_sp() {
      az ad sp list --show-mine --query "[?contains(appDisplayName, '$1')] | [0]" -o json
   }
   ```

### Create a service principal
1. Create a Resource Group to work with
   ```bash
   resource_group=kata-group
   az group create -l eastus2 -n $resource_group
   ```
2. Define and create the service principal
   ```bash
   sp_name=kata-sp-$RANDOM
   sp_info=$(az ad sp create-for-rbac -n $sp_name -o json)
   ```

### Interact with the service principal
1. First, print out the service principal info,including its password
   ```bash
   echo $sp_info
   ```
2. Save the basic service principal info to a file and pretty print the contents
   ```bash
   echo $sp_info > sp_info.json
   cat sp_info.json | jq .
   ```
3. Now print out the entire info of the sp, using the custom function
   ```bash
   show_sp $sp_name
   ```
4. Set a variable to just the objectId of the service principal using the custom function
   ```bash
   objectid=$(show_sp $sp_name | jq .objectId -r)
   ```

### Give the service principal a role to a resource
1. Assign Contributor role to the resource group by getting the objectId of the service principal
   ```bash
   az role assignment create --assignee $objectid --role Contributor --resource-group $resource_group
   ```
2. List ALL resources that the service principal has access to by including the `--all` option
   ```bash
      az role assignment list --assignee $objectid --all
   ```

### Clean up resources
1. Delete the resource group
   ```bash
   az group delete -n $resource_group --yes --no-wait
   ```
2. Delete the service principal and remove the temp file
   ```bash
   az ad sp delete --id $objectid 
   rm sp_info.json
   ```

**END**

### Reflect

- What other techniques could speed up your use of [JMESPath](https://jmespath.org/examples.html) filters?
- How often do you leverage the power of bash functions to speed up your productivity?
