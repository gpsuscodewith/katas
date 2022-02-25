<h1 align="center">Blazor Simple Chat App</h1>

**Duration**: 10 Minutes <br />
**Participation target**: Individual <br />

**Goal**: Get exposure to Blazor and see how a Server hosted Blazor app is structured and runs

### Prerequisites

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

### Get the source code and build it
1. Click the download link to download the file: [Download Source Code](https://github.com/gpsuscodewith/katas/raw/main/library/blazor-simple-chat/files/blazor-simple-chat.zip)
2. Unzip the the file on your local machine in your Downloads folder
3. Open a terminal and change the directory to source code
   ```
   # the name of the folder could be different than 'blazor-simple-chat' depending on your OS
   cd ~/Downloads/blazor-simple-chat
   ```
4. Build the source
   ```
   dotnet build
   ```
> The app is now built and should be ready to run

### Running the app
1. change directory to the Server
   ```
   cd BlazorChatApp/Server
   dotnet run
   ```
2. Copy the first link that is printed in the terminal output by dotnet
   - This will most likely be ```https://localhost:7113```
3. With the chat app open:
   - enter your name
   - click the Connect button
4. Type a message into the message text box and click Send
5. Return to the terminal, press Ctrl+C to stop the app

### Explore the code
1. Observe that there is a Client and a Server project
2. Expand the Client folder and look at Index.razor file more closely in the editor
3. Expand the Server folder and notice this is a standard asp.net core backend. 
4. Open Program.cs file to see this.
   > This is a Server hosted Blazor app. All UI Updates are driven by the server through internal SignalR communication from the web assembly client to the backend server

### Add user information to the chat
1. Launch Visual Studio Code locally
2. Open the root BlazorChatApp folder you unzipped earlier
3. Expand the solution explorer to /BlazorChatApp/Client/Pages
4. Open the Index.razor file
5. Go to line 47 within the ```Connect()``` method
6. Change the ```from``` variable value to use the name of the user
   ```csharp
   var from = string.IsNullOrEmpty(user) ? string.Empty : $"{user}: ";
   ```
7. Open the VS Code terminal and rerun the application
   ```
   cd BlazorChatApp/Server
   dotnet run
   ```
8. Copy the URL printed in the terminal
9. Open 2 browser instances and paste the URL into both windows / tabs
9. Enter a unique name in the text box and click Connect. Repeat this step for the 2nd instance
10. Names will now appear for each message!

### Reflections

[Update this section with post-session from the kata session participants]

### Feedback

[Update this section with any feedback on this kata]
