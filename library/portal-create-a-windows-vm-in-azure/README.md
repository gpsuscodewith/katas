---
title: Create a Windows VM in Azure
description: Using the Azure Portal, Create a Windows Virtual Machine in Azure
author: travishankins
date: 5/25/2022
env: portal
dependsOn:
- portal-working-with-resource-groups
parameters:
- resourceGroupName: contosoResourceGroup
- virtualMachineName: contosoVM
- vmRegion: (US) East US 2
- vmAvailabilityOption: No infrastructure redundancy required
- vmImage: Windows 11 Pro - Gen2
- vmSize: DS1_v2
- vmAdminUser: azureuser
- vmAdminPassword: SecurePassword123!
- vmBootDiag: Disable
---

## Setup

1. A 'Resource group' named '{{resourceGroupName}}'

## Steps

### Prepare to setup a new Virtual Machine

1. **Azure portal menu** --> Select 'Create a resource'
2. 'Search services and marketplace' --> Search for and select 'Virtual machine'
3. 'Virtual machine' blade --> Select 'Create'

### Configure the new Virtual Machine

1. 'Create a virtual machine' blade --> 'Basics' section --> Enter the following values:
   - Resource group : {{resourceGroupName}}
   - Virtual machine name : {{virtualMachineName}}
   - Region : {{vmRegion}}
   - Availability options : {{vmAvailabilityOption}}
   - Image : {{vmImage}}
2. 'Create a virtual machine' blade --> 'Basics' section --> 'Size' --> Select 'See all sizes'
3. 'Select a VM size' blade --> 'Search by VM size' --> Search for and select {{vmSize}}
4. 'Select a VM size' blade --> Select 'Select'
5. 'Create a virtual machine' blade --> 'Basics' section --> Enter the following values:
   - Username : {{vmAdminUser}}
   - Password : {{vmAdminPassword}}
   - Confirm Password : {{vmAdminPassword}}
6. 'Create a virtual machine' blade --> 'Management' section --> Enter the following values:
   - Boot diagnostics : {{vmBootDiag}}

### Create the Virtual Machine

1. 'Create a virtual machine' blade --> Select 'Review + create'
2. 'Create a virtual machine' blade --> Select 'Create'

END

## Reflect

- When creating the Windows virtual machine, we used a username and password, would an Ubuntu machine by default have done the same thing?
- How long did you think it would take to create the virtual machine, was it longer than expected?

