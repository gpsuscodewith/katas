---
title: Working with Guest Users in Azure AD
description: Using the Azure Portal, create and delete an Azure Active Directory Guest User
author: bhitney
date: 5/25/2022
env: portal
dependsOn:
  - portal-working-with-users-in-azure-ad
parameters:
- emailAddress: jsmith@contoso.com
---

## Setup

1. A 'Guest user' named '{{emailAddress}}'

## Steps

### Create a new user in Azure Active Directory

1. **Azure portal menu** --> Select 'Azure Active Directory'
2. 'Azure Active Directory' navigation menu --> Select 'Users' from the 'Manage' section
3. 'All users' blade --> Select 'Invite external user' from the 'New user' menu
4. 'New user' blade --> Enter the following values:
   - Email address : {{emailAddress}}
5. 'New user' blade --> Select 'Invite'

### Delete an existing Guest User in Azure Active Directory

1. Delete '{{emailAddress}}' as you would any user in Azure Active Directory

END

## Reflect

- How is a guest user different than a new user?
- Why does this kata refer to guest users and external users? Are they the same thing?
