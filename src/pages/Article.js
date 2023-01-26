import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

export default function Article() {

const { id } = useParams()
const url = 'http://localhost:3000/articles/' + id
const { data: article, isPending, error } = useFetch(url)
  return (
    <div>
      {isPending && <div>Loading...</div>}
       {error && <div>{error}</div>}
       {article && (
        <div key={id} className="card">
          <h3>{article.title}</h3>
          <h4>By {article.author}</h4>
          <p>{article.body}</p>
        </div>
       )}
    </div>
  )
}
