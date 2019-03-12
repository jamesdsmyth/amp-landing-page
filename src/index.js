require('normalize.css/normalize.css');
require('./styles/index.scss');

const getHomepageBanners = async () => {
  // try {
  //   const url = `https://uat4.centrepointstores.com/landmarkshopscommercews/cache/v3/centrepointae/en/cmsPage/getCmsPage?pageId=centrepointae-Homepage&fields=OPTIMIZED&appId=IPHONE&userGrouphash=`
  //   const response = await fetch(url);
  //   const json = await response.json();
    
  //   await appendBanners(json);
  // } catch(error) {
  //   console.log(`We have a fetch error - ${error}`);
  // }
}

const appendBanners = json => {
  const slot = json.slots.filter(item => {
    return item.slotId === 'HomePageRotatingBannerSlot-centrepointae-Homepage';
  });

  const bannersArr = slot[0].components[0].rotatingImagesData;
  const bannersMapped = bannersArr.map(item => {
    return `<amp-img src="${item.medias[0].url}" height="677" width="750"></amp-img>`;
  });

  const div = document.getElementById('carousel-container');

  const ampCarousel = document.createElement('amp-carousel');
  ampCarousel.setAttribute('class', 'amp-carousel');
  ampCarousel.setAttribute('layout', 'responsive');
  

  ampCarousel.innerHTML = bannersMapped.join(' ');

  div.appendChild(ampCarousel);
}

getHomepageBanners();
