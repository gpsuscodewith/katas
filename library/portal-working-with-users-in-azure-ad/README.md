---
title: Working with Users in Azure AD
description: Using the Azure Portal --> create and delete an Azure Active Directory User
author: MicrosoftCSA
date: 5/20/2022
env: portal
dependsOn:
parameters:
- userName: jsmith
- userFullName: J. Smith
- userInitialPassword: SecurePassword123!
---

## Steps

### Create a user in Azure Active Directory

1. **Azure portal menu** --> Select 'Azure Active Directory'.
2. 'Azure Active Directory' navigation menu --> Select 'Users' from the 'Manage' section.
3. 'All users' blade --> Select 'New user'.
4. 'New user' blade --> Enter the following values:
   - User name : {{userName}}
   - Name : {{userFullName}}
   - Initial password : {{userInitialPassword}}
5. 'New user' blade --> Select 'Create'.

### Delete a user in Azure Active Directory

1. **Azure portal menu** --> Select 'Azure Active Directory'.
2. 'Azure Active Directory' navigation menu --> Select 'Users' from the 'Manage' section.
3. 'All users' blade --> 'Search users' bar --> Search for and select '{{userName}}'.
4. 'Profile' blade --> Select 'Delete'.
5. 'Do you want to delete this user?' confirmation window --> Select 'Yes'.

END

## Reflect

- Is it safe to use the password you used in this kata and should you change it?
- How do you feel about using auto generated passwords?
