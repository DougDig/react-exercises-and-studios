export default function BookList() {
   let pageTitle = "Working the Jerky Through";
   let book1 = "https://m.media-amazon.com/images/I/51DJ0Qk82hL._SY445_SX342_.jpg";
   let book2 = "https://m.media-amazon.com/images/I/41olal7YHVL._SY445_SX342_.jpg";
   let book3 = "https://m.media-amazon.com/images/I/51jrSopcZ-L._SY445_SX342_.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Casanova" />
         <img src={book2} alt="One Last Summer" />
         <img src={book3} alt="Enchantress" />
      </div>      
   );
}