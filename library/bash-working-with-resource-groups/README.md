---
title: Working with Resource groups
description: Using Azure Cloud Shell with bash, create and delete a Resource group 
author: MicrosoftCSA
date: 5/20/2022
env: bash
parameters:
- resourceGroupName: contosorg
---

## Steps

### Create a Resource group

1. Create '{{resourceGroupName}}'.

   ```bash
   az group create --name {{resourceGroupName}} \ 
                   --location eastus
   ```

### Delete a Resource group

1. Delete '{{resourceGroupName}}'.

   ```bash
   az group delete --name {{resourceGroupName}}
   ```

## Reflect

- Do you really want your resource group in eastus, maybe there is a closer geography location?
- Deleting a resource group is irreversible and removes everything inside it, did the az group delete command convey this?
