
pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                // Perform build steps here
                sh 'npm install' // Example build step
            }
        }
        
        stage('Test') {
            steps {
                // Perform testing steps here
                sh 'npm test' // Example test step
            }
        }
        
        stage('Deploy') {
            steps {
                // Perform deployment steps here
                sh 'npm run deploy' // Example deployment step
            }
        }
    }
}