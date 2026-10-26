const kunder = [
  { namn: "Mia", arVip: true, kopSumma: 1200 },
  { namn: "Sam", arVip: false, kopSumma: 450 },
  { namn: "Robin", arVip: true, kopSumma: 800 }
];

const getVIPBonus = (kunder) => {
    let resultat = []

    for(kund of kunder){
        if (kund.arVip){
            resultat.push({namn: kund.namn, kopSumma: kund.kopSumma*0.9})
        }
    }
    return resultat
}

console.log(getVIPBonus(kunder))