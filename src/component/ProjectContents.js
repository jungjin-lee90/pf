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
    title: "Diagnostic Monitor",
    category: "협동 프로젝트",
    imageUrl: [
      `${url}dreamnote11.gif`,
    ],
    description: "DM은 통신 계측 장비로 단말기를 통해 전달 받은 데이터를 분석하여 현재 통신 상태를 UI를 통해 고객에게 제공하는 솔루션입니다.",
    features: [
      "TCP 통신을 통한 단말과의 통신",
      "단말과의 Comport 통신",
      "ADB 커맨드를 통한 단말기 제어",
      "그래프, 테이블 형태의 데이터 UI 제공",
    ],
    retrospective: [
      "DM에는 다양한 기능들이 존재합니다.",
      "첫 번째, 가장 기본이 되는 기능은 Comport 통신을 통해 단말과 DM이 직접 연결되는 것입니다.",
      "단말과 DM이 연결되어야 단말로 특정 Command를 전송 할 수 있고,",
      "Command를 전송받은 단말은 그에 대한 Reponse를 연결된 Comport를 통해 전송하기 때문입니다.",
      "DM의 시작은 이렇게 Comport를 통해 전송받은 데이터를 Protocol에 맞게 해석하여,",
      "사용자가 원하는 데이터를 한눈에 볼 수 있는 UI를 제공해 주면서 시작되었습니다.",
      "더 나아가 사용자가 선택한 데이터를 원하는 포맷의 형태(주로 Excel, csv, txt)로 입, 출력이 가능하도록 해주는 기능도 추가되었습니다.",
      
      "첫 번째 기능에서의 저의 역할은 Comport 통신이 안정적, 지속해서 이어질 수 있게 하고 있습니다.",
      "데이터 처리는 Thread를 이용해 처리하고 있으며, 프로토콜에 어긋나는 데이터가 생기지 않도록 버퍼를 만들어",
      "정확한 데이터인지 한 번 더 검사한 후에 데이터를 전송해주고 있습니다. 또한, 특정 주기마다 연결이 끊어지지는 않았는지",
      "확인하여 연결 해제 시 재연결하도록 하고 있습니다.",
      
      "두 번째, 단말기에서 받은 데이터를 UI까지 전달하는 부분에 있어 TCP 통신을 사용하고 있습니다.",
      "단말과 DM의 1:1통신이라면 굳이 TCP를 사용할 필요가 없겠지만, DM은 다 : 1의 통신을 목표로 개발되었습니다.",
      "이 때문에 단말기에서 받은 데이터를 DM 내부에서 UI 부분과 데이터 처리 부분으로 나누어 이 둘 간의 TCP 통신을 통해",
      "데이터를 주고받도록 설계되어 있습니다.",
      "DM에 연결된 각 단말에 ID를 부여하여, 부여한 ID 별로 각각 다른 처리가 가능하도록 구현되어 있습니다.",
      
      "두 번째 기능에서의 저의 역할은 통신 중 Block이 생기지 않도록 하며, Comport와 마찬가지로 안정적, 지속적인 통신이 이어질 수 있게 하고 있습니다.",
      "Server인지 Client인지를 판단하여, 이에 적합한 소켓옵션을 부여하여 Block이 발생하지 않도록 하고 있으며,",
      "역시나 중간중간 연결 상태를 확인하여, 연결이 끊어졌을 때 다시 재연결하도록 하고 있습니다.",
      
      "세 번째, 단말기에는 대표적으로 가장 많이 사용하는 스마트폰이 있지만, 그 외에 특정 회사에서 만들어진",
      "일반인들은 접할 수 없는 다양한 단말이 존재합니다. 이 단말들은 각각 연결 방법이 모두 다르며,",
      "이에 맞춰 DM도 다양한 연결 방식을 갖추게 되었습니다.",
      
      "세 번째 기능에서의 저의 역할은 각 단말에 맞는 연결 방법을 확인하여, 이에 맞게 DM에 적용하는 역할을 하고 있습니다.",
      "대부분의 단말은 회사에서 제공하는 문서를 통해 연결하거나, API를 통해 연결하고 있으며,",
      "문서를 제공하지 않는 단말에 대해서는 회사에 연락하여, 간단한 샘플 소스가 있는지 확인하여,",
      "샘플 소스를 통해 연결될 수 있도록 하고 이를 DM에 적용하고 있습니다.",
    ],
    techStack: "Delphi7, Delphi XE, C++",
    date: "2017.07~2022.10(퇴사)",
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