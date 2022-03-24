<h1 align="center">An Introduction to Fiddler Everywhere</h1>

### Duration: 15 minutes
### Participation target:
- [x] Individual Level
- [ ] Partner Level
- [x] Individual Participant
- [ ] Partner
- [ ] Guided

### Prerequisites

- The ability to run Fiddler Everywhere on your OS (Windows, OS X, Linux)

## Steps

### Install Fiddler (4 minutes)

Install Fiddler Everywhere on your operating system (skip to the 'Setting up Fiddler to decode HTTPS' section if you already have it installed)
   1. Browse to the [Fiddler Everywhere homepage and download Fiddler Everywhere](https://www.telerik.com/download/fiddler-everywhere), you will need to give your email to download and accept the License Agreement as Fiddler Everywhere requires logging in. 
   2. Install Fiddler Everywhere by executing the exe, dmg or app image depending on your operating system. (On a Mac you will need to now run Fiddler from Finder, Windows will launch automatically).
   3. When you are presented with the Login window, click on the 'New User? Sign up' at the bottom of the login pane and enter your email address and a secure password to protect your Fiddler login and Click on Create (or use an alternative method such as sign in with Google).
   4. Depending on the sign up / in method you used, you will have to either confirm your account to login to or verify your email signup with a confirmation code sent to your email (this is normally super fast).
   5. You end up landing on a Welcome to Fiddler! screen and will need to fill out some more information next, do this and click on 'Let's Go'.
   6. You should now see a Start your Free trial window, click on Start Free Trial.
   7. After a few seconds you will see a 'Welcome to Fiddler Everywhere!' window, take a quick read of this and then click on the X in the top right to close it.

 ### Setting up Fiddler to decode HTTPS (1 minute)
   1. If this is the first time using Fiddler Everywhere you will be presented with a few tip screens, you can read these and click next a bunch of times, or hit skip as we'll be covering what it will show you.
   2. There are two ways to monitor HTTPS traffic with fiddler, one is to use a sandboxed browser which doesn't require installing a trusted root certficate, the other is to use a sandboxed browser. The limitation of the sandboxed browser is fiddler will only be able to decode HTTPS traffic from that browser where-as Enabling HTTPS traffic with the root cert will decode all https traffic from any process on your machine.
   - To use the sandboxed mode, you can click on 'Open Browser' in the Live Traffic window to open a sandboxed browser and use that for the rest of this exercise.
   - Alternatively, you can click on Enable HTTPS now to install the Fiddler root cert and use any browser for the rest of the exercise.

### Identifying specific traffic in Fiddler (5 minutes)

   1. Fiddler can look very intimidating at first due to the amount of traffic you will see displayed in the Live Traffic window, ignore this for now and either open a new browser or use the sandboxed browser and browse to this url : http://info.cern.ch/hypertext/WWW/TheProject.html (for history buffs this is actually the very first world wide web page online and it's still running at cern to this day).
   2. We will now use the simplest method in Fiddler to find out request, In fiddler at the top right of the Live Traffic window, type info.cern.ch in the Search Box. You should see one or two returned results, one will be the HTTP GET for the main request and another may be the browser request for the favicon.ico (the icon displayed in your browser next to the URL)
   3. Click on the x in Search Box next to info.cern.ch to clear the search. (Do not click on Remove All until instructed as we want to keep the existing traffic while going through the next few steps).
   4. Now lets use filter:
   - Click on the filter icon (second icon on the bar in the Live Traffic tab) to display the Advanced Filters dialog.
   - Under 'When all these conditions' change the first condition drop down (Which should be *Url* as default) to *Host*.
   - Change the next drop down to *Is equal to*
   - Add the value *info.cern.ch*
   - Click on the Add condition button in the top right of the dialog and add a new condition
   - Change the new condition so that it reads : **Url Does not contain favicon.ico** and click on Apply
   - Clicking on apply you should now see only a single result.
   - Click on Refresh in the browser a few times which you have the page opened in and observe the result in Fiddler.
   5. Now lets a couple of Rules (Leave the filter active for now):
   - On the right hand side of the Fiddler window, click on the On/Off button in the Rules Window to enable Rules for captured traffic
   - Click on **Add New Rule** to display the **Rule Builder** Window
   - Change the Rule name to 'Highlight Unsecured HTTP requests'
   - Set the existing condition to read **Protocol is http**
   - In the existing action in the Action pane on the right Change the **Background - Unchanged** drop down to Yellow
   - Click Save
   - You will notice that the exisiting requests in the Live Traffic window are not highlighted in yellow as the rule specified.
   - Click on Refresh in the browser a couple of times to see the Rule take effect on new requests.
   - Now click on the play icon on the Rule in the Rules tab, this will rerun the rule for previous requests.
   6. Click on the filter icon again, now let's make our filter a bit more generic, Change the Host condition so it reads **Status is equal to 200** and click on APPLY. If you don't have many results, you are likely using the sandboxed browser, so browse to a few different sites and observe how you will be able to immediately see http vs https requests in the results. Click Remove All to clear existing traffic when you are done.

### Examing Traffic in Fiddler (5 minutes)

   1. Browse to **www.msn.com** in a browser (sandboxed browser if you're using that method)
   2. In the search bar next to the msn icon type **Microsoftie** and hit enter, this will perform a bing search for the term.
   3. Back in Fiddler, enter **Microsoftie** in the Search box to filter the results.
        - If you are using sandboxed mode, you may notice you do not see any results. This is an example of why sandboxed mode can be limited sometimes, when you hit enter, the search was performed in a new browser (or tab), because of this it's traffic is now not captured. You can copy the URL from the URL bar in the new tab or browser and paste it into the URL bar of the original tab and hit enter, you will now see your results.
   4. In the right hand side of the window, click on Overview and examine the information provided
   5. Click on the Inspectors tab and take a quick look at the details in each section of the Request (Headers/Params/Cookies/Raw/Body)
   6. In the left hand Live Traffic window, click on the second result.
   7. Back in the Inspectors tab, Examine the sections in the bottom half of the window under Request (Headers/Cookies/Raw/Preview/Body) - Preview is useful for examing what is intended to be displayed in the browser. This is a great way to see if the browser is modifying any of the content before displaying it.

### 


Finish.

## Reflections

[Update this section with post-session from the kata session participants]

## Feedback

[Update this section with any feedback on this kata]
