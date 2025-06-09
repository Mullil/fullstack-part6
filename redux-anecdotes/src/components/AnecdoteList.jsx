import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { notificationChange } from '../reducers/notificationReducer'

export const AnecdoteList = () => {
  const anecdotes = useSelector(state => {
    if (state.filter.length === 0) {
        return state.anecdotes
    } else {
        return state.anecdotes.filter((anecdote) =>
        anecdote.content.includes(state.filter) === true)
    }
  })
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
    const anecdote = anecdotes.find((anecdote) => anecdote.id === id)
    dispatch(voteAnecdote(id))
    dispatch(notificationChange(`you voted "${anecdote.content}"`))
    setTimeout(() => {
        dispatch(notificationChange(null))
    }, 5000)
  }
    return (
        <div>
        {anecdotes.map(anecdote =>
            <div key={anecdote.id}>
            <div>
                {anecdote.content}
            </div>
            <div>
                has {anecdote.votes}
                <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
            </div>
        )}
        </div>
    )
}