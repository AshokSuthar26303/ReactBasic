import React, { useEffect, useState } from "react";

const Apinot = () => {
  const [api, setApi] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const Api = "https://pokeapi.co/api/v2/pokemon/squirtle";

  const fecthdata = async () => {
    try {
      const res = await fetch(Api);
      const data = await res.json();
      console.log(data);
      setApi(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    //fetching api without useEffect is totally wrong it means it works but call multi time request which was not good
    fecthdata();
  }, []);
  console.log(api);

  if (loading) {
    return (
      <div>
        <h1 className="text-3xl"> Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>Error:{error.message}</h1>
      </div>
    );
  }
  return (
    <>
      <section>
        <header>
          <h1>Lets Catch Pokemon</h1>
        </header>
        <ul>
          <li>
            <figure>
              <h1>{api.name}</h1>
              <div>
                <p>Height: {api.height}</p>
              </div>
              <div>
                <p>Weight: {api.weight}</p>
              </div>
            </figure>
          </li>
        </ul>
      </section>
    </>
  );
};
export default Apinot;
