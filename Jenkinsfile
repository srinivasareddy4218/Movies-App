 pipeline {
  environment {
     registry = "srinivasareddy4218/movies-app"
    registryCredential = 'Dockerhub'
    dockerImage = ''
  }
  agent any
  stages {
    stage('Cloning Git') {
      steps {
        git credentialsId: 'sree-jenkins', url: 'https://github.com/srinivasareddy4218/Movies-App.git'
      }
    }
    stage('Building image') {
      steps{
        script {
          dockerImage = docker.build registry + ":$BUILD_NUMBER"
        }
      }
    }
    stage('Building image push') {
      steps{
        script {
          withCredentials([string(credentialsId:'DockerPWD2',variable:'DockerPWD2')]){
            sh "docker login -u srinivasareddy4218 -p ${DockerPWD2}"
          sh "docker push srinivasareddy4218/docker-kubernetes:${BUILD_NUMBER}"
        }
       }   
      }
    }
   
    stage('Remove Unused docker image') {
      steps{
        sh "docker rmi $registry:$BUILD_NUMBER"
      }
    }
  }
}
