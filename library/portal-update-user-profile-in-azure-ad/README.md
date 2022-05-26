---
title: Update a user's profile information using Azure Active Directory
description: Using the Azure Portal, update an Azure Active Directory user
author: travishankins
date: 5/26/2022
env: portal
dependsOn:
- portal-working-with-users-in-azure-ad
parameters:
- userName: jsmith
- userJobTitle: Customer Engineer
- userDepartment: Information Technology
- userCompany: Contoso
---

## Steps

### Update an existing user in Azure Active Directory

1. **Azure portal menu** --> Select 'Azure Active Directory'
2. 'Azure Active Directory' navigation menu --> Select 'Users' from the 'Manage' section
3. 'All users' blade --> 'Search users' bar --> Search for and select '{{userName}}'
4. 'Profile' blade --> Select 'Edit'
5. 'Profile' blade --> Enter the following values:
   - Job title : {{userJobTitle}}
   - Department : {{userDepartment}}
   - Company : {{userCompany}}
6. 'Profile' blade --> Select 'Save'

END

## Reflect

- What would the outcome be if you had chose 'Block sign in' as you were updating user's account?
- How do you feel about using Azure Active Directory Multi-factor Authentication?
