pipeline {
  agent {
    docker {
      image 'node:18'   // node + npm 내장 이미지
      args '-v /var/run/docker.sock:/var/run/docker.sock' // 필요시 docker-in-docker
    }
  }

  environment {
    IMAGE_NAME = 'react-app'
    CONTAINER_NAME = 'react-app-container'
    PORT = '3000'
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install') {
      steps {
        sh 'npm install'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }

    stage('Docker Build') {
      steps {
        sh "docker build -t ${IMAGE_NAME}:latest ."
      }
    }

    stage('Deploy') {
      when {
        branch 'main'
      }
      steps {
        sh """
          docker rm -f ${CONTAINER_NAME} || true
          docker run -d -p ${PORT}:80 --name ${CONTAINER_NAME} ${IMAGE_NAME}:latest
        """
      }
    }
  }
}

