---
title: Working with Users in Azure AD
description: Using Azure Cloud Shell with bash, create and delete an Azure Active Directory User.
date: 5/24/2022
tags:
- value: MicrosoftCSA
  name: author
- value: bash
  name: env
parameters:
- userId: jsmith
- userFullName: J. Smith
- userPassword: MySecurePassword123!
---

## Steps

### Create a new User in Azure Active Directory

1. Use **az rest** to get the 'Primary domain' from the Graph API
   ```bash
   ✏️ 'Primary domain' is the portion after the @ on the User Principal Name (UPN)
   pd=$(az rest --url https://graph.microsoft.com/v1.0/domains --query 'value[?isDefault].id' -o tsv)
   ```

2. Use **az ad user create** to create the User

   ```bash
   az ad user create --display-name "{{userFullName}}" \ 
                     --password "{{userPassword}}" \
                     --user-principal-name "{{userId}}@$pd"
   ```

### Delete an exiting user in Azure Active Directory

1. Use **az ad user delete** to delete the User

   ```bash
   az ad user delete --id "{{userId}}@$pd"
   ```

END

## Reflect

- Is it safe to use the password you used in this kata and should you change it?
- How do you feel about using auto generated passwords?
