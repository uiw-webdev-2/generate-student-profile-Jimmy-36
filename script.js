const profile = {
    fName: "Jimmy",
    lName: "Aragon",
    email: "jimmyaragon@gmail.com",
    pidm: 1234,
    school: "University of the Incarnate Word",
    gradeLevel: "Sophomore",
    image: "image.jpg",
    imageAlt: "Profile Picture",
}

const content = `
      <h1 class="backpack__name">${profile.fName} ${profile.lName}</h1>
      <ul class="backpack__features">
        <li class="packprop backpack__color">Email address:<span> ${profile.email}</span></li>
        <li class="packprop backpack__pockets">PIDM:<span> ${profile.pidm}</span></li>
        <li class="packprop backpack__strap">School currently attending: <span> ${profile.school}</span></li>
        <li class="packprop backpack__strap">Current year in school:<span> ${profile.gradeLevel}</span></li>
      </ul>  
  `;

//function used to create the image
const createImage = (dataObj) => {
    let newImage = document.createElement("img");
    newImage.setAttribute("src", dataObj.image);
    newImage.setAttribute("alt", dataObj.imageAlt);
    return newImage;
}

//function to pull values from object to populate them into the content
const populate = (profile) => {
    let newArticle = document.createElement("article");
    newArticle.innerHTML = content;
    newArticle.prepend(createImage(profile));
    return newArticle;
}


//declaration to produce content and append into the HTML
document.querySelector("main").append(populate(profile));