<h1 align="center">Bridge to Kubernetes - Debug an AKS web app locally</h1>

### Duration: 15 minutes
### Participation target:
- [x] Individual Level
- [ ] Partner Level
- [ ] Individual Participant
- [ ] Partner
- [x] Guided

### Prerequisites

Tools (Install on your native host OS):
- An Azure subscription
- Azure CLI installed
- A new AKS cluster
```
az group create \
   --name MyResourceGroup \
   --location eastus
```
```
az aks create \
   --resource-group MyResourceGroup \
   --name MyAKS \
   --location eastus \
   --node-count 1 \
   --generate-ssh-keys
```
- Visual Studio Code
- The Kubernetes CLI installed on your local machine
   - Kubernetes CLI: https://kubernetes.io/docs/tasks/tools/install-kubectl-windows/
- The Bridge to Kubernetes extension installed in Visual Studio Code
   - VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=mindaro.mindaro
- The Kubernetes extension installed in Visual Studio Code
   - VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=ms-kubernetes-tools.vscode-kubernetes-tools		
- Install the sample application (Do this in Azure Cloud Shell)
   - Clone the repo ```git clone https://github.com/Microsoft/mindaro```
   - Run the QuickStart shell script (change the resource group and cluster name)
```
cd mindaro/
chmod +x ./bridge-quickstart.sh
./bridge-quickstart.sh -g MyResourceGroup -n MyAKS
```
   - Navigate to the sample application running on your cluster by opening its public URL, which is displayed in the output of the installation script.
      - The public URL is similar to bikeapp.bikesharingweb.EXTERNAL_IP.nip.io

**Note: If you are using Remote SSH, WSL, Codespaces, or RemoteContainers, you will run into an error. You will need to run B2K in VS Code on your native host OS (Windows, Linux, Mac).**


## Steps


### Connect to your cluster and debug a service 

1. Open the terminal in VS Code
   1. Run the command **(change the resource group and cluster name before running)**
```
az aks get-credentials --resource-group MyResourceGroup --name MyAKS
```
2. Clone the repo ```git clone https://github.com/Microsoft/mindaro```
3. Open mindaro/samples/BikeSharingApp/Bikes in VS Code
4. Open the Kubernetes extension in VS Code
5. Select your cluster and select the **bikeapp** namespace in the AKS cluster you created in the pre-requisites
6. Right-click **bikeapp** namespace, and choose **Use Namespace**
7. Open the terminal window in VS Code and navigate to the **Bikes** folder
8. Run the command ```npm install```
   - Note: Ignore the npm vulnerability errors
9. Open the Command Palette (**CTRL+SHIFT+P** or **Cmd+Shift+P** on a Mac), and run the command **Bridge to Kubernetes: Configure** to start the configuration process
10. Choose the **bikes** service
   - Note: You can only redirect services that have a single pod.
11. Enter **3000** when promoted to enter a TCP port
   - Note: All traffic to Bikes service in the cluster is redirected to the version of the application running on your local machine. B2K routes all outbound traffic from the local app back to your AKS cluster.
12. Select **Launch via NPM** as the launch task
13. Select **No** when prompted to isolate your local version
   - Note: If you run isolated, only your requests are routed to your local process; other developers/users can use the cluster without being affected. 
14. Open the **Run and Debug** tab in VS Code
15. Select **Launch via NPM with Kubernetes**
   - Note: You will be prompted to allow the EndpointManager to run elevated and modify your hosts file.
   - Note: Your development computer is connected when the VS Code status bar turns orange and the Kubernetes extension shows you are connected.


### Set a break point

1. Open **server.js** and put a breakpoint on line **233**
2. Navigate to the sample application by opening the public URL
   1. The public URL is similar to *bikeapp.bikesharingweb.EXTERNAL_IP.nip.io*
   - Note: To get the **EXTERNAL_IP**, run ```kubectl get svc``` and copy the external-ip of the **bikesharing-traefik** service
3. Select **Aurelia Briggs (customer)** as the user, then select a **bike** to rent
4. Notice the image for the bike does not load
5. Return to Visual Studio Code and observe line 233 is highlighted. 
   1. The breakpoint worked!
6. Press ***continue*** and see the bike page load the image!
7. Go back and remove the breakpoint from line 233.


### Update your application

1. Edit server.js and **comment out** line 235:
2. Save your changes and press **Ctrl+Shift+F5 (Cmd+Shift+F5 on a Mac)** or select **Run** then **Restart Debugging.**
   - Note: By default, stopping the debugging task also disconnects your development computer from your Kubernetes cluster. You can change this behavior by searching for **Bridge to Kubernetes: Disconnect After Debugging in the Visual Studio Code settings** and **removing the check** next to **Disconnect automatically when Debugging ends.**
3. After you are reconnected, refresh your browser and verify that you no longer see a placeholder image for the bike and that there is a new image now.
   1. You just updated the application locally from your machine (sort of, continue on).
   2. The rest of your AKS cluster has not been changed.
4. Disconnect your application from the cluster by stopping the Debugging session.
5. When you disconnect, refresh the browser page
   1. You now see that the application on the AKS cluster was never changed, only your local version was changed.

END

**1 minute:** Share results/learnings

**Reflect**
- When would Bridge to Kubernetes be useful?
- When would it not be possible to use B2K?

**Take home material for reflection**
- [https://marketplace.visualstudio.com/items?itemName=mindaro.mindaro](https://marketplace.visualstudio.com/items?itemName=mindaro.mindaro)
- [https://docs.microsoft.com/en-us/visualstudio/bridge/bridge-to-kubernetes-aks](https://docs.microsoft.com/en-us/visualstudio/bridge/bridge-to-kubernetes-aks)


### Reflections

[Update this section with post-session from the kata session participants]

### Feedback

[Update this section with any feedback on this kata]
