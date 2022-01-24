import '../App.css';
import Card from '../component/Card';
import { useQuery, gql } from "@apollo/client";
import { useState } from 'react';

const FILMS_QUERY = gql`
{
  allFilms {
    films {
      title
      episodeID
      producers
      director
      releaseDate
      created
    }
    totalCount
    pageInfo{
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    
    edges{
      cursor
    }
  }
}
`;

function Home() {
    const [search,setSearch] = useState("")
  const { data, loading, error } = useQuery(FILMS_QUERY);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>

  return (
      
      
    <div className="App">
    
      <h1>Films</h1>
      
    <div class="search">
      <input type="text" placeholder="Search.." onChange={event => {setSearch(event.target.value)}}></input>
      </div>
        {data.allFilms.films.filter((value)=>{
            if(search ==""){
                return value
            }else if (value.title.toLowerCase().includes(search.toLowerCase())){
                return value
            }
        }).map((movie) => (
          <Card key={movie.episodeID} movie={movie}></Card>
        ))}
      
      
    </div>
    
  );
}

export default Home;
