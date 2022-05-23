---
title: Create an Ubuntu VM in Azure
description: Create an Ubuntu Virtual Machine in Azure
author: MicrosoftCSA
date: 5/20/2022
env: portal
dependsOn:
- portal-working-with-resource-groups
parameters:
- resourceGroupName: resourceGroupName
- virtualMachineName: contosoVM
- vmRegion: (US) East US 2
- vmAvailabilityOption: No infrastructure redundancy required
- vmSize: Standard_DS1_v2 - 1 vcpu, 3.5 GiB memory
- vmPublicPorts: None
---

## Setup

1. A 'Resource group' named '{{resourceGroupName}}'.

## Steps

### Prepare to setup a new Virtual Machine

1. **Azure portal menu** --> Select 'Create a resource'.
2. 'Search services and marketplace' --> Search for and select 'Virtual machine'.
3. 'Virtual machine' blade --> Select the 'Create' button.

### In the 'Create a vitual machine' blade

- Resource group : {{resourceGroupName}}
- Virtual machine name : {{virtualMachineName}}
- Region : {{vmRegion}}
- Availability options : {{vmAvailabilityOption}}
- Size : {{vmSize}}
- Public inbound ports : {{vmPublicPorts}}

### Create the Virtual Machine

1. 'Create a virtual machine' blade --> Select 'Review + create'.
2. 'Create a virtual machine' blade --> Select 'Create'.

### Generate and store a new Key Pair

1. 'Generate a new key pair' confirmation window --> Select 'Download private key pair and create resource'.
2. '{{virtualMachineName}}_key.pem' file --> Save to a safe secure location.

END

END

## Reflect

- We added the virtual machine to a resource group and also selected a specific region, what ramifications could this have?
- When creating the Ubuntu virtual machine, it generated with using a key/pair for authentication, would a Windows machine have done the same thing?
- What type of disk do you think the Virtual Machine created, should you have changed it?
