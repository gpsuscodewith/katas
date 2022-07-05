---
title: Modifying Groups in Azure AD
description: Using powershell to modify an existing Security group in Azure Active Directory and update its description
date: 6/7/2022
tags:
- value: UtahITPro
  name: author
- value: powershell
  name: env
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

### Get and store the ObjectId for {{securityGroupName}}

1. Use **Connect-AzureAD** to connect AzureAD to your powershell session.

   ```powershell
   Connect-AzureAD
   ```

2. Use **Get-AzureADGroup** to store the {{securityGroupName}} in a PowerShell variable

   ```powershell
   $SecurityGroup = Get-AzureADGroup -Filter "DisplayName eq '{{securityGroupName}}'"
   ```

### Modify an existing Security group description in Azure Active Directory

1. Use **Write-Output** to show to the retrieved details and description for {{securityGroupName}}:

   ```powershell
   Write-Output $SecurityGroup
   ```

2. Use **Set-AzureADGroup** to change the description of the security group:

   ```powershell
   Set-AzureADGroup -ObjectId $SecurityGroup.ObjectId -Description "{{securityGroupDescription}}"
   ```
   
### Rename an existing Security group in Azure Active Directory

1. Use **Set-AzureADGroup** to rename the security group :

   ```powershell
   Set-AzureADGroup -ObjectId $SecurityGroup.ObjectId \
                    -DisplayName "{{securityGroupNewName}}"
   ```

END

## Reflect

- Why are you using powershell rather than bash to do this task? 
- Do you think that the new name '{{securityGroupNewName}}' is a sensible name?
