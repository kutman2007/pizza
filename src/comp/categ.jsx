import React from 'react'
export const Categorius = ({value,Onclickcategorios}) => {
 
  const categores = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
  console.log(Onclickcategorios)
  return (

    <div className="categories">
      <ul>

        {categores.map((d, i) => {
          return <li key={i} onClick={() => Onclickcategorios(i)} 
          className={value === i ? "active" : ''}>
            {d}
          </li>
        })}

      </ul>
    </div>
  )
}