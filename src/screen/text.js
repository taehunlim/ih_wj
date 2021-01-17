import React, {Fragment} from 'react';
import {
    Container,
    Card,
    CardBody,
    CardText,
    CardImg,
    CardTitle,
    CardSubtitle,
    Row,
    Col
} from 'reactstrap';

import HeaderP from "../components/header/HeaderP";
import Footer from "../components/footer/Footer";

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


const SectionThree = ({match}) => {

    const head = [
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
        )
    ]

    const title = [
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
        )
    ]

    const subtitle = [
        (
            <div>
                캐나다 치과대학 순위 1위인 브리티시컬럼비아대학교에서의 1년간의 연수는 새로운 연구에 몰두할 수 있는 소중한 경험이었습니다.
                <br/>디지털 덴티스트리 분야에서 빠르게 발전하고 있는 대학에서 3차원 치아 이동 시뮬레이션 및 안면골격과 연조직분석에 대한 연구를 할 수 있어 많은 도움이 되었습니다.
                <br/>
                <br/>
                글·사진 <span style={{fontWeight: "normal"}}> 치과교정과 김정훈 교수 </span>
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
            <div>
                다시 확산하는 코로나19가 끊임없이 우리의 안전을 위협합니다. 국민건강보험 일산병원은 코로나19 확진자 전담 치료병동을 운영하며 코로나19로부터 안전한 세상을 열어갑니다.
                <br/>코로나19 거점전담병원으로서 국가적 재난 상황에 적극 대응합니다. 공공병원이자 보험자병원인 일산병원이 코로나19 종식의 그 날까지 함께합니다.
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

    const ctitle = [
        (
            <div>
                10.01. YTN뉴스
                <br/>
                뉴스연휴에 갑자기 열 나는우리 아이, 어떻게 해야 하나?
            </div>
        ),
        (
            <div>
                11.05. KBS아침마당
                <br/>
                노인건강-건강검진
            </div>
        ),
        (
            <div>
                11.18. JTBC뉴스
                <br/>
                숨 막힐까 조마... 산후조리원 곳곳 ‘신생아 셀프 수유’
            </div>
        ),
        (
            <div>
                12.14. YTN뉴스 [제보는Y]
                <br/>
                신생아 입에 젖병이... 생명 위협하는 ‘셀프수유’ 덜미
            </div>
        ),
        (
            <div>
                12.19. YTN뉴스
                <br/>
                “드디어 병원에”... 자택 대기 환자 일부 병원 배정
            </div>
        ),
        (
            <div>
                12.29. KBS굿모닝대한민국
                <br/>국가건강검진
            </div>
        )
    ]


    const ctext = [

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

            col: [
                {
                    src: trend2,
                    ctitle: ctitle[0]
                },
                {
                    src: trend2,
                    ctitle: ctitle[1]
                },
                {
                    src: trend2,
                    ctitle: "3",
                    ctext: "33"
                }
            ]
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
    ]




    const item = items.find((p) => p.id === match.params.id)

    console.log(item)

    return (
        <Fragment>

            <HeaderP/>

            <Fragment>
                <section>
                    <Container style={{padding: "0px 100px", width: "80%"}}>
                        <div>
                            <h5 className="disB tC013e94 fs22 lh30 fwB bCbbe2e8 txtAc pt5 pb5 positionR mt30"><img
                                src="../images/contents/sub3_02_icon2.jpg" alt="" className="news_icon"/>신문</h5>
                            <ul className="newpaper">
                                <li className="newpaperItem">
                                    <div className="newpaperItemLayer">
                                        <table className="nlTable">
                                            <tbody>
                                            <tr>
                                                <td className="w80">
                                                    <span
                                                        className="tC333333 fs14 lh20 fwB">2020.<br/>6. 22.</span><br/>
                                                    <span className="tC333333 fs14 lh20 fwB">뉴시스</span>
                                                </td>
                                                <td>
                                                    <span className="tC271e1c fs16 lh22 fwB">땀 악취증 환자 여름보다 겨울이 많다…30대 이하 74%</span><br/>
                                                    <span className="tC666666 fs16 lh20">피부과 김지언 교수</span>
                                                </td>
                                                <td className="w50"><a
                                                    href="https://newsis.com/view/?id=NISX20200622_0001067816&cID=10201&pID=10200"
                                                    target="_blank" title="새창팝업" className="listLink2">기사<br/>보기</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span
                                                        className="tC333333 fs14 lh20 fwB">2020.<br/>6. 24.</span><br/>
                                                    <span className="tC333333 fs14 lh20 fwB">뉴스1</span>
                                                </td>
                                                <td>
                                                    <span
                                                        className="tC271e1c fs16 lh22 fwB">“물 밖 사람 조심…음식 나누기도 참으세요”</span><br/>
                                                    <span className="tC666666 fs16 lh20">호흡기내과 한창훈 교수</span>
                                                </td>
                                                <td><a href="https://www.news1.kr/articles/?3973994" target="_blank"
                                                       title="새창팝업" className="listLink2">기사<br/>보기</a></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span
                                                        className="tC333333 fs14 lh20 fwB">2020.<br/>6. 29.</span><br/>
                                                    <span className="tC333333 fs14 lh20 fwB">중앙일보</span>
                                                </td>
                                                <td>
                                                    <span className="tC271e1c fs16 lh22 fwB">눈 화장 즐기고 자주 비벼 생긴 염증, 온찜질 후 ‘눈꺼풀 세수’로 제거</span><br/>
                                                    <span className="tC666666 fs16 lh20">안과 박종운 교수</span>
                                                </td>
                                                <td><a href="https://news.joins.com/article/23812321" target="_blank"
                                                       title="새창팝업" className="listLink2">기사<br/>보기</a></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span
                                                        className="tC333333 fs14 lh20 fwB">2020.<br/>6. 29.</span><br/>
                                                    <span className="tC333333 fs14 lh20 fwB">국민일보</span>
                                                </td>
                                                <td>
                                                    <span className="tC271e1c fs16 lh22 fwB">20대 여성 ‘외상 후 스트레스 장애’ 환자 5년 새 2배 이상↑</span><br/>
                                                    <span className="tC666666 fs16 lh22">정신건강의학과 박재섭 교수</span>
                                                </td>
                                                <td><a href="http://news.kmib.co.kr/article/view.asp?arcid=0014744187"
                                                       target="_blank" title="새창팝업" className="listLink2">기사<br/>보기</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="tC333333 fs14 lh20 fwB">2020.<br/>7. 2.</span><br/>
                                                    <span className="tC333333 fs14 lh20 fwB">아시아투데이</span>
                                                </td>
                                                <td>
                                                    <span className="tC271e1c fs16 lh22 fwB">일산병원 심뇌혈관질환센터, 다학제 협진으로 심뇌혈관 치료 최적화</span><br/>
                                                </td>
                                                <td><a href="https://www.asiatoday.co.kr/view.php?key=20200702010001008"
                                                       target="_blank" title="새창팝업" className="listLink2">기사<br/>보기</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="tC333333 fs14 lh20 fwB">2020.<br/>7. 4.</span><br/>
                                                    <span className="tC333333 fs14 lh20 fwB">이데일리</span>
                                                </td>
                                                <td>
                                                    <span className="tC271e1c fs16 lh22 fwB">건강보험 일산병원, 세계속 K-Medical 선도병원으로 도약…개원 20년 맞아</span><br/>
                                                </td>
                                                <td><a
                                                    href="https://www.edaily.co.kr/news/read?newsId=01689206625831240&mediaCodeNo=257"
                                                    target="_blank" title="새창팝업" className="listLink2">기사<br/>보기</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="tC333333 fs14 lh20 fwB">2020.<br/>7. 6.</span><br/>
                                                    <span className="tC333333 fs14 lh20 fwB">약업신문</span>
                                                </td>
                                                <td>
                                                    <span className="tC271e1c fs16 lh22 fwB">빈혈 관련 급여 확대…“진단·치료 중요성 인식 개선해야”요</span><br/>
                                                    <span className="tC666666 fs16 lh20">종양혈액내과 장명희 교수</span>
                                                </td>
                                                <td><a href="http://www.yakup.com/news/index.html?mode=view&nid=246357"
                                                       target="_blank" title="새창팝업" className="listLink2">기사<br/>보기</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="tC333333 fs14 lh20 fwB">2020.<br/>7. 13.</span><br/>
                                                    <span className="tC333333 fs14 lh20 fwB">디멘시아뉴스</span>
                                                </td>
                                                <td>
                                                    <span className="tC271e1c fs16 lh22 fwB">“치매예방 특정성분 아닌 근거와 노력 통해 실현해야”</span><br/>
                                                    <span className="tC666666 fs16 lh20">신경과 이준홍 교수</span>
                                                </td>
                                                <td><a
                                                    href="http://www.dementianews.co.kr/news/articleView.html?idxno=2886"
                                                    target="_blank" title="새창팝업" className="listLink2">기사<br/>보기</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="tC333333 fs14 lh20 fwB">2020.<br/>7. 14.</span><br/>
                                                    <span className="tC333333 fs14 lh20 fwB">메디파나뉴스</span>
                                                </td>
                                                <td>
                                                    <span className="tC271e1c fs16 lh22 fwB">현대인의 질병 ‘치매’…“약 의존보다는 평소 관리가 중요”</span><br/>
                                                    <span className="tC666666 fs16 lh20">신경과 이준홍 교수</span>
                                                </td>
                                                <td><a
                                                    href="http://www.medipana.com/news/news_viewer.asp?NewsNum=259875"
                                                    target="_blank" title="새창팝업" className="listLink2">기사<br/>보기</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="tC333333 fs14 lh20 fwB">2020.<br/>7. 15.</span><br/>
                                                    <span className="tC333333 fs14 lh20 fwB">뉴스1</span>
                                                </td>
                                                <td>
                                                    <span className="tC271e1c fs16 lh22 fwB">여름철 장염, 고열·구토·설사에 탈수까지…청결하지 못한 음식 피해야</span><br/>
                                                    <span className="tC666666 fs16 lh20">소화기내과 조용석 교수</span>
                                                </td>
                                                <td><a href="https://www.news1.kr/articles/?3995496" target="_blank"
                                                       title="새창팝업" className="listLink2">기사<br/>보기</a></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="tC333333 fs14 lh20 fwB">2020.<br/>7. 24.</span><br/>
                                                    <span className="tC333333 fs14 lh20 fwB">쿠키뉴스</span>
                                                </td>
                                                <td>
                                                    <span
                                                        className="tC271e1c fs16 lh22 fwB">발생률 1위 ‘위암’…40~50대부터 급증</span><br/>
                                                    <span className="tC666666 fs16 lh20">소화기내과 전한호 교수</span>
                                                </td>
                                                <td><a href="http://www.kukinews.com/newsView/kuk202007240353"
                                                       target="_blank" title="새창팝업" className="listLink2">기사<br/>보기</a>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </li>
                                <li className="newpaperItem">
                                    <div className="newpaperItemLayer">
                                        <table className="nlTable">
                                            <tbody>
                                            <tr>
                                                <td className="w80">
                                                    <span
                                                        className="tC333333 fs14 lh20 fwB">2020.<br/>7. 27.</span><br/>
                                                    <span className="tC333333 fs14 lh20 fwB">세계일보</span>
                                                </td>
                                                <td>
                                                    <span
                                                        className="tC271e1c fs16 lh22 fwB">[기고] 저는 ‘코로나19’입니다</span><br/>
                                                    <span className="tC666666 fs16 lh20">감염내과 최흔교수</span>
                                                </td>
                                                <td className="w50"><a
                                                    href="https://www.segye.com/newsView/20200727517597" target="_blank"
                                                    title="새창팝업" className="listLink2">기사<br/>보기</a></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span
                                                        className="tC333333 fs14 lh20 fwB">2020.<br/>7. 28.</span><br/>
                                                    <span className="tC333333 fs14 lh20 fwB">헬스데이뉴스</span>
                                                </td>
                                                <td>
                                                    <span className="tC271e1c fs16 lh22 fwB">성조슥중과 성장호르몬 주사 치료에 대해 상세하게 알려드립니다.</span><br/>
                                                    <span className="tC666666 fs16 lh20">소하청소년과 정인혁 교수</span>
                                                </td>
                                                <td><a
                                                    href="http://www.healthdaynews.co.kr/news/articleView.html?idxno=10434"
                                                    target="_blank" title="새창팝업" className="listLink2">기사<br/>보기</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span
                                                        className="tC333333 fs14 lh20 fwB">2020.<br/>7. 30.</span><br/>
                                                    <span className="tC333333 fs14 lh20 fwB">국민일보</span>
                                                </td>
                                                <td>
                                                    <span className="tC271e1c fs16 lh22 fwB">코로나19 이후 바뀐 식문화</span><br/>
                                                    <span className="tC666666 fs16 lh20">감염내과 최흔 교수</span>
                                                </td>
                                                <td><a href="http://news.kmib.co.kr/article/view.asp?arcid=0014860782"
                                                       title="새창팝업" className="listLink2">기사<br/>보기</a></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span
                                                        className="tC333333 fs14 lh20 fwB">2020.<br/>8. 18.</span><br/>
                                                    <span className="tC333333 fs14 lh20 fwB">스포츠조선</span>
                                                </td>
                                                <td>
                                                    <span className="tC271e1c fs16 lh22 fwB">“수면무호흡, 방치땐 동맥경화·심정지 급사 등 발생 우려”</span><br/>
                                                    <span className="tC666666 fs16 lh20">이비인후과 장정현 교수</span>
                                                </td>
                                                <td><a
                                                    href="https://sports.chosun.com/news/news.htm?id=202008190100151690010067&ServiceDate=20200818"
                                                    target="_blank" title="새창팝업" className="listLink2">기사<br/>보기</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span
                                                        className="tC333333 fs14 lh20 fwB">2020.<br/>8. 20.</span><br/>
                                                    <span className="tC333333 fs14 lh20 fwB">서울경제</span>
                                                </td>
                                                <td>
                                                    <span className="tC271e1c fs16 lh22 fwB">무더위·코로나19···‘내 몸이 방패’ 면역력을 올려라을</span><br/>
                                                    <span className="tC666666 fs16 lh20">마취통증의학과 강연승 교수</span>
                                                </td>
                                                <td><a href="https://www.sedaily.com/NewsView/1Z6NK750EX"
                                                       target="_blank" title="새창팝업" className="listLink2">기사<br/>보기</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span
                                                        className="tC333333 fs14 lh20 fwB">2020.<br/>8. 20.</span><br/>
                                                    <span className="tC333333 fs14 lh20 fwB">쿠키뉴스</span>
                                                </td>
                                                <td>
                                                    <span
                                                        className="tC271e1c fs16 lh22 fwB">술에 빠진 청년들…‘오늘도 달리다’ 중독된다</span><br/>
                                                    <span className="tC666666 fs16 lh20">정신건강의학과 이덕종 교수</span>
                                                </td>
                                                <td><a href="http://www.kukinews.com/newsView/kuk202008190290"
                                                       target="_blank" title="새창팝업" className="listLink2">기사<br/>보기</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span
                                                        className="tC333333 fs14 lh20 fwB">2020.<br/>8. 21.</span><br/>
                                                    <span className="tC333333 fs14 lh20 fwB">보건뉴스</span>
                                                </td>
                                                <td>
                                                    <span className="tC271e1c fs16 lh22 fwB">귀·코 연결하는 이관 부위 세균·바이러스 감염 주원인</span><br/>
                                                    <span className="tC666666 fs16 lh20">이비인후과 정준희 교수</span>
                                                </td>
                                                <td><a href="http://www.bokuennews.com/news/article.html?no=193780"
                                                       target="_blank" title="새창팝업" className="listLink2">기사<br/>보기</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span
                                                        className="tC333333 fs14 lh20 fwB">2020.<br/>8. 26.</span><br/>
                                                    <span className="tC333333 fs14 lh20 fwB">세계일보</span>
                                                </td>
                                                <td>
                                                    <span className="tC271e1c fs16 lh22 fwB">“담배연기 내뿜을 때 코로나 바이러스 담은 비말도 함께 나올 수 있어”</span><br/>
                                                    <span className="tC666666 fs16 lh20">호흡기내과 한창훈 교수</span>
                                                </td>
                                                <td><a href="https://www.segye.com/newsView/20200826515446"
                                                       target="_blank" title="새창팝업" className="listLink2">기사<br/>보기</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span
                                                        className="tC333333 fs14 lh20 fwB">2020.<br/>8. 27.</span><br/>
                                                    <span className="tC333333 fs14 lh20 fwB">경향신문</span>
                                                </td>
                                                <td>
                                                    <span
                                                        className="tC271e1c fs16 lh22 fwB">검버섯 위 컨실러, 이제 그만~</span><br/>
                                                    <span className="tC666666 fs16 lh20">피부과 김지언 교수</span>
                                                </td>
                                                <td><a
                                                    href="http://news.khan.co.kr/kh_news/khan_art_view.html?artid=202008270855002"
                                                    target="_blank" title="새창팝업" className="listLink2">기사<br/>보기</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span
                                                        className="tC333333 fs14 lh20 fwB">2020.<br/>9. 16.</span><br/>
                                                    <span className="tC333333 fs14 lh20 fwB">스포츠조선</span>
                                                </td>
                                                <td>
                                                    <span className="tC271e1c fs16 lh22 fwB">앉았다 일어설때 ‘악~’, 퇴행성디스크의 원인과 치료는?</span><br/>
                                                    <span className="tC666666 fs16 lh20">정형외과 권지원 교수</span>
                                                </td>
                                                <td><a
                                                    href="https://sports.chosun.com/news/news.htm?id=202009170100147460009484&ServiceDate=20200916"
                                                    target="_blank" title="새창팝업" className="listLink2">기사<br/>보기</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span
                                                        className="tC333333 fs14 lh20 fwB">2020.<br/>9. 18.</span><br/>
                                                    <span className="tC333333 fs14 lh20 fwB">한국일보</span>
                                                </td>
                                                <td>
                                                    <span
                                                        className="tC271e1c fs16 lh22 fwB">하루 8시간 수면하면 복부비만 위험 줄어</span><br/>
                                                    <span className="tC666666 fs16 lh20">가정의학과 조경희, 최준호 교수</span>
                                                </td>
                                                <td><a href="https://www.hankookilbo.com/News/Read/A2020091815510000832"
                                                       target="_blank" title="새창팝업" className="listLink2">기사<br/>보기</a>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </li>
                            </ul>

                            <div className="photo2Type3 mt50">
                                <div className="pt2L mt30">
                                    <div className="txtAc">
                                        <h5 className="disB tC013e94 fs22 lh30 fwB bCbbe2e8 txtAc pt5 pb5 positionR">
                                            <img src="../images/contents/sub3_02_icon4.jpg" alt=""
                                                 className="news_icon"/>포상</h5>
                                    </div>
                                    <dl className="lh25">
                                        <dt className="disB tC778288 fs15 lh25 fwB bb1S778288 mt10">
                                            공단 창립기념 유공자 표창
                                        </dt>
                                        <dd className="tC333333 fs15"><span
                                            className="tC333333 fs15 fwB">류순덕</span> 수술간호팀
                                        </dd>
                                    </dl>
                                    <dl className="lh25">
                                        <dt className="disB tC778288 fs15 lh25 fwB bb1S778288 mt10">
                                            모범 전공의
                                        </dt>
                                        <dd className="tC333333 fs15"><span
                                            className="tC333333 fs15 fwB">고상민</span> 마취통증의학과
                                        </dd>
                                        <dd className="tC333333 fs15"><span
                                            className="tC333333 fs15 fwB">이창민</span> 정형외과
                                        </dd>
                                    </dl>
                                    <dl className="lh25">
                                        <dt className="disB tC778288 fs15 lh25 fwB bb1S778288 mt10">
                                            공단, 일산병원 동반성장 기여
                                        </dt>
                                        <dd className="tC333333 fs15"><span
                                            className="tC333333 fs15 fwB">김선희A</span> 보험심사팀
                                        </dd>
                                        <dd className="tC333333 fs15"><span
                                            className="tC333333 fs15 fwB">장정하</span> 원가분석팀
                                        </dd>
                                        <dd className="tC333333 fs15"><span
                                            className="tC333333 fs15 fwB">박종복</span> 의용공학팀
                                        </dd>
                                    </dl>
                                    <dl className="lh25">
                                        <dt className="disB tC778288 fs15 lh25 fwB bb1S778288 mt10">
                                            제안제도
                                        </dt>
                                        <dd className="tC333333 fs15"><span
                                            className="tC333333 fs15 fwB">박성호</span> 의료정보팀
                                        </dd>
                                        <dd className="tC333333 fs15"><span
                                            className="tC333333 fs15 fwB">이승신</span> 응급간호팀
                                        </dd>
                                        <dd className="tC333333 fs15"><span
                                            className="tC333333 fs15 fwB">최성희</span> 응급간호팀
                                        </dd>
                                        <dd className="tC333333 fs15"><span
                                            className="tC333333 fs15 fwB">연정화</span> 응급간호팀
                                        </dd>
                                        <dd className="tC333333 fs15"><span
                                            className="tC333333 fs15 fwB">마미영</span> 병동간호1팀
                                        </dd>
                                        <dd className="tC333333 fs15"><span
                                            className="tC333333 fs15 fwB">윤선미</span> 간호행정팀
                                        </dd>
                                        <dd className="tC333333 fs15"><span className="tC333333 fs15 fwB">박영주</span> 외래팀
                                        </dd>
                                        <dd className="tC333333 fs15"><span
                                            className="tC333333 fs15 fwB">정민우</span> 재활치료센터
                                        </dd>
                                        <dd className="tC333333 fs15"><span
                                            className="tC333333 fs15 fwB">황진희</span> 의무기록팀
                                        </dd>
                                    </dl>
                                    <dl className="lh25 mt20">
                                        <dt className="disB tC778288 fs15 lh25 fwB bb1S778288 mt10">
                                            환자안전 우수직원
                                        </dt>
                                        <dd className="tC333333 fs15"><span
                                            className="tC333333 fs15 fwB">이세영</span> 교육수련팀
                                        </dd>
                                        <dd className="tC333333 fs15"><span
                                            className="tC333333 fs15 fwB">양경화</span> 간호행정팀
                                        </dd>
                                        <dd className="tC333333 fs15"><span
                                            className="tC333333 fs15 fwB">이옥순</span> 집중치료간호팀
                                        </dd>
                                        <dd className="tC333333 fs15"><span
                                            className="tC333333 fs15 fwB">조미정</span> 집중치료간호팀
                                        </dd>
                                        <dd className="tC333333 fs15"><span
                                            className="tC333333 fs15 fwB">우정숙</span> 집중치료간호팀
                                        </dd>
                                    </dl>
                                    <dl className="lh25 mt20">
                                        <dt className="disB tC778288 fs15 lh25 fwB bb1S778288 mt10">
                                            CS star
                                        </dt>
                                        <dd className="tC333333 fs15"><span
                                            className="tC333333 fs15 fwB">이옥순</span> 집중치료간호팀
                                        </dd>
                                        <dd className="tC333333 fs15"><span
                                            className="tC333333 fs15 fwB">유기곤</span> 재활치료센터
                                        </dd>
                                    </dl>
                                </div>
                                <div className="pt2R">
                                    <div className="txtAc mt30">
                                        <h5 className="disB tC013e94 fs22 lh30 fwB bCbbe2e8 txtAc pt5 pb5 positionR">
                                            <img src="../images/contents/sub3_02_icon6.jpg" alt=""
                                                 className="news_icon"/>결혼</h5>
                                    </div>
                                    <ul className="lh25 mt20">
                                        <li className="fs15"><span className="tC778288 fs15 fwB bb1S778288 pr40">2020. 6. 28</span>&nbsp;
                                            <span className="tC333333 fs15 fwB">손현석</span> 병동간호1팀(62병동)
                                        </li>
                                        <li className="fs15"><span className="tC778288 fs15 fwB bb1S778288 pr43">2020. 7. 4.</span>&nbsp;
                                            <span className="tC333333 fs15 fwB">정유진</span> 병동간호1팀(53병동)
                                        </li>
                                        <li className="fs15"><span className="tC778288 fs15 fwB bb1S778288 pr35">2020. 8. 16.</span>&nbsp;
                                            <span className="tC333333 fs15 fwB">유세련</span> 호스피스센터
                                        </li>
                                        <li className="fs15"><span className="tC778288 fs15 fwB bb1S778288 pr35">2020. 8. 29.</span>&nbsp;
                                            <span className="tC333333 fs15 fwB">박혜지</span> 비서실
                                        </li>
                                        <li className="fs15"><span className="tC778288 fs15 fwB bb1S778288 pr35">2020. 9. 12.</span>&nbsp;
                                            <span className="tC333333 fs15 fwB">김효진</span> 수술간호팀(마취회복실)
                                        </li>
                                        <li className="fs15"><span className="tC778288 fs15 fwB bb1S778288 pr35">2020. 9. 12.</span>&nbsp;
                                            <span className="tC333333 fs15 fwB">강미현</span> 외래팀(비뇨의학과)
                                        </li>
                                        <li className="fs15"><span className="tC778288 fs15 fwB bb1S778288 pr35">2020. 9. 26.</span>&nbsp;
                                            <span className="tC333333 fs15 fwB">양혜림</span> 외래팀(내분비내과)
                                        </li>
                                    </ul>

                                    <div className="txtAc mt30">
                                        <h5 className="disB tC013e94 fs22 lh30 fwB bCbbe2e8 txtAc pt5 pb5 positionR">
                                            <img src="../images/contents/sub3_02_icon5.jpg" alt=""
                                                 className="news_icon"/>출산</h5>
                                    </div>
                                    <ul className="lh25 mt20">
                                        <li className="fs15"><span className="tC778288 fs15 fwB bb1S778288 pr40">2020. 7. 9.</span>&nbsp;
                                            <span className="tC333333 fs15 fwB">이진주</span> 영상의학과
                                        </li>
                                        <li className="fs15"><span className="tC778288 fs15 fwB bb1S778288 pr30">2020. 7. 13.</span>&nbsp;
                                            <span className="tC333333 fs15 fwB">나세영</span> 외래팀(심장내과)
                                        </li>
                                        <li className="fs15"><span className="tC778288 fs15 fwB bb1S778288 pr30">2020. 7. 16.</span>&nbsp;
                                            <span className="tC333333 fs15 fwB">박민정</span> 정형외과
                                        </li>
                                        <li className="fs15"><span className="tC778288 fs15 fwB bb1S778288 pr30">2020. 7. 23.</span>&nbsp;
                                            <span className="tC333333 fs15 fwB">남다정</span> 마취통증의학과
                                        </li>
                                        <li className="fs15"><span className="tC778288 fs15 fwB bb1S778288 pr30">2020. 7. 27.</span>&nbsp;
                                            <span className="tC333333 fs15 fwB">박진수</span> 류마티스내과
                                        </li>
                                        <li className="fs15"><span className="tC778288 fs15 fwB bb1S778288 pr30">2020. 8. 10.</span>&nbsp;
                                            <span className="tC333333 fs15 fwB">김정운</span> 예산팀
                                        </li>
                                        <li className="fs15"><span className="tC778288 fs15 fwB bb1S778288 pr30">2020. 8. 10.</span>&nbsp;
                                            <span className="tC333333 fs15 fwB">이보미</span> 재무팀
                                        </li>
                                        <li className="fs15"><span className="tC778288 fs15 fwB bb1S778288 pr30">2020. 8. 17.</span>&nbsp;
                                            <span className="tC333333 fs15 fwB">변지은</span> 병동간호1팀(62병동)
                                        </li>
                                        <li className="fs15"><span className="tC778288 fs15 fwB bb1S778288 pr30">2020. 8. 18.</span>&nbsp;
                                            <span className="tC333333 fs15 fwB">이고은</span> 외래팀(정형외과)
                                        </li>
                                        <li className="fs15"><span className="tC778288 fs15 fwB bb1S778288 pr30">2020. 8. 30.</span>&nbsp;
                                            <span className="tC333333 fs15 fwB">박승철</span> 총무팀
                                        </li>
                                        <li className="fs15"><span className="tC778288 fs15 fwB bb1S778288 pr30">2020. 8. 30.</span>&nbsp;
                                            <span className="tC333333 fs15 fwB">노미혜</span> 원무팀
                                        </li>
                                        <li className="fs15"><span className="tC778288 fs15 fwB bb1S778288 pr30">2020. 9. 10.</span>&nbsp;
                                            <span className="tC333333 fs15 fwB">권기경</span> 수술간호팀(마취회복실)
                                        </li>
                                        <li className="fs15"><span className="tC778288 fs15 fwB bb1S778288 pr30">2020. 9. 18.</span>&nbsp;
                                            <span className="tC333333 fs15 fwB">이하늘</span> 병동간호3팀(131병동)
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
            </Fragment>

            <Footer/>

        </Fragment>
    );
};

export default SectionThree;
