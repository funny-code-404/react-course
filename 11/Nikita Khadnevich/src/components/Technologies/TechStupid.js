import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import { indicator } from '../SmallElems/SmallElems'
const { technology, techInfo, techDetailInfo, techStupid } = indicator


const TechInfoStupid = (props) => {
   const { children: [item, urlCiv, handleclick, technologies] } = props
   return (
      <>
         <p>Имя юнита {item.name}</p>
         <p>Время постоки: {item.build_time}</p>
         <p>Тип: {item.age}</p>
         <p>Отличительная особенность: {item.description}</p>
         <p>Распостранение: {item.expansion}</p>
         <p>Стоимость Юнита: {item.cost.Wood} древесины, {item.cost.Gold} золота</p>
         {item.develops_in.length > 2 ? 
            <div key={'TechItem'+techStupid} className={technologies+'Item'}>
               <Link to={`${urlCiv}/tech`} id={item.id} onClick={handleclick} data-path={item.develops_in}>Мануфакторум Юнита {item.name}</Link> 
            </div> : <p>Нет уникального юнита</p> 
         }  
      </>
   )
};


export const  TechDetailStupid = (props) => {
   const  { item, dataDetail, handleLocation } = props

   return (
      <>
         {item ?
            <> 
               <li>Имя: {item.name}</li>
               <li>Фракция: {item.age}</li>
               <li>Стоимость постройки: {item.cost?.Wood} древесины</li>
               <li>Защита: {item.armor}</li>
               <li>Время постройки: {item.build_time}</li>
               <li>
                  <ul> Необходимые ресурсы:
                     { item.cost.Wood ? <li>{item.cost.Wood} древесины </li> : <li>0 древесины</li> }
                     { item.cost.Gold ? <li>{item.cost.Gold} золота </li> : <li>0 золота</li> }
                  </ul>
               </li>
               <li id='liHit' >Единицы здоровья: {item.hit_points}</li>
            </> : 
         dataDetail ?
            <>
               <ul key={'Skils'+techDetailInfo} id='Skils'>
                  <button key={'buttonX'+techInfo} onClick={handleLocation}>X</button>
                  <li>Имя: {dataDetail.name}</li>
                  <li>Фракция: {dataDetail.age}</li>
                  <li>Время постройки: {dataDetail.build_time}</li>
                  <li>
                     <ul> Необходимые ресурсы:
                        { dataDetail.cost.Wood ? <li>{dataDetail.cost.Wood} древесины</li> : <li> -  древесины</li> }
                        { dataDetail.cost.Gold ? <li>{dataDetail.cost.Gold} золота</li> : <li> -  золота</li> }
                     </ul>
                  </li>
                  <li>Защита: {dataDetail.armor}</li>
                  <li id='liHit' >Единицы здоровья: {dataDetail.hit_points}</li>
               </ul>   
            </> : 
            <ul key={'Skils'+techDetailInfo} id='Skils'>
               <li>У цивилизации нет юнитов</li>
            </ul>   
         }
      </>
   )
}

export default TechInfoStupid