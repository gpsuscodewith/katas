---
title: Working with Users in Azure AD
description: Using the Azure Portal, create and delete an Azure Active Directory User
date: 5/24/2022
tags:
- value: MicrosoftCSA
  name: author
- value: portal
  name: env
parameters:
- userName: jsmith
- userFullName: J. Smith
- userInitialPassword: SecurePassword123!
---

## Steps

### Create a new user in Azure Active Directory

1. **Azure portal menu** --> Select 'Azure Active Directory'
2. 'Overview' blade --> Make a note of 'Primary domain' from the 'Basic information' section
   ```markdown
   ✏️ 'Primary domain' occasionally needs to be specified rather than selected
      Example : jsmith@**myowndomainname.onmicrosoft.com**
   ```
3. 'Azure Active Directory' navigation menu --> Select 'Users' from the 'Manage' section
4. 'All users' blade --> Select 'New user'
5. 'New user' blade --> Enter the following values:
   - User name : {{userName}}
   - Name : {{userFullName}}
   - Initial password : {{userInitialPassword}}
6. 'New user' blade --> Select 'Create'

### Delete an existing User in Azure Active Directory

1. **Azure portal menu** --> Select 'Azure Active Directory'
2. 'Azure Active Directory' navigation menu --> Select 'Users' from the 'Manage' section
3. 'All users' blade --> 'Search users' bar --> Search for and select '{{userName}}'
4. 'Profile' blade --> Select 'Delete'
5. 'Do you want to delete this user?' confirmation window --> Select 'Yes'

END

## Reflect

- Is it safe to use the password you used in this kata and should you change it?
- How do you feel about using auto generated passwords?
