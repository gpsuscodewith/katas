# What is a Kata Exercise?

Definition: A Kata is a a set of pre-defined, unambiguous, executable steps to gain greater efficiency and effectiveness. It can can be practiced alone or in unison as a group when training.

## About

A Kata is an exercise made up of:

1. A time window, with a maximum time of 15 minutes
1. Structured sections of steps
2. Each section is a set of steps that are ordered
3. Every step is specific and terse

**A Kata does not target a higher order / abstract goal.** Instead, the higher order goal is narrowed down to a specific implementation of that higher order idea.

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
