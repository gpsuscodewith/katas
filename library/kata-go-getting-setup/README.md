<h1 align="center">Go - Getting Setup</h1>

### Duration: 10 minutes
### Participation target:
- [x] Individual Level
- [ ] Partner Level
- [ ] Individual Participant
- [ ] Partner
- [ ] Guided

### Prerequisites

- Browser
- Windows or Mac OS
- VS Code
- Git bash


## Steps

### Install Go
1. Launch a browser and navigate to [https://golang.org/doc/install](https://golang.org/doc/install)
2. Download the latest version of Go (1.17+). For Mac or Windows
3. Launch downloaded installer and follow OS specific installer steps (use default settings)
4. On the "install" page, follow the "**2. Go install**" steps, verifying the correct version of Go is installed
   1. If Windows, use [TBD Instructions Missing in OneNote]

### Go get Mars Rover Test Code

1. Open a *nix or PowerShell terminal (depending on OS)
2. Change directory: ```cd ~/go```
3.  list contents ```ls``` to demonstrate and show "go's home path"
4. Execute these commands in the terminal, sequentially:
```
git clone https://github.com/mriehl/go-tdd-katas.git ./src/github.com/mriehl/go-tdd-katas
cd src/github.com/mriehl/go-tdd-katas/go/rover
go get github.com/stretchr/testify/assert
```

### Execute unit tests
1. Next, execute the tests, executing ```go test```. The below should represent the result:
```
[RoverRemoteControl] 2021/11/02 09:55:14 Unknown command: "X", ignoring it.
[RoverRemoteControl] 2021/11/02 09:55:14 Unknown command: "X", ignoring it.
[Rover] 2021/11/02 09:55:14 Rover at {0 0} cannot move to {0 1} as requested because there is an obstacle in the way.
[Rover] 2021/11/02 09:55:14 Rover at {0 1} cannot move to {1 1} as requested because there is an obstacle in the way.
PASS
ok  	github.com/mriehl/go-tdd-katas/go/rover	0.121s
```
2. Launch VS Code from terminal, ```code .```
3. Review each file with a "_test" suffix in the name and observe the following conventions:
   1. Each test function is prefixed with "Test"
   2. Test files are collocated with the source file
   3. Test functions take a pointer to the testing package's testing.T type as a parameter

END

### Reflections

- Bob:
   1. Good topic to target expertise in Go:
   2. IoT and Kubernetes space, all written in Go
   3. Right scoping for Go as something new
      1. Static typing introduction with "go get" and packaging
- Ahmed:
   1. First time exposure to Go, so good to set it up
   2. Liked that the repo was pulled down and executed
   3. Got Go extensions for VS Code and that was helpful
   4. Python is typically in a notebook, etc. and the Go ext. was good
- Jenny:
   1. Go vs extension was helpful
   2. Digging into Go and error handling more as a result
- Steve:
   1. This kata fails on Windows 11.
   2. Steve will provide config instructions for windows 11
- Ryan:
   1. Same feedback as Steve running into the same error
- Will:
   1. Previously set up on a machine that was not windows



### Feedback

[Update this section with any feedback on this kata]
