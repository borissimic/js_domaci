/*John Doe je dobio zadatak da napuni kosaru vocem, ali kako John jede samo McDonalds on ne zna koja hrana je voce. Pomozi mu tako da napravis funkciju koja ce primati niz prehrambenih artikala i vracati je li taj proizvod voce. Od voca mu trebaju samo jabuke, kruske, banane, narance i jagode. Takoder, svaki artikal ima svoj cijenu, a John ima samo 50kn. Napravi drugu funkciju koja ce primati niz voca i vracati kosaru punu voca do 50kn. Isto tako pripazi na to da John voli raznovrsno voce, stoga mu je bitno da u kosaru pokusa staviti svaku vrstu voca. Kada se u kosarici nalazi barem 1 komad od svake vrste voca, on ce nastavit uzimat voce po redu, neovisno o vrsti voca.*/
function foodFactory(name, type, price) {
  return {
    name,
    type,
    price,
    isFruit: () => {
      if (type === "fruit") {
        return true;
      }

      return false;
    },
  };
}
const foods = [
  foodFactory("burger", "junk", 0),
  foodFactory("apple", "fruit", 1),
  foodFactory("pear", "fruit", 2),
  foodFactory("banana", "fruit", 3),
  foodFactory("orange", "fruit", 4),
  foodFactory("strawbery", "fruit", 5),
];

foods.forEach(({ name, isFruit }) =>
  console.log(isFruit() ? `${name} is Fruit` : `${name} is Junk food!`)
);
