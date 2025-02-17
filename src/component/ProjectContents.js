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
    techStack: "AWS, Terraform, Shell Script, C/C++, PHP, Java Script",
    date: "2023.07~현재",
  },
  {
    title: "🎡Portfolio",
    category: "개인 프로젝트",
    imageUrl: [
      `${url}portfolio1.gif`,
    ],
    description:
      "웹 사이트 형식으로 개발 이력을 정리한 프론트엔드 포트폴리오 사이트입니다.",
    features: [
      " 메뉴바 기능 구현: 사용자가 선택한 컴포넌트가 화면에 표시되도록 useRef Hook과 scrollIntoView() 함수를 이용해 상위 컨테이너 스크롤",
      "Emailjs를 이용해 별도의 서버 구축 없이 이메일을 전송할 수 있는 기능 구현",
      "getBoundingClientRect()를 이용해 요소의 위치값을 구하고 이를 기반으로 스크롤 애니메이션 구현",
      "CSS Media Query를 사용해 모든 사이즈의 기기에 대응 가능한 반응형 UI 구현",
    ],
    retrospective: [
      "프로젝트 디자인에 대해 많은 고민을 할 수 있었던 프로젝트였습니다.",
      "Emailjs를 이용해 별도의 서버 구축 없이 이메일을 보내는 기능을 구현해 볼 수 있었습니다.",
      "화면을 꾸미는 과정에서 다양한 CSS 및 Animation을 사용해 볼 수 있었습니다.",
    ],
    techStack: "JavaScript, React, HTML, CSS, Emailjs",
    date: "2023.07~현재",
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
    title: "⏰Stop Watch",
    category: "개인 프로젝트",
    imageUrl: [
      `${url}stopwatch2.gif`,
    ],
    description:
      "코딩테스트 준비를 하며 문제 풀이 시간 측정 프로그램이 필요해 직접 만든 스톱워치 사이트입니다. React, Vue와 같은 라이브러리를 사용하지 않고 Vanilla JavaScript를 이용해 제작하였습니다.",
    features: [
      "스톱워치 기능",
      "랩 버튼 클릭 시 시간 기록 기능",
      "Local Storage를 이용한 스톱워치 정보 저장 기능",
      "다크모드 지원",
      "현재 시간 안내",
      "상단의 시계와 밀리초 숨김 기능",
      "전체화면 기능",
      "반응형 웹",
    ],
    retrospective: [
      "리액트를 사용한 후 Vanilla JavaScript만을 이용한 프로젝트를 진행하는 동안 리액트 컴포넌트 재사용성의 편리성을 체감할 수 있었습니다.",
      "setInterval을 이용해 스톱워치를 구현하고 new Date()를 사용해 시계 기능을 구현하며 시간 및 날짜 관련 코드 구현에 익숙해졌습니다.",
      "Netlify 호스팅 서비스를 통해 처음으로 배포까지 하여 직접 사용해 본 프로젝트이기 때문에 기억에 남습니다.",
      "추후 웹 브라우저의 백그라운드에서 스톱워치가 동작하지 않는 문제점을 해결할 계획입니다.",
    ],
    techStack: "JavaScript, HTML, CSS, Netlify",
    date: "2023.07~현재",
  },
];