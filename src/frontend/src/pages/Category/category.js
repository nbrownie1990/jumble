import React, {useEffect, useState} from 'react'
import Navbar from '../../components/navbar'
import {useNavigate, useParams} from "react-router";
import JumbleList from "../../components/jumbleList";


function Category({onJumbleSelect}) {
    const navigate = useNavigate()
    const [category, setCategory] = useState([]);
    const [jumbles, setJumbles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    let { categoryId } = useParams();



  useEffect(() => {
      console.log(categoryId)
    setLoading(true);
    fetch(`/api/categories/${categoryId}`)
        .then((res) => res.json())
        .then((data) => {
          setCategory(data)
            setJumbles(data)
            console.log(data);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
  }, [categoryId]);

  if (loading) {
    return <p>Data is loading...</p>;
  }

  return (
      <React.Fragment>
                <Navbar />
                 <main className="m-md-5 mt-5 mb-5">
                   <section className="container w-100 min-vh-100 px-lg-5 mt-5">
                     <div className="sidebar h-100 card-body p-0 text-start ">
                           <div key={category.categoryId} className="col mb-5">
                               <div className="card h-100">
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
                         <div className="heading"><h1>Category: {category.categoryName} </h1></div>
                          <p className="m-2">
                             Showing filtered.length Jumbles in the database.
                           </p>
                           <JumbleList
                          // jumbles={filtered}
                          // selectedJumble={this.state.selectedJumble}
                          //  onJumbleSelect={this.handleJumbleSelect}
                          // jumblesCount={filtered.length}
                                          />
                     </div>
                   </section>
                 </main>
      </React.Fragment>
)
}
export default Category


//////////
//    class Category extends React.Component {
//   constructor(props) {
//     super(props)
//
//     this.state = {
//       jumbles: [],
//       categories: [],
//     }
//   }
//
//   componentDidMount() {
//     this.setState({
//       jumbles: ApiService.getAllJumbles(),
//       categories: ApiService.getCategoryById(),
//     })
//   }
//
//   handleCategorySelect = category => {
//     this.setState({ selectedCategory: category })
//   }
  // handleJumbleSelect = jumble => {
  //   this.setState({ selectedJumble: jumble })
  // }
  // render() {
  //   const { length: count } = this.state.jumbles
  //   const { selectedCategory, jumbles: allJumbles } = this.state
  //
  //   if (count === 0) return <p>There are no jumbles in the database</p>
  //
  //   const filtered =
  //     selectedCategory && selectedCategory._id
  //       ? allJumbles.filter(j => j.category._id === selectedCategory._id)
  //       : allJumbles
  //
  //   return (
  //             <p className="m-2">
  //               Showing {filtered.length} Jumbles in the database.{' '}
  //             </p>
  //             <JumbleList
  //               jumbles={filtered}
                // selectedJumble={this.state.selectedJumble}
                // onJumbleSelect={this.handleJumbleSelect}
                // jumblesCount={filtered.length}
//               />


