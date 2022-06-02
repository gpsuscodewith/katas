---
title: Bulk create users in Azure Active Directory
description: Using the Azure Portal, bulk create user accounts
author: indranil-dutta
date: 6-2-2022
env: portal
parameters:
- bulkUserDisplayName1: K. Smith
- bulkUserUPN1: ksmith
- bulkUserInitialPassword: SecurePassword123!
- bulkUserDisplayName2: L. Smith
- bulkUserUPN2: lsmith
- bulkUserDisplayName3: M. Smith
- bulkUserUPN3: msmith
- bulkUserBlockSignIn: No
---

## Steps

### Download Bulk user create 'csv file' template

1. **Azure portal menu** --> Select 'Azure Active Directory'
2. 'Azure Active Directory' navigation menu --> Select 'Users' from the 'Manage' section
3. 'Bulk Operations' dropdown --> Select 'Bulk Create'
4. 'Bulk Create User' blade --> Select 'Download csv template (optional)'
5. 'UserCreateTemplate.csv' file --> Save to a secure location

### Add an entry to the 'UserCreateTemplate.csv' file for {{bulkUserDisplayName1}}

1. 'UserCreateTemplate.csv' file --> Add a new row for '{{bulkUserDisplay1}}' --> Enter the following values:
   - Name [displayName] Required: {{bulkUserDisplayName1}}
   - User name [userPrincipalName] Required: {{bulkUserUPN1}}
   - initial password: {{bulkUserInitialPassword}}
   - Block sign in (Yes/No) [accountEnabled] Required: No

### Add an entry to the 'UserCreateTemplate.csv' file for {{bulkUserDisplayName2}}

1. 'UserCreateTemplate.csv' file --> Add a new row for '{{bulkUserDisplay2}}' --> Enter the following values:
   - Name [displayName] Required: {{bulkUserDisplayName2}}
   - User name [userPrincipalName] Required: {{bulkUserUPN2}}
   - initial password: {{bulkUserInitialPassword}}
   - Block sign in (Yes/No) [accountEnabled] Required: No

### Add an entry to the 'UserCreateTemplate.csv' file for {{bulkUserDisplayName3}}

1. 'UserCreateTemplate.csv' file --> Add a new row for '{{bulkUserDisplay3}}' --> Enter the following values:
   - Name [displayName] Required: {{bulkUserDisplayName3}}
   - User name [userPrincipalName] Required: {{bulkUserUPN3}}
   - initial password: {{bulkUserInitialPassword}}
   - Block sign in (Yes/No) [accountEnabled] Required: No

### Upload bulk user information to Azure Active Directory

1. "Bulk Create User" blade --> select "Upload your csv file"
2. From secure location --> select "UserCreateTemplate.csv' file 

### Check Status of bulk user create operation

1. 'Azure Active Directory' navigation menu --> Select 'Users' from the 'Manage' section
2. 'Activity' blade --> Select 'Bulk Operations results'

END


## Reflect

- What would the outcome be if you had chose 'Block sign in' as you were updating user's account?
- How do you feel about putting in user's initial password on clear text on the csv file?
