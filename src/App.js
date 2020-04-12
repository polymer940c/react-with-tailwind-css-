import React, { useState, useEffect } from "react";
import ImageSearch from './components/imageSearch';
import ImageCard from './components/imageCard';


function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredusers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    console.log(filterIt(users, term));
    setFilteredusers(filterIt(users, term));
    fetch(`http://dummy.restapiexample.com/api/v1/employees`)
      .then((res) => res.json())
      .then((res) => {
        setUsers(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  const filterIt = (arr, searchKey) =>  {
    if (searchKey.length <= 0) return [];
    return arr.filter((obj) => {
      let joinedStr = Object.values(obj).toString();
      if (fuzzy_match(joinedStr, searchKey)) return true;
    });
  }

  const fuzzy_match = (str,pattern) => {
    pattern = pattern.split("").reduce(function(a,b){ return a+".*"+b; });
    return (new RegExp(pattern,"i")).test(str);
  };

  return (
    <div className="container mx-auto max-w-screen-xl px-4">
      <ImageSearch searchText={(text) => setTerm(text)} />
      {isLoading ? (
        <h1>loading</h1>
      ) : (
        <div className="grid gap-4 grid-cols-1  md:grid-cols-2 xl:grid-cols-3 ">
          { term.length > 0 ?
            filteredUsers.map((user, index) => (
              <ImageCard key={user.id} card={user} />
            )) :
            users.map((user, index) => (
              <ImageCard key={user.id} card={user} />
            ))
          }
        </div>
      )}
    </div>
  );
}

export default App;
