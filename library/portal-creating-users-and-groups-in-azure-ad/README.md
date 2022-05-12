---
title: Creating Users and Groups in Azure AD
env: portal
description: Use the Azure Portal to create a new user and a new security group in Azure Active Directory.
author: MicrosoftCSA
date: 5/10/2022
params:
- user_name: jsmith
- user_full_name: J. Smith
- group_name: jsmithgroup
---

# Create a User and Group in Azure Active Directory

## Steps

### Create a user in Azure Active Directory

1. In the left-hand navigation menu, click on Azure Active Directory.
2. In the Azure Active Directory blade, click on Users.
3. In the Users blade, click on + New user.
4. In the Create user blade fill out:
   - User name : {{user_name}}
   - Name : {{user_full_name}}
5. In the Password section, record the generated password or set one of your own.
6. Click on Create.

### Create a group in Azure Active Directory

1. In the left-hand navigation menu, click on Azure Active Directory.
2. In the Azure Active Directory blade, click on Groups.
3. In the Groups blade, click on + New group.
4. In the Create group blade fill out:
   - Group name : {{group_name}}
5. Click on Create.

END

## Reflect

- Do you know how to manage the password requirements for users in your Azure AD?
- How would you assign the user you created to the group you created?
