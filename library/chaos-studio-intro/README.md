<h1 align="center">Create and Run a Chaos Experiement</h1>

### Duration: 15 mins
### Participation target: Individual

### Prerequisites

- Web Browser
- Azure Subscription

## Steps

The whole Kata will be completed via the Azure Portal. Begin by navigating [here](portal.azure.com) and signing in.

### Create a Virtual Machine
We first need to create a Virtual Machine which we will run a Chaos Experiment on (in our case, a temporary shutdown).
1. In the top Azure Search menu, type 'Virtual Machines' and select the first option under the **Services** group.
2. In the top left of the Virtual Machines blade, click **Create**. Then click **Virtual Machine**.
3. For the resource group, click on **Create new** and provide a name for your new resource group such as 'ChaosTestRG'. LOCATION IS IMPORTANT
4. Enter a name for your VM such as 'ChaosTestVM'.
5. For the region, select '(US) Central US'. Chaos Studio is not yet able to run experiments in every region.
6. Ensure that the Image selected is 'Ubuntu Server 20.04'. If this is not the case, select the dropdown and search for the relevant Image. 
7. Under **Size**, click **See all sizes**. On the new screen, search for and select 'DS1_v2'.
8. For **Authentication type**, change the selection to **Password**. Provide a username and password for your VM, such as **Username**: 'ChaosUser' and **Password**: 'ChaosPassword1'.
9. Select **Review + Create**. On the validation screen, select **Create**. Your VM will begin deploying. Feel free to move on.

### Register the Chaos Studio resource provider
If this is your first time using Chaos Studio in your current subscription, you will need to register the resource provider before creating your experiment. If you have already done this, skip to the following section.

1. In the search bar at the top, search for 'Subscriptions' and click to view your subscriptions under the **Services** results.
2. Click on the subscription where you plan to use Chaos Studio (and where you just created your VM).
3. In the left hand menu bar, click on **Resource Providers** under the **Settings** group.
4. Search for the 'Microsoft.Chaos' provider.
5. Select the provider by clicking on it, then click the **Register** button above. The status of the provider should change to **Registering** and finally to **Registered** when the process is complete. This may take a minute to complete, but feel free to move on while the provider is registering.

### Enable Chaos Studio on your Virtual Machine
Now we need to select our VM as a possible 'Target' for Chaos Studio to conduct Experiments on.
1. In the top Azure Search bar, type "Chaos Studio". Select the first option under the **Services** group.
2. Click on **Targets** on the left menu bar.
3. Find and select the VM you just created (may be called 'ChaosTestVM').
4. To enable it, click on **Enable targets** at the top left, then **Enable service-direct targets (All resources)**. A notification will indicate when the enablement has completed.

### Create a new Chaos Experiment
Next step is to define the actual experiment we want to run on our VM--a temporary shutdown.
1. Search again for 'Chaos Studio' and navigate to the resource.
2. Select **Experiments** from the left menu bar.
3. At the top left, click **Create** to create a new Experiment.
4. Enter a name for the experiment such as 'ChaosTestExperiment'. Then advance to the **Experiment designer** screen.
5. Rename the Step and Branch if you prefer, or leave the defaults.
6. Select, **Add action** and then
**Add fault**.
7. From the Faults menu, select 'VM Shutdown'.
8. Advance to the next screen by clicking **Next: Target resources >**.
9. Select your newly created VM and hit **Add**.
10. Finally, create the experiment by clicking **Review + Create** then **Create**. 

### Give your experiment VM access
Chaos Studio need contributor access to our machine in order to perform the shutdown, so we will grant it that access.
1. Search again in the top Azure Search bar for 'Virtual Machines' and select your new Chaos Test machine.
2. From the left menu, select **Access Control (IAM)**.
3. Click **Add** at the top left, and then **Add a role assignment**.
4. Search for the 'Virtual Machine Contributor'. Select the role and click **Next**. 
5. Click Select members and search for your experiment name (may be called 'ChaosTestExperiment'). Select your experiment and click Select.
6. Click **Review + assign** and then **Review + assign**.

### Run the experiment
Finally, we are ready to run!
1. Once again, search for your Chaos Studio instance in the top Azure Search bar. 
2. Select **Experiments** from the left menu bar.
3. Select the experiment you wish to run (may be called 'ChaosTestExperiment'). 
4. In the top menu bar, click **Start experiment(s)**, and hit **Yes** to confirm the service disruption.
5. To watch the experiment run, click on your experiment to view its details. You should see a **History** section with a currently running experiment. Click **Details** to see the steps and branches involved in the experiment. 

NOTE: To clean up resources, simply delete the resource group you created which will delete all relevant resources. 

### Reflections

[Update this section with post-session from the kata session participants]

### Feedback

[Update this section with any feedback on this kata]
