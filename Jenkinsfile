pipeline {
  agent any

  environment {
    IMAGE_NAME = "react-app"
    CONTAINER_NAME = "react-app-container"
    PORT = "3000"
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
        sh "docker build -t ${IMAGE_NAME}:${BRANCH_NAME} ."
      }
    }

    stage('Deploy (Only main)') {
      when {
        branch 'main'
      }
      steps {
        sh """
          docker rm -f ${CONTAINER_NAME} || true
          docker run -d --name ${CONTAINER_NAME} -p ${PORT}:80 ${IMAGE_NAME}:main
        """
      }
    }

    stage('Skip Deploy (Non-main)') {
      when {
        not {
          branch 'main'
        }
      }
      steps {
        echo "Not deploying since branch is not 'main'."
      }
    }
  }
}
