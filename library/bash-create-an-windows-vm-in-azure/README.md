---
title: Create an Windows VM in Azure
description: Using Azure Cloud Shell with bash, create an Windows Virtual Machine in Azure
author: travishankins
date: 5/25/2022
env: bash
dependsOn:
- bash-working-with-resource-groups
parameters:
- resourceGroupName: contosoResourceGroup
- vmName: contosoVM
- vmImage: MicrosoftWindowsDesktop:windows-11:win11-21h2-pro
- vmLocation: eastus2
- vmSize: Standard_DS1_v2
- vmAdminUser: azureuser
- vmAdminPassword: SecurePassword123!
- vmPublicIP: Standard
- vmOsDiskDeleteOption: Delete
- vmNicOption: Delete
- vmLicenseType: Windows_Client
---

## Setup

1. A 'Resource group' named '{{resourceGroupName}}'

## Steps

### Create a new Virtual Machine in an existing Resource group

1. Use **az vm create** to create the Virtual Machine

   ```bash
   az vm create --resource-group {{resourceGroupName}} \
                --name {{vmName}} \
                --image {{vmImage}} \
                --location {{vmLocation}} \
                --size {{vmSize}} \
                --admin-username {{vmAdminUser}} \
                --vmAdminPassword {{vmAdminPassword}} \
                --public-ip-sku {{Standard}}
                --os-disk-delete-option {{vmOsDiskDeleteOption}}
                --nic-delete-option {{vmNicOption}}
                --license-type {{vmLicenseType}}
   ```
END

## Reflect

- You get a text message indicating some problems with your VMs. You only have your tablet with you, would you still be able to access the Azure CLI using the tablet?
- What would the outcome be if you used the tried setting the user name to 'admin' or 'root'?
