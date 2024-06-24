let slider;
let sliderLabel;
let maxVal = 999999999;
let minVal = 100000000;
let headImage;
let buttonWidth = 90;
let buttonHeight = 50;
let buttonY;
let margin = 20;
let button1X;
let button2X;
let dropdowns = [];
let dropdownCount = 60;
let additionalDropdown;
let countries = ["Afganistan", "Albania", "Algieria", "Andora", "Angola", "Antigua i Barbuda", "Argentyna", "Armenia", "Australia", "Austria", "Azerbejdżan", "Bahamy", "Bahrajn", "Bangladesz", "Barbados", "Białoruś", "Belgia", "Belize", "Benin", "Bhutan", "Boliwia", "Bośnia i Hercegowina", "Botswana", "Brazylia", "Brunei", "Bułgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Kambodża", "Kamerun", "Kanada", "Republika Środkowoafrykańska", "Czad", "Chile", "Chiny", "Kolumbia", "Komory", "Demokratyczna Republika Konga", "Republika Konga", "Kostaryka", "Chorwacja", "Kuba", "Cypr", "Czechy", "Dania", "Dżibuti", "Dominika", "Dominikana", "Ekwador", "Egipt", "Salwador", "Gwinea Równikowa", "Erytrea", "Estonia", "Eswatini", "Etiopia", "Fidżi", "Finlandia", "Francja", "Gabon", "Gambia", "Gruzja", "Niemcy", "Ghana", "Grecja", "Grenada", "Gwatemala", "Gwinea", "Gwinea Bissau", "Gujana", "Haiti", "Honduras", "Węgry", "Islandia", "Indie", "Indonezja", "Iran", "Irak", "Irlandia", "Izrael", "Włochy", "Jamajka", "Japonia", "Jordania", "Kazachstan", "Kenia", "Kiribati", "Korea Północna", "Korea Południowa", "Kosowo", "Kuwejt", "Kirgistan", "Laos", "Łotwa", "Liban", "Lesotho", "Liberia", "Libia", "Liechtenstein", "Litwa", "Luksemburg", "Madagaskar", "Malawi", "Malezja", "Malediwy", "Mali", "Malta", "Wyspy Marshalla", "Mauretania", "Mauritius", "Meksyk", "Mikronezja", "Mołdawia", "Monako", "Mongolia", "Czarnogóra", "Maroko", "Mozambik", "Mjanma", "Namibia", "Nauru", "Nepal", "Holandia", "Nowa Zelandia", "Nikaragua", "Niger", "Nigeria", "Macedonia Północna", "Norwegia", "Oman", "Pakistan", "Palau", "Panama", "Papua-Nowa Gwinea", "Paragwaj", "Peru", "Filipiny", "Polska", "Portugalia", "Katar", "Rumunia", "Rosja", "Rwanda", "Saint Kitts i Nevis", "Saint Lucia", "Saint Vincent i Grenadyny", "Samoa", "San Marino", "Wyspy Świętego Tomasza i Książęca", "Arabia Saudyjska", "Senegal", "Serbia", "Seszele", "Sierra Leone", "Singapur", "Słowacja", "Słowenia", "Wyspy Salomona", "Somalia", "Republika Południowej Afryki", "Sudan Południowy", "Hiszpania", "Sri Lanka", "Sudan", "Surinam", "Szwecja", "Szwajcaria", "Syria", "Tajwan", "Tadżykistan", "Tanzania", "Tajlandia", "Timor Wschodni", "Togo", "Tonga", "Trynidad i Tobago", "Tunezja", "Turcja", "Turkmenistan", "Tuvalu", "Uganda", "Ukraina", "Zjednoczone Emiraty Arabskie", "Wielka Brytania", "Stany Zjednoczone", "Urugwaj", "Uzbekistan", "Vanuatu", "Watykan", "Wenezuela", "Wietnam", "Jemen", "Zambia", "Zimbabwe"];

function preload() {
  headImage = loadImage('PASEK1.png'); 
}

function setup() {
  createCanvas(1920, 1080);
  
  let startX = 145;
  let startY = 520;
  let dropdownWidth = 50; 
  let dropdownMargin = 1;
  let dropdownRows = 2; 
  let dropdownPerRow = dropdownCount / dropdownRows;

  for (let j = 0; j < dropdownRows; j++) {
    for (let i = 0; i < dropdownPerRow; i++) {
      let dropdown = createSelect();
  
      dropdown.option('--');
      dropdown.disable('--');
      dropdown.selected('--');
  
      dropdown.option('A');
      dropdown.option('Ą');
      dropdown.option('B');
      dropdown.option('C');
      dropdown.option('Ć');
      dropdown.option('D');
      dropdown.option('E');
      dropdown.option('Ę');
      dropdown.option('F');
      dropdown.option('G');
      dropdown.option('H');
      dropdown.option('I');
      dropdown.option('J');
      dropdown.option('K');
      dropdown.option('L');
      dropdown.option('Ł');
      dropdown.option('M');
      dropdown.option('N');
      dropdown.option('O');
      dropdown.option('Ó');
      dropdown.option('P');
      dropdown.option('Q');
      dropdown.option('R');
      dropdown.option('S');
      dropdown.option('Ś');
      dropdown.option('T');
      dropdown.option('U');
      dropdown.option('V');
      dropdown.option('W');
      dropdown.option('X');
      dropdown.option('Y');
      dropdown.option('Z');
      dropdown.option('Ź');
      dropdown.option('Ż');
      dropdown.option('-');
      let x = startX + i * (dropdownWidth + dropdownMargin);
      let y = startY + j * 100;
      dropdown.position(x, y);
      dropdowns.push(dropdown);
    }
  }
  
  buttonY = 1010;
  button1X = width - 210;
  button2X = width - 110;
  slider = createSlider(minVal, maxVal);
  slider.position(145, 750);
  slider.style('width', '550px');
  
  sliderLabel = createP();
  sliderLabel.position(145, 700);
  sliderLabel.style('font-size', '20px');  
  sliderLabel.style('font-family', 'lato');
  updateLabel();
  
  countries = shuffle(countries);

  additionalDropdown = createSelect();
  additionalDropdown.option('--');
  additionalDropdown.disable('--');
  additionalDropdown.selected('--');
  countries.forEach(country => additionalDropdown.option(country));
  additionalDropdown.position(145, 850);
  
  textSize(20);
}

function draw() {
  background(255);
  image(headImage, 0, 0, 1920, 220);
  
  fill(0);
  textStyle(BOLDITALIC);
  textSize(30);
  textAlign(CENTER, CENTER);
  text("Uzupełnij wymagane informacje", width/2, 300);
  textSize(22);
  textAlign(LEFT);
  
  updateLabel();
  textStyle(NORMAL);
  text('Numer telefonu', 145, 700);
  text('Imię', 145, 500);
  text('Nazwisko', 145, 600);
  text('Kraj pochodzenia', 145, 820);
  
  
  textAlign(CENTER, CENTER);
  textStyle(NORMAL);
  fill(255);
  drawButton(button1X, buttonY, buttonWidth, buttonHeight, "Cofnij", '#FFB3B3');
  drawButton(button2X, buttonY, buttonWidth, buttonHeight, "Dalej", '#E30613');
  textAlign(LEFT);
  
}

function drawButton(x, y, w, h, label, baseColor) {
  let hoverColor = lerpColor(color(baseColor), color(0), 0.2);
  if (isMouseOver(x, y, w, h)) {
    fill(hoverColor);
  } else {
    fill(baseColor);
  }
  noStroke();
  rect(x, y, w, h);
  fill(255);
  textSize(20);
  text(label, x + w / 2, y + h / 2);
}

function isMouseOver(x, y, w, h) {
  return mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
}

function mousePressed() {
  if (isMouseOver(button2X, buttonY, buttonWidth, buttonHeight)) {
    window.open('https://www.wp.pl', '_self');
  }
}

function updateLabel() {
  let val = slider.value();
  let valStr = val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  sliderLabel.html('+48 ' + valStr);
}
