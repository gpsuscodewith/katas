---
title: Managing a Windows VM in Azure
description: Using the Azure Portal, Manage a Windows Virtual Machine in Azure
author: travishankins
date: 6/02/2022
env: portal
dependsOn:
- portal-create-a-windows-vm-in-azure
- portal-working-with-users-in-azure-ad
parameters:
- virtualMachineName: contosoVM
- vmAdminUser: azureuser
- vmAdminPassword: SecurePassword123!
- userName: jsmith
- userInitialPassword: SecurePassword456!
---

## Setup

1. A 'Azure VM' named '{{virtualMachineName}}'
2. You must know your Users Azure Active Directory 'Primary domain'

## Steps

### Prepare to connect a Virtual Machine

1. **Azure portal menu** --> Select 'Virtual machines'
2. 'Search services and marketplace' --> Search for and select 'Virtual machine'
3. 'Virtual machine' blade --> Select {{virtualMachineName}}
4. 'Virtual machine' blade --> Select 'Connect' --> 'RDP'
5. 'Connect' blade --> Select 'Download RDP File'

### Connect to Azure Virtual Machine

1. Double-click on downloaded {{virtuamMachineName}}.rdp file
2. Enter the following values
   - Username : {{vmAdminUser}}
   - Password : {{vmAdminPassword}}
3. Click 'Conntinue' to connect to the Azure Virtual Machine


### Join Azure Virtual Machine to Azure Active Directory

1. From the Start menu, click the 'Settings' charm.
2. From 'Settings' select 'Account' -->  'Access work or school' -> 'Connect'
3. From the Pop-up select 'Join this machine to Azure Active Directory'
4. Enter the following values
   - Username : {{userName}}@The Users Azure Active Directory 'Primary domain'
   - Password : {{userInitalPassword}}
5. Select 'Connect --> Join after verifying the correct organization
6. Select 'Done' to complete the process

### Manage Azure Virtual Machine within Azure Active Directory

1. **Azure portal menu** --> Select 'Azure Active Directory'
2. 'Azure Active Directory' navigation menu --> Select 'Devices' from the 'Manage' section
3. Select 'All Devicees' blade from the 'Devices' overview section
4. Select {{virtualMachineName}} from the 'All Devices' section
5. Verify that 'Join Type' is Azure AD joined

END

## Reflect

- Do you think that you would be able to join your virtual machine to multiple Azure AD tenants?
- What advantages does the end user experience when having a machine joined to the organization's Azure AD tenant?

