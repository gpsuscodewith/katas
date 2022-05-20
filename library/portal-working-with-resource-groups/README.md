---
title: Working with Resource groups
description: Create and delete a Resource group in the Azure Portal 
author: MicrosoftCSA
date: 5/19/2022
env: portal
dependsOn:
parameters:
- resourceGroupName: contosorg
---

## Steps

### Create a Resource group

1. In the **Global search bar**, search for and select 'Resource group' from the 'Marketplace' section.
2. In the 'Create a resource group' blade, enter the following values:
   - Resource group : {{resourceGroupName}}
3. Select 'Review + create'.
4. Select 'Create'.

### Delete a Resource group

1. In the **Azure portal menu**, select 'Resource groups'.
2. In the 'Resource groups' blade, select '{{resourceGroupName}}'.
3. In the 'Resource group' blade, select 'Delete resource group'.
4. In the 'Are you sure you want to delete "{{resourceGroupName}}"?' blade, enter the following values:
   - TYPE THE RESOURCE GROUP NAME : {{resourceGroupName}}
5. Select 'Delete'.

END

## Reflect

- Does the 'TYPE THE RESOURCE GROUP NAME' and 'AFFECTED RESOURCES' text being uppercase bother you?
- Deleting a resource group is irreversible and removes everything inside it, did the blade convey this?
