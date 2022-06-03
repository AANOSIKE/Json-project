pipeline {
    agent any
    
    tools {
        terraform 'terraform-11'
    }

    stages {
        stage('Git Checkout') {
            steps {
                git credentialsId: 'AANOSIKE', url: 'https://github.com/AANOSIKE/Json-project/tree/main/terraform'
            }
        }
        stage('terraform init') {
            steps {
                sh 'terraform init'
            }
        }
        stage('terraform apply') {
            steps {
                sh 'terraform apply'
            }
        }
    }
}
