---
title: Creating Users and Groups in Azure AD
env: bash
description: Use Azure Cloud Shell and Bash to create a new user and a new group in Azure Active Directory.
author: MicrosoftCSA
date: 5/10/2022
params:
- user_id: jsmith@contoso.onmicrosoft.com
- user_full_name: J. Smith
- user_password: MySecurePassword123!
- group_mail_nickname: jsmithgroup
- group_display_name: jsmithgroup
---

# Create a User and Group in Azure Active Directory

## Steps

### Create a user in Azure Active Directory

1. Run the following command, changing the values for something unique you can test with:

   ```bash
   az ad user create --display-name "{{user_full_name}}" \ 
                     --password "{{user_password}}" \
                     --user-principal-name "{{user_id}}"
   ```

### Create a group in Azure Active Directory

1. Run the following command, changing the values for something unique you can test with:

   ```bash
   az ad group create --display-name "{{group_display_name}}" \ 
                      --mail-nickname "{{group_mail_nickname}}"
   ```

END

## Reflect

- Do you know how to manage the password requirements for users in your Azure AD?
- How would you assign the user you created to the group you created?
