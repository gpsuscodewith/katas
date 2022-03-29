# Authoring a Kata

## Process
1. Create a branch with that will contain the Kata underdirectly to main branch will be rejected. Please use a pull request from a development branch


### Structure

- Place the Kata under ```./library```
- The folder name should be 
  - all lowercase, with words separated by a dash '-', commonly refered to as "kebab-case"
  - named the same as the title of the Kata
- a markdown file containing the Kata, as ```README.md```
- Place all other supporting files directly or in sub folders under a ```files``` folder, including scripts
  - If there is source code, place in a ```src``` folder under ```files```
  
## Content Guidance

1. Setup - Kata objectives and pre-requisites (one time setup)
2. Execution - no more than 15 minutes, **Max**! VERY IMPORTANT.
3. Reflection - take a pulse

A Kata MUST be time boxed. This is VERY DEFINITION of a Kata. Otherwise, it becomes just another tutorial or walkthrough: participant focus gets lost, objectives become greater than one.

### Setup

### Execution

### Identify the ideal time of execution for the Kata. 
This means, that your target time should represent how long it takes you to complete it once you've practiced the Kata a few times. If it truly takes you 15 minutes to complete an exercise, then target that time. If it takes you 5 minutes, then make the Kata's execution time 5 minutes.
	

### Reflection

## Authoring

### Preparation
Create a draft of the Kata. Include the following:

- Title
- Execution Steps
- Reflection questions (optional)

### How to author a step

- Break up logically distinct actions into separate steps. If you can break a step up, do it.
- An indicator where it might be split into one or more steps is the  use of "and" conjunction.
- Build into each step the purpose of the action. Avoid segmenting the step or adding separate lines to describe the purpose. 
- Be specific. Capture exactly what you want the participant to see and gain in knowledge and skill. General statements to avoid:
  - Look at...
  - Get an understanding of...
- A step should have a specific goal. Avoid vague reasons why the action exists.
  - Example:
    - Quickly look at the README and become familiar with its contents
    - Becomes: _Familiarize yourself with the available options by scanning the repository's README file_
- Don't ask questions within steps. Save that for the Reflection period. 
  - Example of a step with a question:
  - Note that it is doing X. Why is this? When might it be useful?
    - Becomes:
      - Observe that there are 3 of X
      - Observe how the 3 X's map to the configuration created in the YAML in step 2.
- Avoid time sensitive instructions 
  - like "should show as 'in progress'". If the participant waits a little longer state might change.
- Keep the exercise cohesive from step A to Z. There is no "time permitting, here's bonus steps."

### What does prescriptive look like?
Prescriptive means you describe exactly what should be done, without ambiguity in the execution of the step(s). For example, if the Kata is focused on creating a Dockerfile, the creation of the Dockerfile could be done many different ways: within a particular IDE, the command line, etc. The step should describe an exact way of doing it. If the desire is to have participants master many different ways, then separate Katas should be created. 

### Should I include screenshots?
Maybe. Sometimes a GUI-based task might require it, but typically you should describe the action in each step enough to where the person

