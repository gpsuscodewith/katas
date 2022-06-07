---
title: Working with Guest Users in Azure AD
description: Using Azure Cloud Shell with PowerShell, add an Azure Active Directory Guest User
author: bhitney
date: 5/25/2022
env: powershell
parameters:
- userFullName: J. Smith
- emailAddress: jsmith@contoso.com
---

## Steps

### Invite an external user to Azure AD

1. Run **Connect-AzureAD** in PowerShell to connect to Azure AD

   ```PowerShell
   Connect-AzureAD
   ```

2. Run **New-AzureADMSInvitation** to invite the user to the current Azure AD, and store the result into a variable called newUser

   ```PowerShell
   $newUser = New-AzureADMSInvitation -InvitedUserEmailAddress {{emailAddress}} \
      -InvitedUserDisplayName '{{userFullName}}' \
      -InviteRedirectUrl https://myapps.microsoft.com \
      -sendinvitationmessage $true 
   ```

### Remove an external user from Azure AD

1. Run **Remove-AzureADUser** to remove the user from Azure AD, using the Object ID from the user created earlier

   ```PowerShell
   Remove-AzureADUser -ObjectId $newuser.InvitedUser.Id
   ```

END

## Reflect

- What is the experience like for the invited user?
- How is the InviteRedirectUrl used?