let nickname = 'Erik';
let exp = 999;
let nivel = "";

if (exp < 1000) {
    nivel = "Ferro";
} else if (exp >= 1001 && exp <= 2000) {
    nivel = "Bronze";
} else if (exp >= 2001 && exp <= 5000) {
    nivel = "Prata";
} else if (exp >= 5001 && exp <= 6000) {
    nivel = "Ouro";
} else if (exp >= 6001 && exp <= 7000) {
    nivel = "Platina";
} else if (exp >= 7001 && exp <= 8000) {
    nivel = "Diamante";
} else if (exp >= 8001 && exp <= 9000) {
    nivel = "Ascendente";
} else if (exp >= 9001 && exp <= 10000) {
    nivel = "Imortal";
} else if (exp >= 10001) {
    nivel = "Radiante";
}

console.log(`O herói de nome ${nickname} está no nível ${nivel}`);