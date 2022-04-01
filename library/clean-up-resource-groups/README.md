<h1>Clean up Resource Groups in an Azure Subscription</h1>

**Objective:** Quickly filter a set of resource groups, fetch the names, and delete them using the Azure CLI. 
**Duration:** 3 minutes

### Guidance
Do NOT copy any of the commands into the bash terminal, unless explicitly guided to do so. 

### Prerequisites

- Azure Subscription
- Cloud Shell

## Task

**START**

### List the resource groups
1. Launch [Cloud Shell](https://portal.azure.com/#cloudshell/) with Bash selected as the type in a browser
2. Type out this command:
   ```bash
   az group list -o table
   ```

### Populate subscription with test resource groups
1. Copy and paste the command below in its entirety, including the curly braces:
   ```bash
   {
      echo -n "creating test resource groups"
      for i in {1..10};
      do
         suffix=$(echo $RANDOM | md5sum | head -c 5; echo)
         echo -ne .
        az group create -l centralus -n kata-group-$suffix -o none
      done
      echo .
      echo Done
   }
   ```

### Create a query filter
1. Establish your query filter for Azure CLI:
   ```bash
   filter="[?contains(name,'kata-group-')]"
   ```
2. Test the filter
   ```bash
   az group list --query $filter -o table
   ```

### Clean up the resource groups
1. Update the filter to only return name. Press the UP arrow on the keyboard until you return to the filter variable command entered earlier.
   ```bash
   filter="[?contains(name,'kata-group-')].[name]"
   ```
2. Collect the resource groups using the filter
   ```bash
   groups=$(az group list --query $filter -o tsv)
   ```
3. Delete all the collected resource groups immediately
   ```bash
   for g in $groups; do az group delete -n $g --yes --no-wait; done
   ```
4. Confirm groups are deleted
   ```bash
   az group list -o table
   ```

**END**

### Reflect
Upon completing this Kata, you should not have to refer back to any part and be able to do this completely from muscle memory. Here are some additional points to reflect upon.

- Can you remember how to filter using [JMESPath](https://jmespath.org/examples.html) syntax?
- Are you able to add multiple conditions to the query filter to get the resource groups you want?
- Have you gained proficiency enough to where do this is much more efficient than delete groups using the portal?
