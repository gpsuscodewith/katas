<h1 align="center">Github Actions - Build and Test node.js</h1>

### Duration: 15 minutes
### Participation target:
- [x] Individual Level
- [ ] Partner Level
- [ ] Individual Participant
- [ ] Partner
- [x] Guided

### Prerequisites

- Browser
- Github Account

## Steps

### Create a workflow
1. Open browser, go to [https://github.com/wdfox/GitHubActionsKata](https://github.com/wdfox/GitHubActionsKata)
   1. If not logged into GitHub, choose Sign In in the header
2. Choose **Fork** at https://github.com/wdfox/GitHubActionsKata 
   1. This repo contains a sample React application which we want to build and test using GitHub Actions.
3. Open README, familiarizing yourself with Available Scripts
4. Familiarize yourself with the directory structure 
5. Click the **Actions** tab.
6. Under **Workflows made for your repository**, click "**Set up this workflow**" button under **suggested Node.js**
7. Familiarize yourself with the YAML structure:
   1. on: triggers the action
   2. jobs: have one or more builds, each with a set of steps
   3. jobs -> build has a strategy
8. Click the green button, **Start commit**
   1. In dialog, click **Commit new file**, committing the workflow to the main branch


### Observe the workflow
1. Click **Actions** tab
2. Click workflow title "**Create node.js.yml**" **(It will show failure—this is OK—read on)**
3. Observe the following about the workflow:
   1. 3 total jobs, mapping to the build strategy in the YAML
   2. Jobs in "failed" status
4. Click **build (12.x)** under Jobs to the left
5. Visually scan output lines 6-34 that display in step causing the failure.
   1. Note the failure reason is a failed test assertion
   2. Identify the file path from line 8: "src/App.test.js"


### Create a successful workflow
1. Edit the test file in place:
   1. Scroll the Browser window up, click the repository name
   2. Click **src** folder, then click the **App.test.js** file link
   3. Click the pencil icon to edit
2. Fix the test:
   1. Update line 12 with "expect(one).toBe(1);", fixing the integer equality assertion
   2. Click the green **Commit changes** button at the bottom of the page, leaving title and description of the commit unchanged


### Observe the workflow
1. Click **Actions** tab
2. Click the workflow link **Update App.test.js**
3. Observe the following about the workflow:
   1. 3 total jobs
   2. 3 jobs are successful

END
	
**1 minute**: Share results/learnings

**Reflect (example questions)**
1. Is it important for all the developers be comfortable with the build and test pipeline, or just the DevOps Lead? Why or why not?
2. Why are automated pipelines currently considered a best practice?
3. Our pipeline ran several iterations, each with different Node versions. When might this be useful?

**Take home material for reflection**
[https://docs.github.com/en/actions](https://docs.github.com/en/actions)


### Reflections

[Update this section with post-session from the kata session participants]


### Feedback

[Update this section with any feedback on this kata]
