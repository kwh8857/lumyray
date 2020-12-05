const initialState = {
  type: 'PC',
  section1: [{
      image: 'https://www.wallpapertip.com/wmimgs/41-419371_2048-x-1536-wallpaper-467wallpapers-new-ipad-full.jpg'
    },
    {
      image: 'https://data.1freewallpapers.com/download/japanese-islands-4k-2048x1536.jpg'
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz36-WO6yqFfFT1ntAfxdxyE2JPLpmeGhekQ&usqp=CAU'
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
  ]
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