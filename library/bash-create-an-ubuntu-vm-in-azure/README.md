---
title: Create an Ubuntu VM in Azure
description: Using Azure Cloud Shell with bash, create an Ubuntu Virtual Machine in Azure
author: MicrosoftCSA
date: 5/24/2022
env: bash
dependsOn:
- bash-working-with-resource-groups
parameters:
- resourceGroupName: contosoResourceGroup
- vmName: contosoVM
- vmImage: canonical:0001-com-ubuntu-server-focal:20_04-lts-gen2:latest
- vmLocation: eastus2
- vmSize: Standard_DS1_v2
- vmAdminUser: azureuser
- vmOsDiskDeleteOption: Delete
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
                --generate-ssh-keys \
                --os-disk-delete-option {{vmOsDiskDeleteOption}} 
   ```

### Securely back-up your SSH private key

1. Your private key is located here --> ~/.ssh/id_rsa

END

## Reflect

- Is it faster to create a Virtual Machine in Bash with **az vm create** or the Azure Portal?
- What type of disk do you think the Virtual Machine created, should you have changed it?
