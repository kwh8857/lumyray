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
  ]
}

const layouts = (state = initialState, {
  type,
  payload
}) => {
  switch (type) {


    default:
      return state
  }
}
export default layouts