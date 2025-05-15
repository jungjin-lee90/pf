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
        agent any
            steps {
                dir('/var/lib/jenkins/workspace/github-project-fixed') {
                    script {
                        // 확인용 로그
                        sh 'echo "WORKSPACE is: $PWD"'

                        // docker build → 현재 디렉토리(.)를 context로 사용
                        sh "docker build -t ${IMAGE_NAME}:latest /var/lib/jenkins/workspace/github-project-fixed"

                        // 기존 컨테이너 제거
                        sh "docker rm -f ${CONTAINER_NAME} || true"

                        // docker run 시 host의 WORKSPACE를 마운트
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
