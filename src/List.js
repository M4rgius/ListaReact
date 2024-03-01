import React from "react";


const List = (props)=>{
    return <ul>
        {props.data.map((person)=>(
        <li key={person.id}>
            <Person {...person} removeItem={props.removeItem} />
        </li>))}
    </ul>
};

const Person=({id,img,nome,messaggio,removeItem})=>{
    return <div class="grid">
    <div class="grid__item">
      <div class="card"><img class="card__img" src={img} alt=""/>
        <div class="card__content">
          <h1 class="card__header">{nome}</h1>
          <p class="card__text">{messaggio} </p>
          <button class="card__btn" onClick={()=>removeItem(id)}>Elimina appuntamento </button>
        </div>
      </div>
    </div>
    </div>
};
export default List;