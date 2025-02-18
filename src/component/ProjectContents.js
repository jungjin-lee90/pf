const url = `${process.env.PUBLIC_URL}/assets/images/`;

export const projectItems = [
  {
    title: "KT 엔지니어링플랫폼",
    category: "협동 프로젝트",
    imageUrl: [
      `${url}main.png`,
      `${url}job.png`,
    ],
    description:  [
        "웹 사이트를 통해 HPC(슈퍼컴퓨팅) 환경을 제공해주는 서비스 입니다. 작업제출을 통해 원하는 Spec의 원하는 수의 노드(인스턴스)를 만들어주고 해당 노드들을 클러스터링하여 HPC 환경을 제공합니다.",
    ],
    features: [
      "Onpremise에서의 HPC를 Public 환경에 구현",
      "HPC 웹서비스 제공",
      "비용 절감을 위한 여러 기능 제공",
      "서로 다른 리전간 통신 환경 구현",
    ],

    retrospective: [
        "기존 온프레미스에서 사용 중이던 hpc 서비스를 AWS 클라우드 환경에서 사용할 수 있도록 하는 프로젝트입니다.",
        "3개 사가 협력하여 진행하는 프로젝트이며, 저의 역할은 AWS 서비스를 활용한 데이터 전송과 인프라 구축 및 개발이었습니다.",
        "먼저 데이터 전송에는 S3를 사용하였습니다. 서울 리전의 S3와 오하이오 리전의 S3에 CRR 맺어 서울 리전의 데이터가 오하이오 리전으로 자동으로 복제되도록 해두었습니다. 또한 이러한 통신이 가능하도록 하기 위해 미리 서울 리전과 오하이오 리전의 VPC Peering과 Routing Table 설정을 해주었고, 보안 그룹에 대한 설정도 해두었습니다.",
        "노드의 생성은 Terraform을 사용하였습니다. 웹페이지에서 인스턴스 리소스들에 대한 값을 넘겨받고 이를 tf 파일에 넣어 Apply 하였습니다. Volume, NIC, Instance, IAM 등 필요한 리소스들을 생성하고 연결하여 생성하였습니다.",
        "노드 간의 통신에는 NAT를 이용하였습니다. Private Subnet의 위치한 노드와 Public Subnet에 위치한 노드 간의 통신이 필요했기 때문에 Public Subnet을 이용한 NAT를 만들고, Private Subnet Routing Table에 해당 NAT를 등록하여 같은 VPC 내의 서로 다른 두 Subnet의 노드가 통신할 수 있도록 해두었습니다.",
        "웹에서 AWS로의 자원 및 서비스 생성에는 AWS CLI를 사용하였습니다. EBS와 EIP, NAT, Routing Table 등 서비스에 필요한 자원은 스크립트에 AWS CLI를 사용하여 사용자는 버튼을 통해 간단히 생성할 수 있도록 하였습니다.",
        "서울 리전의 노드에서 오하이오 리전 노드로의 명령 실행을 위해 SSM을 사용하였습니다. SSM 외에 보편적으로 사용할 수 있는 ssh나 curl 등의 방식도 있었지만, 해당 인프라에서는 ssh, curl 모두 사용할 수 없었기에 SSM을 사용하여, AWS 인스턴스 간의 명령 전송이 가능하게 했습니다.",
    ],
    techStack: "AWS, Terraform, Shell Script, C/C++, PHP, Java Script, Linux",
    date: "2023.07~현재",
  },
  {
    title: "NEW그룹웨어 프로젝트",
    category: "협동 프로젝트",
    imageUrl: [
      `${url}S-Talk.png`,
    ],
    description:
      "신한그룹에서 사용하는 메신저에 대한 설계, 개발, 운영",
    features: [
      "PC, Mobile 환경 연동",
      "메신저가 클라우드 환경을 이용하여 동작하도록 설계",
    ],
    retrospective: [
      "기존 그룹웨어를 온프레미스에서 클라우드로 전환하는 프로젝트 입니다.",
      "저의 역할은 오래된 레거시인 기존 메신저에서 필요한 기능들을 새로운 메신저에 적용하고, 메신저가 클라우드에서도 PC, 모바일 에서 정상적으로 이용될 수 있도록 설계 및 운영하는 역할을 하였습니다.",
    ],
    techStack: "Delphi, C/C++, AWS",
    date: "2022.11~2023.02(퇴사)",
  },

  {
    title: "🌓Dream note",
    category: "개인 프로젝트",
    imageUrl: [
      `${url}dreamnote11.gif`,
    ],
    description: "꿈일기를 작성할 수 있는 꿈노트 어플리케이션입니다.",
    features: [
      "일기 작성, 수정, 삭제, 조회",
      "일기 장르를 사용자가 직접 새로 생성하고 삭제 및 수정 가능",
      "일기의 제목, 내용을 검색할 수 있는 검색창",
      "웹 브라우저를 닫았다 열어도 사용자가 저장한 일기 데이터를 조회 가능",
    ],
    retrospective: [
      "개발 과정을 블로그에 모두 기록하며 실제 제게 가장 필요한 기능만 간결히 구현하였습니다.",
      "프로그램 구현 시 가장 기본이 되는 CRUD 개발에 익숙해질 수 있었고, FileReader() 객체를 이용해 이미지 업로드 기능을 구현했습니다.",
      "Context API를 사용하여 데이터 상태를 관리하는 과정을 학습한 뒤 프로젝트에 적용해 보았습니다.",
      "JavaScript의 includes() 함수를 이용해 검색 기능을 구현해 보는 과정도 흥미로웠습니다.",
      "Local Storage에 데이터를 저장, 수정, 삭제하는 방법을 익혔습니다.",
      "Firebase로 호스팅하여 실제 배포를 완료하였으며 호스팅 과정도 블로그에 상세히 기록하였습니다.",
      "실제 어플리케이션을 사용해 본 결과, 다양한 기기에서 동기화가 이루어지면 좋겠다는 생각이 들어 현재는 Firebase를 이용한 서버 구축을 진행 중입니다.",
    ],
    techStack: "JavaScript, React, HTML, CSS, Local Storage, Firebase",
    date: "2023.07~현재",
  },
  {
    title: "MCPTT",
    category: "협동 프로젝트",
    imageUrl: [
      `${url}stopwatch2.gif`,
    ],
    description:
      "단말기와 연동하여, 솔루션을 통한 단말기 제어 및 패킷 분석을 통한 동작 제어",
    features: [
      "Serial 통신 기능 제공",
      "TCP 통신 기능 제공",
      "ADB 커맨드를 통한 단말기 제어",
      "SIP 패킷 분석",
      "API 연동",
    ],
    retrospective: [
      "MCPTT App을 DM 툴을 통해 정상적으로 동작하는지 확인하기 위해 SIP 메시지나 버튼을 눌렀을 때 나오는 메시지 등을 이용하여 확인하는 프로젝트로 주 개발 언어는 델파이이고, 국가사업인 만큼 국내 KT는 물론 유럽과 미국에서도 꾸준한 사업 수익을 내며 회사의 주요 수익원 중 하나로 자리매김 하였습니다.",
      "이후에는 고객의 요청이나 데이터의 변화의 따른 기능 추가 및 유지보수를 진행하였습니다.",
      "이 프로젝트에서 저의 역할은 단말과 연동하여 DM 툴에서 Adb Command나 API에 맞는 특정 동작을 실행할 때 나오는 SIP 메시지 등을 분석하여 command를 실행하여 App이 특정 동작을 하도록 만들어 정상적으로 작동하는지 확인하는 역할과 이용자가 쉽게 확인할 수 있도록 특정 메시지의 발생 시간, 발생한 메시지 세부내용 등을 확인할 수 있는 UI를 구성하였습니다.",
    ],
    techStack: "Delphi, C++, Jira",
    date: "2017.12~2022.10(퇴사)",
  },
];