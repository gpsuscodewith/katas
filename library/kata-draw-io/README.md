<h1 align="center">Draw.io - Create and Share a draw.io diagram and custom library</h1>

### Duration: 15 minutes
### Participation target:
- [ ] Individual Level
- [ ] Partner Level
- [x] Individual Participant
- [x] Partner
- [ ] Guided

### Prerequisites

- Browser
- Windows or Mac OS
- VS Code
- Moderate competency in Git



## Steps

### Install draw.io (if already installed, skip)

1. Launch a browser and navigate to [https://github.com/jgraph/drawio-desktop/releases/tag/v15.4.0](https://github.com/jgraph/drawio-desktop/releases/tag/v15.4.0)
2. Download the latest version of draw.io Mac or Windows (currently 15.4)
3. Run the installer for your OS
4. Launch the draw.io app
5. Choose defaults where a new blank drawing appears

### Setup sharing

1. Clone git repo [https://dev.azure.com/gpsuscodewith/katas/_git/draw-io](https://dev.azure.com/gpsuscodewith/katas/_git/draw-io) by
   1. Launch browser
   2. Click Clone button, top right corner of screen
   3. Copy URI
   4. Open terminal
   5. Change directory to desired location and git clone
2. Launch VS Code from this location, ```code .```

### Download Azure icon library

1. Open this url in a new browser tab [https://docs.microsoft.com/en-us/azure/architecture/icons/#icon-terms](https://docs.microsoft.com/en-us/azure/architecture/icons/#icon-terms)
2. Go to **icon terms** and check *I agree to the above terms*
3. Click Download SVG Icons
4. Unzip the zip file of icons, creating a **Azure_Public_Service_Icons** folder
   1. Inside is an Icons folder with the icon sets' folders
5. Target the icon set selected for you at the beginning of the Kata

### Create a custom icon library

1. With the app open, click **File --> New Library…**
2. Name the library the name of your Icon Set in the **Filename** field
   1. *Use all lowercase, no spaces, separate words with hyphens*
3. Click **Import** and select all ```*.svg``` files in the target Icon Set folder that was unzipped
4. Click **Save**
5. Save the file to the **/libraries** folder (that was cloned earlier)
   1. Use the ```*.xml``` extension, not ```*.drawio``` when saving the file
   2. NOTE: The icon set should now appear in your draw io toolbar on the left
6. Open the library XML file in VS Code
7. Update the ```<mxlibrary>``` XML tag with the ```Title``` attribute, giving the library a friendly name
   1. Ex: ```<mxlibrary title="Azure Preview"> ```
8. Save the file changes
9. Using the terminal integrated in VS Code, perform a git add, commit, pull, and push.
   1. The library file is now available to anyone that clones / pulls from the repository


### Share custom icon library

1. Return to the terminal
2. Perform a git add, commit, pull, and push.
   1. The library file is now available to anyone that clones / pulls from the repository
3. Notify your partner that you've pushed the file and they perform a git pull
4. Get the URI from your partner, representing their icon set


### Use custom Library

1. Open draw.io desktop app
2. Open the sample diagram in **/diagrams** folder
3. Click **File --> Open Library..** and locate the shared library in the **/libraries** folder
4. Drag a custom icon onto the work area.

END

### Reflections

- Issue with extension. Be explicit with XML extension library file


### Feedback

[Update this section with any feedback on this kata]
