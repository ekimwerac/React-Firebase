import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { useEffect } from "react"

export default function Article() {
  // const params = useParams()
  const { id } = useParams()
  const url = 'http://localhost:8080/articles/' + id
  const { data: article, isPending, error } = useFetch(url)
  const history = useHistory();
  useEffect(()=>{
    if (error) {
      //redirect
      //useHistory.goBack()
      setTimeout (()=>{
      history.push('/')}, 3000);
    }
  }, [error])

  return (
    <div>
      {isPending && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {article && (
        <div key={article.id}>
          <h2>{article.title} and the id is {id} and article id is {article.id} </h2>
          <p>By {article.author}</p>
          <p>{article.body}</p>
        </div>
      )}
    </div>
  )
}
