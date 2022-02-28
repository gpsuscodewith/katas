<h1 align="center">Secure a Blazor App with Azure Active Directory</h1>

**Duration**: 15 Minutes <br />
**Participation target**: Individual <br />

**Goal**: Secure a Hosted Blazor WebAssembly and ServerAPI with Azure Active Directory

### Prerequisites

- Access to an Azure Tenant which you have admin rights too (the internal Microsoft tenant will not work due to app registration). You can get one by registering with the Microsoft 365 Developer Program or by creating an Azure free account.
- [.NET 6 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/6.0)
- [Visual Studio Code](https://code.visualstudio.com/download)

## Steps

### Check your dotnet CLI version 
The CLI version must be 6 for you to continue. 
1. Open a terminal and run:
   ```
   dotnet --version
   ```
2. Confirm 6+ version is printed


### Register a Server API application in AAD via the Azure Portal
1. Navigate to [App registrations](https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredApps) section of the Azure AAD in the Azure Portal for your non Microsoft Tenant
2. Click on **New registration**.
3. Name the application : ```aadblazorserver```, leave the supported account types on ***single tenant*** and change the **Redirect URI** dropdown to ***Web*** leaving the textbox blank and then click on **Register** to create the app registration.
4. Record the following details for the server app:
   - ***Application (client) ID*** and ***Directory (tenant) ID*** from the **Overview** blade
   - ***Publisher Domain*** from the **Branding & Properties** blade.
5. In the **API permissions** blade
   - Remove the Microsoft Graph entry by clicking on the ... menu for the Microsoft Graph entry and selecting ***Remove all permissions***
6. In the **Expose an API** blade
   - Click on ***Add a scope*** 
   - Click ***Save and Continue***.
   - Name the scope ```API.Access```
   - Enter ```API Access``` for both the ***Admin consent display name*** and the ***Admin consent description***
   - Click on ***Add scope***
7. Record the ***Application ID URI*** (above scopes in the **Expose an API** blade)


### Register a Client application in AAD via the Azure Portal
1. Navigate to [App registrations](https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredApps) section of the Azure AAD in the Azure Portal for your non Microsoft Tenant
2. Click on **New registration**.
3. Name the application : ```aadblazorclient```, leave the supported account types on ***single tenant***.
4. Change the **Redirect URI** to ***Single-page application (SPA)*** and populate the textbox with ```https://localhost:5001/authentication/login-callback```
5. Record the following details for the client app:
   - ***Application (client) ID*** from the **Overview** blade
6. In the **API permissions** blade
   - Click on **Add a permission** 
   - Under **Request API Permissions**->**Select an API**, click on ***My APIs*** and click your ```aadblazorserver``` entry.
   - Check the ***API.Access*** scope checkbox and then click on **Add permissions**
   - Click on 'Grant admin consent for Default Directory' button next to Add a permission (this button may be named differently depending on your subscription/tenant), and select Yes on the confirmation.
7. Close the portal.


### Create your Blazor Web Assembly Application
1. Open a terminal window and browse to a location to create your project (e.g. d:\source)
2. Execute the following command, filling in the place holders with the values you recorded in the previous steps (read the notes below the command first!).
   ```
   dotnet new blazorwasm -au SingleOrg --api-client-id "{SERVER API APP CLIENT ID}" --app-id-uri "{SERVER API APP ID URI}" --client-id "{CLIENT APP CLIENT ID}" --default-scope "API.Access" --domain "{TENANT DOMAIN}" -ho -o BlazorAuthApp --tenant-id "{TENANT ID}"
   ```
   ℹ️ | {TENANT DOMAIN} is the Publisher Domain from step 4 of the server steps above.
   :---: | :---: 
   
   ⚠️ | When entering the {SERVER API APP ID URI} above remove the ***api://*** and just enter the Guid, as of 2/28/2022 it will be double added if you don't remove it. More info [here](https://github.com/dotnet/aspnetcore/issues/27417). This could change in the future.
   :---: | :---:
 3. Execute the following commands 
    ```
    cd BlazorAuthApp
    dotnet build
    dotnet run --project Client
    ``` 
 4. Your Single Page Application will now start using AAD authentication.
 5. In the output in the terminal, copy the URL in the first info statement (should be something like https://localhost:7250)
 6. Open an Incognito/InPrivate window and browse to the copied URL
 7. When the page has loaded, click on the Log In button in the top right.
 8. You should be prompted to sign in, once signed in, your name will displayed from the authentication claim next to the Log Out button.

END
