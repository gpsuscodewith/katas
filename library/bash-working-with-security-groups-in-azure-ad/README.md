---
title: Working with Security groups in Azure AD
description: Using the Azure Cloud Shell with bash, create a new Security group in Azure Active Directory and add an existing User to it
date: 5/24/2022
tags:
- name: MicrosoftCSA
  type: author
- name: bash
  type: env
dependsOn:
- bash-working-with-users-in-azure-ad
parameters:
- userId: jsmith
- securityGroupName: contosoSecurityGroup
---

## Setup

1. An Active Directory 'User' named '{{userId}}'
2. A variable named 'pd' containing the users 'Primary domain'

## Steps

### Create a new Security group in Azure Active Directory

1. Use **az ad group create** to create the Security group

   ```bash
   az ad group create --display-name "{{securityGroupName}}" \ 
                      --mail-nickname "{{securityGroupName}}"
   ```

### Add an existing User to the new Security group in Azure Active Directory

1. Use **az ad user show** to get the User 'objectId'

   ```bash
   objectId=$(az ad user show --id "{{userId}}@$pd" --query objectId --output tsv)
   ```

2. Use **az ad group member add** to add the User to the Security group

   ```bash
   az ad group member add --group "{{securityGroupName}}" \
                          --member-id $objectId
   ```

END

## Reflect

- How often do you create a Security group?
- Do you know all the other things you can do with the az cli command?
