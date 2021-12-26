import React, {useEffect, useState} from 'react'
import {useParams} from "react-router";
import JumbleList from "../../components/jumbleList";
import {Link} from "react-router-dom";
import {getAllJumbles, getCategoryById} from "../../services/apiService";
import NavBar from "../../components/navbar";


function Category() {
    const [category, setCategory] = useState([]);
    const [jumbles, setJumbles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    let { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);
        getCategoryById(categoryId)
            .then(category => setCategory(category))
            .catch(error => setError(error))
            .finally(() => setLoading(false))
    },[categoryId])

    useEffect(() => {
        setLoading(true);
        getAllJumbles()
            .then(jumbles => setJumbles(jumbles))
            .catch(error => setError(error))
            .finally(() => setLoading(false))
    },[])


     var filtered = categoryId
         ? jumbles.filter(jumble => jumble.category.categoryId == categoryId)
         : jumbles


  return (
      <React.Fragment>
                <NavBar />
                 <main className="m-md-5 mt-5 mb-5">
                   <section className="container w-100 min-vh-100 px-lg-5 mt-5">
                     <div className="p-0 text-center">
                         { loading &&  <p>Data is loading...</p>}
                         { error && <p>There was an error loading your data!</p> }
                         <div key={category.categoryId} className="d-flex justify-content-center" >
                               <div className="card w-50 mb-5">
                                   <img
                                       className="card-img-top"
                                       src={category.categoryImage}
                                       alt="..."
                                   />
                                   <div className="card-body p-4">
                                       <div className="text-center">
                                           <h5 className="fw-bolder">{category.categoryName}</h5>
                                           {category.categoryText}
                                       </div>
                                   </div>
                           </div>
                           </div>
                         <div className="heading"><h1>Category: {category.categoryName} </h1>
                          { filtered.length === 0 ? <p className="m-2">There are no jumbles for this category in the database. <br/><a href={'/jumbles/new'} className="text-white">Add a Jumble!</a></p>
                             : <p className="m-2"> Showing {filtered.length} Jumbles in the database.</p> }
                         <Link
                             to={`/jumbles/getall`}
                             className="btn btn-primary"
                             type="button"
                             data-toggle="tooltip"
                             title="Get All Jumbles"
                         >
                             <i className="fas fa-book-open ps-2 pb-1"></i>
                             {' '}Show All Jumbles
                         </Link>
                         </div>
                           <JumbleList
                           items={filtered}
                          />
                     </div>
                       {/*<span>*/}

                       {/*   </span>*/}
                   </section>
                 </main>
      </React.Fragment>
)
}
export default Category
