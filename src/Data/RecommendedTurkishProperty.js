

function generateRandomId() {
    const idLength = 10;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
  
    for (let i = 0; i < idLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      id += characters.charAt(randomIndex);
    }
  
    return id;
  }
  
const RecommendedTurkishPropertyData = [

    {
        id:generateRandomId(),
        title:"Princess Island sea view apartment in kartal for",
        desc:"Belview  Istanbul avialable at bargain prices not to miss out on ",
        img :"https://www.propertyturkey.com/front/image/home/tab-backgrounds/bg-tab-3.jpg",
        location:"Istanbul",
        Bedroom:"1",
        BathRoom:"1",
        Area:"78 sq.m"
    },
    
    {
        id:generateRandomId(),
        title:"The U House in Gumusluk",
        desc:"Our unique U shaped houses for sale in Gumusluk are designed",
        img :"https://www.propertyturkey.com/front/image/background/euro-banner_orig.jpg",
        location:"Bodrum",
        Bedroom:"2",
        BathRoom:"3",
        Area:"250.0 sq.m"
    },
    
    {
        id:generateRandomId(),
        title:"Doesemulti houses in Turkey surrounded by",
        desc:"Situated within a secure compound , these luxury built",
        img :"https://www.propertyturkey.com/files/littlebosphorus_blog_cover.jpg",
        location:"Antalya",
        Bedroom:"4",
        BathRoom:"4",
        Area:"276.0 sq.m"
    },
    
    {
        id:generateRandomId(),
        title:"Designer homes floor to ceiling Gumusluk Bay",
        desc:"uniqely located in Gumusluk to maximise on sea views and",
        img :"https://www.propertyturkey.com/front/image/images2021/homepage/design-build-slider/1.jpg",
        location:"Bodrum",
        Bedroom:"4",
        BathRoom:"4",
        Area:"229.0 sq.m"
    },



]

export default RecommendedTurkishPropertyData;