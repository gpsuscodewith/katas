---
title: Modifying Groups in Azure AD
description: Using the Azure Portal, modify an existing Security group in Azure Active Directory and update its description
author: UtahITPro
date: 5/25/2022
env: portal
dependsOn:
- portal-working-with-security-groups-in-azure-ad
parameters:
- securityGroupName: contosoSecurityGroup
- securityGroupNewName: contosoSecurityGroup2
- securityGroupDescription: This is the contoso security group for IT staff
---

## Setup

1. An Active Directory 'Security group' named '{{securityGroupName}}'

## Steps

### Modify an existing Security group description in Azure Active Directory

1. **Azure portal menu** --> Select 'Azure Active Directory'
2. 'Azure Active Directory' navigation menu --> Select 'Groups' from the 'Manage' section
3. 'All groups' blade --> 'Search' bar --> Search for and select '{{securityGroupName}}'
4. 'Group' navigation menu --> Select 'Properties' from the 'Manage' section
5. 'Properties' blade --> Enter the following values:
   - Group description : {{securityGroupDescription}}
6. 'Properties' blade --> Select 'Save'

### Rename an existing Security group in Azure Active Directory

1. **Azure portal menu** --> Select 'Azure Active Directory'
2. 'Azure Active Directory' navigation menu --> Select 'Groups' from the 'Manage' section
3. 'All groups' blade --> 'Search' bar --> Search for and select '{{securityGroupName}}'
4. 'Group' navigation menu --> Select 'Properties' from the 'Manage' section
5. 'Properties' blade --> Enter the following values:
   - Group name : {{securityGroupNewName}}
6. 'Properties' blade --> Select 'Save'

END

## Reflect

- Do you think that the new name '{{securityGroupNewName}}' is a sensible name?
- Do you normally enter descriptions for Security groups or just leave them blank?