pipeline {
    agent none
    stages {
        stage("build & SonarQube Scanner") {
            agent any
            steps {
                withSonarQubeEnv('SonarQubeServer') {
                    sh 'mvn sonar:sonar'
                }
            }
        }
    }
}
