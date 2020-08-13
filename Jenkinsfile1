currentBuild.displayName="movies-app-#"+currentBuild.number
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
                withCredentials([string(credentialsId:'DockerPWD2',variable:'DockerPWD2')]) {
                    sh "sudo docker login -u arikatlasrinivasareddy4218 -p ${DockerPWD2}"
                    sh "sudo docker push srinivasareddy4218/movies-app:${DOCKER_TAG}"
                }
            }
        }
    }
} 
def getDockerTag(){
    def tag  = sh script: 'git rev-parse HEAD', returnStdout: true
    return tag
    }
 
