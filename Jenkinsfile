pipeline {
  agent none  // 파이프라인 전체에는 agent 설정하지 않음

  options {
    disableConcurrentBuilds()
  }

  environment {
    IMAGE_NAME = 'react-app'
    CONTAINER_NAME = 'react-app-container'
    PORT = '3000'
  }

  stages {
    stage('Install & Build') {
      agent {
        docker {
          image 'node:20'
          args '-v /var/run/docker.sock:/var/run/docker.sock'
          customWorkspace '/var/lib/jenkins/workspace/github-project-fixed'
        }
      }
      environment {
        NPM_CONFIG_CACHE = "${WORKSPACE}/.npm"
      }
      steps {
        sh 'mkdir -p $NPM_CONFIG_CACHE'
        sh 'npm install'
        sh 'npm run build || true'
      }
    }

    stage('Docker Build & Deploy') {
      agent any  // 여기서는 Jenkins 호스트에서 실행
      steps {
        dir('/var/lib/jenkins/workspace/github-project-fixed') {
          script {
            // 디버그
            sh 'echo "PWD: $PWD"'
            sh 'echo "PATH: $PATH"'

            // Docker 작업
            sh "docker build -t ${IMAGE_NAME}:latest ."
            sh "docker rm -f ${CONTAINER_NAME} || true"
            sh """
              docker run -d \\
                -p ${PORT}:80 \\
                -v ${env.WORKSPACE}:${env.WORKSPACE} \\
                -w ${env.WORKSPACE} \\
                --name ${CONTAINER_NAME} \\
                ${IMAGE_NAME}:latest
            """
          }
        }
      }
    }
  }
}
