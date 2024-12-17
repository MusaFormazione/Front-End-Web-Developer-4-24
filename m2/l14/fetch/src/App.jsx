import { useState, useEffect } from 'react'
import Card from './component/Card';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {

    const response = await fetch(apiUrl)

    if (!response.ok) {
      //fa qualcosa
    }

    const data = await response.json()

    setPosts(data)
  }

  useEffect(() => {

    getPosts()

  }, [])

  return (
    <>
      <div className="container">

        <h1>Tutti i post</h1>

        <div className="row">
          {
            posts.map(post => {

              return (
                <div key={`postCard-${post.id}`} className="col-12 col-md-6 col-lg-4">
                  <Card {...post} className='my-2'></Card>
                </div>
              )
            })
          }
        </div>

      </div>
    </>
  )
}

export default App
