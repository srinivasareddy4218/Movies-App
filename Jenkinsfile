currentBuild.displayName="Movies-app-#"+currentBuild.number
pipeline {
    agent any
    environment{
       dockerImage = ''
    }
    stages{
         stage('Building image') {
      steps{
        script {
          dockerImage = docker.build registry + ":$BUILD_NUMBER"
        }
      }
    }
        stage('DockerHub Push'){
            steps{
               withCredentials([string(credentialsId: 'DockerPWD2', variable: 'DockerPWD2')]) {
                    sh "sudo docker login -u srinivasareddy4218 -p ${DockerPWD2}"
                    sh "sudo docker push srinivasareddy4218/movies-app:${BUILD_NUMBER}"
                }
            }
        }
     } 
  }   
