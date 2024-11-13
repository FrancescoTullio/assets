const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];


const sectionMain = document.getElementById("section-card");

const genCard = (member) => {
  const { name, role, email, img } = member;
  return `<div class="col-4 col-md-6 col-sm-12">
                    <div class="card mb-3" style="max-width: 540px;">
                        <div class="row g-0">
                          <div class="col-md-4">
                            <img src="./${img}" class="img-fluid rounded-start" alt="...">
                          </div>
                          <div class="col-md-8">
                            <div class="card-body">
                              <h5 class="card-title">${name}</h5>
                              <p class="card-text">${role}</p>
                              <a href="${email}" class="card-text">${email}</a>
                            </div>
                          </div>
                        </div>
                      </div>
                </div>`
}


const renderCart = () => {
  let cards = "";
  for (let i = 0; i < teamMembers.length; i++) {
    const cardForArray = genCard(teamMembers[i]);
    cards += cardForArray;
  }
  sectionMain.innerHTML = cards;
};

renderCart();