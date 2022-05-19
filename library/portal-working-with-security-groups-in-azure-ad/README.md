---
title: Working with Security groups in Azure AD
description: Create and remove a Security group in Azure AD.
author: MicrosoftCSA
date: 5/19/2022
env: portal
dependsOn:
- portal-working-with-users-in-azure-ad
params:
- securityGroupName: jsmithgroup
- userName: jsmith
---

## Setup

1. An Active Directory 'User' named '{{userName}}'.

## Steps

### Create a new Security group

1. In the **Azure portal menu**, select 'Azure Active Directory'.
2. In the 'Azure Active Directory' navigation menu, select 'Groups' from the 'Manage' section.
3. In the 'All groups' blade, select 'New group'.
4. In the 'New Group' blade, enter the following values:
   - Group name : {{securityGroupName}}
5. Click on Create.

### Assign a user to a Security group

1. In the **Azure portal menu**, select 'Azure Active Directory'.
2. In the 'Azure Active Directory' navigation menu, select 'Groups' from the 'Manage' section.
3. In the 'All groups' blade, use the 'Search' bar to search for and select '{{securityGroupName}}'.
4. In the 'Group' navigation menu, select 'Members' from the 'Manage' section.
5. In the 'Members' blade, select '+ Add members' from the 'Direct members' section.
6. In the 'Add members' blade, use the 'Search' bar to search for and select '{{userName}}'.
7. In the 'Add members' blade, select 'Select'.

END

## Reflect

- How often do you create a Security group?
- Do you normally use the **Azure portal menu** or do you search in the **Global search bar**
