<h1 align="center">Using Node Version Manager with Node</h1>

### Duration: 15 minutes
### Participation target:
- [x] Individual Level
- [ ] Partner Level
- [x] Individual Participant
- [ ] Partner
- [ ] Guided

### Prerequisites

- The ability to run node on your OS (WSL, Windows, OS X, *nix)

## Steps

*Note instructions are provided here for all OS's, if you already have node and nvm installed and have access to another OS which does not, you should try setting up and installing node and nvm for that operating system instead of your primary one.*

### Read the Intro and About section for nvm and understand what nvm-windows is. (1 minute)
1. Click [here](https://github.com/nvm-sh/nvm#intro) to read the nvm Intro and About section
2. Read what [nvm-windows](https://github.com/coreybutler/nvm-windows#bulb-why-another-version-manager) does here

### Install nvm (5 minutes)

 - #### Install nvm-windows on Windows (natively)
   1. Download the latest windows zip file version of nvm-windows setup from [here](https://github.com/coreybutler/nvm-windows/releases). The file is named 'nvm-setup.zip'.
   2. Extract the nvm-setup.zip file and then run the nvm-setup.exe it contains and follow the prompts choosing locations for nvm-windows and node.js)
   3. If you already have node.js installed you may be asked if you want nvm-manager to control this version, you should answer yes if prompted.

 - #### Install nvm for WSL, Linux or Mac
   1. Follow the instructions for installing or updating on the nvm-sh github [here](https://github.com/nvm-sh/nvm#installing-and-updating)


### Install the latest version of Node.js using nvm (2 minutes)
 - On WSL, Linux or Mac use ```nvm install node``` to install the latest version of Node.
 - On Windows use ```nvm install latest``` to install the latest version of Node.

### Use different nvm commands to perform common tasks (5 minutes)

1. Use ```nvm current``` to show currently active version of Node
2. Use ```nvm ls``` to show installed versions of node.js and your current default version
3. Use ```nvm ls-remote``` (or on Windows ```nvm ls available```) to show remote versions of Node that can be installed
4. Use ```nvm install 16.14.2``` to install Node 16.14.2, if you already have 16.14.2 installed, choose another version in it's place.
5. Use ```nvm ls``` to show all installed versions again, you should now see the version you installed in step 4 in the list.
6. Use ```nvm use 16.14.2``` (or the version you installed in step 4).
7. Use ```nvm current``` again to verify you are using the version you specified.


### Use nvm to run multiple versions of node at the same time in different shells. (2 minutes)

 - #### Windows (non WSL) Users
   1. Read the *WSL, Linux or Mac* steps below to see a big advantage you have with using nvm on other platforms.

 - #### WSL, Linux or Mac Users
   1. Use ```nvm ls``` again and remember the most recent version (for me at the time of writing it was 17.8.0), and use it in the next step (in place of 17.8.0 if not the same)
   2. Open a *new* shell and run the command ```nvm run 17.8.0```, this will open a runtime instance of Node.js with the version specified, keep this shell open.
   3. In your *original* shell run the command ```nvm run current```
   4. You now have multiple versions of node running at the same time in two shells.

Finish.

## Reflections

[Update this section with post-session from the kata session participants]

## Feedback

[Update this section with any feedback on this kata]
