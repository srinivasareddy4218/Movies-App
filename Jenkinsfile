currentBuild.displayName="Movies-app-#"+currentBuild.number
pipeline {
    agent any
    environment{
        DOCKER_TAG = getDockerTag()
    }
    stages{
        stage('Build Docker Image'){
            steps{
                sh "sudo docker build . -t srinivasareddy4218/movies-app:${DOCKER_TAG} "
            }
        }
        stage('DockerHub Push'){
            steps{
               withCredentials([string(credentialsId: 'DockerPWD2', variable: 'DockerPWD2')]) {
                    sh "sudo docker login -u srinivasareddy4218 -p ${DockerPWD2}"
                    sh "sudo docker push srinivasareddy4218/movies-app:${DOCKER_TAG}"
                }
            }
        }
     } 
  }   
