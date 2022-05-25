---
title: Working with Guest Users in Azure AD
description: Using the Azure Portal, create and delete an Azure Active Directory Guest User
author: bhitney
date: 5/25/2022
env: bash
parameters:
- userId: jsmith@contoso.onmicrosoft.com
- userFullName: J. Smith
- userPassword: MySecurePassword123!
---

## Steps

### Create a new User in Azure Active Directory

1. Use **az ad user create** to create the User

   ```bash
   az ad user create --display-name "{{userFullName}}" \ 
                     --password "{{userPassword}}" \
                     --user-principal-name "{{userId}}"
   ```

### Delete an exiting user in Azure Active Directory

1. Use **az ad user delete** to delete the User

   ```bash
   az ad user delete --id {{userId}}
   ```

END

## Reflect

- Is it safe to use the password you used in this kata and should you change it?
- How do you feel about using auto generated passwords?
