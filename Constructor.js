// Stretch goal Component Constructor

const newData = {
  heading: `New heading from Constructor`,
  date: "Nov 26th, 2017",
  paragraphs: [
    `Constructor ipsum dolor sit amet ben twi'lek padmé darth darth darth moff
    hutt organa twi'lek. Ben amidala secura skywalker lando moff wicket
    tatooine luke. Solo wampa wampa calrissian yoda moff. Darth grievous
    darth gonk darth hutt. Darth baba skywalker watto fett jango maul han.
    Mon ewok sidious sidious lando kenobi grievous gamorrean solo. Yoda
    wedge utapau darth calamari. Hutt calamari darth jabba. Darth dooku
    amidala organa moff. Boba darth binks solo hutt skywalker dantooine
    skywalker. Qui-gonn jar twi'lek jinn leia jango skywalker mon.`,
    `Constructor fett calamari anakin skywalker hutt. Alderaan darth kenobi
    darth r2-d2 windu mothma. Sidious darth calamari moff. Wampa mothma
    sith wedge solo mara. Darth gonk maul sith moff chewbacca palpatine
    mace amidala. C-3po solo skywalker anakin yoda leia. Maul wampa bespin
    watto jade ewok darth jabba. Lando dantooine moff k-3po dantooine
    luke. Fisto mandalore darth wedge c-3p0 ahsoka. Secura moff palpatine
    fett. Anakin sith darth darth. Moff solo leia ben ponda jade. Binks
    jango aayla skywalker skywalker cade. Mustafar darth ventress anakin
    watto. Yavin jawa sebulba owen jinn tatooine sith organa.`,
    `Constructor hutt jawa leia calamari ventress skywalker yoda. Binks wicket
    hutt coruscant sidious naboo ackbar tatooine. Hutt lars padmé darth.
    Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba
    wicket han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala.
    Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia moff
    calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth
    palpatine obi-wan mon.`
  ]
};

class CreateArticle {
  constructor(data) {
    this.data = data;
    this.article = document.createElement("div");
    this.article.classList.add("article");
    this.createHeading();
    this.createDate();
    this.createParagraphs();
    this.createSpan();
    document.body.insertAdjacentElement("afterend", this.article);
  }

  createHeading() {
    const heading = document.createElement("h2");
    heading.textContent = this.data.heading;
    this.article.appendChild(heading);
  }

  createDate() {
    const date = document.createElement("p");
    date.textContent = this.data.date;
    date.classList.add("date");
    this.article.appendChild(date);
  }

  createParagraphs() {
    const paragraphs = [];
    this.data.paragraphs.forEach(item => {
      let result = "";
      result = document.createElement("p");
      result.textContent = item;
      paragraphs.push(result);
    });
    paragraphs.forEach(item => {
      this.article.appendChild(item);
    });
  }

  createSpan() {
    const span = document.createElement("span");
    span.textContent = "expand";
    span.classList.add("expandButton");
    this.article.appendChild(span);
  }
}

const newArticle = new CreateArticle(newData);
