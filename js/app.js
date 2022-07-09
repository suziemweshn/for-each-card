const members=[
    {
        name:"Aladesuru oriyomi",
        image:"img/suu.jpg",
        bestFood:"pounded yam and okro soup",
        complexion:"dark",
        thingsLearnt:"html,css,bootstrap,javascript",
        bestMovie:"charmed",
        age:"23",
        Track:"front-end beginner"
    
    },
    {
        name:"Austin Tonayam",
        image:"img/susan.jpg",
        bestFood:"sphagetti and chicken",
        complexion:"dark",
        thingsLearnt:"html,css,bootstrap,javascript",
        bestMovie:"Inglorious basterds",
        age:"22",
        Track:"front-end beginner"
    },
    {
        name:"susan Mwende",
        image:"img/suzie.jpg",
        bestFood:"chips and chicken",
        complexion:"dark-skinned",
        thingsLearnt:"html,css,bootstrap,javascript",
        bestMovie:"Family business",
        age:"21",
        Track:"front-end beginner"
    }
];
let text=""
members.forEach((members) => {
    
    text += `<div class="row">
    <div class="col-lg-12"> 
    <div class="card mb-5" style=width:252px; height:400px > 
    <div class="card-img-top">
    <img src=${members.image} alt="${members.name}" height="200PX" width="250px">

    </div>
   <div class="card-header"> <h5> ${members.name}</div>
   <ul class="list-group list-group-flush>
   <li class=" list-group-item">${members.bestFood}</li>
   <li class=" list-group-item">${members.complexion}</li>
   <li class="list-group-item"> ${members.thingsLearnt}</li>
   <li class="list-group-item">${members.bestMovie}<?li>
   <li class="list-group-item">${members.age}</li>
   <li class="list-group-item"> ${members.Track}</li>
   </ul>
   <button type="button" class="bg-dark text-light" onclick="name()">Click here</button>
    </div>
    </div>
    </div>`
     
    
  });
  document.querySelector('.top-hero').innerHTML=text
  function name(){
   document. alert (`${members.name}`);
  }
 


