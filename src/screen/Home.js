import React, {Fragment} from 'react';

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Cover from "../components/home/Cover";




import Section1 from "../components/home/Section1";
import Section2 from "../components/home/Section2";
import Section3 from "../components/home/Section3";

import Service from "../components/home/Service";

const Home = () => {

    const s = [
        (
            <div style={{fontSize: "25px"}}>
                ‘스마트병원 시대를 꿈꾸다’ 칼럼이 인상깊었습니다. 일산병원을 방문할 때마다 다양한 iCt기술을 통해 정밀의료와 맞춤형 의료 등 환자중심 의료환경 패러다임으로 전환하며 변화하는 모습을 볼 수 있습니다. 포스트 코로나 시대를 맞아 업그레이드된 스마트한 일산병원의 모습, 앞으로도 계속 기대해 보겠습니다.
                <div className="text-center" style={{fontWeight: "900"}}>- 유광열 님 -</div>
                <br/>
                일산병원을 자주 이용하는데 전화로 예약하거나 변경할때 불편한 점이 간혹 있었는데 이번에 사보에서 모바일 앱 오픈 소식과 함께 이용 방법에 대해 자세하게 설명 해주셔서 좋았습니다. 각 메뉴별 특징도 요약되어 있어 앞으로 모바일 앱을 통해 예약은 물론 병원 이용이 더 편리해 질 것 같습니다.
                <div className="text-center" style={{fontWeight: "900"}}>- 이가형 님 -</div>
                <br/>
                ‘레토르트 식품의 건강한 변신!’ 기사를 흥미롭게 잘 읽었습니다. 집에서 '혼밥'을 즐겨먹다 보니 맛도 영양도 근사한 편의점 음식을 더 건강하게 즐기는 방법 레시피 정보가 딱이네요. 앞으로는 혼자라고 대충 끼니를 때우기 보다는 집밥 못지 않은 맛과 영양으로 '혼밥'을 근사하게 먹을 수 있게 됐습니다.
                <div className="text-center" style={{fontWeight: "900"}}>- 홍소진 님 -</div>
                <br/>
                조깅할 때나 헬스장에서 레깅스를 즐겨 입는 운동 마니아입니다. 신축성이 좋아 편하다는 이유로 레깅스를 2시간 이상 입고 있다 보면 혈액순환이 잘 안되는 느낌이 들어 늘 궁금했습니다. 이번호 ‘건강노트’에서 알려주신 레깅스 관련 기사를 읽고 궁금증이 해소되었습니다. 특히 레깅스로 인한 질환 예방법 오늘부터 실천해보겠습니다.
                <div className="text-center" style={{fontWeight: "900"}}>- 강은경 님 -</div>
            </div>
        ),
    ]

    const ctitle7 = [
        (

            <span style={{borderBottom: "1px solid"}}>
                새 근무복을 소개합니다
            </span>
        ),
    ]

    const ctext7 = [
        (
            <div>
                일산병원 가족의 근무복이 확 달라졌습니다. 직군별로 메인 컬러를 다르게 제작해 차별화를 두었고 새로운 hiP를 디자인 포인트로 적용, 일산병원의 아이덴티티를 살렸습니다. 또 업무에 필요한 소지품을 수납 할 수 있도록 하는 등 기능성과 활동성도 업그레이드 해 업무의 효율성을 높일 수 있도록 고려했습니다. 2021년, 새로운 근무복과 함께 더욱 활기찬 일산병원을 만들겠습니다.
            </div>
        )
    ]

    return (
        <Fragment>
            <div style={{backgroundColor: "#ededed"}}>

                <Header/>

                <Cover/>

                <Section1/>

                <Section2/>

                <Section3/>

                <Service/>

                <Footer/>

            </div>
        </Fragment>
    );
};

export default Home;
