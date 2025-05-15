pipeline {
  agent {
    docker {
      image 'node:20'   // node + npm 내장 이미지
      args '-v /var/run/docker.sock:/var/run/docker.sock' // 필요시 docker-in-docker
    }
  }

  environment {
    IMAGE_NAME = 'react-app'
    CONTAINER_NAME = 'react-app-container'
    PORT = '3000'
    NPM_CONFIG_CACHE = "${WORKSPACE}/.npm"
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Prepare NPM Cache') {
      steps {
        sh 'mkdir -p $NPM_CONFIG_CACHE'
      }
    }

    stage('Install') {
      steps {
        sh 'npm install'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build || true'
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

