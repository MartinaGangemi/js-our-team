const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];


   // faccio una variabile dove seleziono la dom dove voglio inserire le stringhe
   const selectorTeam = document.getElementById("team")
   
   console.log(selectorTeam)
   

  for (let i = 0; i<team.length; i++){
     const membro = team[i];
    divElement = document.createElement("div")
    selectorTeam.append(divElement)
    divElement.innerHTML = `${membro.name} ${membro.role}  <img src="./assets/img/${membro.image}" alt=""></img>`
     
    //   console.log(typeof membro)
    // nome dei membri
    console.log(membro.name)
    // ruolo
    console.log(membro.role)
    // stringa immagine
    console.log(membro.image)
    console.log("_________________")
  }

  