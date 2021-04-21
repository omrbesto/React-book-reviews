import Genres from "./genres";
import { Fragment } from "react";
import RomImg1 from "../assets/books/rom1.png";
import RomImg2 from "../assets/books/rom2.png";
import RomImg3 from "../assets/books/rom3.png";
import FanImg1 from "../assets/books/fan1.png";
import FanImg2 from "../assets/books/fan2.png";
import FanImg3 from "../assets/books/fan3.png";
import FicImg1 from "../assets/books/fic1.png";
import FicImg2 from "../assets/books/fic2.png";
import FicImg3 from "../assets/books/fic3.png";
import NonImg1 from "../assets/books/non1.png";
import NonImg2 from "../assets/books/non2.png";
import NonImg3 from "../assets/books/non3.png";
import ChiImg1 from "../assets/books/chi1.png";
import ChiImg2 from "../assets/books/chi2.png";
import ChiImg3 from "../assets/books/chi3.png";
import HisImg1 from "../assets/books/his1.png";
import HisImg2 from "../assets/books/his2.png";
import HisImg3 from "../assets/books/his3.png";
import HorImg1 from "../assets/books/hor1.png";
import HorImg2 from "../assets/books/hor2.png";
import HorImg3 from "../assets/books/hor3.png";
import ClaImg1 from "../assets/books/cla1.png";
import ClaImg2 from "../assets/books/cla2.png";
import ClaImg3 from "../assets/books/cla3.png";
import InsImg1 from "../assets/books/ins1.png";
import InsImg2 from "../assets/books/ins2.png";
import InsImg3 from "../assets/books/ins3.png";
import ManImg1 from "../assets/books/man1.png";
import ManImg2 from "../assets/books/man2.png";
import ManImg3 from "../assets/books/man3.png";

const Page6 = () => {
  const genres = [
    { name: "Romance", bt1: "Sweet & Bitter Magic", bt2: "A Trial of Sorcerers", bt3: "Me Before You", bi1: RomImg1, bi2: RomImg2, bi3: RomImg3, rating1: "3.26", rating2: "4.84", rating3: "1.16" },
    { name: "Fantasy", bt1: "Broken Compass", bt2: "Inflame", bt3: "Dark Storm", bi1: FanImg1, bi2: FanImg2, bi3: FanImg3, rating1: "2.66", rating2: "4.70", rating3: "3.82" },
    { name: "Fiction", bt1: "The Next Wife", bt2: "Northern Spy", bt3: "Bossy Grump", bi1: FicImg1, bi2: FicImg2, bi3: FicImg3, rating1: "3.23", rating2: "1.05", rating3: "4.80" },
    { name: "Non-fiction", bt1: "Can't Hurt Me: Master Your Mind and Defy the Odds", bt2: "The Hill We Climb: An Inaugural Poem for the Country", bt3: "Born a Crime: Stories From a South African Childhood", bi1: NonImg1, bi2: NonImg2, bi3: NonImg3, rating1: "0.73", rating2: "4.69", rating3: "3.07" },
    { name: "Children", bt1: "Dog Man: Brawl of the Wild", bt2: "Max and the Midknights: Battle of the Bodkins", bt3: "Dragonslayer", bi1: ChiImg1, bi2: ChiImg2, bi3: ChiImg3, rating1: "4.07", rating2: "1.60", rating3: "3.16" },
    { name: "History", bt1: "The Happiest Man on Earth", bt2: "The Spy and the Traitor: The Greatest Espionage Story of the Cold War", bt3: "A Life on Our Planet: My Witness Statement and a Vision for the Future", bi1: HisImg1, bi2: HisImg2, bi3: HisImg3, rating1: "3.18", rating2: "4.30", rating3: "4.99" },
    { name: "Horror", bt1: "The Moonlight Child", bt2: "The Turn of the Key", bt3: "Phantom Limb", bi1: HorImg1, bi2: HorImg2, bi3: HorImg3, rating1: "3.27", rating2: "3.44", rating3: "4.91" },
    { name: "Classic", bt1: "1984", bt2: "And Then There Were None", bt3: "Dune", bi1: ClaImg1, bi2: ClaImg2, bi3: ClaImg3, rating1: "4.38", rating2: "3.70", rating3: "4.65" },
    { name: "Inspiration", bt1: "The Magic of Thinking Big", bt2: "The Four Agreements", bt3: "The Full Life Framework", bi1: InsImg1, bi2: InsImg2, bi3: InsImg3, rating1: "3.87", rating2: "4.36", rating3: "3.84" },
    { name: "Manga", bt1: "SPY×FAMILY 1", bt2: "Jujutsu Kaisen 1", bt3: "Shingeki no Kyojin 30", bi1: ManImg1, bi2: ManImg2, bi3: ManImg3, rating1: "4.71", rating2: "3.78", rating3: "3.97" },
  ];

  const personLists = genres.map((props) => {
    //console.log(props.name);
    return <Genres name={props.name} bt1={props.bt1} bt2={props.bt2} bt3={props.bt3} bi1={props.bi1} bi2={props.bi2} bi3={props.bi3} rating1={props.rating1} rating2={props.rating2} rating3={props.rating3} />;
  });

  return <Fragment>{personLists}</Fragment>;
};

export default Page6;