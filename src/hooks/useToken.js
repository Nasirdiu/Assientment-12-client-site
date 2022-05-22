import React, { useEffect, useState } from 'react';

const useToken = (user) => {
    const [token, setToken] = useState("");
    useEffect(() => {
      const email = user?.user?.email;
      const currentUser = { email: email };
      if (email) {
        fetch(`http://localhost:5000/user/${email}`, {
          method: "PUT",
          body: JSON.stringify(currentUser),
          headers: {
            "Content-type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            // console.log('data inside token',data)
            setToken(data);
            
          });
      }
    }, [user]);
    return [token];
  };


export default useToken;