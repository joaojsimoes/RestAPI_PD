pipeline {
    docker {
        image: node:latest
        args: "-p 3000:3000"
    }
    stages {
        stage('Build'){
            steps {
                sh 'mkdir -p /usr/src/app'
                sh 'cp package.json /usr/src/app'
                sh 'npm install'
                sh 'cp . /usr/src/app'
            }
        }
        stage('Run'){
            steps {
                sh 'npm start'
            }
        }
    }
}