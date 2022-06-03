---
title: Working with Resource groups
description: Using the Azure Portal, create and delete a Resource group 
author: MicrosoftCSA
date: 5/24/2022
env: portal
parameters:
- resourceGroupName: contosoResourceGroup
---

## Steps

### Create a new Resource group

1. **Global search bar** --> Search for and select 'Resource group' from the 'Marketplace' section
2. 'Create a resource group' blade --> Enter the following values:
   - Resource group : {{resourceGroupName}}
3. 'Create a resource group' --> Select 'Review + create'
4. 'Create a resource group' --> Select 'Create'

### Delete an existing Resource group

1. **Azure portal menu** --> Select 'Resource groups'
2. 'Resource groups' blade --> Select '{{resourceGroupName}}'
3. 'Resource group' blade --> Select 'Delete resource group'
4. 'Are you sure you want to delete "{{resourceGroupName}}"?' blade --> Enter the following values:
   - TYPE THE RESOURCE GROUP NAME : {{resourceGroupName}}
5. 'Are you sure you want to delete "{{resourceGroupName}}"?' blade --> Select 'Delete'

END

## Reflect

- Does the 'TYPE THE RESOURCE GROUP NAME' and 'AFFECTED RESOURCES' text being uppercase bother you?
- Deleting a resource group is irreversible and removes everything inside it, did the blade convey this?
