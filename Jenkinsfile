pipeline {
    agent {
        dockerfile {
            filename 'Dockerfile'
        }
    }
    stages {
        stage('Run'){
            steps {
                sh 'npm start'
            }
        }
    }
}