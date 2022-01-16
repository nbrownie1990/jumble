import React, {useEffect, useState} from 'react'
import Navbar from '../components/navbar'
import CategoryGroup from '../components/categoryGroup'
import { getAllCategories} from "../services/apiService";
import Loading from "../components/loading";
import Error from "../components/error";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();


    useEffect(() => {
        setLoading(true);
        getAllCategories()
            .then(categories => setCategories(categories))
            .catch(error => setError(error))
            .finally(() => setLoading(false))
    },[])

    return (
        <React.Fragment>
            {loading && <Loading />}
            {error && !loading && <Error/>}
            <Navbar/>
            {!loading && (
          <main className="m-md-5 m-2 mt-5 mb-5">
            <section className="container w-100 h-100 px-4 px-lg-5 mt-5">
                <CategoryGroup
                  items={categories}
              />
            </section>
          </main>)}
        </React.Fragment>
    )
  }

export default Categories


