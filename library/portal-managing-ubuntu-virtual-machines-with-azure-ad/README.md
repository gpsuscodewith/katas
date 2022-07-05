---
title: Managing Ubuntu Virtual Machines with Azure AD
description: NOT Using the Azure Portal, Azure AD join and manage an Ubuntu Virtual Machine (draft)
date: 5/26/2022
tags:
- value: MicrosoftCSA
  name: author
- value: portal
  name: env
dependsOn:
- portal-create-a-ubuntu-vm-in-azure
parameters:
- resourceGroupName: contosoResourceGroup
- vmName: contosoVM
---

## Setup

1. A Ubuntu 'Virtual Machine' named '{{vmName}}'

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
