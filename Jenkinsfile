pipeline {
    agent any 
    environment {
    DOCKERHUB_CREDENTIALS = credentials('dockerhub-abuchivic')
    }
    stages { 
        stage('SCM Checkout') {
            steps{
            git 'https://github.com/AANOSIKE/Json-project.git'
            }
        }

        stage('Build docker image') {
            steps {  
                sh 'docker build -t abuchivic/nodeapp:$BUILD_NUMBER .'
            }
        }
        stage('login to dockerhub') {
            steps{
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }
        stage('push image') {
            steps{
                sh 'docker push abuchivic/nodeapp:$BUILD_NUMBER'
            }
        }
}
post {
        always {
            sh 'docker logout'
        }
    }
}
