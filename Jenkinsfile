pipeline {
  agent {
    docker {
      image 'node:20'
      args '-v /var/run/docker.sock:/var/run/docker.sock'
      customWorkspace '/var/lib/jenkins/workspace/github-project-fixed'
    }
  }

  options {
    disableConcurrentBuilds()
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
    agent any  // 반드시 호스트에서 실행
    steps {
        dir('/var/lib/jenkins/workspace/github-project-fixed') {
        script {
            // 확인용 로그
            sh 'echo "PWD: $PWD"'
            sh 'echo "PATH: $PATH"'

            // docker 명령 유효성 점검
            sh 'echo "Checking docker CLI availability..."'
            sh 'which docker || echo "❌ which docker: not found"'
            sh 'docker --version || echo "❌ docker --version: failed"'
            sh 'docker info || echo "❌ docker info: failed"'

            // 실제 build 수행
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
