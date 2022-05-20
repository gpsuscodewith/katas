---
title: Working with Security groups in Azure AD
description: Using Azure Cloud Shell with bash, create and delete an Azure Active Directory Security group
author: MicrosoftCSA
date: 5/20/2022
env: bash
dependsOn:
- bash-working-with-users-in-azure-ad
parameters:
- userId: jsmith@contoso.onmicrosoft.com
- securityGroupName: jsmithgroup
---

## Setup

1. An Active Directory 'User' named '{{userId}}'.

## Steps

### Create a group in Azure Active Directory

1. ```bash
   az ad group create --display-name "{{securityGroupName}}" \ 
                      --mail-nickname "{{securityGroupName}}"
   ```

### Add a user to a group in Azure Active Directory

1. ```bash
   member_id=$(az ad user show --id {{userId}} --query objectId --output tsv)
   ```

2. ```bash
   az ad group member add --group "{{securityGroupName}}" \
                          --member-id $member_id
   ```

END

## Reflect

- How often do you create a Security group?
- Do you know all the other things you can do with the az cli command?
