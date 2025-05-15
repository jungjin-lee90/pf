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
	
    // === 이 단계부터는 Docker 명령어가 필요하므로, Jenkins 호스트에서 실행 ===
    stage('Docker Build & Deploy') {
        agent any
        steps {
            script {
                sh 'echo WORKSPACE is: $WORKSPACE' 
                // docker build → context를 명시적으로 전달
                sh "docker build -t ${IMAGE_NAME}:latest ${WORKSPACE}"

                // 기존 컨테이너 제거
                sh "docker rm -f ${CONTAINER_NAME} || true"

                // docker run 시 WORKSPACE를 컨테이너에 마운트
                sh """
                    docker run -d \\
                    -p ${PORT}:80 \\
                    -v ${WORKSPACE}:${WORKSPACE} \\
                    -w ${WORKSPACE} \\
                    --name ${CONTAINER_NAME} \\
                    ${IMAGE_NAME}:latest
                """
                }
            }
        }
    }
}
