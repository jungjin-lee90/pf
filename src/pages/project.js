import './project.css';
import { forwardRef } from 'react';
import Card from '../component/card';

const Project = forwardRef((props, ref) => {
    console.log("project " + ref);

    return (
        <div className="project">
            <h1 className="project-title">
                <a name="project">Project</a>
            </h1>
            <Card className="project-card">
                <div className="project-card-wrapper">
                    <h2 className="project-title">🌓Dream note</h2>
                    <h4>개인 프로젝트</h4>
                    <section>
                        <article>
                        <img src={process.env.PUBLIC_URL + "/logo192.png"} />
                        <p className="link-wrapper">Github</p>
                        <a href="https://github.com/Yoonyesol/Dream_note">Dream_note</a>
                        <p className="link-wrapper">배포 링크</p>
                        <a href="https://dreamnote-9f9f2.web.app">
                            dreamnote-9f9f2.web.app
                        </a>
                        <p className="link-wrapper">개발 기록</p>
                        <a href="https://tinyurl.com/ylvw7xjd">florescene.tistory.com</a>
                        </article>
                        <article>
                            <h3>프로젝트 소개</h3>
                            <p>
                                꿈 속에서 겪었던 즐겁거나 흥미로운 일들이 금방 휘발되는 것이
                                아까워 잊기 전에 기록하기 위해 개발한 어플리케이션입니다.
                            </p>
                            <h3>주요 기능</h3>
                            <p>
                                꿈 일기 기록/조회/수정/삭제(CRUD)기능, 일기 장르 태그 지정 기능,
                                일기 제목/본문 검색 기능, 이미지 업로드 기능, LocalStorage를
                                이용해 일기를 로컬에 저장하기, 모바일-데스크탑 호환 가능한
                                반응형 웹
                            </p>
                            <h3>회고</h3>
                            <p>
                                개발 과정을 블로그에 모두 기록하며 실제 제게 가장 필요한 기능만
                                간결히 구현하였습니다.
                                <br />
                                프로그램 구현 시 가장 기본이 되는 CRUD 개발에 익숙해질 수
                                있었고, FileReader() 객체를 이용해 이미지를 업로드할 수
                                있었습니다. 평소 알고 있었던 includes() 함수를 이용해 검색
                                기능을 구현해 보는 과정도 흥미로웠습니다. <br />
                                Firebase로 호스팅하여 실제 배포를 완료하였으며 호스팅 과정도
                                블로그에 상세히 기록하였습니다.
                                <br />
                                실제 어플리케이션을 사용해 본 결과, 다양한 기기에서 동기화가
                                이루어지면 좋겠다는 생각이 들어 현재는 Firebase를 이용한 서버
                                구축을 진행 중입니다.
                            </p>
                            <h3>기술스택</h3>
                            <p>JavaScript, React, Html, Css</p>
                        </article>
                    </section>
                </div>
            </Card>
        </div>
    );
});

export default Project;