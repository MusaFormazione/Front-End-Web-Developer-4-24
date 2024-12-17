import { useState, useEffect } from 'react'
import Card from './component/Card';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  const [posts, setPosts] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const getPosts = async () => {

    try{

      const response = await fetch(apiUrl)
      
      if (!response.ok) {
        throw new Error(`Errore: ${response.status}`)
      }
      
      const data = await response.json()
      
      setPosts(data)

      
    }catch(err){
      
      console.log(err.message);
      setIsError(true)

    }finally{

      setIsLoading(false)

    }
  }

  useEffect(() => {

    setTimeout(()=>{
      getPosts()
    }, 3000)

  }, [])

  return (
    <>
      <div className="container">

        <h1>Tutti i post</h1>

        <div className="row">
          { (!isLoading && !isError) && posts.map(post => {

              return (
                <div key={`postCard-${post.id}`} className="col-12 col-md-6 col-lg-4">
                  <Card {...post} className='my-2'></Card>
                </div>
              )
            })
          }
        </div>

      </div>
      <div className="container">
        {isLoading && <div className='alert alert-success'>Caricamento in corso</div>}
        {(!isLoading && isError) && <div className="alert alert-warning">Si è verificato un errore, per favore riprova più tardi</div> }
      </div>
    </>
  )
}

export default App
