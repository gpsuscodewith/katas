<h1 align="center">Work with Virtual Environments (venv) in Python</h1>

### Duration: 10 minutes
### Participation target:
- [x] Individual Level
- [ ] Partner Level
- [x] Individual Participant
- [ ] Partner
- [ ] Guided

### Prerequisites

- Bash on linux and WSL/WSL2 or a Mac Shell
- Install or update Python 3 and pip on your system (3 mins)

   - For Mac:
      ```
      brew install python@3.8
      ```
   - For Linux/WSL:
      ```
      sudo apt install python3-pip
      sudo apt install python3.8-venv
      ```

## Steps

### Working with a Python virtual environment (7 mins)

1. Create a working folder and create your python environment in it.
   ```
   cd ~
   mkdir kata0412virtualenvs
   cd kata0412virtualenvs
   python3 -m venv kataenv1
   ```

2. Activate your new environment. ``` source kataenv1/bin/activate ```

3. Deactivate the environment. ``` deactivate ```
   
4. Install a site package with pip ``` pip install swnamer ```
   
5. Test it by running some inline python3 that imports out site package.
   ``` 
   python3 -c "from swnamer import NameGenerator; generator = NameGenerator(lowercase=True, separator=\"_\"); print(generator.generate());"
   ```
   
6. Activate our environment again ``` source kataenv1/bin/activate ```

7. Test the same python3 inline code now.
   ``` 
   python3 -c "from swnamer import NameGenerator; generator = NameGenerator(lowercase=True, separator=\"_\"); print(generator.generate());"
   ```

8. Check which python3 you are running ``` which python3 ```
   
9. Deactivate our environment again ``` deactivate ```

10. Check again which python3 you are running ``` which python3 ```

11. Remove swnamer ``` pip uninstall swnamer ```

12. Remove the venv ``` rm -rf kataenv1 ```

13. Remove our kata working directory ```  cd .. && rmdir kata0412virtualenvs ```

**END**

### Reflect

 - Is Python really installed twice?
 - What is actually different in the virtual environment which selects which python3 command to be found?
 - What are the advantages of a virtual environment?
 - What are the disadvantages of a virtual environment?