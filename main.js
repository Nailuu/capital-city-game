const countries = [
    {"name":"Afghanistan","code":"AF","capital":"Kabul"},
    {"name":"Aland Islands","code":"AX","capital":"Mariehamn"},
    {"name":"Albania","code":"AL","capital":"Tirana"},
    {"name":"Algeria","code":"DZ","capital":"Algiers"},
    {"name":"American Samoa","code":"AS","capital":"Pago Pago"},
    {"name":"Andorra","code":"AD","capital":"Andorra la Vella"},
    {"name":"Angola","code":"AO","capital":"Luanda"},
    {"name":"Anguilla","code":"AI","capital":"The Valley"},
    {"name":"Antarctica","code":"AQ","capital":"Antarctica"},
    {"name":"Antigua and Barbuda","code":"AG","capital":"St. John's"},
    {"name":"Argentina","code":"AR","capital":"Buenos Aires"},
    {"name":"Armenia","code":"AM","capital":"Yerevan"},
    {"name":"Aruba","code":"AW","capital":"Oranjestad"},
    {"name":"Australia","code":"AU","capital":"Canberra"},
    {"name":"Austria","code":"AT","capital":"Vienna"},
    {"name":"Azerbaijan","code":"AZ","capital":"Baku"},
    {"name":"Bahamas","code":"BS","capital":"Nassau"},
    {"name":"Bahrain","code":"BH","capital":"Manama"},
    {"name":"Bangladesh","code":"BD","capital":"Dhaka"},
    {"name":"Barbados","code":"BB","capital":"Bridgetown"},
    {"name":"Belarus","code":"BY","capital":"Minsk"},
    {"name":"Belgium","code":"BE","capital":"Brussels"},
    {"name":"Belize","code":"BZ","capital":"Belmopan"},
    {"name":"Benin","code":"BJ","capital":"Porto-Novo"},
    {"name":"Bermuda","code":"BM","capital":"Hamilton"},
    {"name":"Bhutan","code":"BT","capital":"Thimphu"},
    {"name":"Bolivia","code":"BO","capital":"Sucre"},
    {"name":"Bonaire, Sint Eustatius and Saba","code":"BQ","capital":"Kralendijk"},
    {"name":"Bosnia and Herzegovina","code":"BA","capital":"Sarajevo"},
    {"name":"Botswana","code":"BW","capital":"Gaborone"},
    {"name":"Bouvet Island","code":"BV","capital":""},
    {"name":"Brazil","code":"BR","capital":"Brasilia"},
    {"name":"British Indian Ocean Territory","code":"IO","capital":"Diego Garcia"},
    {"name":"Brunei Darussalam","code":"BN","capital":"Bandar Seri Begawan"},
    {"name":"Bulgaria","code":"BG","capital":"Sofia"},
    {"name":"Burkina Faso","code":"BF","capital":"Ouagadougou"},
    {"name":"Burundi","code":"BI","capital":"Bujumbura"},
    {"name":"Cambodia","code":"KH","capital":"Phnom Penh"},
    {"name":"Cameroon","code":"CM","capital":"Yaounde"},
    {"name":"Canada","code":"CA","capital":"Ottawa"},
    {"name":"Cape Verde","code":"CV","capital":"Praia"},
    {"name":"Cayman Islands","code":"KY","capital":"George Town"},
    {"name":"Central African Republic","code":"CF","capital":"Bangui"},
    {"name":"Chad","code":"TD","capital":"N'Djamena"},
    {"name":"Chile","code":"CL","capital":"Santiago"},
    {"name":"China","code":"CN","capital":"Beijing"},
    {"name":"Christmas Island","code":"CX","capital":"Flying Fish Cove"},
    {"name":"Cocos (Keeling) Islands","code":"CC","capital":"West Island"},
    {"name":"Colombia","code":"CO","capital":"Bogota"},
    {"name":"Comoros","code":"KM","capital":"Moroni"},
    {"name":"Congo","code":"CG","capital":"Brazzaville"},
    {"name":"Congo, Democratic Republic of the Congo","code":"CD","capital":"Kinshasa"},
    {"name":"Cook Islands","code":"CK","capital":"Avarua"},
    {"name":"Costa Rica","code":"CR","capital":"San Jose"},
    {"name":"Cote D'Ivoire","code":"CI","capital":"Yamoussoukro"},
    {"name":"Croatia","code":"HR","capital":"Zagreb"},
    {"name":"Cuba","code":"CU","capital":"Havana"},
    {"name":"Curacao","code":"CW","capital":"Willemstad"},
    {"name":"Cyprus","code":"CY","capital":"Nicosia"},
    {"name":"Czech Republic","code":"CZ","capital":"Prague"},
    {"name":"Denmark","code":"DK","capital":"Copenhagen"},
    {"name":"Djibouti","code":"DJ","capital":"Djibouti"},
    {"name":"Dominica","code":"DM","capital":"Roseau"},
    {"name":"Dominican Republic","code":"DO","capital":"Santo Domingo"},
    {"name":"Ecuador","code":"EC","capital":"Quito"},
    {"name":"Egypt","code":"EG","capital":"Cairo"},
    {"name":"El Salvador","code":"SV","capital":"San Salvador"},
    {"name":"Equatorial Guinea","code":"GQ","capital":"Malabo"},
    {"name":"Eritrea","code":"ER","capital":"Asmara"},
    {"name":"Estonia","code":"EE","capital":"Tallinn"},
    {"name":"Ethiopia","code":"ET","capital":"Addis Ababa"},
    {"name":"Falkland Islands (Malvinas)","code":"FK","capital":"Stanley"},
    {"name":"Faroe Islands","code":"FO","capital":"Torshavn"},
    {"name":"Fiji","code":"FJ","capital":"Suva"},
    {"name":"Finland","code":"FI","capital":"Helsinki"},
    {"name":"France","code":"FR","capital":"Paris"},
    {"name":"French Guiana","code":"GF","capital":"Cayenne"},
    {"name":"French Polynesia","code":"PF","capital":"Papeete"},
    {"name":"French Southern Territories","code":"TF","capital":"Port-aux-Francais"},
    {"name":"Gabon","code":"GA","capital":"Libreville"},
    {"name":"Gambia","code":"GM","capital":"Banjul"},
    {"name":"Georgia","code":"GE","capital":"Tbilisi"},
    {"name":"Germany","code":"DE","capital":"Berlin"},
    {"name":"Ghana","code":"GH","capital":"Accra"},
    {"name":"Gibraltar","code":"GI","capital":"Gibraltar"},
    {"name":"Greece","code":"GR","capital":"Athens"},
    {"name":"Greenland","code":"GL","capital":"Nuuk"},
    {"name":"Grenada","code":"GD","capital":"St. George's"},
    {"name":"Guadeloupe","code":"GP","capital":"Basse-Terre"},
    {"name":"Guam","code":"GU","capital":"Hagatna"},
    {"name":"Guatemala","code":"GT","capital":"Guatemala City"},
    {"name":"Guernsey","code":"GG","capital":"St Peter Port"},
    {"name":"Guinea","code":"GN","capital":"Conakry"},
    {"name":"Guinea-Bissau","code":"GW","capital":"Bissau"},
    {"name":"Guyana","code":"GY","capital":"Georgetown"},
    {"name":"Haiti","code":"HT","capital":"Port-au-Prince"},
    {"name":"Heard Island and Mcdonald Islands","code":"HM","capital":""},
    {"name":"Holy See (Vatican City State)","code":"VA","capital":"Vatican City"},
    {"name":"Honduras","code":"HN","capital":"Tegucigalpa"},
    {"name":"Hong Kong","code":"HK","capital":"Hong Kong"},
    {"name":"Hungary","code":"HU","capital":"Budapest"},
    {"name":"Iceland","code":"IS","capital":"Reykjavik"},
    {"name":"India","code":"IN","capital":"New Delhi"},
    {"name":"Indonesia","code":"ID","capital":"Jakarta"},
    {"name":"Iran, Islamic Republic of","code":"IR","capital":"Tehran"},
    {"name":"Iraq","code":"IQ","capital":"Baghdad"},
    {"name":"Ireland","code":"IE","capital":"Dublin"},
    {"name":"Isle of Man","code":"IM","capital":"Douglas, Isle of Man"},
    {"name":"Israel","code":"IL","capital":"Jerusalem"},
    {"name":"Italy","code":"IT","capital":"Rome"},
    {"name":"Jamaica","code":"JM","capital":"Kingston"},
    {"name":"Japan","code":"JP","capital":"Tokyo"},
    {"name":"Jersey","code":"JE","capital":"Saint Helier"},
    {"name":"Jordan","code":"JO","capital":"Amman"},
    {"name":"Kazakhstan","code":"KZ","capital":"Astana"},
    {"name":"Kenya","code":"KE","capital":"Nairobi"},
    {"name":"Kiribati","code":"KI","capital":"Tarawa"},
    {"name":"Korea, Democratic People's Republic of","code":"KP","capital":"Pyongyang"},
    {"name":"Korea, Republic of","code":"KR","capital":"Seoul"},
    {"name":"Kosovo","code":"XK","capital":"Pristina"},
    {"name":"Kuwait","code":"KW","capital":"Kuwait City"},
    {"name":"Kyrgyzstan","code":"KG","capital":"Bishkek"},
    {"name":"Lao People's Democratic Republic","code":"LA","capital":"Vientiane"},
    {"name":"Latvia","code":"LV","capital":"Riga"},
    {"name":"Lebanon","code":"LB","capital":"Beirut"},
    {"name":"Lesotho","code":"LS","capital":"Maseru"},
    {"name":"Liberia","code":"LR","capital":"Monrovia"},
    {"name":"Libyan Arab Jamahiriya","code":"LY","capital":"Tripolis"},
    {"name":"Liechtenstein","code":"LI","capital":"Vaduz"},
    {"name":"Lithuania","code":"LT","capital":"Vilnius"},
    {"name":"Luxembourg","code":"LU","capital":"Luxembourg"},
    {"name":"Macao","code":"MO","capital":"Macao"},
    {"name":"Macedonia, the Former Yugoslav Republic of","code":"MK","capital":"Skopje"},
    {"name":"Madagascar","code":"MG","capital":"Antananarivo"},
    {"name":"Malawi","code":"MW","capital":"Lilongwe"},
    {"name":"Malaysia","code":"MY","capital":"Kuala Lumpur"},
    {"name":"Maldives","code":"MV","capital":"Male"},
    {"name":"Mali","code":"ML","capital":"Bamako"},
    {"name":"Malta","code":"MT","capital":"Valletta"},
    {"name":"Marshall Islands","code":"MH","capital":"Majuro"},
    {"name":"Martinique","code":"MQ","capital":"Fort-de-France"},
    {"name":"Mauritania","code":"MR","capital":"Nouakchott"},
    {"name":"Mauritius","code":"MU","capital":"Port Louis"},
    {"name":"Mayotte","code":"YT","capital":"Mamoudzou"},
    {"name":"Mexico","code":"MX","capital":"Mexico City"},
    {"name":"Micronesia, Federated States of","code":"FM","capital":"Palikir"},
    {"name":"Moldova, Republic of","code":"MD","capital":"Chisinau"},
    {"name":"Monaco","code":"MC","capital":"Monaco"},
    {"name":"Mongolia","code":"MN","capital":"Ulan Bator"},
    {"name":"Montenegro","code":"ME","capital":"Podgorica"},
    {"name":"Montserrat","code":"MS","capital":"Plymouth"},
    {"name":"Morocco","code":"MA","capital":"Rabat"},
    {"name":"Mozambique","code":"MZ","capital":"Maputo"},
    {"name":"Myanmar","code":"MM","capital":"Nay Pyi Taw"},
    {"name":"Namibia","code":"NA","capital":"Windhoek"},
    {"name":"Nauru","code":"NR","capital":"Yaren"},
    {"name":"Nepal","code":"NP","capital":"Kathmandu"},
    {"name":"Netherlands","code":"NL","capital":"Amsterdam"},
    {"name":"Netherlands Antilles","code":"AN","capital":"Willemstad"},
    {"name":"New Caledonia","code":"NC","capital":"Noumea"},
    {"name":"New Zealand","code":"NZ","capital":"Wellington"},
    {"name":"Nicaragua","code":"NI","capital":"Managua"},
    {"name":"Niger","code":"NE","capital":"Niamey"},
    {"name":"Nigeria","code":"NG","capital":"Abuja"},
    {"name":"Niue","code":"NU","capital":"Alofi"},
    {"name":"Norfolk Island","code":"NF","capital":"Kingston"},
    {"name":"Northern Mariana Islands","code":"MP","capital":"Saipan"},
    {"name":"Norway","code":"NO","capital":"Oslo"},
    {"name":"Oman","code":"OM","capital":"Muscat"},
    {"name":"Pakistan","code":"PK","capital":"Islamabad"},
    {"name":"Palau","code":"PW","capital":"Melekeok"},
    {"name":"Palestinian Territory, Occupied","code":"PS","capital":"East Jerusalem"},
    {"name":"Panama","code":"PA","capital":"Panama City"},
    {"name":"Papua New Guinea","code":"PG","capital":"Port Moresby"},
    {"name":"Paraguay","code":"PY","capital":"Asuncion"},
    {"name":"Peru","code":"PE","capital":"Lima"},
    {"name":"Philippines","code":"PH","capital":"Manila"},
    {"name":"Pitcairn","code":"PN","capital":"Adamstown"},
    {"name":"Poland","code":"PL","capital":"Warsaw"},
    {"name":"Portugal","code":"PT","capital":"Lisbon"},
    {"name":"Puerto Rico","code":"PR","capital":"San Juan"},
    {"name":"Qatar","code":"QA","capital":"Doha"},
    {"name":"Reunion","code":"RE","capital":"Saint-Denis"},
    {"name":"Romania","code":"RO","capital":"Bucharest"},
    {"name":"Russian Federation","code":"RU","capital":"Moscow"},
    {"name":"Rwanda","code":"RW","capital":"Kigali"},
    {"name":"Saint Barthelemy","code":"BL","capital":"Gustavia"},
    {"name":"Saint Helena","code":"SH","capital":"Jamestown"},
    {"name":"Saint Kitts and Nevis","code":"KN","capital":"Basseterre"},
    {"name":"Saint Lucia","code":"LC","capital":"Castries"},
    {"name":"Saint Martin","code":"MF","capital":"Marigot"},
    {"name":"Saint Pierre and Miquelon","code":"PM","capital":"Saint-Pierre"},
    {"name":"Saint Vincent and the Grenadines","code":"VC","capital":"Kingstown"},
    {"name":"Samoa","code":"WS","capital":"Apia"},
    {"name":"San Marino","code":"SM","capital":"San Marino"},
    {"name":"Sao Tome and Principe","code":"ST","capital":"Sao Tome"},
    {"name":"Saudi Arabia","code":"SA","capital":"Riyadh"},
    {"name":"Senegal","code":"SN","capital":"Dakar"},
    {"name":"Serbia","code":"RS","capital":"Belgrade"},
    {"name":"Serbia and Montenegro","code":"CS","capital":"Belgrade"},
    {"name":"Seychelles","code":"SC","capital":"Victoria"},
    {"name":"Sierra Leone","code":"SL","capital":"Freetown"},
    {"name":"Singapore","code":"SG","capital":"Singapur"},
    {"name":"Sint Maarten","code":"SX","capital":"Philipsburg"},
    {"name":"Slovakia","code":"SK","capital":"Bratislava"},
    {"name":"Slovenia","code":"SI","capital":"Ljubljana"},
    {"name":"Solomon Islands","code":"SB","capital":"Honiara"},
    {"name":"Somalia","code":"SO","capital":"Mogadishu"},
    {"name":"South Africa","code":"ZA","capital":"Pretoria"},
    {"name":"South Georgia and the South Sandwich Islands","code":"GS","capital":"Grytviken"},
    {"name":"South Sudan","code":"SS","capital":"Juba"},
    {"name":"Spain","code":"ES","capital":"Madrid"},
    {"name":"Sri Lanka","code":"LK","capital":"Colombo"},
    {"name":"Sudan","code":"SD","capital":"Khartoum"},
    {"name":"Suriname","code":"SR","capital":"Paramaribo"},
    {"name":"Svalbard and Jan Mayen","code":"SJ","capital":"Longyearbyen"},
    {"name":"Swaziland","code":"SZ","capital":"Mbabane"},
    {"name":"Sweden","code":"SE","capital":"Stockholm"},
    {"name":"Switzerland","code":"CH","capital":"Berne"},
    {"name":"Syrian Arab Republic","code":"SY","capital":"Damascus"},
    {"name":"Taiwan, Province of China","code":"TW","capital":"Taipei"},
    {"name":"Tajikistan","code":"TJ","capital":"Dushanbe"},
    {"name":"Tanzania, United Republic of","code":"TZ","capital":"Dodoma"},
    {"name":"Thailand","code":"TH","capital":"Bangkok"},
    {"name":"Timor-Leste","code":"TL","capital":"Dili"},
    {"name":"Togo","code":"TG","capital":"Lome"},
    {"name":"Tokelau","code":"TK","capital":""},
    {"name":"Tonga","code":"TO","capital":"Nuku'alofa"},
    {"name":"Trinidad and Tobago","code":"TT","capital":"Port of Spain"},
    {"name":"Tunisia","code":"TN","capital":"Tunis"},
    {"name":"Turkey","code":"TR","capital":"Ankara"},
    {"name":"Turkmenistan","code":"TM","capital":"Ashgabat"},
    {"name":"Turks and Caicos Islands","code":"TC","capital":"Cockburn Town"},
    {"name":"Tuvalu","code":"TV","capital":"Funafuti"},
    {"name":"Uganda","code":"UG","capital":"Kampala"},
    {"name":"Ukraine","code":"UA","capital":"Kiev"},
    {"name":"United Arab Emirates","code":"AE","capital":"Abu Dhabi"},
    {"name":"United Kingdom","code":"GB","capital":"London"},
    {"name":"United States","code":"US","capital":"Washington"},
    {"name":"United States Minor Outlying Islands","code":"UM","capital":""},
    {"name":"Uruguay","code":"UY","capital":"Montevideo"},
    {"name":"Uzbekistan","code":"UZ","capital":"Tashkent"},
    {"name":"Vanuatu","code":"VU","capital":"Port Vila"},
    {"name":"Venezuela","code":"VE","capital":"Caracas"},
    {"name":"Viet Nam","code":"VN","capital":"Hanoi"},
    {"name":"Virgin Islands, British","code":"VG","capital":"Road Town"},
    {"name":"Virgin Islands, U.s.","code":"VI","capital":"Charlotte Amalie"},
    {"name":"Wallis and Futuna","code":"WF","capital":"Mata Utu"},
    {"name":"Western Sahara","code":"EH","capital":"El-Aaiun"},
    {"name":"Yemen","code":"YE","capital":"Sanaa"},
    {"name":"Zambia","code":"ZM","capital":"Lusaka"},
    {"name":"Zimbabwe","code":"ZW","capital":"Harare"}
];

function random() {
    let range = 251;
    return Math.floor(Math.random() * range);
}

function getCountryName(random) {
    return countries[random].name
}

function getCodeName(random) {
    return countries[random].code
}

function getFlag(code) {
    let filetype = ".svg";
    let url = "https://flagcdn.com/";
    code = code.toLowerCase();
    return url + code + filetype;
}

function getAnswer(random) {
    return countries[random].capital
}

function getRandomAnswer(random) {
    return countries[random].capital
}

function applyFlag(url) {
    return document.getElementById("flag").src = url;
}

function applyCountryName(name) {
    return document.getElementById("country").innerHTML = name;
}

function applyGoodAnswer(capital, id) {
    return document.getElementById(id).innerHTML = capital;
}

function applyRandomAnswer(capital, id) {
    return document.getElementById(id).innerHTML = capital;
}

function verifyAnswer(id, goodAnswer) {
    content = document.getElementById(id).innerHTML;
    if(content == goodAnswer) {
        return document.getElementById(id).style.backgroundColor = "#a7c957", document.getElementById(id).style.color = "#344e41";
    } else {
        return document.getElementById(id).style.backgroundColor = "#bc4749";
    }
}

const ids = ["btn1", "btn2", "btn3", "btn4"];
const shuffledIDs = ids.sort((a, b) => 0.5 - Math.random());

window.addEventListener('load', event => {

    let random = Math.floor(Math.random() * 251);

    applyFlag(getFlag(getCodeName(random)));
    applyCountryName(getCountryName(random));

    applyGoodAnswer(getAnswer(random), shuffledIDs[0]);
    applyRandomAnswer(getRandomAnswer(Math.floor(Math.random() * 251)), shuffledIDs[1])
    applyRandomAnswer(getRandomAnswer(Math.floor(Math.random() * 251)), shuffledIDs[2])
    applyRandomAnswer(getRandomAnswer(Math.floor(Math.random() * 251)), shuffledIDs[3])

    document.getElementById("btn1").onclick = function() {  
        verifyAnswer("btn1", getAnswer(random));
        // verifyAnswer("btn2", getAnswer(random));
        // verifyAnswer("btn3", getAnswer(random));
        // verifyAnswer("btn4", getAnswer(random));
        };

    document.getElementById("btn2").onclick = function() {  
        // verifyAnswer("btn1", getAnswer(random));
        verifyAnswer("btn2", getAnswer(random));
        // verifyAnswer("btn3", getAnswer(random));
        // verifyAnswer("btn4", getAnswer(random));
        };

    document.getElementById("btn3").onclick = function() {  
        // verifyAnswer("btn1", getAnswer(random));
        // verifyAnswer("btn2", getAnswer(random));
        verifyAnswer("btn3", getAnswer(random));
        // verifyAnswer("btn4", getAnswer(random));
        };
    
    document.getElementById("btn4").onclick = function() {  
        // verifyAnswer("btn1", getAnswer(random));
        // verifyAnswer("btn2", getAnswer(random));
        // verifyAnswer("btn3", getAnswer(random));
        verifyAnswer("btn4", getAnswer(random));
        };

});