import { filterChange } from '../reducers/filterReducer'
import { useDispatch } from 'react-redux'

export const Filter = () => {
  const dispatch = useDispatch()
  const handleChange = (event) => {
    const filter = event.target.value
    dispatch(filterChange(filter))
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}
