// ==UserScript==
// @name     LinkedIn Endorser
// @version  1
// @grant    none
// @match http://*/*
// @match http://*.linkedin.com/in/*
// @match http://www.linkedin.com/in/*
// @match https://www.linkedin.com/in/*
// ==/UserScript==



window.addEventListener('load', function() {
    setTimeout(grabSkills, 4000);    //gotta wait for linkedin to load all the way
}, false);


    


let grabSkills = () => {

  let skills = document.querySelector('.pv-skill-categories-section').childNodes;	
  let skillsChildren = Array.from(skills[6].children) 				// don't need to loop here because you can only have 3 top skills.
  skillsChildren[0].firstElementChild.firstElementChild.firstElementChild.firstElementChild.click()  //find each skill button and click it
  skillsChildren[1].firstElementChild.firstElementChild.firstElementChild.firstElementChild.click()
  skillsChildren[2].firstElementChild.firstElementChild.firstElementChild.firstElementChild.click()

  let showMore = document.getElementsByClassName('pv-profile-section__card-action-bar pv-skills-section__additional-skills artdeco-container-card-action-bar artdeco-button artdeco-button--tertiary artdeco-button--3 artdeco-button--fluid ')
  let showMoreButton = showMore[0]
  showMoreButton.click()	// show the rest of the skills

  let skillsContainer = document.getElementById('skill-categories-expanded')
  for(let i=1; i <= skillsContainer.childNodes.length - 2; i++) {   // loop over skills container                                                                                                                               // grabs each subcontainer of skills
  let element = skillsContainer.childNodes[i].childNodes[2]      
        for ( let j=1; j < element.childNodes.length; j++){			// loop over subcontainer
            if(element.childNodes[j].id){
                let button = element.childNodes[j].childNodes[2].childNodes[2].childNodes[1].childNodes[1] // grab skill button and click it
                button.click()
            }
        }     
  }
}