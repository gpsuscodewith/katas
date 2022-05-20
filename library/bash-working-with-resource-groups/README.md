---
title: Working with Resource groups
description: Use the Azuri CLI to create and delete a Resource group 
author: MicrosoftCSA
date: 5/19/2022
env: bash
dependsOn:
parameters:
- resourceGroupName: contosorg
---

## Steps

### Create a Resource group

1. ```bash
   az group create --name {{resourceGroupName}} \ 
                   --location eastus
   ```

### Delete a Resource group

1. ```bash
   az group delete --name {{resourceGroupName}}
   ```

## Reflect

- Do you really want your resource group in eastus, maybe there is a closer geography location?
- Deleting a resource group is irreversible and removes everything inside it, did the az group delete command convey this?
