import React from 'react'
import qs from 'qs'
import axios from 'axios'
import { Categorius } from '../comp/categ';
import { Sort, } from '../comp/soft';
import { Pizza } from '../comp/pizza';
import { Skeleton } from '../comp/pizza/Skeleton';
import { Pagination } from '../comp/searh/pagination';
import { useSelector, useDispatch } from 'react-redux';
import { MyContext } from '../App';
import { setcategoriosid, setpageCount } from '../redux/slice/filterslice';
import { useNavigate } from 'react-router-dom';
import { fetchUserById, setitems } from '../redux/slice/pizzasSlice';
export default function Home() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isSearch = React.useRef()
  const item = useSelector((state) => state.pizza.items)
  const { categoriosid, pageCount, } = useSelector((state) => state.filter)
  const sortyipe = useSelector((state) => state.filter.sortt.sortport)
  const { searchvalue } = React.useContext(MyContext)
  const [isload, setisload] = React.useState(true)

  const onclick = React.useCallback((id) => {
    dispatch(setcategoriosid(id))
  }, [])
  const fetchData = async()=>{
    setisload(true)
    const category = categoriosid > 0 ? `&category=${categoriosid}` : ''
    const order = sortyipe.includes('-') ? 'asc' : 'desc'
    const searh = searchvalue ? `&search=${searchvalue} ` : ''
    try{
      const {data}= await axios.get(`https://64ad6fe3b470006a5ec5f6a0.mockapi.io/pic?&limit=4${category}&page=${pageCount}&sortBy=${sortyipe.replace('-', '')}&order=${order}${searh}`)
      dispatch(setitems(data)
      //   fetchUserById({
      //   category,order,searh,pageCount,sortyipe
      // })
      )
    } catch (error){
      console.log('ERROR',error)
      alert('Ошибка при получении пицц')
    } finally{
      setisload(false)
    }
   
     window.scrollTo(0, 0)
  }
  React.useEffect(() => {
    fetchData()
  }, [categoriosid, sortyipe, searchvalue, pageCount])
  React.useEffect(() => {
    const query = qs.stringify({
      categoriosid,
      sortyipe,
      pageCount
    })
    navigate(`?${query}`)
  }, [categoriosid, sortyipe, searchvalue, pageCount])

  const onchangepage = (number) => {
    dispatch(setpageCount(number))
  }
  return (
    <div className='container'>
      <div className="content__top">
        <Categorius value={categoriosid} Onclickcategorios={onclick} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isload
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : item.filter(obj => {
            if (obj.title.toLowerCase().includes(searchvalue.toLowerCase())) {
              return true
            }
            return false
          }).map((o) => <Pizza key={o.id} {...o} />)}

      </div>
      <Pagination value={pageCount} OnChage={onchangepage} />
    </div>

  )
}
