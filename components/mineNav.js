import Link from 'next/link'

const NavBar = () =>(
    <div>
        <ul>
          <li><Link href="/"><a className="nav-link">Main</a></Link></li>
            <li><Link href="/services"><a>Services</a></Link> 
                <ul>
                    <li><Link href="/strangething"><a>Just Try This</a></Link></li>
                    <li><Link href="/ohmygod"><a>I dont know what it is</a></Link></li>
                </ul>
            </li>
          <li><Link href="/prices"><a>Prices</a></Link></li>
          <li><Link href="/team"><a>Team</a></Link></li>
          <li><Link href="/about"><a>About</a></Link></li>
          </ul>
        <style jsx>{`
        @font-face {
            font-family:'Muli', sans-serif;
           }
          body{
            margin : 0;
            padding : 0;
            text-align : center;
              
              
          }
          h1 {
            background-color: #504B4B;
            color: white;
            height : 500;
            padding : .5em;
            font-family : 'Consolas'
            }
          .navigator{
            background-color:#504B4B ;
            color: #7D398B;
            text-decoration: none;
          } 
          ul {
           
            list-style: none; /*убираем маркеры списка*/
            margin: 0; /*убираем отступы*/
            padding-left: 0; /*убираем отступы*/
            margin-top:0px; /*делаем отступ сверху*/
            background:rgb(37, 37, 37); /*добавляем фон всему меню*/
            height: 50px; /*задаем высоту*/
          }
          a {
            text-decoration: none; /*убираем подчеркивание текста ссылок*/
            background:rgb(37, 37, 37); /*добавляем фон к пункту меню*/
            color:#fff; /*меняем цвет ссылок*/
            padding:0px 30px; /*добавляем отступ*/
            font-family:  'Muli', sans-serif; /*меняем шрифт*/
            line-height:50px; /*ровняем меню по вертикали*/
            display: block; 
            border-right: 1px solid rgb(33, 33, 33); /*добавляем бордюр справа*/
            transition-duration: .0,5s;
            transition-delay: .0s;
            transition: background 0.3s ease, color 0.2s linear;
          }
          a:hover {
            background:rgb(59, 59, 59);/*добавляем эффект при наведении*/
          }
          li {
            float:left; /*Размещаем список горизонтально для реализации меню*/
            position:relative; /*задаем позицию для позиционирования*/
          }
               
              /*Стили для скрытого выпадающего меню*/
              li > ul {
                  position:absolute;
                  top:50px;
                  display:none;   
              }
               
              /*Делаем скрытую часть видимой*/
              li:hover > ul {
                  display:block; 
                  width:250px;  /*Задаем ширину выпадающего меню*/      
              }
             li:hover > ul > li {
                  float:none; /*Убираем горизонтальное позиционирование*/
              }
          .lazy {
            display: block;
            width: 1024;
            height: 732;
            margin: 10px auto;
            border: 0;
          }
          
        `}</style>
    </div>
)
export default NavBar