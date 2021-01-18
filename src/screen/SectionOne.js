import React, {Fragment} from 'react';
import {
    Container,
    Card,
    CardBody,
    CardText,
    CardImg,
    CardTitle,
    CardSubtitle
} from 'reactstrap';

import HeaderP from "../components/header/HeaderP";
import Footer from "../components/footer/Footer";

import img from '../assets/images/section1/intro01.png'
import img2 from '../assets/images/section1/newyears.1.png'
import img3 from '../assets/images/section1/essay2.png'
import img4 from '../assets/images/section1/interview.jpg'

import interv1 from '../assets/images/section1/interv1.1.jpg'
import interv2 from '../assets/images/section1/interv2.1.jpg'


const SectionOne = ({match}) => {

    const head = [
        (
            <div style={{fontSize: "24px"}}>
                INTRO
            </div>
        ),
        (
            <div style={{fontSize: "24px"}}>
                신년사
            </div>
        ),
        (
            <div style={{fontSize: "24px"}}>
                ESSAY
            </div>
        ),
        (
            <div style={{fontSize: "24px"}}>
                INTERVIEW
            </div>
        )
    ]

    const title = [
        (
            <div style={{color: "mediumpurple"}}>
                따뜻한 마음을 담아 <br/>
                2021년을 바라봅니다
            </div>
        ),
        (
            <div>

            </div>
        ),
        (
            <div>
                {/*인간이 ‘본다’는 것은 <br/>*/}
                {/*/ 일차원적이며 최고의 사고행위*/}
            </div>
        ),
        (
            <div>
                <div className="mb-3">
                    병원에서
                    <br/>
                    <div style={{fontWeight: "900"}}>'보다'의 의미를 찾다</div>
                </div>

                <span
                    style={{
                        fontWeight: "normal",
                        fontSize: "16px",
                        borderBottom: "1px solid",
                        borderTop: "1px solid",
                        padding: "10px"
                    }}
                >
                    영상의학과 김철민 수석기사 & 병리과 소재옥 직원
                </span>
            </div>
        )
    ]

    const subtitle = [
        (
            <div>
                2021년을 맞이하며 어떤 생각을 했나요? ‘올해는 지난해보다 나은 삶이 되면’,
                ‘좀 더 많이 웃을 수 있으면’
                하는 바람도 담겨 있겠지요.
                그래요. 2021년은 자신과 주변 사람들이 조금 더 행복하면 좋겠다는 작은 바람, 분명이루어질거예요.
                모두가 한마음으로 따뜻한 마음을 담아 2021을 바라봅니다.
            </div>
        ),
        (
            <div>

            </div>
        ),
        (
            <div>
                K-팝처럼 세계 주요 언론에 자주 오르는 단어가 K-방역(quarantine)이다. 검사 - 추적 – 격리 및 치료로 이어지는 ‘코로나19’ 대응방법은 오로지 한국만이 지닌 독특한 방식이다. 이로 인해 한국에서는 확진자 수뿐만 아니라 사망자 수도 현저하게 적다. 그리고 최근에는 AI와 빅데이터 등을 이용해 더욱 혁신적인 코로나19 대응법을 내놓고 있다.
                <br/>
                그러나 기술이나 의술이 아무리 발전해도 전염병은 국민 스스로 예방수칙을 잘 지키는 것이 최선이다. 한국인은 누가 시키지 않아도 방역수칙을 잘 지키며, 마스크를 잘 착용하여 ‘코로나19’ 확산을 저지하고 있다. 거리에서나, 지하철에서나, 버스에서나 마스크를 착용하지 않은 사람을 찾기는 매우 어렵다. 그러나 서양에서는 다르다.
                <br/> <br/>
                글 <span style={{fontWeight: "normal"}}> 구승준 번역가 · 칼럼니스트 / </span>
                사진 <span style={{fontWeight: "normal"}}> 백기광 </span>
            </div>
        ),
        (
            <div>
                2021년 새해를 맞이해 {"<問安>"}은 일산병원 구성원들이 함께 소통하는 대담 인터뷰를 시작합니다.
                <br/> 첫 주자인 영상의학과 김철민 수석기사와 병리과 소재옥 직원에게
                <br/> 병원에서 ‘보다’의 의미에 대해 이야기를 들어보았습니다.
                <br/> <br/>
                글 <span style={{fontWeight: "normal"}}> 편집실 / </span>
                사진 <span style={{fontWeight: "normal"}}> 송인호 </span>
            </div>
        )
    ]

    const ctitle2 = [
        (
            <div style={{color: "midnightblue", fontSize: "30px"}}>
                2021년 희망찬 새해가 밝았습니다.
            </div>
        ),
        (
            <div style={{color: "midnightblue", fontSize: "30px"}}>
                코로나19 감염병 상황, 위기를 기회로 활용하겠습니다.
            </div>
        ),
        (
            <div style={{color: "midnightblue", fontSize: "30px"}}>
                건강 통합관리센터 건립을 적극 추진하겠습니다.
            </div>
        )
    ]

    const ctext2 = [
        (
            <div>
                올해는 신축(辛丑)년 ‘흰 소의 해’입니다. 예로부터 소는 온순하면서 끈질기고, 힘이 세지만 사납지 않아 끈기와 여유로움을 지닌 우리 민족의 기질과 잘 융화되어 선조들로부터 가족과 같은 사랑을 받아왔습니다.
                <br/>
                ‘천천히 걸어도 황소걸음’이라는 속담이 있습니다. 소처럼 끈기 있게 꾸준히 노력하는 사람이 결국에는 성공한다는 의미이지요. 2021년 소의 해를 맞아, 모든 분이 쉽게 포기 하지않고 힘 있고 정직한 걸음으로 원하는 바를 다 이루시기를 소망합니다.
                <br/>
                2020년에는 코로나19라는 폭풍우 속에서 환자 치료를 위해 매진해주신 의료진과 안정적인 병원 운영을 위해 힘써주신 직원분들의 노고가 참으로 컸습니다. 지난해 코로나19 사태 초반에 방역과 진료의 체계를 잡기까지 어려움이 있었지만, 일산병원은 어느 병원보다 빠르게 안전하고 효율적인 병원 방역과 진료 시스템을 구축했습니다. 그동안 선도적으로 또한 안정적으로 코로나19에 대응 해온 일산병원은 또 다른 새로운 변화로 코로나19 거점전담병원이 되었습니다. 감염병 사태가 진정 국면으로 전환될 때까지 직원들의 안전과 안녕을 최우선 순위에 두고, 환자들의 소중한 생명을 지켜나간다는 사명감으로 병원을 운영해 나가겠습니다.

            </div>
        ),
        (
            <div>
                의료체계가 감당할 수 없는 확진자 급증세에 우리의 사명을 다하고자 일산병원이 앞장서게 되었습니다. 일산병원이 만들어온 한 발 앞선 감염병 대응 시스템을 바탕으로 감염병 거점전담병원의 역할을 충실히 시행하겠습니다. 중등도부터 최중증까지 각 단계의 환자를 직접 치료하는 것뿐 아니라 경기북부, 고양시의 다른 의료기관과 연대하여 ‘코로나19 고양시 병원 네트워크’를 만들었습니다. 일산병원이 중심이 되어 효율적인 병상 관리와 질높은 환자진료, 관리운영시스템을 전파하여 타 지역에서도 적용할 수 있는 새로운 모델을 제시하겠습니다. 이는 ‘스마트병원 선도모델 개발’ 시범사업 수행기관으로서의 사업, 즉 지역사회 감염병 대응체계 구축과 병원 내 감염 방지를 위한 비접촉 진료를 아우르는 내용으로 추진되고 있던 바, 이번 감염병 거점 전담병원 역할의 핵심부분을 공유하며 더욱 확장된 역할에 기여하고 있습니다. 향후 병원발전의 핵심 동력으로 자리 잡을 수 있을 것입니다.
                <br/>
                포스트 코로나 시대, 4차 산업혁명 핵심 기술과 의료의 융합 등 변화하는 보건 의료환경에 능동적으로 대응하고자 병원의 존립을 굳건히 하고 장기적인 성장을 견인하기 위해 변화를 통한 경쟁력 확보에 더욱 집중하겠습니다. 로봇수술센터, 심뇌혈관질환센터 등 기존에 운영중인 특화진료 센터는 인프라를 강화하고 진료 프로세스를 개선하여 지속적으로 경쟁력을 높여나가겠습니다. 아울러 최근 수년간 체계적으로 준비해온 응급센터 및 외상팀 운영체계를 확립하고, 하이브리드 수술실, 심뇌혈관질환센터, 암센터 등을 활성화하여 우수한 중증진료 역량을 바탕으로 고난도 치료 분야의 표준 진료시스템을 마련하여 지역 내 상급종합병원 역할을 수행하겠습니다. 또한 투석 혈관클리닉, 노인암클리닉, 컴퓨터로봇지원센터 등 새로운 특화진료 분야 발굴에도 지원을 아끼지 않겠습니다.
            </div>
        ),
        (
            <div>
                건강 통합관리센터는 소아재활, 정신건강 등 미충족 의료를 제공하고 고양 시민의 질병 예방과 건강관리를 지원하는 새로운 의료센터로, 2025년 개소를 목표로 추진하고 있습니다. 이를 위해 고양시와 MOU를 체결, 건립 타당성 조사 연구를 실시하였고, 2021년에는 도시계획 변경과 부지 매입을 추진할 예정입니다.
                <br/>
                일산병원은 연구역량 강화를 위해 연구소를 중심으로 연구 인프라를 구축하고, 다양한 정책 연구 사업을 수행하여 의미있는 발전을 이루어왔습니다. 지난해 논문 200여 편을 발표했고, 매년 30여 개가 넘는 정책 과제를 수행하고 있습니다. 2021년에는 CDW를 활용한 연구, 공단-병원 연계정책 연구를 더 활성화할 예정입니다.
                <br/>
                일산병원의 장기적인 성장을 위한 조직문화 구축과 구성원들의 역량 강화가 필요합니다. 이를 위해 2021년에는 계층 간, 직종 간 교류·협력의 장을 마련하고 다양한 소통창구를 활용하여 열린 조직문화를 조성하겠으며, 직원들의 역량 강화를 위해 분야별 전문가 육성에 집중하겠습니다. 특히 병원의 미래를 이끌어갈 전문인재 양성을 위해 직무별 맞춤형 교육 기회를 확대하고 병원의 핵심 가치와 인재상을 채용, 평가, 승진 등 제도와 연계하여 일산병원만의 특성에 부합하는 전문가 양성을 추진하겠습니다.
                <br/>
                수많은 갈림길 앞에서 가던 길로만 가는 것이 가장 익숙하고 쉽겠지만, 아마 변화와 성장은 얻기 어려울 것입니다. 일산병원은 ‘국민의 건강한 삶과 올바른 의료표준을 선도하는 모델병원’이라는 미션, ‘환자중심, 탁월한 전문성, 행복한 일터’라는 3가지 핵심 가치를 가지고 있습니다. 개원 후 20년간 공들여 쌓아온 ‘진료 잘하는 병원’의 역량을 바탕으로 국가적 재난 상태를 앞장서 극복하면서, 현명한 운영 모델을 제시하고, 필수 중증 환자진료에 최선을 다해나갈 것 입니다.
                <br/>
                쉬운 길은 아니겠지만, 항상 든든하게 옆을 지켜주시는 일산병원 가족 여러분과 손잡고 같은 방향으로, 멀리 앞을 내다보면서 2021년을 시작하겠습니다.

            </div>
        )
    ]

    const ctitle3 = [
        (
            <div>
                서양인들은 왜 마스크 쓰기를 거부할까?
            </div>
        ),
        (
            <div>
                동양의 우주관은 전체, 서양의 우주관은 개별
            </div>
        ),
        (
            <div>
                ‘본다’는 말은 ‘안다’는 말과 다름없다
            </div>
        )
    ]

    const ctext3 = [
        (
            <div>
                작년 여름을 기점으로 최근까지 스페인, 영국, 독일, 프랑스, 네덜란드 등 전 세계 곳곳에서 마스크 쓰기 반대 운동이 일어나고 있다. 미국이나 유럽 곳곳에서 마스크 쓰기를 끝내 거부한 사람들이 경찰에게 제지당하곤 했다. LA에서는 마스크를 불태우며 격렬한 시위를 벌였다.
                <br/>
                서양인들은 왜 이렇게 마스크에 민감한 것일까? 일각에서는 서양인들이 ‘코로나바이러스는 허구’라는 음모론에 휩싸였으며, 심각한 경기불안과 일자리 감소로 쌓여 있던 불만이 ‘마스크 안 쓰기’ 운동으로 터져 나왔다고 주장한다. 하지만 ‘마스크 안 쓰기’의 속내를 들여다보면 서양인들의 시각적 관습에 기인한 것이라고 볼 수도 있다. 영국 글래스고대학교 레이철 잭 박사 연구진은 서양인과 동아시아인을 각각 15명씩 뽑은 후, 컴퓨터그래픽으로 만든 다양한 표정을 보여주고 이를 설명하게 했다. 이 실험에서 동양인은 눈을 보고 감정을 판단하지만, 서양인은 입 모양을 먼저 보았음이 드러났다.
                <br/>
                우리나라에서는 웃는 이모티콘을 ‘^^’라고 쓴다. 입 모양이 없다. 반면에 서양에서는 눈 대신 웃는 입 모양을 표시하여 ‘:)’라고 쓴다. 서양인은 입을 통해 주로 소통하고, 동양인은 주로 눈을 통해 소통한다. 표정을 인식하는데 동서양의 이런 차이는 왜 발생하는 것일까?
                <br/>
                근본적인 이유를 알기 위해서는 동양인과 서양인이 고대에 우주를 어떻게 바라보았는지, 우주를 바라보는 시각까지 거슬러 올라갈 수 있다.
            </div>
        ),
        (
            <div>
                동양인은 예로부터 우주 만물이 텅 빈 공간에서 비롯되었다고 생각한다. 동양인에게 우주공간은 비어 있지 않으며, 설령 눈에 보이지는 않는다고 해도 생명의 태동이 깃들어 있는 곳이다. 그러나 예로부터 서양인은 우주공간이 눈에 보이지 않는다면 그냥 비어 있다고 생각해왔다. 텅 빈 공간에 떠 있는 별들은 각각 독립적 개체일 뿐이다. 하지만 동양인은 별과 별 사이의 공간도 예사롭게 넘기지 않았다. 왜냐하면 그 텅 빈 공간으로부터 별이 생겼기 때문이다.
                <br/>
                서양 언어권에서는 정관사나 부정관사, 단수, 복수가 매우 중요하다. 하나의 책상(a desk), 하나의 의자(a chair) 등 모든 것을 독립된 개체로 본다. 버클리대학교 심리학과 펑 카이핑 교수는 이렇게 말한다. “미국의 유치원에서 교사가 아이들에게 과일을 먹으라고 하면, 아이들은 ‘무슨 과일요? 바나나 한 개? 사과 한 개? 딸기 한 개?’라고 대답한다. 하지만 동양에서는 굳이 그럴 필요가 없다.”
                <br/>
                동양에서는 서양만큼 단수와 복수를 중요하게 여기지 않는다. 모든 것은 전체 중의 하나이며, 하나 안에 우주가 들어 있다고 생각한다. 이런 시각은 한의학에서 ‘인체가 소우주’라는 관점을 만들어내기도 했다.
            </div>
        ),
        (
            <div>
                동양이든 서양이든 ‘본다’는 것은 결코 일차원적인 의미가 아니다. 단순히 눈의 망막을 통해 이미지를 보는 것만이 전부는 아니다. 따라서 인간이 ‘본다’라고 할 때는 ‘알다’라는 의미가 내포되어 있다. 또 영어에서 ‘보다’를 뜻하는 단어인 ‘see’는 ‘안다’는 말과 치환하여 사용할 수 있다. 전 세계 많은 나라 언어에서도 ‘보다’라는 말은 단순히 대상을 보는 데 그치지 않는다.
                <br/>
                우리가 흔히 하는 말 중에 ‘언제 한번 보자!’, ‘보고 싶다’라는 말도 있다. 이는 눈의 망막으로 한번 ‘본다’는 의미가 아니고, 만나서
                그 사람을 보고 대화를 하고 그 사람을 느끼고 싶다는 뜻을 담고 있다. 우리는 시각적 행위를 통해 만나고, 알고, 마음의 새로운 영역을 발견한다. 인간이 ‘본다’는 것은 일차원적인 행위인 동시에 사고의 최정점을 이루는 사유과정이기도 한 것이다.
                <br/>
                본다는 것은 단순한 ‘시각적 행위’가 아니다. 우리가 나이아가라 폭포에서 끊어지지 않는 거대한 물폭탄을 보았을 때 우리 마음은 경이감으로 가득 찬다. 때로는 그 경이감이 너무 커서 이성적 사고를 못 할 때도 있지만, 마음을 잘 관찰해보면 어떤 식으로든 연상되는 사고작용이 있기 마련이다. 이렇게 하여 몸에 근육이 붙듯이 마음에도 새로운 차원을 개척하게 되는 것이다. 실제로도 시각적 자극을 통해 뇌에 시냅스가 형성되고 발전된다.
                <br/>
                이 현상을 한마디로 정의할 수는 없지만 비슷하게나마 이름을 붙이자면 ‘영감’이라고 할 수도 있겠다.
                <br/>
                우리는 익숙하지 않은 뭔가를 보면서 새로운 생각, 새로운 감정, 새로운 차원을 경험하게 된다. 보는 것은 단지 육체적이고 물리적인 현상에 그치지 않고, 더 높은 차원의 복잡한 과정으로 나아가게 한다. 시각을 고차원적인 사고로 전환하는 것은 아마도 인간만이 할 수 있는 행위일 것이다.
                <br/>
                실제로 많은 예술가가 새로운 것을 보고 영감을 얻기 위해 여행을 하며 거기에서 좋은 작품을 만들기도 한다. 새로운 것을 봄으로써 우리 마음은 거듭난다.
            </div>
        )
    ]

    const ctitle4 = [
        (
            <div>
                15년전 시작된 인연
            </div>
        ),
        (
            <div>
                각자의 자리에서 ‘보다’
            </div>
        )
    ]

    const ctext4 = [
        (
            <div>
                <div>
                    두 분의 인연이 꽤나 오래됐다고 들었습니다. 친해지신 계기 나 에피소드가 있을까요?
                </div>

                <br/>
                <span style={{borderBottom: "1px solid"}}>소재옥 직원:</span> {" "}
                2005년 원내 축구 동호회에서 처음 만났습니다. 그때 김철민 선생님께선 주전 멤버로 그라운드를 누비셨어요. 지금은 제가 다른 동호회 활동을 하고 있지만 그때 맺은 인연이 지금까지 이어지고 있습니다.
                <br/><br/>
                <span style={{borderBottom: "1px solid"}}>김철민 수석기사:</span> {" "}
                소재옥 선생님뿐만 아니라 일산병원 구성원 이라면 대부분 비슷할 것 같은데요. 서로의 집에 숟가락이 몇 개 있는지까지는 알지 못하지만, 만나면 누구보다 반갑게 인사 하는 사이입니다.
                <br/><br/>
                영상의학과와 병리과, 독자 여러분께는 다소 생소할 수도 있을 것 같습니다. 어떤 업무를 맡고 있는지 설명 부탁드립니다.
                <br/><br/>
                <span style={{borderBottom: "1px solid"}}>김철민 수석기사:</span> {" "}
                영상의학과에는 전문의, 간호사, 검사를 담당하는 방사선사 등 여러 직종이 모여 있습니다. 그중에서도 저는 ‘투시’를 담당하고 있는데요, 조영제를 사용해 환자의 몸 속을 살펴본다고 생각하시면 쉽습니다.
                <br/><br/>
                <span style={{borderBottom: "1px solid"}}>소재옥 직원:</span> {" "}
                영상의학과는 CT나 MRI 촬영 등으로 일반 환 자들이 방문하는 경우도 있지만, 저희는 환자와 직접 만나지 않아 더욱 생소하게 느끼시지 않을까 합니다.
                <br/>
                병리과는 환자에게서 채취한 조직이나 세포 검사물로 다양하 고 정확한 검사를 진행해 의료진에게 최종 진단명을 제공하는 부서입니다. 조직병리·면역병리·세포병리·분자병리 네 파트로 이루어져 있고, 저는 세포병리 파트에서 암세포 선별검사 업무를 맡고 있습니다. 슬라이드를 제작해 검경하여 암세포나 암이 되기 전 이상이 있는 세포를 구별해서 찾아냅니다.
            </div>
        ),
        (
            <div>
                두분 모두 20년이 넘은 베테랑이지만 일에서 느끼는 고충, 그리고 보람도 있으실 것 같은데요.
                <br/><br/>
                <span style={{borderBottom: "1px solid"}}>김철민 수석기사:</span> {" "}
                아무래도 가끔 무례하다는 생각이 들게 하는 불친절한 환자들이 있는데 그럴 때 조금 힘이 듭니다. 그래도 최대한 이해하고 친절하게 응대하려고 노력합니다. 서로 조금만 더 배려하고 존중하면 좋겠어요.
                <br/><br/>
                <span style={{borderBottom: "1px solid"}}>소재옥 직원:</span> {" "}
                저는 자궁경부 도말 검체에서 암세포나 암이되기 전의 이상이 있는 세포를 찾는 일을 하는데, 슬라이드 한장을 검경하는 데 보통 5~6분이 걸립니다. 요즘엔 하루 평균 40~50 장을 보는데 눈의 피로감이 느껴질 때가 종종 있습니다. 하지 만 눈의 피로보다 정신적인 피로가 더 큽니다.
                <br/>
                혹시나 내가 놓친다면 환자분은 다음 검사때 까지 병을 키울 수도 있기 때문에 긴장감과 정신적 압박을 느끼지만, 반대로 제가 암을 발견해 환자가 조기에 치료 받을 수 있다면 이보다 더 보람된 일은 없겠지요.
            </div>
        ),
        (
            <div>
                두분 모두 20년 넘게 자신의 업무를 해오셨는데요, 각자의 파트에서 느끼는 변화가 있으신가요?
                <br/><br/>
                <span style={{borderBottom: "1px solid"}}>김철민 수석기사:</span> {" "}
                영상의학과의 경우 기술과 시스템 부분에서 변화가 많았습니다. 장비도 발전하고, 일하는 데 편의성도 좋아졌고요. 처음 일을 시작했을땐 엑스레이 검사후 필름을 인화해서 결과를 봤는데, 요즘은 다 디지털로 대체됐죠. 머지않아 더 작아지고 휴대성까지 겸비한 엑스레이 기계도 나오지 않을까 감히 상상해봅니다.
                <br/><br/>
                <span style={{borderBottom: "1px solid"}}>소재옥 직원:</span> {" "}
                최근 같은 동일한 암이라도 암의 종류와 아형에 따라 치료제 선택을 달리 할 수 있는 개인별 맞춤 치료가 가능해졌는데, 암조직을 이용한 유전자검사가 필수입니다. 이에 병리 과에서는 암에 대한 자세한 분석과 정확한 검사가 요구되기에 지속적인 학습과 신의료 지식 습득이 필요하리라 생각됩니다.
            </div>
        ),
        (
            <div>
                업무 이야기를 들으니 신년호의 주제인 ‘보다’와 이보다 더 잘 어울릴 수 없다는 생각이 드는데요, 두 분에게 ‘보다’란 어떤 의미인가요?
                <br/><br/>
                <span style={{borderBottom: "1px solid"}}>소재옥 직원:</span> {" "}
                병리과 업무의 많은 부분이 현미경을 통해 조그만 슬라이드를 들여다보는 것이지만, 그 슬라이드에 환자의 모든 것이 담겨 있습니다. 슬라이드의 첫 부분부터 끝부분까지 이상이 있는 세포들을 찾아야 하기에 저에게 ‘보다’는 ‘찾다’입니다.
                <br/><br/>
                <span style={{borderBottom: "1px solid"}}>김철민 수석기사:</span> {" "}
                저는 ‘서로의 마음을 보다’라고 하겠습니다. 영상의학과도 시술을 통해 혈관도 보고 조영제를 사용해 신체 곳곳을 살핍니다. 하지만 결국 병원에서 환자와 만나며 서로의 마음을 보는게 가장 크지 않나 싶어요. 사람과 사람이 하는 일 이니까요.
            </div>
        ),
        (
            <div>
                사보 {"<問安>"}에서 마련한 대담인터뷰를 통해 두 분이 이렇게 대화를 나누는 기회를 갖게 되셨는데요. 앞으로 두 분의 관계 가 어떻게 발전할지 궁금합니다.
                <br/><br/>
                <span style={{borderBottom: "1px solid"}}>소재옥 직원:</span> {" "}
                사실 처음 인터뷰를 제안받았을 때 굉장히 부담스러웠어요. 하지만 상대가 김철민 선생님인 걸 알고 마음이 편해졌습니다. 알고 지낸 지는 오래됐지만, 서로의 업무에 대해 이렇게 이야기를 나눈 건 처음이에요. 몰랐던 점도 많이 알게 됐고, 고충도 알게 되어 서로를 이해하는데 도움이 되지 않을까 싶습니다. 이번 인터뷰를 계기로 더 가까워져 개인적인 만남을 할 수 있지 않을까 기대됩니다.
                <br/><br/>
                <span style={{borderBottom: "1px solid"}}>김철민 수석기사:</span> {" "}
                최근 코로나19로 병원 내부 행사들은 물론이고 회의까지 모두 화상으로 진행 중입니다. 특히 우리 병원은 동호회가 활성화되어 있어 직원들이 서로 금방 친해지곤 했었는데, 요즘은 동호회 활동을 할 수 없어 아쉽습니다. 동료들과의 친목 도모가 업무에도 나타난다고 생각하거든요. 코로나19 가 끝나면 소재옥 선생님과 한잔하며 더 깊은 이야기를 나누고 싶습니다. 그러면 더욱 편한 사이가 되지 않을까요?
            </div>
        )
    ]

    const items = [
        {
            id: "1",
            src: img,
            head: head[0],
            title: "",
            subtitle: "",
            caption: [
                {
                    ctitle: "",
                    ctext: ""
                }
            ]
        },
        {
            id: "2",
            src: img2,
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
                },
                {
                    ctitle: ctitle2[2],
                    ctext: ctext2[2]
                }
            ],
        },
        {
            id: "3",
            src: img3,
            head: head[2],
            title: title[2],
            subtitle: subtitle[2],
            caption: [
                {
                    ctitle: ctitle3[0],
                    ctext: ctext3[0]
                },
                {
                    ctitle: ctitle3[1],
                    ctext: ctext3[1]
                },
                {
                    ctitle: ctitle3[2],
                    ctext: ctext3[2]
                }
            ],
        },
        {
            id: "4",
            src: img4,
            head: head[3],
            title: title[3],
            subtitle: subtitle[3],
            caption: [
                {
                    src: interv1,
                    ctitle: ctitle4[0],
                    ctext: ctext4[0]
                },
                {
                    src: interv2,
                    ctitle: ctitle4[1],
                    ctext: ctext4[1]
                },
                {
                    ctitle: ctitle4[2],
                    ctext: ctext4[2]
                },
                {
                    ctitle: ctitle4[3],
                    ctext: ctext4[3]
                },
                {
                    ctitle: ctitle4[4],
                    ctext: ctext4[4]
                }
            ],
        }
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
                                        SECTION Ⅰ
                                    </CardTitle>
                                    <CardTitle>
                                        {item.head}
                                    </CardTitle>
                                </div>
                            </CardBody>

                            <CardImg top style={{alignSelf: "center"}} className="img-fluid mb-3" src={item.src} alt="/" />

                            {item.title || item.subtitle ?
                                <CardBody className="color-of-life__body text-center">
                                    <CardTitle className="color-of-life__body__title mb-4">
                                        {item.title}
                                    </CardTitle>
                                    <CardSubtitle className="color-of-life__body__subtitle mb-5">
                                        {item.subtitle}
                                    </CardSubtitle>
                                </CardBody> : ""
                            }



                            {item.caption && item.caption.map((cap) => (
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
                            ))}
                        </Card>
                    </Container>
                </section>
            </Fragment>

            <Footer/>

        </Fragment>
    );
};

export default SectionOne;
