# Kata Training

**Objective**: Sharpen the saw, readiness, continuously improve

**Definition**: A Kata is practicing a set of pre-defined, unambiguous, executable steps to gain greater efficiency and effectiveness. It can can be practiced alone or in unison as a group when training.

## About a Kata
A Kata is an exercise made up of an ordered set of steps that are executed to accomplish a specific implementation of higher order goal in order to improve efficiency or effectiveness.

A Kata does not target a higher order / abstract goal. Instead, the higher order goal is narrowed down to a specific implementation of that higher order idea.

For example, say you want to define a sequence of steps to create a build pipeline in a CI/CD tool. The Kata could target Azure DevOps OR GitHub, but not both at the same time. Secondly, it does not leave it open ended to the participant to choose their own tool. Instead, this would become two (2) Katas, one for Azure DevOps Pipelines and one for GitHub Actions.

> IMPORTANT: Additionally, a Kata is even MORE specific than that. In the example of a build pipeline (a general, higher order goal), the Kata's steps must be constrained to the specific "something" that would be build--say Node, C#, TypeScript, etc.
	
This means, if we start with the idea of becoming more efficient at create a build pipeline, we might end up with the following Katas:
	
- Create an Azure DevOps pipeline that builds and tests an Angular library
- Create a GitHub Action that builds a .NET 5 library into a NuGet package
- Create an Azure DevOps pipeline that builds a Docker image from a Dockerfile

### A KATA

- Steps are specific and logically sequential
- Targets a specific task
- A single tool is used to execute the specific steps
- The "answers" are always given for what to execute

### NOT A KATA

- Open ended to the participant
- Choose your own adventure
- The participant must "look up the answer" to accomplish a step

# Building a Kata

## Structure

1. Setup - less than 5 minutes. Review objective and steps
2. Execution - no more than 15 minutes, **Max**! VERY IMPORTANT.
3. Reflection - take a pulse

A Kata MUST be time boxed. This is VERY DEFINITION of a Kata. Otherwise, it becomes just another tutorial or walkthrough: participant focus gets lost, objectives become greater than one.

### Tips for building steps

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

## Preparing

### Create a draft of the Kata. Include the following:
- Title
- Execution Steps
- Reflection questions
		
### Identify the ideal time of execution for the Kata. 
This means, that your target time should represent how long it takes you to complete it once you've practiced the Kata a few times. If it truly takes you 15 minutes to complete an exercise, then target that time. If it takes you 5 minutes, then make the Kata's execution time 5 minutes.
	

# Running a Kata

Use a timer and hold the session to strict time boxes. Remember, while the purpose is to practice the same exercise and achieve enough efficiency to complete it within the execution time box, it's perfectly fine if a participant does NOT complete the exercise. It's up to them to then continue to practice the Kata.


# FAQs

What does prescriptive look like?
Prescriptive means you describe exactly what should be done, without ambiguity in the execution of the step(s). For example, if the Kata is focused on creating a Dockerfile, the creation of the Dockerfile could be done many different ways: within a particular IDE, the command line, etc. The step should describe an exact way of doing it. If the desire is to have participants master many different ways, then separate Katas should be created. 

Should I include screenshots?
Maybe. Sometimes a GUI-based task might require it, but typically you should describe the action in each step enough to where the person

