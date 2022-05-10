---
title: Assign a User to a Group in Azure AD
env: bash
description: Use Azure Cloud Shell and Bash to assign a user to a group in Azure Active Directory.
author: MicrosoftCSA
date: 5/10/2022
params:
- user_id: jsmith@contoso.onmicrosoft.com
- group_display_name: jsmithgroup
---

# Assign a User to a Group in Azure Active Directory

## Steps

### Add a user to a group in Azure Active Directory

1. Now add that user to the group using a single command:

   ```bash
   member_id=$(az ad user show --id {{user_id}} --query objectId --output tsv)

   az ad group member add --group "{{group_display_name}}" \
                          --member-id $member_id
   ```

END

## Reflect

- Can you add more than one user to a group at once?
- What is the maximum number of users for a group?
