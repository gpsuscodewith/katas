---
title: Working with Security groups in Azure AD
description: Using the Azure Portal --> create and delete an Azure Active Directory Security group
author: MicrosoftCSA
date: 5/19/2022
env: portal
dependsOn:
- portal-working-with-users-in-azure-ad
parameters:
- securityGroupName: jsmithgroup
- userName: jsmith
---

## Setup

1. An Active Directory 'User' named '{{userName}}'.

## Steps

### Create a new Security group

1. **Azure portal menu** --> Select 'Azure Active Directory'.
2. 'Azure Active Directory' navigation menu --> Select 'Groups' from the 'Manage' section.
3. 'All groups' blade --> Select 'New group'.
4. 'New Group' blade --> Enter the following values:
   - Group name : {{securityGroupName}}
5. Click on Create.

### Assign a user to a Security group

1. **Azure portal menu** --> Select 'Azure Active Directory'.
2. 'Azure Active Directory' navigation menu --> Select 'Groups' from the 'Manage' section.
3. 'All groups' blade --> Use the 'Search' bar to search for and select '{{securityGroupName}}'.
4. 'Group' navigation menu --> Select 'Members' from the 'Manage' section.
5. 'Members' blade --> Select 'Add members'.
6. 'Add members' blade --> Use the 'Search' bar to search for and select '{{userName}}'.
7. 'Add members' blade --> Select 'Select'.

END

## Reflect

- How often do you create a Security group?
- Do you normally use the **Azure portal menu** or do you search with the **Global search bar**
