import Layout  from '../components/Layout.js'
import  Link from 'next/link'
import fetch from 'isomorphic-fetch'

const  index  = (props) => (
  <Layout>
      <h1>Batman Movies </h1>
      <ul>
          {props.movies.map((movie)=>(
            <li key={movie.imdbID}>
                <Link as={`/p/${movie.imdbID}`} href={`/post?id=${movie.imdbID}`}>
                    <a>{movie.Title}</a>
                </Link>
            </li>
          ))}
      </ul>
  </Layout>
)
index.getInitialProps = async function(){
  const res = await fetch('http://www.omdbapi.com/?s=batman')
  var data = await res.json()
  console.log(`Movie data fetched. Count: ${data.Search.length}`)
  data = JSON.parse(data)
  return {
    movies: data.Search
  }
}
export default index
