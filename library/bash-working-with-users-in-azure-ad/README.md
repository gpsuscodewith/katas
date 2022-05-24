---
title: Working with Users in Azure AD
description: Using Azure Cloud Shell with bash, create and delete an Azure Active Directory User.
author: MicrosoftCSA
date: 5/24/2022
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
