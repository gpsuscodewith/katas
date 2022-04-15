<h1 align="center">Using Azure Cli Essentials #1</h1>

### Duration: 5 minutes
### Participation target:
- [x] Individual Level
- [ ] Partner Level
- [x] Individual Participant
- [ ] Partner
- [ ] Guided

### Prerequisites  (0 mins)

- Access to an Azure subscription and a browser.

## Steps

### Using Cloud Shell (5 minutes)

1. Browse to the [Azure Portal](https://portal.azure.com) and sign in.

2. Click on *...* to left of your photos or initials at the top right page, and click Cloud Shell.

3. At the top of the cloud shell window select *Bash* from the drop-down menu if it isn't already selected.

4. In the Cloud Shell window type ``` az -v ``` and hit enter to see the current version of Cloud Shell.

5. Use auto complete to display a complete list of the az commands available by typing ``` az ``` followed by hitting the tab key twice.
   
6. Type ``` y ``` and hit enter if prompted to display all commands (hit **space** if *more* is displayed until you see your prompt again). 
   
7. Type ``` resou ``` and hit the tab key twice to auto complete the word *resource*, once it has, hit the tab key again to display all sub commands for a resource.
   
8. Get more information on each of the displayed sub commands by then typing ``` -h ``` and hitting enter.

9. Display the azure account you are currently on by typing ``` az account show ``` and hitting enter.

10. Find common commands for a keyword such as 'bot' by typing  ``` az find bot ``` and hitting enter. 

11. List the accounts in your subscription with ``` az acc ``` and hit tab twice then type ``` li ```, hit tab twice again and hit enter to see the results as JSON.
   
12. Hit the up arrow to repopulate the shell with the last ran command and add type ``` -o ``` and hit tab again to see all output formats available.

13. Type ``` table ``` and hit enter to display the same account details but in a more readable form.

**END**

### Reflect

 - How can you use the Azure CLI to become more efficent with Azure.
 - Did you know Windows Terminal has built in support for Cloud Shell?
 