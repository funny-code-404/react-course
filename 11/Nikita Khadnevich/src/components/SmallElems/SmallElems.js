import React from 'react';
import { useSelector } from 'react-redux';
import { Router } from 'react-router';
import {Switch, Route, Link } from 'react-router-dom';
import { Civilerror } from '../../ducks/civil/selectors'

export  const indicator = {
   civil: '_civil',
   civInfo: '_civInfo',
   civDetailinfo: '_civDetail',
   civilStupid: '_civStupid',

   technology: '_technology',
   techInfo: '_techInfo',
   techDetailInfo: '_techDetailInfo',
   techStupid: '_techStupid',

   structure: '_structure',
   structureInfo: '_structureInfo',
   srtuctureStupid: '_civStupid',

   units: '_units',
   unitSkil: '_unitSkil',
   unitDetailInfo: '_unitDetailInfo',
   untiStupid: '_untiStupid'
}

const  HomePage = () => {
   return (
      <>
         <p>
         <span>Age of Empires</span> — серия исторических стратегий в реальном времени, издаваемых Microsoft Studios.
         Первая игра серии — Age of Empires видела свет в 1997 году. Изначально разработкой этих игр занималась Ensemble Studios, но после её роспуска в 2009 году она была поручена другим студиям.
         Age of Empires посвящена событиям, происходящим в Европе, Африке и Азии, охватывая временной период от каменного века до века железного; дополнение для этой игры освещает становление и расширение Римской империи. Действия во второй части игры, Age of Empires II: The Age of Kings, происходят в Средневековье; дополнение к ней повествует, в основном, об испанском покорении Мезоамерики. Третья часть, Age of Empires III, затрагивает ранний период Нового времени, когда европейские державы колонизировали Америку. Четвёртая часть, Age of Empires IV, находится в разработке, и уже известно, что её действие происходит в Средневековье, однако точные даты неизвестны. В серию также входят Age of Empires Online — закрытая бесплатная онлайн-игра, использовавшая сервис Games for Windows Live, — а также Age of Mythology, являющаяся спин-оффом серии, — действия в ней происходят в тот же временной период, что и в оригинальной Age of Empires, однако упор сделан не на историческую составляющую, а на мифологию (греческую, египетскую и скандинавскую).
         Серия Age of Empires имела коммерческий успех и была продана тиражом свыше 20 миллионов копий. По мнению критиков, причиной тому стали богатая историческая подоплёка и честный игровой процесс, ставящий игроков в равные условия, а также искусственный интеллект (ИИ), дающий меньше преимуществ реальным игрокам по сравнению с конкурентами серии.</p>
      </>
   )
}

export const ListAge = (props) => {
   const { data, blockName, elem, propsUrl, SortStructure, Sort } = props
   return (
      <div key={elem+'Wrapper'} className={elem+'Wrapper'}>
      { elem == 'structures' ? 
         <>
         {data && SortStructure(data).map((item, i) => 
               
               {
                  return (
                     <div id={item.name} key={i+elem} className={elem+'Item'}>
                        <Link to={`${propsUrl}/${item}`}>{item}</Link> 
                     </div>   
                  )
               }
            )
         }
         </> :
         <>

            {data && Sort(data).map((item, i) => 
               {
                  return (
                     <div id={item.name} key={i+elem} className={elem+'Item'}>
                        <Link to={`${propsUrl}/${item.name}${item.id}`}>{item.name}</Link>
                     </div>
                  )
               }
            )
         }
         </>
      }
      </div>
   )
}

export const ButtonGoBack = (props) => {
   const { handleLocation, idName,  indicator } = props
   return (
      <div key={idName+indicator+'a'} id={idName} onClick={handleLocation}>Вернуться назад</div>
   )
}

export const ButtonClose = (props) => {
   const { handleLocation, idName,  indicator, selector } = props
   const e  = useSelector(selector)
   return (
   <>
      {
      e !== null ? 
         <ul id={idName} key={idName+indicator} >
            <button key={'buttonX'+indicator} onClick={handleLocation}>X</button>
            <li>{e}</li>
         </ul> : 
      e === null ?
         <>
            <button key={'buttonX'+indicator} onClick={handleLocation}>X</button>
         </> : null
      }
   </>   
   )  
}

export const Sort = (data) => {
   const sortArr = (a,b) => a.name > b.name ? 1 : -1;
   return data.sort(sortArr)
}

export const SortStructure = (data) => {
   const sortArr = (a,b) => a.name > b.name ? 1 : -1;
   data.sort(sortArr)
   return [...new Set(data.map((item, i) => item.name))];
}


export default HomePage

