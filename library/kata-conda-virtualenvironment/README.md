## <p align="center">Conda workflow</p>

### 

### Duration: 15 minutes
---
### Participation target:
- [x] Individual Level
- [ ] Partner Level
- [ ] Individual Participant
- [ ] Partner
- [x] Guided

### Prerequisites

1.  Download and Install Miniconda for the appropriate operating system [link](https://docs.conda.io/en/latest/miniconda.html)

### Steps

1. Open up your miniconda terminal
    1. For windows you can search for the miniconda terminal
    2. For linux or mac, you should see the "(base)" environment in your terminal
2. Create a python virtual environment for the latest release of python 3.7 using the command
    ```conda create -n TheNameOfYourEnvironment python=3.7```
3. Identify the list of environments that you currently have (You should have at least 2)
    ```conda info --envs```
4. Activate your virtual environment that you just created
    ```conda activate TheNameOfYourEnvironment```
5. Identify the current python packages in your virtual environment
    ```pip list``` or ```pip freeze```
6. Install the python package ```streamlit``` into your virtual environment
    ```pip install streamlit```
7. Identify the updated python packages in your virtual environment
    ```pip list``` or ```pip freeze```  (Do you see streamlit and additional packages???)
8. Export the list of python packages in your virtual environment to an external file called ```requirements.txt```
    ```pip freeze > requirements.txt``` (Do you see your file???)
9. Export the configuration of your virtual environment to a YAML file for easy further duplication
    ```conda env export > my_environment.yml```
10. Deactivate your current environment and revert back to the base virtual environment
    ```conda deactivate```
12. Open up your YAML file and change the variable name from TheNameOfYourEnvironment to TheNameOfYourEnvironmentV2
11. Create a new second virtual environment that is identical to your first virtual environment but instead create it using your YAML file
```conda env create -f my_environment.yml``` 
12. Double-check to see if you now have two custom virtual environments
    ```conda info --envs```
13. Delete one or both of your environments from your system:
    ```conda remove --name TheNameOfYourEnvironment --all```


### Reflections

Reflections from the team:
smooth, no issues on mac
like the fact being exporting to YAML files which adds more firepower
Wary of the Anaconda distribution is a memory hog


### Feedback

Some computers will  lag when installing package managers so go with a lighter package
Some issues with the pip freeze
perhaps put a command to upgrade pip

