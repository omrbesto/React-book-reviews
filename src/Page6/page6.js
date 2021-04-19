import Genres from './genres';
import { Fragment } from "react";
import Book from "./Book";

import BookImg1 from "../../assets/books/book1.png";
import BookImg2 from "../../assets/books/book2.png";
import BookImg3 from "../../assets/books/book3.png";
import BookImg4 from "../../assets/books/book4.png";
import BookImg5 from "../../assets/books/book5.png";
import BookImg6 from "../../assets/books/book6.png";
import BookImg7 from "../../assets/books/book7.png";
import BookImg8 from "../../assets/books/book8.png";
import BookImg9 from "../../assets/books/book9.png";

const Page6 = () => {
    const genres=[
            { name: 'Romance', rating1: '3.26', rating2: '4.84', rating3: '1.16' },
            { name: 'Fantasy', rating1: '2.66', rating2: '4.70', rating3: '3.82' },
            { name: 'Fiction', rating1: '3.23', rating2: '1.05', rating3: '4.80' },
            { name: 'Non-fiction', rating1: '0.73', rating2: '4.69', rating3: '3.07' },
            { name: 'Children', rating1: '4.07', rating2: '1.60', rating3: '3.16' },
            { name: 'History', rating1: '3.18', rating2: '4.30', rating3: '4.99' },
            { name: 'Horror', rating1: '3.27', rating2: '3.44', rating3: '4.91' },
            { name: 'Classic', rating1: '4.38', rating2: '3.70', rating3: '4.65' },
            { name: 'Inspiration', rating1: '3.87', rating2: '4.36', rating3: '3.84' },
            { name: 'Manga', rating1: '4.71', rating2: '3.78', rating3: '3.97' },
        ]
    
    const personLists = genres.map((props) => {
        //console.log(props.name);
        return <Genres name={props.name} />;
    });

    return <Fragment>{personLists}</Fragment>;

}

export default Page6;


const DUMMY_BOOKLISTS = [
  {
    title: "เพราะชีวิตดีได้กว่าที่เป็น",
    author: "James Clear",
    bookImg: BookImg1,
    desciption: `หากคุณพยายามเปลี่ยนแปลงตัวเองแต่ไม่สำเร็จสักที หนังสือเล่มนี้ช่วยคุณได้! 
       ด้วยการพัฒนาตัวเองให้ดีขึ้นเพียงวันละ 1% ไม่ว่าเป้าหมายในชีวิตของคุณคืออะไร คุณทำสำเร็จได้อย่างแน่นอน!!`,
    score: 4.36,
  },
  {
    title: "ขุมทรัพย์สุดปลายฝัน",
    author: "Paulo Coelho",
    bookImg: BookImg2,
    desciption: `นวนิยายชื่อดังของ Paulo Coelho ว่าด้วยการเดินทางของหนุ่มเลี้ยงแกะ ที่ปรารถนาจะตามหาขุมทรัพย์ที่อยู่ที่พีระมิดในอียิปต์`,
    score: 3.88,
  },
  {
    title: "คาฟกา วิฬาร์ นาคาตะ",
    author: "Huraki Murakami",
    bookImg: BookImg3,
    desciption: `เด็กอายุสิบห้าปีหนีออกจากบ้าน เรื่องธรรมดาสามัญที่จะเกิดขึ้นเมื่อบรรยากาศในบ้านอึดอัดขัดข้องจนยากจะทนทานความธรรมดาสามัญจบลงเพียงเท่านี้.... `,
    score: 4.13,
  },
  {
    title: "Thank You for Coming to My TED Talk",
    author: "Chris Anderson, Lorin Oberweger",
    bookImg: BookImg4,
    desciption: `ทุกวันนี้เราอยู่ในโลกที่พลังแห่งการ “พูด” สร้างแรงสั่นสะเทือนได้อย่างมหาศาล และ “เสียง” ของคนรุ่นใหม่ส่งไปได้ไกลอย่างที่ไม่เคยเป็นมาก่อน ไม่ว่าจะเป็นการนำเสนอหน้าชั้นเรียน แข่งขันโต้วาที อัดพอดแคสต์ หรือถ่ายคลิปออนไลน์ที่เผยแพร่สู่ผู้ชมนับล้าน ล้วนมีโอกาสเปลี่ยนความคิดผู้คนหรือกระทั่งเปลี่ยนโลก และทั้งหมดนี้เกิดขึ้นได้ด้วย “การนำเสนออย่างทรงพลัง”`,
    score: 4.03,
  },
  {
    title: "TED Talks: The Official TED Guide to Public Speaking",
    author: "Chris Anderson",
    bookImg: BookImg5,
    desciption: `TED คือชื่อของเวทีที่สร้างแรงบันดาลใจให้ผู้คนทั่วโลก และกลายเป็นปรากฏการณ์ซึ่งพลิกโฉมการพูดในที่สาธารณะไปอย่างสิ้นเชิง ทว่าอะไรคือเบื้องหลังความสำเร็จของ TED? เพราะเหตุใดนักสร้างสรรค์จากทั่วทุกวงการจึงกล่าวปาฐกถาได้อย่างน่าทึ่งตรึงใจถึงเพียงนี้? มีสูตรสำเร็จแบบใดหรือเปล่าที่ทำให้ TED Talk กระทบใจผู้คนทั่วโลก? แล้วคุณเองจะสามารถนำเสนอความคิดอย่างทรงพลังเช่นนี้ได้บ้างหรือไม่? `,
    score: 4.09,
  },
  {
    title: "ขอให้แมวโอบกอดคุณ",
    author: "Kiyoshi Shigematsu",
    bookImg: BookImg6,
    desciption: `“แบล็งเก็ตแคตส์” หากแปลตรงตัวคือ “แมวผ้าห่ม” เป็นบริการแมวเช่าพร้อมผ้าห่มคู่ใจ สามารถเช่าไปเลี้ยงเป็นเวลาสามวันสองคืน โดยมีกฎว่า “ห้ามเช่าแมวตัวเดิมภายในระยะเวลาสามเดือน”`,
    score: 3.64,
  },
  {
    title: "โจนาธาน ลิฟวิงสตัน นางนวล",
    author: "Richard Bach",
    bookImg: BookImg7,
    desciption: `วรรณกรรมคลาสสิกชิ้นสำคัญที่โลกรักและยกย่อง จิตวิญญาณแห่งนางนวลโจนาธานเป็นแรงบันดาลใจอันแสนบรรเจิดแด่ผู้คนรุ่นแล้วรุ่นเล่าให้หาญกล้าที่จะตั้งคำถามต่อขนบ จารีต กฎเกณฑ์ต่างๆ ของสังคมที่ตีตรวนรั้งจิตวิญญาณไว้ และแต้มเติมหัวใจให้ใฝ่เสรีมากพอจะโบยบินบนวิถีขบถ นิยายเรื่องนี้สะท้อนภาวะเชิงปรัชญาผ่านนกนางนวลที่โบยบินออกจากกรอบเพื่อแสวงหาวิถีของตนอย่างอิสระและงดงาม`,
    score: 3.85,
  },
  {
    title: "เซเปียนส์: ประวัติย่อมนุษยชาติ",
    author: "Yuval Noah Harari",
    bookImg: BookImg8,
    desciption: `หนังสือเล่มนี้บอกเล่าเรื่องราวอันโลดโผนของประวัติศาสตร์ที่แสนพิเศษของพวกเราเอง นับตั้งแต่เมื่อครั้งยังเป็นลิงไร้หางที่ไม่สลักสำคัญใด จนกลายเป็นเจ้าผู้ครอบครองโลก หนังสือเบสต์เซลเลอร์ “เซเปียนส์ ประวัติย่อมนุษยชาติ” ของยูวัล โนอาห์ แฮรารี น่าสนใจอย่างไร?`,
    score: 4.4,
  },
  {
    title:
      "ขุนศึก ศักดินา และพญาอินทรี การเมืองไทยภายใต้ระเบียบโลกของสหรัฐอเมริกา 2491-2500",
    author: "ณัฐพล ใจจริง",
    bookImg: BookImg9,
    desciption: `หนังสือเล่มนี้เกิดขึ้นจากความสนใจประวัติศาสตร์การปฏิวัติ 2475 และขบวนการปฏิปักษ์ปฏิวัติของผู้เขียนรวมถึงการที่ผู้เขียนมีโอกาสฝึกฝนและศึกษาหาความรู้เพิ่มเติมภายใต้บรรยากาศการ "เกิดใหม่" ของคณะราษฎรภายหลังการรัฐประการ 19 กันยายน 2549 โดยเฉพาะบทบาททางการเมืองของจอมพล ป.พิบูลสงคราม`,
    score: 4.71,
  },
];

const BooksPreview = (props) => {
  const createBookLists = DUMMY_BOOKLISTS.map((book) => (
    <Book
      key={Math.random().toString()}
      title={book.title}
      author={book.author}
      bookImg={book.bookImg}
      //   desciption={book.desciption}
      score={book.score}
    />
  ));

  return <Fragment>{createBookLists}</Fragment>;
};

export default BooksPreview;