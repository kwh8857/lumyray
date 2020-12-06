const initialState = {
  type: 'PC',
  section1: [{
      image: '/assets/section1_1.png',
      mb: '/assets/section1_1_mb.png'
    },
    {
      image: '/assets/section1_2.png',
      mb: '/assets/section1_2_mb.png'
    },
    {
      image: '/assets/section1_3.png',
      mb: '/assets/section1_3_mb.png'
    }
  ],
  section2: [{
      title: {
        left: "우리를 더 ",
        right: "건강하게"
      },
      sub: `실천할 수 있는
간편한 청결함을 만들겠습니다`
    },
    {
      title: {
        left: "지구를 더 ",
        right: "가볍게"
      },
      sub: `환경과 함께하는
지속가능한 제품을 만듭니다`
    },
    {
      title: {
        left: "일상을 더 ",
        right: "즐겁게"
      },
      sub: `커스텀 디자인으로
색다른 재치를 일상에 선물합니다`
    },
  ],
  section12: ["/assets/section12_1", "/assets/section12_2",
    "/assets/section12_3"
  ],
  bottom: [{
    title: '교환 및 반품안내',
    content: `- 배송 시 패키지에 약간의 흠집이 있을 수 있으니 참고해주시기바랍니다. (배송중 부딪힘/온도차)
- 상품개봉, 패키지 훼손, 오염이 된 경우에는 반품 및 교환이 어려우니 양해부탁드립니다.
- 위의 주의사항은 교환 및 환불 사유가 되지 않으므로 신중한 구매 부탁드립니다.
- 고객 변심에 의한 교환, 반품은 고객께서 배송비를 부담하셔야합니다.
- 잘못된 배송지를 기재하거나 고지 없이 배송지를 수정해 배송사고가 발생할 경우, 재발송에 소요되는 비용은 고객 부담입니다.
- 이외의 제품의 하자 및 배송오류는 배송 완료 후 3일 이내로 사진을 보내주시면 확인 후 교환 및 반품해드립니다. (배송비 무료)
`,
    mb: ` - 배송 시 패키지에 약간의 흠집이 있을 수 있으니 참고해주시기바랍니다. (배송중 부딪힘/온도차)
- 상품개봉, 패키지 훼손, 오염이 된 경우에는 반품 및 교환이 어려우니 양해부탁드립니다.
- 위의 주의사항은 교환 및 환불 사유가 되지 않으므로 신중한 구매 부탁드립니다.
- 고객 변심에 의한 교환, 반품은 고객께서 배송비를 부담하셔야합니다.
`
  }, {
    title: '제품정보',
    sub: ["제품명",
      "사이즈",
      " 구성품",
      " 판매원",
      "원산지"
    ],
    content: ["루미레이 살균기",
      "  사이즈입력",
      "  구성품입력",
      "  루미레이",
      " 대한민국 "
    ]
  }]
}

const layouts = (state = initialState, {
  type,
  payload
}) => {
  switch (type) {
    case 'LAYOUTS/TYPE/CHANGE':
      return {
        ...state,
        type: payload
      };

    default:
      return state
  }
}
export default layouts