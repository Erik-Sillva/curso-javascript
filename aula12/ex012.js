const agora = new Date()
const hora = agora.getHours()

console.log(`Horário: ${hora} Horas`);

if (hora < 5) {
    console.log('Boa Madrugada!');
} else if (hora < 12) {
    console.log('Bom Dia!');
} else if (hora <= 18) {
    console.log('Boa Tarde!');
} else if (hora <= 24) {
    console.log('Boa Noite!');
}