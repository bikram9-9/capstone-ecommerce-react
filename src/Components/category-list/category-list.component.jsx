import React from 'react'
import Card from '../category-card/category-card.component'
import './category-list.styles.scss'
const CardList = (props) => {
    const {list} = props;
    // console.log("CARDLIST" + JSON.stringify(list))
    const categories = list;
    console.log(categories)
    

  return (
    <div className="cardListContainer">
    {categories.map((category)=>{
        return <Card key={category.id} name={category.title} />
    })}

    </div>
    )
}

export default CardList;