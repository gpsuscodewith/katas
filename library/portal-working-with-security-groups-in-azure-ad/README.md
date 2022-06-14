---
title: Working with Security groups in Azure AD
description: Using the Azure Portal, create a new Security group in Azure Active Directory and add an existing User to it
date: 5/24/2022
tags:
- name: MicrosoftCSA
  type: author
- name: portal
  type: env
dependsOn:
- portal-working-with-users-in-azure-ad
parameters:
- securityGroupName: contosoSecurityGroup
- userName: jsmith
---

## Setup

1. An Active Directory 'User' named '{{userName}}'.

## Steps

### Create a new Security group in Azure Active Directory

1. **Azure portal menu** --> Select 'Azure Active Directory'
2. 'Azure Active Directory' navigation menu --> Select 'Groups' from the 'Manage' section
3. 'All groups' blade --> Select 'New group'
4. 'New Group' blade --> Enter the following values:
   - Group name : {{securityGroupName}}
5. 'New Group' blade --> Select Create

### Add an existing User to the new Security group in Azure Active Directory

1. **Azure portal menu** --> Select 'Azure Active Directory'
2. 'Azure Active Directory' navigation menu --> Select 'Groups' from the 'Manage' section
3. 'All groups' blade --> 'Search' bar --> Search for and select '{{securityGroupName}}'
4. 'Group' navigation menu --> Select 'Members' from the 'Manage' section
5. 'Members' blade --> Select 'Add members'
6. 'Add members' blade --> 'Search' bar --> Search for and select '{{userName}}'
7. 'Add members' blade --> Select 'Select'

END

## Reflect

- How often do you create a Security group?
- Do you normally use the **Azure portal menu** or do you search with the **Global search bar**?
