---
title: Working with Users in Azure AD
description: Create an Azure Active Directory User in the Azure Portal.
author: MicrosoftCSA
date: 5/19/2022
env: portal
dependsOn:
parameters:
- userName: jsmith
- userFullName: J. Smith
- userInitialPassword: SecurePassword123!
---

## Steps

### Create a user in Azure Active Directory

1. In the **Azure portal menu**, select 'Azure Active Directory'.
2. In the 'Azure Active Directory' navigation menu, select 'Users' from the 'Manage' section.
3. In the 'All users' blade, select 'New user'.
4. In the 'New user' blade, enter the following values:
   - User name : {{userName}}
   - Name : {{userFullName}}
   - Initial password : {{userInitialPassword}}
5. Select 'Create'.

END

## Reflect

- Is it safe to use the password you used in this kata and should you change it?
- How do you feel about using auto generated passwords?
