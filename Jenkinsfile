pipeline {
    agent none
    stages {
        stage("SonarQube Analysis") {
            agent any
            steps {
                withSonarQubeEnv('SonarQubeServer') {
                    sh 'mvn sonar:sonar'
                }
            }
        }
    }
}
