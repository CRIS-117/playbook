const repo = {
    name: "LaunchX",
    author: "carlogilmar",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}`
    }
   }
   
   console.log("Nombre del repo:" + repo.name)
   console.log("Issues totales: " + repo.getTotalIssues())
   console.log(repo.getGeneralInfo())

   const issue = {
       title: "NewIssues",
       repositoryNameAssociated:"LaunchX",
       status: "OPEN",
       numberOfComments: 10,
       labels: 5,
       author:"Cristofer",
       dateCreated: new Date(),
       lastUpdate: "11/05/2022",
       getTitleAndAutor: function(){
           return`The title is  ${this.title} was created by ${this.author}`
       },
       getGeneralInfo: function(){
        return `This repository ${this.repositoryNameAssociated} was created by ${this.author}`
       }
   }

   console.log("The status: "+ issue.status)
   console.log("The number of comments is " + issue.numberOfComments + "and the labes are "+ issue.labels)
   console.log("With date the: " + issue.dateCreated)
   console.log("With the last Update: " + issue.las)
   console.log(issue.getGeneralInfo())
   console.log(issue.getTitleAndAutor())

   const PullRequest = {
       title: "NewPull",
       branchName: "LaunchXRequest",
       dateCreated: new Date(),
       status:"CLOSE",
       repositoryNameAssociated: "LaunchX",
       getStatus: function(){
           return `The status of pull request is ${this.status} with the name ${this.repositoryNameAssociated}`
       },
       getTitleAndAutor: function(){ 
           return `The title is ${this.title} with branch name ${this.branchName} and created the ${this.dateCreated}`
       }
   }