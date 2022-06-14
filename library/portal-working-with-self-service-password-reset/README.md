---
title: Working with Azure AD Self Service Password Reset
description: Using the Azure Portal, setup Azure Active Directory Self Service Password Reset
date: 6/03/2022
tags:
- name: travishankins
  type: author
- name: portal
  type: env
dependsOn:
- portal-working-with-users-in-azure-ad
parameters:
- userName: jsmith
- userInitialPassword: SecurePassword123!
- securityGroupName: contosoSecurityGroup
---

## Setup

1. You must know your Users Azure Active Directory 'Primary domain'

## Steps

### Enable Azure Active Directory self-service password reset

1. **Azure portal menu** --> Select 'Azure Active Directory'
2. 'Azure Active Directory' navigation menu --> Select 'Password Reset' from the 'Manage' section
3. 'Password reset' blade --> Select 'Selected'
4. Select 'No groups selected' --> Select {{securityGroupName}} from the 'Default password reset policy' blade --> Select 'Select"
5. "Password reset' blade --> Select "Save"

### Select authentication methods and registration options for self-service password reset

1. 'Password reset' blade --> Select 'Authentication methods'
2. Set the 'Number of methods required to reset' to 2.
3. Select the boxes to enable to the following methods:
   - Email
   - Mobile phone
4. "Password reset' blade --> Select "Save"

### Test self-service password reset

1. Open a new browser windows in InPrivate or incognito mode and navigate to aks.ms/ssprsetup
2. Sign in with the following information
   - email address : {{userName}}@The Users Azure Active Directory 'Primary domain'
   - password : {{userInitialPassword}}
3. Insert your mobile phone number and personal email address for the recovery options
4. Once finished, select the button marked 'Looks good' and close the browser window
5. Open a new browser window in InPrivate or incognito mode, and browse to https://aka.ms/sspr
6. Enter the email address as followed
   - email or username : {{userName}}@The Users Azure Active Directory 'Primary domain'
   - Enter the characters for the CAPTCHA
7. Follow the verification steps to reset {{userName}}'s password

END

## Reflect

- Would SSPR helps reduce the amount of work required from administrators?
- Which of the 6 authenication methods do you believe to be the less secure option?
