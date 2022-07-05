---
title: Managing Ubuntu Virtual Machines with Azure AD
description: Using Azure Cloud Shell with bash, Azure AD join and manage an Ubuntu Virtual Machine (draft)
date: 5/26/2022
tags:
- value: MicrosoftCSA
  name: author
- value: bash
  name: env
dependsOn:
- bash-create-a-ubuntu-vm-in-azure
- bash-working-with-users-in-azure-ad
parameters:
- resourceGroupName: contosoResourceGroup
- vmName: contosoVM
- vmAdminUser: azureuser
---

## Setup

1. A 'Resource group' named '{{resourceGroupName}}'
2. A 'Ubuntu Virtual Machine' named '{{vmName}}' in that group
3. A 'Admin user' named '{{vmAdminUser}}' on '{{vmName}}' configured to use the SSH key
4. A SSH key for '{{vmName}}' for '{{vmAdminUser}}' reachable to the **ssh** command
5. The 'Primary domain' for the Azure Active Directory you want to add the machine to

## Steps

### Connect to '{{vmName}}' using its public IP address

1. Use **az vm list-ip-addresses** to get the public ip address of '{{vmName}}'

   ```bash
   ipAddress=$(az vm list-ip-addresses --name {{vmName}} \ 
                                       --resource-group {{resourceGroupName}} \
                                       --output tsv \
                                       --query [].virtualMachine.network.publicIpAddresses[].ipAddress)
   
   ✏️ Tip: Make a note of the IP Address, as you won't be able to see the variable when you are in on the VM
   echo $ipAddress
   ```

2. Use **ssh** to connect to the Virtual Machine.

   ```bash
   ssh {{vmAdminUser}}@$ipAddress
   ```

### Using the established SSH session, Configure '{{vmName}}' for Azure AD

1. Use **command** to do domain join task 1

   ```bash
   Do all the domain join goodness here
   ```

2. Use **command** to do domain join task 2

   ```bash
   Do more goodness
   ```

3. Use **exit** to close the remote session to {{vmName}} and return to Azure Cloud Shell.

   ```bash
   exit
   ```

### Finalize the configuration for {{vmName}} from Azure Cloud Shell

1. Use **az-** to show azure AD details for machine

   ```bash
   Do goodness here
   ```
2. Use **az-** to finish up here.

END

## Reflect

- Is it faster to create a Virtual Machine in Bash with **az vm create** or the Azure Portal?
- What type of disk do you think the Virtual Machine created, should you have changed it?
