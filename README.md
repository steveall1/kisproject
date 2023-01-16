# kisproject

한국투자증권 프로그래밍 미니 프로젝트를 위한 웹 App 개발 프로젝트 수행

# 제작자

- 본사영업(IB/ECM) 홍기범
- 프로젝트 주소 및 소스코드(github)

[GitHub - steveall1/kisproject](https://github.com/steveall1/kisproject)

# 프로젝트 PT 및 시연 영상

[프로젝트 시연 영상_홍기범.mp4](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fda627c1-985c-4c36-a09e-669929cac0c5/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8_%EC%8B%9C%EC%97%B0_%EC%98%81%EC%83%81_%ED%99%8D%EA%B8%B0%EB%B2%94.mp4)

# Application 최종 배포 주소

[https://c7c3-121-162-142-147.jp.ngrok.io](https://c7c3-121-162-142-147.jp.ngrok.io/)(현재 서버 비 가동중)

# 작품 주제

- express.js(node.js, javascript)를 활용한 기업 재무분석 Web Application 제작

# 선정 이유

- B/S Data를 시계열화 하면, I/S와는 또다른 insight 도출 가능
    - 현금성 자산 증감 대비 매출채권, 재고자산등의 비현금성자산 증가 여부
    - 전체 자산 대비 유형자산 비중 등을 체크함으로써 회사의 자금 Needs 파악 가능
    - 해당 Data들을 체크하며 발행사의 자금 Needs 파악 및 선제적 영업 대응 가능
    - 딜 제안 배경의 수치적 근거 제시 및 직관적 이해 가능
    
- Web Application 제작 이유
    - 코딩을 모르는 팀 구성원들도 프로그램을 사용하기 위해서는 Web 형태로 제작 및 배포 필요
    - 신속하게 팀원 간 **동일한** 정보를 **공유** 가능(데이터 동기화를 통해 Excel의 문제점 보완 가능)
    - 한번 Application을 구축하면 새로운 기능을 올리는 것이 그다지 어렵지 않음
    - PyQt등의 경우 UI가 너무 복잡한 경향이 있음.
    - Python을 활용하는 과제 특성 상 Python Server Framework인 Django 활용(현재 express.js로 대체)

# 기술 스택

- Client-Server Full stack 구현
    - Client : jQuery, Chart.js(javascript), HTML
    - Server : Express.js(node.js, javascript)
    - Data Serving : Python

# 사용데이터

- Dart OpenAPI(재무정보, 기업개요)

# 구현 과정

- [x]  1. Dart Open API를 이용한 현금성자산 및 재고자산과 매출채권의 합의 시계열 데이터 확보 (진행 완료)
    
    ~~추후 총 자산 대비 유형자산, 영업이익 대비 순이익 등의 데이터도 추가 예정(진행 완료)~~
    
    - [x]  2. 확보한 데이터를 MySQL(Localhost)에 Migration 수행(진행 완료)
    - [x]  3. express.js를 이용한 Backend(API) 구현(진행 완료)
    - [x]  4.  Bootstrap HTML Template을 활용한 Frontend 구성(완료)
    - [x]  5. jQuery, Chart.js를 활용한 동적 Web Application 구축
    - [x]  6. SQL Injection 방지를 위한 Secure Coding 점검(+Config file 분리)

- 현재까지 발견한 문제점
    - 긴 시계열 데이터를 불러와서 parsing 하는 경우 속도 저하 문제 발생
        - Database에 Sample data를 넣어 구현할 예정. 현재 MySQL을 활용하여 구현 완료긴 시계열 데이터를 불러와서 parsing 하는 경우 속도 저하 문제 발생
            - Database에 Sample data를 넣어 구현할 예정. 현재 MySQL을 활용하여 구현 완료
    - Angular.js Template를 구하기가 어려움
        - Angular.js Template은 보통 유료로 구매해야하는 경우가 많아 무료로 제공되는 Bootstrap Template 활용하여 프로젝트 진행
    - Django Framework 사용에 미숙함
        - 공부 목적으로 Django Framework을 사용하기에는 시간이 너무 한정되어 있어 기존에 자주 사용하던 express.js Framework으로 대체
    - CORS Issue
        - CORS 문제를 해결할 수 있도록 Header에 정보 탑재 완료
    
- Django Framework 사용에 미숙함
    - 공부 목적으로 Django Framework을 사용하기에는 시간이 너무 한정되어 있어 기존에 자주 사용하던 express.js Framework으로 대체
    

Extra) CSS를 이용한 Visualization upgrade(완료), Kubernetes를 이용한 분산환경 구축(향후 AWS를 통한 Deploy 가능한 상태)

# 차별점

- 비 IT직무 최초 **Web Full stack Application(프론트, 서버, DB 모두)** 구현
- 동적 Chart 및 직관적 UI 구현
- 재무정보는 Customizing한 Data로서 IB Deal을 위해 필요한 Critical한 재무정보를 한 눈에 파악 가능
- 이제 무엇을 올릴까의 문제. **현업에서 필요한 기능들을 Web 위에 무한하게  확장 가능**
- 구현한 기능을 **팀 구성원 모두가 이용 가능**
- 비 IT직무에서도 데이터 기반 신속한 의사결정 가능 (**한투가 그리는 미래와 일치**)

# 구현 소감

- **비 IT직무도 할 수 있다(IB can do it)**
- Python으로 Server를 구현하지 못한 것이 아쉬움(Data Serving - Server 간의 Language 불일치)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0f2dcc1c-39a2-496f-a497-cce20806e30e/Untitled.jpeg)

- 웹 프론트를 중점적으로 구현하며 코딩 실력 향상
- 앞으로 현업을 수행하며 필요하다고 느끼는 기능을 계속 추가하고 싶다
