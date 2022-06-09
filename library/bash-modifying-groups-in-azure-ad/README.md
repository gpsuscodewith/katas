---
title: Modifying Groups in Azure AD
description: NOT WORKING - Using bash to modify an existing Security group in Azure Active Directory and update its description
author: UtahITPro
date: 6/7/2022
env: bash
dependsOn:
- bash-working-with-security-groups-in-azure-ad
parameters:
- securityGroupName: contosoSecurityGroup
- securityGroupNewName: contosoSecurityGroup2
- securityGroupDescription: This is the contoso security group for IT staff
---

## Setup

1. An Active Directory 'Security group' named '{{securityGroupName}}'

## Steps

### Modify an existing Security group description in Azure Active Directory

1. Use **az ad group show** to locate the current security group and note its description:

   ```bash
   az ad group show --group {{securityGroupName}}
   ```

2. Use **az ad group update** to change the description of the security group:

   ```bash
   az ad group update --group {{securityGroupName}} \
                      --set tags.Description={{securityGroupDescription}}
   ```
   
### Rename an existing Security group in Azure Active Directory

1. Use **az group rename** to rename the security group:

   ```bash
   az ad group rename --group {{securityGroupName}} \
                      --new-name {{securityGroupNewName}}
   ```

END

## Reflect

- Do you think that the new name '{{securityGroupNewName}}' is a sensible name?
- Do you normally enter descriptions for Security groups or just leave them blank?