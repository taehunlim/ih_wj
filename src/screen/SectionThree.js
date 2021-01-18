import React, {Fragment} from 'react';
import {
    Container,
    Card,
    CardBody,
    CardText,
    CardImg,
    CardTitle,
    CardSubtitle,
} from 'reactstrap';

import HeaderP from "../components/header/HeaderP";
import Footer from "../components/footer/Footer";
import IhToday from "../components/IhToday";
import IhLetter from "../components/IhLetter";

import around1 from '../assets/images/section3/around1.jpg'
import around2 from '../assets/images/section3/around2.jpg'
import around3 from '../assets/images/section3/around3.jpg'
import around4 from '../assets/images/section3/around4.jpg'

import food from '../assets/images/section3/food.jpg';

import trend from '../assets/images/section3/trend.png'
import trend2 from '../assets/images/section3/trend2.jpg'

import issue from '../assets/images/section3/issue1.JPG';
import issue2 from '../assets/images/section3/issue2.JPG';
import issue3 from '../assets/images/section3/issue3.png';
import issue4 from '../assets/images/section3/issue4.JPG';


import news1 from '../assets/images/section3/news/1.JPG'
import news2 from '../assets/images/section3/news/2.JPG'
import news3 from '../assets/images/section3/news/3.JPG'
import news4 from '../assets/images/section3/news/4.jpg'
import news5 from '../assets/images/section3/news/5.jpg'
import news6 from '../assets/images/section3/news/6.JPG'
import news7 from '../assets/images/section3/news/7.jpg'
import news8 from '../assets/images/section3/news/8.JPG'
import news9 from '../assets/images/section3/news/9.jpg'
import news10 from '../assets/images/section3/news/10.jpg'
import news11 from '../assets/images/section3/news/11.jpg'
import news12 from '../assets/images/section3/news/12.png'





import treatment1 from '../assets/images/section3/schedule/schedule.png'
import treatment2 from '../assets/images/section3/schedule/schedule2.png'


import today1 from "../assets/images/section3/today/1.jpg"
import today2 from "../assets/images/section3/today/2.jpg"
import today3 from "../assets/images/section3/today/3.jpg"
import today4 from "../assets/images/section3/today/4.jpg"
import today5 from "../assets/images/section3/today/5.jpg"
import today6 from "../assets/images/section3/today/6.jpg"


import letter from '../assets/images/logo.jpg'


const SectionThree = ({match}) => {

    const head = [
        (
            <div style={{fontSize: "24px"}}>
                AROUND
            </div>
        ),
        (
            <div style={{fontSize: "24px"}}>
                FOOD
            </div>
        ),
        (
            <div style={{fontSize: "24px"}}>
                TREND
            </div>
        ),
        (
            <div style={{fontSize: "24px"}}>
                ISSUE
            </div>
        ),
        (
            <div style={{fontSize: "24px"}}>
                IH NEWS
            </div>
        ),
        (
            <div style={{fontSize: "24px"}}>
                IH TODAY
            </div>
        ),
        (
            <div style={{fontSize: "24px"}}>
                IH LETTER
            </div>
        ),
        (
            <div style={{fontSize: "24px"}}>
                진료일정표
            </div>
        )
    ]

    const title = [
        (
            <div>
                2021년 1월 1일의 해가 떠오르다
                <div style={{fontWeight: "900"}}>한강에서 본 일출</div>
            </div>
        ),
        (
            <div>
                지금이 제철!
                <br/>
                영양 가득한 바다 맛,
                <div style={{fontWeight: "900"}}>굴</div>
            </div>
        ),
        (
            <div>
                당근해서 겟한 물건
                <br/>
                <div style={{fontWeight: "900"}}>나에겐 N차 신상</div>
            </div>
        ),
        (
            <div>
                국민건강보험 일산병원, ‘코로나19 거점전담병원’ 운영
                <div style={{fontWeight: "900"}}>
                    지역 내 의료기관 협력을 통한 <br/>
                    효율적인 코로나19 대응체계 모색
                </div>
            </div>
        ),
        (
            <div>
                <div style={{fontWeight: "900"}}>김성우 병원장, 공로상 수상</div>
            </div>
        ),
        (
            <div>
                10.01.<span style={{fontWeight: "900"}}> YTN뉴스 </span>
                <br/>
                뉴스연휴에 갑자기 열 나는우리 아이, 어떻게 해야 하나?
            </div>
        ),
        (
            <div style={{color: "lightseagreen"}}>
                독자의견
            </div>
        ),
        (
            <div>
                진료일정표
            </div>
        )
    ]

    const subtitle = [
        (
            <div>
                해돋이 관광객들로 전국이 떠들썩해야 할 연말연시. 사회적 거리두기로
                <br/>
                올해는 한강에서 보는 일출로 만족해야겠다며 열심히 일출 스폿을 찾아봤습니다.
                <br/>
                매봉산 팔각정, 한강대교, 선유도공원, 인왕산, 하늘공원 등 곳곳이 다 절경입니다.
                <br/>
                그중 포토그래퍼 두 명이 고른 매봉산 팔각정과 선유도공원에서 새해 일출을 담아봤습니다.
                <br/>
                글 <span style={{fontWeight: "normal"}}> 편집실 / </span>
                사진 <span style={{fontWeight: "normal"}}> 이덕환 </span>
            </div>
        ),
        (
            <div>
                싱싱한 굴에 레몬을 곁들여 초장에 살짝 찍어 먹는 생굴회, 나박나박 썬 무를 참기름에 달달 볶다가 굴을 넣어 시원하게 끓여내는 굴무국은 한겨울 추위를 잊게 하는 맛이다. 갖가지 영양소가 풍부해 겨울철 영양 보충에도 좋은 굴의 매력 속으로 빠져보자.
                <br/>
                <br/>
                글 <span style={{fontWeight: "normal"}}> 편집실 / </span>
                사진 <span style={{fontWeight: "normal"}}> 백기광 / </span>
                스타일링 <span style={{fontWeight: "normal"}}> 박정윤(노하우스) </span>
            </div>
        ),
        (
            <div>
                ‘당근하다’라는 말을 들어본 적 있다면 당신은 트렌드에 민감한 편이다. 혹시 ‘당연하다’라고 해석했다면 취소. ‘당근하다’는 한창 붐을 일으키고 있는 중고거래 앱 ‘당근마켓에 물건을 내놓는다’는 신조어다. 다양한 플랫폼이 등장하고 50~60대 연령층까지 가세하며 열풍이 불고 있다. 중고거래를 통해 겟한 물건은 N차 신상이라 불리며 새로운 소비 패러다임을 제시한다.
                <br/>
                <br/>
                글 <span style={{fontWeight: "normal"}}> 편집실 / </span>
                참조 <span style={{fontWeight: "normal"}}> 『트렌드코리아 2021』(미래의창) </span>
            </div>
        ),
        (
            <div>
                국민건강보험 일산병원이 코로나19 확진자 전담 치료병동을 운영함으로써 국민보건의료 향상이라는 병원 설립 취지에 맞춰 보험자병원으로서의 역할 강화에 나섰다. 최근 코로나19 확진자가 급증해 치료 병상이 절실하게 필요해진 국가 감염병 재난 상황에 대응하고자 10∼13층 4개 병동을 코로나19 확진자 전담 치료병동으로 전환해 운영한다.
                정리 <span style={{fontWeight: "normal"}}> 편집실 </span>
                사진 <span style={{fontWeight: "normal"}}> 일산병원 </span>
            </div>
        ),
        (
            <div>
                김성우 병원장이 2020년 10월 30~31일 양 일간 서울드래곤시티에서 열린 2020 대한재활의학회 추계학술대회에서 공로상을 수상 했다. 공로상은 재활의학 분야 개선과 학회 발전에 기여한 개인에게 수여하는 상이다. 김성우 병원장은 대한재활의학회 회원으로서 학문과 학회의 발전에 힘쓰고 미충족 재활 의료 서비스에 대한 연구 지원으로 재활의료 연구에 기여한 공로를 인정 받아 이상을 수상했다.
            </div>
        ),
        (
            <div>
                누구나 손발이 저린 경험이 있을 것이다. 오랫동안 바닥에 앉아 있었거나 엎드려서 잠들었을 때 손발이 저릴 수 있는데, 이는 말초신경에 압력이 가해지면서 생긴 일시적인 증상으로, 자세를 바꿔서 말초신경에 가해지는 압력이 사라지면 호전된다.
                <br/>그러나 손발 저림이 지속되거나 반복적으로 같은 양상이 나타난다면, 치료가 필요한 신경계 이상일 가능성이 있다.
                <br/>
                <br/>
                글 <span style={{fontWeight: "normal"}}> 신경과 조정희 교수 </span>
            </div>
        ),
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
        (
            <div>
                <p>
                    <span>대표전화</span>
                    <a href="tel:031-900-0114" title="전화걸기">(031) 900-0114</a>,
                    <a href="tel:031-900-3114" title="전화걸기">3114</a>
                    <br/>
                    <span>전화예약</span>
                    <a href="tel:1577-0013" title="전화걸기">1577-0013</a>
                    <br/>
                    <span>인터넷예약</span>
                    <a href="http://www.nhimc.or.kr" title="새창열림" target="_blank" rel="noreferrer">www.nhimc.or.kr</a>
                    <br/>
                    <span>응급의료센터</span>
                    <a href="tel:031-900-0760" title="전화걸기">(031) 900-0760</a>
                    <br/>
                    <span>종합건진센터</span>
                    <a href="tel:1577-7013" title="전화걸기">1577-7013</a>
                    <br/>
                    <span>국가검진센터</span> <a href="tel:1577-8013" title="전화걸기">1577-8013</a>
                </p>
                <p>
                    ※ 진료일정은 병원사정에 의해 변경될 수 있습니다.
                </p>
                <p>◆~★ 클리닉이면서 일반환자 진료가능, □~☆ 클리닉환자만 진료</p>
                <p>
                    진료예약
                    <a href="tel:1577-0013" title="전화걸기">1577-0013</a>
                </p>
            </div>
        )
    ]


    // sction 1~4

    const ctitle1 = [
        (
            <div>
                # spot 1 매봉산 팔각정
            </div>
        ),
        (
            <div>

            </div>
        ),
        (
            <div>
                # spot 2 선유도공원
            </div>
        )
    ]

    const ctext1 = [
        (
            <div>
                매봉산 공원은 남산 바로 옆 공원으로 약수역과 금호역, 버티고개와 한강진역 등 주변에 전철역이 여러개 있어 접근성이 좋답니다.
                전망이 좋아 사람들이 많이 찾는 팔각정에 오르면 영동대교와 성수대교, 동호대교 등 3개 한강 다리를 한곳에서 볼 수 있어 서울을 한눈에 담은 것 같아요. 저 멀리 롯데월드타워와 수많은 아파트 사이로 2021년의 새 아침이 밝아오는 것, 보이시나요? 매일 보는 해이지만 새해 첫날의 해가 더 밝게 보이는 건 기분 탓이겠죠?
            </div>
        ),
        (
            <div>

            </div>
        ),
        (
            <div>
                선유도공원의 포인트는 선유교 위에서 보는 일출이랍니다. 여의도 쌍둥이 빌딩 사이를 지나는 해를 포착하는 것도 놓칠 수 없는 재미예요. 높은 건물 사이와 그 위를 유영하듯 서서히 옮겨가는 해를 쫓아 자리를 옮겨가며 카메라에 담아봅니다. 느린 듯하지만 카메라 셔터를 누르다 보면 어느새 해는 저 멀리 솟아 있습니다. 변함없이 우리의 아침을 밝혀주는 해처럼 2021년에도 다 같이 힘차게 GO! GO! 할까요?
            </div>
        )
    ]

    const ctitle2 = [
        (
            <div>

            </div>
        ),
        (
            <div>
                영양소가 풍부한 건강식품
            </div>
        )
    ]

    const ctext2 = [
        (
            <div>
                쌀쌀해지는 계절이면 갖가지 요리로 우리 식탁에 등장하는 굴. 굴 조개, 석굴, 석화, 어리굴 등으로 불리는데 석화는 돌 석(石)자에 꽃 화(花)자로 돌 위에서 자라며 먹이를 먹으려고 입을 벌렸을 때 꽃처럼 보여 돌에 핀 꽃이란 의미를 가지고 있다. 어리굴은 ‘어리다’, ‘작다’는 뜻으로 돌이나 너럭바위에서 자란 자연산 굴을 말한다. 굴은 세계적으로 100여 종이 있으며 우리나라에선 참굴, 벚굴, 강굴, 바윗굴, 떡굴 등 10여 종이 수확, 양식되고 있다. 서양에선 태평양 굴, 대서양 굴로 나뉜다. 그 외 모양, 사이즈, 재배방식에 따라 반갈 굴, 착각굴, 물굴, 월하굴, 소굴, 토굴, 벚굴(섬진강에서 나는 대표적인 민물 굴) 등이 있다.
                <br/>
                굴은 자연산과 양식으로 나뉘는데, 자연산 굴은 밀물 땐 바닷물에 잠기고, 썰물 땐 햇빛에 드러나기 때문에 자라는 속도가 느리고, 크기가 작지만 고소한 단 맛은 최고다. 양식굴은 늘 바닷물에 잠겨있어 플랑크톤 등을 항시 먹을 수 있기 때문에 빨리 자라 자연산 굴보다 굵고 크며, 굴 가장 자리의 검은색 부분이 더 많다. 맛과 선호도는 차이가 있겠지만, 영양 면에서는 차이가 없다고 한다. 생장 특성상 자연산 굴은 지리적으로 조수간만의 차가 큰 충남과 전북에서 주로 자라며, 양식 굴은 경남 충무·거제지역과 전남 고성에서 주로 생산된다.
            </div>
        ),
        (
            <div>
                굴은 단백질 중에서도 필수아미노산, 칼슘 함량이 많아 ‘바다의 우유’라고 불린다. 이 외에도 철, 아연, 구리, 망간 등 미네랄이 풍부하다. 특히 굴에 풍부하게 들어있는 철은 혈액 속 헤모글로빈의 주성분으로 빈혈 예방에 도움을 준다. 또 굴은 훌륭한 강장식품으로 과음 후 깨진 영양균형을 바로잡는데도 효과적이다. 굴에는 탄수화물도 함유되어 있는데 소화 흡수가 잘되는 글리코겐 형태여서 소화력이 약한 어린이와 노인에게 좋다. 또 아연 함량이 높아 남성호르몬 분비를 촉진해 남성에게 좋은 식품으로 잘 알려져 있다. 칼로리와 지방 함량이 적고 칼슘이 풍부해 다이어트 식품으로도 각광을 받으며, 비타민 A, B, C 등이 풍부해서 희고 매끄러운 피부 유지에 도움이 된다. 굴은 익혀 먹어도 영양분에는 큰 차이가 없기 때문에 회나 국, 탕 등으로 다양하게 활용한다.
                <br/>
                굴은 눌렀을 때 탄력이 있고 살 가장자리에 검은테가 또렷한 것이 좋다. 살이 희고 불은 것 처럼 퍼진굴은 싱싱하지 않은 것이다. 굴은 바닷물로 껍질을 손질하고 비닐에 담고 스티로폼에 얼음을 넣어 진공포장하여 냉장 보관한다. 깐 굴을 장기간 보관할 때는 바닷물 (소금물)에 헹궈 바닷물을 조금 넣고 소분해 냉동한다.
                <br/>
                생굴을 먹을 때는 레몬을 곁들이는데 레몬에 함유된 비타민C인 아스코르빈산이 철분의 장내 흡수를 도와 빈혈 치료에 효과적이다. 굴에 레몬즙을 떨어뜨리면 나쁜 냄새를 잡고 레몬의 구연산이 식중독과 세균의 번식을 억제하며 살균효과도 있다.
                <br/>
                부추와 함께 먹으면, 굴의 찬 성질을 부추의 따뜻한 성질이 보완해 소화가 잘된다. 굴과 바지락, 모시조개, 다시마 등을 넣어 우려낸 육수는 영양소의 완벽한 조합을 이룬다. 바지락은 지방 함량이 낮고 철분함량이높아 빈혈 예방에 도움을 주고, 모시조개는 타우린성분이 가득해 콜레스테롤을 낮춰 혈압 조절에 도움을 주고 다시마는 비타민K를 함유하고 있어 모세혈관을 튼튼하게 해주니 따뜻한 국물이 생각나는 요즘 같은 날씨에 제격이다.
            </div>
        )
    ]

    const ctitle3 = [
        (
            <div>

            </div>
        ),
        (
            <div>
                성장하는 중고거래 플랫폼
            </div>
        ),
        (
            <div>
                투명성과 신뢰성 강화해야
            </div>
        )
    ]

    const ctext3 = [
        (
            <div>
                풍요롭지 못한 시대를 살아온 세대에게 ‘중고’란 남이 쓰던 것을 물려받은, 부정적인 이미지가 컸다. ‘중고’는 새것을 살 수 없는 형편 또는 상황이라 어쩔 수 없는 선택이었다. 그러나 지금은 중고물건을 사고 파는 일이 합리적인 가격으로 가치 있는 소비를 하고, 투자 수단이 되고, 취향을 거래하며, 보물찾기를 하는 놀이터이자, 사람 과 사람을 잇는 행위로 각광받고 있다.
                <br/>
                요즘 남편들은 뭐가 들어 있는지도 모른채 아내가 들려준 쇼핑백을 들고 약속된 장소에 ‘당근’하러 간다고 한다. 거기서 만난 상대 역시 아내가 들려준 쇼핑백에 뭐가 들어 있는지 모른채 나와있다는 우스갯소리처럼 중고거래는 일상이 됐다.
                <br/>
                업계에서 추산하는 국내 중고거래 시장 규모는 무려 20조원에 달한다. 최근의 중고시장은 완성품을 판매하는 1차 시장보다 더 핫하다. 2020년 4월 모바일 데이터 분석 플랫폼 모바일인덱스가 발표 한 {"<중고거래 앱 시장 분석 리포트>"}에 따르면, 중고거래 앱 ‘당근 마켓’의 일일 사용자 수는 약 156만 명으로, 국민쇼핑 앱으로 불리는 쿠팡(397만 명)에 이어 2위를 차지했다. 당근마켓은 11번가·G마 켓·위메프·티몬 등 대형 오픈마켓을 제쳤을뿐더러, 톱 5 쇼핑 앱 중 유일한 중고거래 전문 앱이다.
                <br/>
                본래 중고시장은 젊은 세대가 주도했지만 최근에는 다양한 연령대로 확산하는 추세다. {"<조선일보>"}가 20~60대 남녀 1,535명을 대상으로 설문조사를 진행한 결과, 중고거래를 가장 활발하게 즐기는 연령대는 30대(65.4%)였고, 40대(60.8%)가 그 뒤를 이었다. 코로나19로 모바일 사용에 차츰 익숙해진 50~60대 소비자들도 중고시장의 저변을 확대하는데 한 몫 하고 있다. 집에서 안쓰는 물건을 팔아 용돈벌이를 한다는 중장년층의 후기를 흔하게 볼 수 있다.
            </div>
        ),
        (
            <div>
                중고거래 플랫폼도 다양하게 성장하고 있다. 가장 주목 받는 중고거래 앱은 앞서 소개한 ‘당근마켓’이다. 2015 년 ‘판교마켓’으로 시작해 같은 해 10월 ‘당근마켓’으로 이름을 바꾸고 2018년 1월부터 전국 단위의 서비스를 제공하고 있다. 당근마켓은 ‘당신 근처의 마켓’의 준말로, 이용자의 거주 지역을 기준으로 반경 6km 이내에서만 거래가 가능하다.
                <br/>
                동네보다 더 좁은 생활권을 상정한 플랫폼도 있다. ‘마켓빌리지’는 거래 대상을 반경 1km 이내로 제한한다. 같은 아파트 내 또는 걸어서 5분 거리의 주민간 거래로 차별화 했다. 대학생들의 온라인커뮤니티 플랫폼으로 유명한 ‘에브리타임’은 중고 교재 거래를 위한 ‘책방’게시판을 통해 학교 내 직거래가 활발하다.
                <br/>
                이 외에도 특정 물품만 거래하는 전문 플랫폼도 진화하고 있다. 유아·아동 용품을 전문으로 하는 ‘땡큐마켓’, 명품 전문 중고거래 앱 ‘필웨이’, 골프 마니아들의 성지 ‘골마켓’, 중고 악기 거래사이트 ‘뮬’ 등이 있다. 무인 중고거래 자판기도 등장했다. 판매할 물건을 투명한 사물함에 넣고 연락처·상품 안내·희망 가격 등을 적어두면 불필요한 대면 접촉 없이도 거래가 가능하다.
            </div>
        ),
        (
            <div>
                N차 신상 시장이 정착되려면 중고품 시장의 투명성과 신뢰성을 확보하기 위한 서비스와 제도가 보완되어야 한다는 목소리도 있다. 앞으로는 중고시장에 인공지능(AI)과 빅데이터 기술을 접목해 서비스 차별화를 시도하고, 단순한 중고거래 플랫폼의 기능을 넘어 커뮤니티의 역할이 강화될 것으로 보인다.
                <br/>
                구매할 때 처분까지 생각하는 필환경 시대, 공유에 너그럽고 싫증을 빨리 내는 MZ세대(밀레니얼+Z세대)의 등장, 코로나19로 인한 짠테크와 집콕소비 증가, 쉽고 안전한 거래 플랫폼의 발달이 맞물려 중고거래는 더욱 활발해질 전망이
            </div>
        )
    ]

    const ctitle4 = [
        (
            <div>

            </div>
        ),
        (
            <div>

            </div>
        )
    ]

    const ctext4 = [
        (
            <div>
                국민건강보험 일산병원이 코로나19 확진자 전담 치료병동을 운영함으로써 국민보건의료 향상이라는 병원 설립 취지에 맞춰 보험자병원으로서의 역할 강화에 나섰다. 최근 코로나19 확진자가 급증해 치료 병상이 절실하게 필요해진 국가 감염병 재난 상황에 대응하고자 10∼13층 4개 병동을 코로나19 확진자 전담 치료병동으로 전환해 운영한다.
            </div>
        ),
        (
            <div>
                국민건강보험 일산병원은 코로나19 발생 초기부터 대구·경북 지역 및 생활치료센터 의료진 파견, 선별진료소 및 안심진료소 운영, 코로나19 중환자 치료 등. 코로나19 감염 확산 방지와 환자 치료에 적극 대응해왔다.이러한 노력에도 불구하고 코로나19 확산세가 지속되고 중환자 병상이 심각하게 부족해지자, 공공병원의 역할을 다하기 위해 선제적으로 코로나19 전담 치료 병상을 대폭 확대 운영하여 국민 건강 회복에 앞장섰다.
                <br/>
                국민건강보험 일산병원은 비상대책본부를 개편해 전담조직을 구성하고, 보건복지부와 국민건강보험공단, 고양시와 긴밀히 협조하며 코로나19 환자 치료에 총력을 기울이고 있다. 코로나19 전담 병동은 이동동선 통제, 별도 공조시스템 및 음압시설 구축, 전담 의료진 배치 등 일반 입원병동과 철저히 분리해 감염 문제로부터 구조적 안전을 확보했다.
                <br/>
                또 전 직원을 대상으로 코로나19 검사를 선제적으로 시행한 결과 모두 음성으로 확인되었으며, 병원 전체 시설물 및 다중이용 동선을 체크해 정기적으로 코로나 PCR 검사를 시행하는 등 코로나19로부터 안전을 확보하는 데 만전을 기하고 있다.
            </div>
        ),
        (
            <div>
                한편 파주병원장 등 경기 북부지역 내 의료기관장들은 거점전담병원인 일산병원을 중심으로 효율적인 병상 관리 등 코로나19 대응 협력체계를 구축하기로 의견을 모았다.
                <br/>
                국민건강보험공단 일산병원은 거점전담병원의 역할을 수행함은 물론, 코로나19 고양시 병원 네트워크의 커맨드센터로서 네트워크 내에 입원한 환자의 상태 변화를 통합 관리하여 효율적인 병상 관리를 도모한다. 특히 인공지능(AI) 알고리즘을 이용, 중증으로 진행될 가능성이 높은 환자를 빠르게 예측하고 분류해, 네트워크 기관간 협진 시스템으로 코로나19 환자의 스텝업과 스텝다운을 효과적으로 운영한다. 또 시설·장비 준비, 인력 교육 및 교류 등 모든 자원과 정보를 공유하고 실무 협조를 위해 긴밀한 공동 연락망을 구축할 예정이다. 이를 통해 병상 추가 확보, 병상 회전율 제고 등 의료자원의 효율적 이용으로 병상 부족 문제에 효과적으로 대응하고, 지역사회에서 공공의료기관과 민간의료기관의 협력 네트워크 플랫폼을 구축하여 공공병원의 역할을 강화하겠다는 방침이다.
            </div>
        )
    ]



    // section3 News ~ 진료


    const ctitle5 = [
        (
            <div>
                정세균 국무총리, 의료진 격려
            </div>
        ),
        (
            <div>
                권덕철 장관, 일산병원 현장 방문
            </div>
        ),
        (
            <div>
                진인선 간호실장, 병원간호사회 이사 당선
            </div>
        ),
        (
            <div>
                ‘코로나19 대응 우수병원’ 선정
            </div>
        ),
        (
            <div>
                사랑의 헌혈’ 적십자사 감사패 받아
            </div>
        ),
        (
            <div>
                ‘스마트 헬스케어 네트워크 구축’ 협약
            </div>
        ),
        (
            <div>
                최첨단 외골격형 보행재활로봇 도입
            </div>
        ),
        (
            <div>
                번개맨,마스크 5천장 전달
            </div>
        ),
        (
            <div>
                ‘사랑의 연탄나눔’ 기부금 후원
            </div>
        ),
        (
            <div>
                노성현 교수, 최우수 학술상 수상
            </div>
        ),
        (
            <div>
                정신과·중환자실 적정성 평가 1등급 획득
            </div>
        ),
    ]

    const ctext5 = [
        (
            <div>
                코로나19 확산세가 지속되는 가운데, 2020 년 12월 16일 정세균 국무총리가 일산병원을 찾아 의사·간호사들을 격려했다. 한창훈 일산병원 코로나전담진료팀장의 코로나19 대응 현황 보고를 들은 후 코로나19전담병동을 둘러보며 “일산병원은 고양시에서 가장 먼저 선별진료소를 운영하는 등 코로나 19에 선도적으로 대응해온 모범 병원”이라며 “코로나19 환자 치료가 차질 없이 이루어 질 수 있도록 의료진과 의료장비 준비에 만전을 기해달라”고 말했다.
            </div>
        ),
        (
            <div>
                권덕철 보건복지부 장관이 1월 3일 코로나19 거점전담병원으로 운영중인 일산병원을 방문했다. 일산병원은 공공병원 중 가장 먼저 거점전담병원으로 지정돼 코로나19 환자 치료를 위한 병상 107개를 마련하고 지역내 의료기관과 코로나19 대응 협력체계도를 구축할 예정이다. 권덕철 장관은 “경기 북부권 에서 공공·민간병원이 함께하는 협력체계를 효과적으로 운영해 다른 지역에도 확산되기 를 기대한다”고 말했다.

            </div>
        ),
        (
            <div>
                2020년 11월 18일 열린 제45회 병원간호사회 정기총회에서 진인선 일산병원 간호실장 이 이사로 선출됐다. 총회는 ‘나이팅게일 탄생 200주년, 병원간호의 가치를 재조명하다’ 주제로 열렸으며, 진인선 간호실장을 비롯해회장,부회장,이사,감사등새로운임 원진이 선출됐다. 진인선 간호실장은 “코로나19 팬데믹이라는 대격변의 상황에서도 병원간호사회와 함께 환자가 안전하고, 간호사의 행복이 지켜지는 병원을 만들 수 있도록 노력하겠다”며 소감을 전했다.
            </div>
        ),
        (
            <div>
                국제병원연맹(ihF)에서 전 세계 병원 중 ‘코로나19 대응 우수병원’으로 일산병원을 선정했다. 일산병원은 코로나19 발생 초기부터 선 별진료소 및 안심진료소, 중증환자 전담병실을 운영하며 코로나19 감염확산 방지와 환자 치료에 적극 대응해왔다. 김성우 병원장은 “감염병 재난상황에서 우리 모두는 하나로 연결된 공동 운명체이며, 서로의 노하우를 공유해 코로나19의 세계적인 대유행이 끝날 때까지 함께 힘을 모아야 한다”고 말했다.
            </div>
        ),
        (
            <div>
                일산병원이 대한적십자사로부터 ‘사랑의 헌혈’ 행사에 지속적으로 참여하는 등 사회공헌 활동에 힘쓴 공로를 인정받아 2020년 11 월 6일 감사패를 받았다. 같은 날, 국민건강 보험 일산병원은 대한적십자사 중앙혈액원과 함께 임직원 단체 헌혈을 실시했다. 병원 주차장에 마련된 헌혈 버스에는 김성우 병원장을 시작으로 헌혈을 하고자 하는 직원 300여 명의 발길이 이어졌다.
            </div>
        ),
        (
            <div>
                일산병원과 sK텔레콤이 2020년 12월 1일 ‘스마트 헬스케어 네트워크 구축’ 업무 협약을 체결했다. 일산병원은 지난 9월 보건복 지부에서 주관하는 ‘스마트 병원 선도모델 개발지원 사업 대상 의료기관’으로 선정되며 정보통신기술(iCt)을 활용해 감염병 안심병원과 지역사회 감염병 신속대응 시스템을 구축하겠다는 계획을 밝힌 바 있다. 국민 건강보험 일산병원과 sK텔레콤은 ai를 활용하여 방역업무 자동화 및 치매 관련 인공 지능 솔루션 등의 사업을 협력할 계획이다.
            </div>
        ),
        (
            <div>
                일산병원이 ‘2020년도 재활로봇실증지원 사업’에 선정되며 최첨단 외골격형 보행재활로봇을 도입해 본격적으로 환자 치료와 연구 활동에 들어갔다. 재활의학과 전하라 교수를 총괄책임자로 하여 도입한 외골격형 보행재활로봇인 워크봇(walkbot_g)은 맞춤형 재활훈련이 가능한 최첨단 로봇 보조 보행재활훈련 시스템으로 보행장애를 가진 환자를 대상으로 개인에 최적화된 보행훈련 프로그램을 제공함으로써 치료 효 과를 극대화한다.
            </div>
        ),
        (
            <div>
                EBS 인기 캐릭터 번개맨이 2020년 12월 10일 일산병원을 방문해 환우들을 위한 번개맨 마스크 5천 장을 전달했다. 번개맨은 코로나19 감염 예방을 위해 아이들을 직접 만나지 않고 일산병원 측에 마스크를 전달 했다. 이석영 홍보실장은 "코로나19로 안과 밖에서 마음껏 뛰어놀지 못하는 아이들에게 마스크를 기부해준 번개맨과 EBS측에 감사드린다"며 "아이들이 이 마스크를 쓰고 코로나를 이겨내 번개맨처럼 씩씩하고 건강하게 자라기를 기대한다"고 전했다.
            </div>
        ),
        (
            <div>
                일산병원이 지역취약계층이 따뜻한 겨울을 날 수 있도록 ‘사랑의 연탄나눔’ 기부금 750 만원을 북방민족나눔협의회에 전달했다. 코로나19 사태가 길어지면서 연탄 기부와 후원, 자원봉사까지 줄어 복지사각지대에 놓인 소외된 취약계층이 추위와 난방비 부담의 이중고를 겪고 있다. 일산병원은 코로나19 감염 확산 방지를 위해 기부금 후원으로 소외계층에 관심과 사랑을 보탰다. 일산 병원은 2016년부터 매년 연탄나눔 봉사를 실시하며 나눔 문화 실천에 앞장서고 있다.
            </div>
        ),
        (
            <div>
                신경외과 노성현 교수가 대한척추신경외과 학회에서 나누리학술상을, 대한신경외과학회에서 정환영 학술상을 수상했다. 수술 후 발생하는 기계적 합병증을 최소화하기 위한 연구를 진행해 최근 세계적으로 권위 있는 척추학회 중 하나인 세계척추측만증연구학회(scoliosis research society)의 55회 온라인 콘퍼런스에 발표되며 세계적으로 큰 관심을 받았다. 노성현 교수가 개발한 척추 변형 수술 모델은 수술 성공률을 높이고 후유증을 최소화할 것으로 기대를 모으고 있다.
            </div>
        ),
        (
            <div>
                일산병원이 ‘의료급여 정신과 적정성 평가’ 에서 1등급을 받았다. 의료급여 정신과 적정성 평가는 의료급여 정신질환자에 대한 효과적인 의료서비스 제공과 지역사회 복귀 기반 마련을 목적으로 심평원이 시행하고 있는 제도로, 이번 평가에서 일산병원은 전체 평균인 66.8점을 상회하는 종합점수 89.6점을 획득했다. 또 ‘중환자실 적정성 평가’에서도 만점인 100점을 받아 동일종별 평균 68.9점을 크게 뛰어넘으며 1등급을 획득했다.
            </div>
        ),
    ]

    const ctitle6 = [
        (

            <span style={{borderBottom: "1px solid"}}>
                <span style={{fontWeight: "normal"}}>10.01. </span>
                YTN뉴스
            </span>
        ),
        (

            <span style={{borderBottom: "1px solid"}}>
               <span style={{fontWeight: "normal"}}>11.05. </span>
                KBS아침마당
            </span>
        ),
        (
            <span style={{borderBottom: "1px solid"}}>
                 <span style={{fontWeight: "normal"}}>11.18. </span>
                JTBC뉴스
            </span>
        ),
        (
            <span style={{borderBottom: "1px solid"}}>
                 <span style={{fontWeight: "normal"}}>12.14. </span>
                YTN뉴스 [제보는Y]
            </span>
        ),
        (
            <span style={{borderBottom: "1px solid"}}>
                <span style={{fontWeight: "normal"}}>12.19. </span>
                YTN뉴스
            </span>
        ),
        (
            <span style={{borderBottom: "1px solid"}}>
                <span style={{fontWeight: "normal"}}>12.29. </span>
                KBS굿모닝대한민국
            </span>
        ),
    ]

    const ctext6 = [
        (
            <div>
                뉴스연휴에 갑자기 열나는 우리 아이, 어떻게 해야 하나?
            </div>
        ),
        (
            <div>
                노인건강-건강검진
            </div>
        ),
        (
            <div>
                숨 막힐까 조마... 산후조리원 곳곳 ‘신생아 셀프 수유’
            </div>
        ),
        (
            <div>
                신생아 입에 젖병이... 생명 위협하는 ‘셀프수유’ 덜미
            </div>
        ),
        (
            <div>
                “드디어 병원에”... 자택 대기 환자 일부 병원 배정
            </div>
        ),
        (
            <div>
                국가건강검진
            </div>
        )
    ]


    const date = [
        (
            <div>
                <span className="border-bottom--dark">2020.<br/>10. 05.</span><br/>
                <span className="font-weight-bold">경향신문</span>
            </div>
        ),
        (
            <div>
                <span className="border-bottom--dark">2020.<br/>11. 25.</span><br/>
                <span className="font-weight-bold">조선일보</span>
            </div>
        ),
        (
            <div>
                <span className="border-bottom--dark">2020.<br/>10. 17.</span><br/>
                <span className="font-weight-bold">동아일보</span>
            </div>
        ),
        (
            <div>
                <span className="border-bottom--dark">2020.<br/>11. 27.</span><br/>
                <span className="font-weight-bold">경향신문</span>
            </div>
        ),


        (
            <div>
                <span className="border-bottom--dark">2020.<br/>10. 21.</span><br/>
                <span className="font-weight-bold">국민일보</span>
            </div>
        ),
        (
            <div>
                <span className="border-bottom--dark">2020.<br/>12. 04.</span><br/>
                <span className="font-weight-bold">헬스조선</span>
            </div>
        ),
        (
            <div>
                <span className="border-bottom--dark">2020.<br/>10. 27.</span><br/>
                <span className="font-weight-bold">헬스경향</span>
            </div>
        ),
        (
            <div>
                <span className="border-bottom--dark">2020.<br/>12. 08.</span><br/>
                <span className="font-weight-bold">경향신문</span>
            </div>
        ),


        (
            <div>
                <span className="border-bottom--dark">2020.<br/>10. 29.</span><br/>
                <span className="font-weight-bold">뉴스1</span>
            </div>
        ),
        (
            <div>
                <span className="border-bottom--dark">2020.<br/>12. 08.</span><br/>
                <span className="font-weight-bold">메디게이트뉴스</span>
            </div>
        ),
        (
            <div>
                <span className="border-bottom--dark">2020.<br/>10. 30.</span><br/>
                <span className="font-weight-bold">연합뉴스</span>
            </div>
        ),
        (
            <div>
                <span className="border-bottom--dark">2020.<br/>12. 15.</span><br/>
                <span className="font-weight-bold">헤럴드경제</span>
            </div>
        ),


        (
            <div>
                <span className="border-bottom--dark">2020.<br/>11. 10.</span><br/>
                <span className="font-weight-bold">서울신문</span>
            </div>
        ),
        (
            <div>
                <span className="border-bottom--dark">2020.<br/>12. 15.</span><br/>
                <span className="font-weight-bold">메디파나뉴스</span>
            </div>
        ),
        (
            <div>
                <span className="border-bottom--dark">2020.<br/>11. 18.</span><br/>
                <span className="font-weight-bold">연합뉴스</span>
            </div>
        ),
        (
            <div>
                <span className="border-bottom--dark">2020.<br/>12. 31.</span><br/>
                <span className="font-weight-bold">국민일보</span>
            </div>
        )
    ]
    const write = [
        (
            <div>
                <span className="font-weight-bold">[기고]마스크, 면역의 한 가지 형태</span><br/>
                <span className="">감염내과 최흔 교수</span>
            </div>
        ),
        (
            <div>
                <span className="font-weight-bold">10代 입원, 위장염이 1위</span><br/>
                <span className="">소아청소년과 유지형 교수</span>
            </div>
        ),
        (
            <div>
                <span className="font-weight-bold">‘취업난’ 엎친데 ‘코로나’ 덮친 20대, 사회 첫발부터 <br/> 좌절감</span><br/>
                <span className="">정신건강의학과 박선영 교수</span>
            </div>
        ),
        (
            <div>
                <span className="font-weight-bold">골든타임 다투는 심뇌혈관질환, 진료·검사·상담<br/> ‘하루에’</span><br/>
                <span className=""></span>
            </div>
        ),


        (
            <div>
                <span className="font-weight-bold">건보 일산병원, 고위험 산모·신생아 통합치료 권역 <br/>거점 국민일보 ‘우뚝’</span>
                <br/>
                <span className="">감염내과 최흔 교수</span>
            </div>
        ),
        (
            <div>
                <span className="font-weight-bold">기억'을 잡아라... 뇌 재활’로 藥 한계 보충</span><br/>
                <span className="">신경과 이준홍 교수</span>
            </div>
        ),
        (
            <div>
                <span className="font-weight-bold">일상 속 흔한 ‘입병(구내염)’...꼭 피곤해서만은 아냐</span><br/>
                <span className="">소화기내과 이용강 교수</span>
            </div>
        ),
        (
            <div>
                <span className="font-weight-bold">3개월 넘게 속 쓰리고 더부룩...알고 보니 <br/>‘기능성 소화불량’</span><br/>
                <span className=""></span>
            </div>
        ),


        (
            <div>
                <span className="font-weight-bold">“생활치료센터, 감염병 대유행시 의료붕괴 막는데<br/> 효과적”</span><br/>
                <span className="">재활의학과 김형섭 교수</span>
            </div>
        ),
        (
            <div>
                <span className="font-weight-bold">코로나19 확진자 데이터로 사망예측 이어 환자분류<br/> AI 개발</span><br/>
                <span className="">연구소안창식교수</span>
            </div>
        ),
        (
            <div>
                <span className="font-weight-bold">일산병원, ‘희망둥이 성장발달 클리닉’ 운영</span><br/>
                <span className=""></span>
            </div>
        ),
        (
            <div>
                <span className="font-weight-bold">고단백 다이어트의 함정...과다 섭취, 신장·대장 망가져요</span><br/>
                <span className="">가정의학과 최영은 교수</span>
            </div>
        ),


        (
            <div>
                <span className="font-weight-bold">아토피와 닮은 듯 다른 ‘건선’... 샤워하면 더 가려워요</span><br/>
                <span className="">피부과 조남준 교수</span>
            </div>
        ),
        (
            <div>
                <span className="font-weight-bold">건보 일산병원, 급성심장정지조사 유공기관 복지부장관상</span>수상<br/>
                <br/>
                <span className=""></span>
            </div>
        ),
        (
            <div>
                <span className="font-weight-bold">바람만 스쳐도 아프다는 ‘통풍’ 환자 5년간 35.8% 증가</span><br/>
                <span className="">류마티스내과 박진수 교수</span>
            </div>
        ),
        (
            <div>
                <span className="font-weight-bold">건보 일산병원, 우수한 방역 조치로 감염 확산 막아</span><br/>
                <span className=""></span>
            </div>
        )
    ]


    const winner = [
        (
            <div>
                유종하 <br/>진단검사의학과
            </div>
        ),
        (
            <div>
                노성현<br/>신경외과
            </div>
        ),
        (
            <div>
                유종하 <br/>진단검사의학과
            </div>
        ),
        (
            <div>
                지용우 <br/>안과
            </div>
        ),
        (
            <div>
                김의혁 <br/>산부인과
            </div>
        ),
        (
            <div>
                노성현 <br/>신경외과
            </div>
        ),
        (
            <div>
                김의혁 <br/>산부인과
            </div>
        ),
        (
            <div>
                이장우 <br/>재활의학과
            </div>
        ),
        (
            <div>
                김의혁 <br/>산부인과
            </div>
        ),
        (
            <div>
                이만우 <br/>소화기내과
            </div>
        ),
        (
            <div>
                배소희 <br/>영상의학과
            </div>
        ),
        (
            <div>
                유종하 <br/>진단검사의학과
            </div>
        )
    ]
    const cName = [
        (
            <div>
                대한진단검사의학회 <br/>
                우수연제상
            </div>
        ),
        (
            <div>
                나누리 학술상
            </div>
        ),
        (
            <div>
                우수논문상
            </div>
        ),
        (
            <div>
                구연상
            </div>
        ),
        (
            <div>
                포스터상
            </div>
        ),
        (
            <div>
                대한산부인과초음파학회 <br/>
                우수논문상
            </div>
        ),
        (
            <div>

                제 60차 대한신경외과 추계학술 <br/>
                대회 척추부분 정환영 학술상
            </div>
        ),
        (
            <div>
                대한산부인과초음파학회 <br/>
                우수논문상
            </div>
        ),
        (
            <div>
                최우수 구연상
            </div>
        ),
        (
            <div>
                제 47회 한국모자보건학회 <br/>
                추계학술대회 구연발표 대상
            </div>
        ),
        (
            <div>

                DISTINGUISHED POSTER <br/> AWARD
            </div>
        ),
        (
            <div>
                뇌기능 연구회 논문상 우수상
            </div>
        )
    ]
    const conference = [
        (
            <div>
                2020년 진단검사의학회 <br/>
                국제학술대회
            </div>
        ),
        (
            <div>
                제 34차 대한척추신경외과학회 <br/>
                정기학술대회
            </div>
        ),
        (
            <div>
                대한임상화학회
            </div>
        ),
        (
            <div>
                대한안과학회
            </div>
        ),
        (
            <div>
                대한안과학회
            </div>
        ),
        (
            <div>
                대한산부인과초음파학회
            </div>
        ),
        (
            <div>
                대한신경외과학회
            </div>
        ),
        (
            <div>
                대한산부인과초음파학회
            </div>
        ),
        (
            <div>
                대한심장호흡재활의학회
            </div>
        ),
        (
            <div>
                제 47회 한국모자보건학회 추계학술대회
            </div>
        ),
        (
            <div>
                International Digestive Endoscopy <br/>
                Network 2020(IDEN2020)
            </div>
        ),
        (
            <div>
                뇌기능 연구회
            </div>
        )
    ]
    const cDate = [
        (
            <div>
                2020.09
            </div>
        ),
        (
            <div>
                2020.09
            </div>
        ),
        (
            <div>
                2020.10
            </div>
        ),
        (
            <div>
                2020.10
            </div>
        ),
        (
            <div>
                2020.10
            </div>
        ),
        (
            <div>
                2020.11
            </div>
        ),
        (
            <div>
                2020.10
            </div>
        ),
        (
            <div>
                2020.11
            </div>
        ),
        (
            <div>
                2020.11
            </div>
        ),
        (
            <div>
                2020.11
            </div>
        ),
        (
            <div>
                2020.09
            </div>
        ),
        (
            <div>
                2020.11
            </div>
        ),
    ]
    const content = [
        (
            <div>
                Construction of Bone Marrow Report Registry Using Clinical Data <br/>
                Warehouse
            </div>
        ),
        (
            <div>
                Modified Global Alignment and Proportion Scoring with Body Mass Index and Bone Mineral Density (GAPB) analysis in Global Alignment and Proportion (GAP) score of each 3 categories for predicting mechanical complications after Adult Spinal Deformity Surgery
            </div>
        ),
        (
            <div>
                현장검사 분석 기기인 ABL90 FLEX PLUS의 <br/>
                크레아티닌 분석능 평가
            </div>
        ),
        (
            <div>
                프로테옴 분석 기반의 경도인지장애와 알츠하이머 <br/>
                특이적 눈물 바이오마커 발굴
            </div>
        ),
        (
            <div>
                파킨슨병 마우스 모델에서 망막의 기능 및 구조적 변화 연구
            </div>
        ),
        (
            <div>
                Benefits and risks of induction of labor at 39 or more weeks in uncomplicated nulliparous women:
                a retrospective, observational study.
            </div>
        ),
        (
            <div>
                Modified global alignment and proportion scoring with body mass index and bone mineral density (GAPB) for improving predictions of mechanical complications after adult spinal deformity surgery
            </div>
        ),
        (
            <div>
                Benefits and risks of induction of labor at 39 or more weeks in uncomplicated nulliparous women:
                a retrospective, observational study.
            </div>
        ),
        (
            <div>
                Current status of cardiac rehabilitation in Korea
            </div>
        ),
        (
            <div>
                저출산시대의 고위험임산부 전국 현황 및 고위험임산부 <br/>
                지원 정책 개선방향에 대한 연구
            </div>
        ),
        (
            <div>
                Associated risk factors for loss to surveillance follow up in patients with gastric neoplasms after endoscopic submucosal dissection
            </div>
        ),
        (
            <div>
                Robust performance of deep learning for distinguishing glioblastoma from single brain metastasis using radiomics features: model development and validation
            </div>
        )
    ]


    const mDate = [
        (
            <div>
                9.26
            </div>
        ),
        (
            <div>

            </div>
        ),
        (
            <div>
                10.18
            </div>
        ),
        (
            <div>
                10.18
            </div>
        ),
        (
            <div>
                10.24
            </div>
        ),
        (
            <div>
                10.24
            </div>
        ),
        (
            <div>
                11.1
            </div>
        ),
        (
            <div>
                11.1
            </div>
        ),
        (
            <div>
                11.1
            </div>
        ),
        (
            <div>
                11.7
            </div>
        ),
        (
            <div>
                11.7
            </div>
        ),
        (
            <div>
                11.7
            </div>
        ),
        (
            <div>
                11.8
            </div>
        ),
        (
            <div>
                11.14
            </div>
        ),
        (
            <div>
                11.14
            </div>
        ),
        (
            <div>
                11.15
            </div>
        ),
        (
            <div>
                11.21
            </div>
        ),
        (
            <div>
                11.28
            </div>
        ),
        (
            <div>
                12.5
            </div>
        ),
        (
            <div>
                12.12
            </div>
        ),
        (
            <div>
                12.13
            </div>
        ),
        (
            <div>
                12.19
            </div>
        ),
        (
            <div>
                12.20
            </div>
        ),
        (
            <div>
                12.26
            </div>
        )
    ]
    const mName = [
        (
            <div>
                명성우
            </div>
        ),
        (
            <div>
                오지수
            </div>
        ),
        (
            <div>
                최다정
            </div>
        ),
        (
            <div>
                정루비
            </div>
        ),
        (
            <div>
                오한솔
            </div>
        ),
        (
            <div>
                임호정
            </div>
        ),
        (
            <div>
                박근아
            </div>
        ),
        (
            <div>
                안용수
            </div>
        ),
        (
            <div>
                김민욱
            </div>
        ),
        (
            <div>
                오지연
            </div>
        ),
        (
            <div>
                천소원
            </div>
        ),
        (
            <div>
                홍수지
            </div>
        ),
        (
            <div>
                신용호
            </div>
        ),
        (
            <div>
                유혜은
            </div>
        ),
        (
            <div>
                이노진
            </div>
        ),
        (
            <div>
                정지영
            </div>
        ),
        (
            <div>
                강현화
            </div>
        ),
        (
            <div>
                상여진
            </div>
        ),
        (
            <div>
                김수현
            </div>
        ),
        (
            <div>
                이지현
            </div>
        ),
        (
            <div>
                김태연
            </div>
        ),
        (
            <div>
                조혜영
            </div>
        ),
        (
            <div>
                신순옥
            </div>
        ),
        (
            <div>
                장한나
            </div>
        )
    ]
    const mDm = [
        (
            <div>
                재활치료센터
            </div>
        ),
        (
            <div>
                재활치료센터
            </div>
        ),
        (
            <div>
                원무팀
            </div>
        ),
        (
            <div>
                외래팀(외래2파트)
            </div>
        ),
        (
            <div>
                간호행정팀
            </div>
        ),
        (
            <div>
                집중치료간호팀(신장센터)
            </div>
        ),
        (
            <div>
                총무팀
            </div>
        ),
        (
            <div>
                수술간호팀(중앙수술실)
            </div>
        ),
        (
            <div>
                구매관리팀
            </div>
        ),
        (
            <div>
                병동간호1팀(53병동)
            </div>
        ),
        (
            <div>
                원무팀
            </div>
        ),
        (
            <div>
                병동간호1팀(62병동)
            </div>
        ),
        (
            <div>
                의용공학팀
            </div>
        ),
        (
            <div>
                재활치료센터
            </div>
        ),
        (
            <div>
                시설팀
            </div>
        ),
        (
            <div>
                외래팀(암센터)
            </div>
        ),
        (
            <div>
                병동간호3팀(132병동)
            </div>
        ),
        (
            <div>
                연구분석팀
            </div>
        ),
        (
            <div>
                병동간호3팀(101병동)
            </div>
        ),
        (
            <div>
                집중치료간호팀 (심장혈관계 집중치료실)
            </div>
        ),
        (
            <div>
                수술간호팀(중앙수술실)
            </div>
        ),
        (
            <div>
                원무팀
            </div>
        ),
        (
            <div>
                병동간호2팀(82병동)
            </div>
        ),
        (
            <div>
                약제팀
            </div>
        )
    ]


    const bDate = [
        (
            <div>
                9.22
            </div>
        ),
        (
            <div>
                10.14
            </div>
        ),
        (
            <div>
                10.14
            </div>
        ),
        (
            <div>
                10.26
            </div>
        ),
        (
            <div>
                11.11
            </div>
        ),
        (
            <div>
                11.25
            </div>
        ),
        (
            <div>
                12.15
            </div>
        ),
        (
            <div>
                12.18
            </div>
        )
    ]
    const bName = [
        (
            <div>
                조경민
            </div>
        ),
        (
            <div>
                이홍우
            </div>
        ),
        (
            <div>
                이효정
            </div>
        ),
        (
            <div>
                심다애
            </div>
        ),
        (
            <div>
                정다희
            </div>
        ),
        (
            <div>
                장지영
            </div>
        ),
        (
            <div>
                황혜성
            </div>
        ),
        (
            <div>
                전현숙
            </div>
        )
    ]
    const bDm = [
        (
            <div>
                의무기록팀
            </div>
        ),
        (
            <div>
                의료기획팀
            </div>
        ),
        (
            <div>
                병동간호1팀(62병동)
            </div>
        ),
        (
            <div>
                원무팀
            </div>
        ),
        (
            <div>
                보험심사팀
            </div>
        ),
        (
            <div>
                외과(외상외과)
            </div>
        ),
        (
            <div>
                수술간호팀(중앙수술실)
            </div>
        ),
        (
            <div>
                수술간호팀(중앙수술실)
            </div>
        )
    ]

    const oAward = [
        (
            <div>
                최우수상
            </div>
        ),
        (
            <div>
                최우수부서
            </div>
        ),
        (
            <div>
                우수상
            </div>
        ),
        (
            <div>

            </div>
        ),
        (
            <div>

            </div>
        ),
        (
            <div>
                우수부서(우수상)
            </div>
        ),
        (
            <div>
                장려상
            </div>
        ),
        (
            <div>

            </div>
        ),
        (
            <div>

            </div>
        ),
        (
            <div>

            </div>
        ),
        (
            <div>

            </div>
        ),
        (
            <div>
                우수부서(장려상)
            </div>
        ),
        (
            <div>

            </div>
        ),
        (
            <div>

            </div>
        )
    ]
    const oDm = [
        (
            <div>
                호흡기내과
            </div>
        ),
        (
            <div>
                안심진료소
            </div>
        ),
        (
            <div>
                가정의학과
            </div>
        ),
        (
            <div>
                감염내과
            </div>
        ),
        (
            <div>
                국제진료센터
            </div>
        ),
        (
            <div>

            </div>
        ),
        (
            <div>
                감염내과
            </div>
        ),
        (
            <div>
                정신건강의학과
            </div>
        ),
        (
            <div>
                산부인과
            </div>
        ),
        (
            <div>
                병동간호2팀
            </div>
        ),
        (
            <div>
                병동간호3팀
            </div>
        ),
        (
            <div>
                선별진료소
            </div>
        ),
        (
            <div>
                현관출입통제
            </div>
        ),
        (
            <div>

            </div>
        )
    ]
    const oName = [
        (
            <div>
                한창훈
            </div>
        ),
        (
            <div>
                외래팀
            </div>
        ),
        (
            <div>
                최준호
            </div>
        ),
        (
            <div>
                최흔
            </div>
        ),
        (
            <div>
                이지수
            </div>
        ),
        (
            <div>
                감염관리실
            </div>
        ),
        (
            <div>
                박윤선
            </div>
        ),
        (
            <div>
                이정석
            </div>
        ),
        (
            <div>
                김의혁
            </div>
        ),
        (
            <div>
                김치향
            </div>
        ),
        (
            <div>
                이성운
            </div>
        ),
        (
            <div>
                응급의료센터
            </div>
        ),
        (
            <div>
                총무팀
            </div>
        ),
        (
            <div>
                시설팀
            </div>
        )
    ]


    const kName = [
        (
            <div>
                김의혁
            </div>
        ),
        (
            <div>
                이효정
            </div>
        ),
        (
            <div>
                박혜강
            </div>
        ),
        (
            <div>
                김보경
            </div>
        ),
        (
            <div>
                정은주
            </div>
        )
    ]
    const kDm = [
        (
            <div>
                산부인과
            </div>
        ),
        (
            <div>
                병동간호1팀
            </div>
        ),
        (
            <div>
                재활치료센터
            </div>
        ),
        (
            <div>
                원무팀
            </div>
        ),
        (
            <div>
                병동간호2팀
            </div>
        )
    ]

    const letterH = [
        (
            <span style={{fontSize: "30px", color: "darkblue"}}>
                새 근무복을 소개합니다
            </span>
        ),
    ]

    const letterB = [
        (
            <div style={{fontSize: "18px"}}>
                일산병원 가족의 근무복이 확 달라졌습니다. 직군별로 메인 컬러를 다르게 제작해 차별화를 두었고 새로운 hiP를 디자인 포인트로 적용, 일산병원의 아이덴티티를 살렸습니다. 또 업무에 필요한 소지품을 수납 할 수 있도록 하는 등 기능성과 활동성도 업그레이드 해 업무의 효율성을 높일 수 있도록 고려했습니다. 2021년, 새로운 근무복과 함께 더욱 활기찬 일산병원을 만들겠습니다.
            </div>
        )
    ]


    const items = [
        {
            id: "1",
            src: around1,
            head: head[0],
            title: title[0],
            subtitle: subtitle[0],
            caption: [
                {
                    src: around2,
                    ctitle: ctitle1[0],
                    ctext: ctext1[0]
                },
                {
                    src: around3,
                    ctitle: ctitle1[1],
                    ctext: ctext1[1]
                },
                {
                    src: around4,
                    ctitle: ctitle1[2],
                    ctext: ctext1[2]
                }
            ]
        },
        {
            id: "2",
            src: food,
            head: head[1],
            title: title[1],
            subtitle: subtitle[1],
            caption: [
                {
                    ctitle: ctitle2[0],
                    ctext: ctext2[0]
                },
                {
                    ctitle: ctitle2[1],
                    ctext: ctext2[1]
                }
            ],
        },
        {
            id: "3",
            src: trend,
            head: head[2],
            title: title[2],
            subtitle: subtitle[2],
            caption: [
                {
                    ctitle: ctitle3[0],
                    ctext: ctext3[0]
                },
                {
                    src: trend2,
                    ctitle: ctitle3[1],
                    ctext: ctext3[1]
                },
                {
                    src: "",
                    ctitle: ctitle3[2],
                    ctext: ctext3[2]
                },
                {
                    src: "",
                    ctitle: ctitle3[3],
                    ctext: ctext3[3]
                }
            ],
        },
        {
            id: "4",
            src: issue,
            head: head[3],
            title: title[3],
            subtitle: subtitle[3],
            caption: [
                {
                    src: issue2,
                    ctitle: ctitle4[0],
                    ctext: ctext4[0]
                },
                {
                    src: issue3,
                    ctitle: ctitle4[1],
                    ctext: ctext4[1]
                },
                {
                    src: issue4,
                    ctitle: ctitle4[2],
                    ctext: ctext4[2]
                }
            ],
        },



        {
            id: "5",
            src: news1,
            head: head[4],
            title: title[4],
            subtitle: subtitle[4],
            caption: [
                {
                    src: news2,
                    ctitle: ctitle5[0],
                    ctext: ctext5[0]
                },
                {
                    src: news3,
                    ctitle: ctitle5[1],
                    ctext: ctext5[1]
                },
                {
                    src: news4,
                    ctitle: ctitle5[2],
                    ctext: ctext5[2]
                },
                {
                    src: news5,
                    ctitle: ctitle5[3],
                    ctext: ctext5[3]
                },
                {
                    src: news6,
                    ctitle: ctitle5[4],
                    ctext: ctext5[4]
                },
                {
                    src: news7,
                    ctitle: ctitle5[5],
                    ctext: ctext5[5]
                },
                {
                    src: news8,
                    ctitle: ctitle5[6],
                    ctext: ctext5[6]
                },
                {
                    src: news9,
                    ctitle: ctitle5[7],
                    ctext: ctext5[7]
                },
                {
                    src: news10,
                    ctitle: ctitle5[8],
                    ctext: ctext5[8]
                },
                {
                    src: news11,
                    ctitle: ctitle5[9],
                    ctext: ctext5[9]
                },
                {
                    src: news12,
                    ctitle: ctitle5[10],
                    ctext: ctext5[10]
                }
            ],
        },
        {
            id: "6",
            head: head[5],
            airing: [
                {
                    src: today1,
                    ctitle: ctitle6[0],
                    ctext: ctext6[0]
                },
                {
                    src: today2,
                    ctitle: ctitle6[1],
                    ctext: ctext6[1]
                },
                {
                    src: today3,
                    ctitle: ctitle6[2],
                    ctext: ctext6[2]
                },
                {
                    src: today4,
                    ctitle: ctitle6[3],
                    ctext: ctext6[3]
                },
                {
                    src: today5,
                    ctitle: ctitle6[4],
                    ctext: ctext6[4]
                },
                {
                    src: today6,
                    ctitle: ctitle6[5],
                    ctext: ctext6[5]
                }
            ],
            article: [
                {

                    date: date[0],
                    write: write[0]
                },
                {

                    date: date[1],
                    write: write[1]
                },
                {

                    date: date[2],
                    write: write[2]
                },
                {

                    date: date[3],
                    write: write[3]
                },
                {

                    date: date[4],
                    write: write[4]
                },
                {

                    date: date[5],
                    write: write[5]
                },
                {

                    date: date[6],
                    write: write[6]
                },
                {

                    date: date[7],
                    write: write[7]
                },
                {

                    date: date[8],
                    write: write[8]
                },
                {

                    date: date[9],
                    write: write[9]
                },
                {

                    date: date[10],
                    write: write[10]
                },
                {

                    date: date[11],
                    write: write[11]
                },
                {

                    date: date[12],
                    write: write[12]
                },
                {

                    date: date[13],
                    write: write[13]
                },
                {

                    date: date[14],
                    write: write[14]
                },
                {

                    date: date[15],
                    write: write[15]
                },
            ],
            celebration: [
                {
                    winner: winner[0],
                    cName: cName[0],
                    conference: conference[0],
                    cDate: cDate[0],
                    content: content[0]
                },
                {
                    winner: winner[1],
                    cName: cName[1],
                    conference: conference[1],
                    cDate: cDate[1],
                    content: content[1]
                },
                {
                    winner: winner[2],
                    cName: cName[2],
                    conference: conference[2],
                    cDate: cDate[2],
                    content: content[2]
                },
                {
                    winner: winner[3],
                    cName: cName[3],
                    conference: conference[3],
                    cDate: cDate[3],
                    content: content[3]
                },
                {
                    winner: winner[4],
                    cName: cName[4],
                    conference: conference[4],
                    cDate: cDate[4],
                    content: content[4]
                },
                {
                    winner: winner[5],
                    cName: cName[5],
                    conference: conference[5],
                    cDate: cDate[5],
                    content: content[5]
                },
                {
                    winner: winner[6],
                    cName: cName[6],
                    conference: conference[6],
                    cDate: cDate[6],
                    content: content[6]
                },
                {
                    winner: winner[7],
                    cName: cName[7],
                    conference: conference[7],
                    cDate: cDate[7],
                    content: content[7]
                },
                {
                    winner: winner[8],
                    cName: cName[8],
                    conference: conference[8],
                    cDate: cDate[8],
                    content: content[8]
                },
                {
                    winner: winner[9],
                    cName: cName[9],
                    conference: conference[9],
                    cDate: cDate[9],
                    content: content[9]
                },
                {
                    winner: winner[10],
                    cName: cName[10],
                    conference: conference[10],
                    cDate: cDate[10],
                    content: content[10]
                },
                {
                    winner: winner[11],
                    cName: cName[11],
                    conference: conference[11],
                    cDate: cDate[11],
                    content: content[11]
                }
            ],
            merry: [
                {
                    mDate: mDate[0],
                    mName: mName[0],
                    mDm: mDm[0]
                },
                {
                    mDate: mDate[1],
                    mName: mName[1],
                    mDm: mDm[1]
                },
                {
                    mDate: mDate[2],
                    mName: mName[2],
                    mDm: mDm[2]
                },
                {
                    mDate: mDate[3],
                    mName: mName[3],
                    mDm: mDm[3]
                },
                {
                    mDate: mDate[4],
                    mName: mName[4],
                    mDm: mDm[4]
                },
                {
                    mDate: mDate[5],
                    mName: mName[5],
                    mDm: mDm[5]
                },
                {
                    mDate: mDate[6],
                    mName: mName[6],
                    mDm: mDm[6]
                },
                {
                    mDate: mDate[7],
                    mName: mName[7],
                    mDm: mDm[7]
                },
                {
                    mDate: mDate[8],
                    mName: mName[8],
                    mDm: mDm[8]
                },
                {
                    mDate: mDate[9],
                    mName: mName[9],
                    mDm: mDm[9]
                },
                {
                    mDate: mDate[10],
                    mName: mName[10],
                    mDm: mDm[10]
                },
                {
                    mDate: mDate[11],
                    mName: mName[11],
                    mDm: mDm[11]
                },
                {
                    mDate: mDate[12],
                    mName: mName[12],
                    mDm: mDm[12]
                },
                {
                    mDate: mDate[13],
                    mName: mName[13],
                    mDm: mDm[13]
                },
                {
                    mDate: mDate[14],
                    mName: mName[14],
                    mDm: mDm[14]
                },
                {
                    mDate: mDate[15],
                    mName: mName[15],
                    mDm: mDm[15]
                },
                {
                    mDate: mDate[16],
                    mName: mName[16],
                    mDm: mDm[16]
                },
                {
                    mDate: mDate[17],
                    mName: mName[17],
                    mDm: mDm[17]
                },
                {
                    mDate: mDate[18],
                    mName: mName[18],
                    mDm: mDm[18]
                },
                {
                    mDate: mDate[19],
                    mName: mName[19],
                    mDm: mDm[19]
                },
                {
                    mDate: mDate[20],
                    mName: mName[20],
                    mDm: mDm[20]
                },
                {
                    mDate: mDate[21],
                    mName: mName[21],
                    mDm: mDm[21]
                },
                {
                    mDate: mDate[22],
                    mName: mName[22],
                    mDm: mDm[22]
                },
                {
                    mDate: mDate[23],
                    mName: mName[23],
                    mDm: mDm[23]
                }
            ],
            childbirth: [
                {
                    bDate: bDate[0],
                    bName: bName[0],
                    bDm: bDm[0]
                },
                {
                    bDate: bDate[1],
                    bName: bName[1],
                    bDm: bDm[1]
                },
                {
                    bDate: bDate[2],
                    bName: bName[2],
                    bDm: bDm[2]
                },
                {
                    bDate: bDate[3],
                    bName: bName[3],
                    bDm: bDm[3]
                },
                {
                    bDate: bDate[4],
                    bName: bName[4],
                    bDm: bDm[4]
                },
                {
                    bDate: bDate[5],
                    bName: bName[5],
                    bDm: bDm[5]
                },
                {
                    bDate: bDate[6],
                    bName: bName[6],
                    bDm: bDm[6]
                },
                {
                    bDate: bDate[7],
                    bName: bName[7],
                    bDm: bDm[7]
                },
            ],
            outstanding: [
                {
                    oAward: oAward[0],
                    oDm: oDm[0],
                    oName: oName[0]
                },
                {
                    oAward: oAward[1],
                    oDm: oDm[1],
                    oName: oName[1]
                },
                {
                    oAward: oAward[2],
                    oDm: oDm[2],
                    oName: oName[2]
                },
                {
                    oAward: oAward[3],
                    oDm: oDm[3],
                    oName: oName[3]
                },
                {
                    oAward: oAward[4],
                    oDm: oDm[4],
                    oName: oName[4]
                },
                {
                    oAward: oAward[5],
                    oDm: oDm[5],
                    oName: oName[5]
                },
                {
                    oAward: oAward[6],
                    oDm: oDm[6],
                    oName: oName[6]
                },
                {
                    oAward: oAward[7],
                    oDm: oDm[7],
                    oName: oName[7]
                },
                {
                    oAward: oAward[8],
                    oDm: oDm[8],
                    oName: oName[8]
                },
                {
                    oAward: oAward[9],
                    oDm: oDm[9],
                    oName: oName[9]
                },
                {
                    oAward: oAward[10],
                    oDm: oDm[10],
                    oName: oName[10]
                },
                {
                    oAward: oAward[11],
                    oDm: oDm[11],
                    oName: oName[11]
                },
                {
                    oAward: oAward[12],
                    oDm: oDm[12],
                    oName: oName[12]
                },
                {
                    oAward: oAward[13],
                    oDm: oDm[13],
                    oName: oName[13]
                }
            ],
            kind : [
                {
                    kName: kName[0],
                    kDm: kDm[0]
                },
                {
                    kName: kName[1],
                    kDm: kDm[1]
                },
                {
                    kName: kName[2],
                    kDm: kDm[2]
                },
                {
                    kName: kName[3],
                    kDm: kDm[3]
                },
                {
                    kName: kName[4],
                    kDm: kDm[4]
                }
            ]
        },
        {
            id: "7",
            src: letter,
            head: head[6],
            titleL: title[6],
            subtitleL: subtitle[6],
            letterH : letterH,
            letterB : letterB
        },
        {
            id: "8",
            src: "",
            head: head[7],
            title: title[7],
            subtitle: subtitle[7],
            caption: [
                {
                    src: treatment1,
                    ctitle: "",
                    ctext: ""
                },
                {
                    src: treatment2,
                    ctitle: "",
                    ctext: ""
                }
            ],
        },
    ]




    const item = items.find((p) => p.id === match.params.id)

    console.log(item)

    return (
        <Fragment>

            <HeaderP/>

            <Fragment>
                <section>
                    <Container>
                        <Card className="color-of-life">
                            <CardBody className="color-of-life__header">
                                <div>
                                    <CardTitle>
                                        SECTION Ⅲ
                                    </CardTitle>
                                    <CardTitle>
                                        {item.head}
                                    </CardTitle>
                                </div>
                            </CardBody>

                            {item.src ?
                                <CardImg top className="img-fluid mb-3" src={item.src} alt="/" /> : ""
                            }

                            {item.title && item.subtitle ?
                                <CardBody className="color-of-life__body">
                                    <CardTitle className="color-of-life__body__title mb-4">
                                        {item.title}
                                    </CardTitle>
                                    <CardSubtitle className="color-of-life__body__subtitle mb-5">
                                        {item.subtitle}
                                    </CardSubtitle>
                                </CardBody>

                                : ""}

                            {item.caption ? item.caption.map((cap) => (
                                <CardBody className="color-of-life__body">
                                    <div style={{textAlign: "center"}}>
                                        {cap.src ?
                                            <CardImg className="img-fluid fluid mb-5" src={cap.src} alt="/"/> : ""
                                        }

                                    </div>
                                    <CardSubtitle className="color-of-life__body__subtitle mb-3">
                                        {cap.ctitle}
                                    </CardSubtitle>
                                    <CardText className="color-of-life__body__text mb-5">
                                        {cap.ctext}
                                    </CardText>
                                </CardBody>
                            )): ""}


                            <IhToday item={item}/>

                            <IhLetter item={item}/>


                        </Card>
                    </Container>
                </section>
            </Fragment>

            <Footer/>

        </Fragment>
    );
};

export default SectionThree;
