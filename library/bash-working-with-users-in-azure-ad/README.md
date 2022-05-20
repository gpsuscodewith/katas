---
title: Working with Users in Azure AD
description: Use the Azure CLI to create an Azure Active Directory User.
author: MicrosoftCSA
date: 5/19/2022
env: bash
dependsOn:
parameters:
- userId: jsmith@contoso.onmicrosoft.com
- userFullName: J. Smith
- userPassword: MySecurePassword123!
---

## Steps

### Create a user in Azure Active Directory

1. ```bash
   az ad user create --display-name "{{userFullName}}" \ 
                     --password "{{userPassword}}" \
                     --user-principal-name "{{userId}}"
   ```

END

## Reflect

- Is it safe to use the password you used in this kata and should you change it?
- How do you feel about using auto generated passwords?
