---
title: Working with Resource groups
description: Using Azure Cloud Shell with bash, create and delete a Resource group 
date: 5/24/2022
tags:
- name: MicrosoftCSA
  type: author
- name: bash
  type: env
parameters:
- resourceGroupName: contosoResourceGroup
---

## Steps

### Create a new Resource group

1. Use **az group create** to create the Resource group

   ```bash
   az group create --name {{resourceGroupName}} \ 
                   --location eastus
   ```

### Delete an existing Resource group

1. Use **az group delete** to delete the Resource group

   ```bash
   az group delete --name {{resourceGroupName}}
   ```

END

## Reflect

- Do you really want your resource group in eastus, maybe there is a closer geography location?
- Deleting a resource group is irreversible and removes everything inside it, did the az group delete command convey this?
