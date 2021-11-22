import React, {useEffect, useState} from 'react'
import Navbar from '../../components/navbar'
import CategoryGroup from '../../components/categoryGroup'
import JumbleList from '../../components/jumbleList'


function Categories() {
  const [jumbles, setJumbles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();


  useEffect(() => {
    setLoading(true);
    fetch('/api/categories')
        .then((res) => res.json())
        .then((data) => {
          setJumbles(data)
          setCategories(data)
          console.log(data);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
  }, []);

  if (loading) {
      return <p className="container w-100 h-100 mt-5" >Data is loading...</p>;
  }

  if (error || !Array.isArray(jumbles)) {
    return <p className="container w-100 h-100 mt-5" >There was an error loading your data!</p>;
  }

  // const handleStates = event => {
  //   setJumbles({ ...jumbles, jumbles: ApiService.getAllJumbles() })
  //   setCategories({ ...categories, categories: ApiService.getAllCategories() })
  // }

 // function handleCategorySelect (){
 //   setCategory ({ selectedCategory: category})
 //  }
 //  function handleJumbleSelect (){
 //    setJumble({ selectedJumble: jumble })
 //  }

    //
    // const { selectedCategory, jumbles: allJumbles } = useState()

    if (jumbles.length === 0) return <p>There are no jumbles in the database</p>

    // const filtered =
    //     selectedCategory && selectedCategory._id
    //         ? allJumbles.filter(j => j.category._id === selectedCategory._id)
    //         : allJumbles

    return (
        <React.Fragment>
          <Navbar />

          <main className="m-md-5 m-2 mt-5 mb-5">
            <section className="container w-100 h-100 px-4 px-lg-5 mt-5">
              <CategoryGroup
                  items={categories}
                  // selectedItem={selectedCategory}
                  // onItemSelect={handleCategorySelect}
              />{' '}
            </section>
            <section className="card container px-4 px-lg-5 mt-5">
              <p className="m-2">
                Showing {jumbles.length} Jumbles in the database.{' '}
              </p>
              <JumbleList
                  jumbles={jumbles}
                  // selectedJumble={selectedJumble}
                  // onJumbleSelect={handleJumbleSelect}
                  // jumblesCount={filtered.length}
              />
            </section>
          </main>
        </React.Fragment>
    )
  }


export default Categories




// class Categories extends React.Component {
//   state = {
//     jumbles: [],
//     categories: [],
//   }

  // componentDidMount() {
  //   this.setState({ jumbles: getJumbles(), categories: getCategories() })
  // }

  // handleCategorySelect = category => {
  //   this.setState({ selectedCategory: category })
  // }
  //
  // handleJumbleSelect = jumble => {
  //   this.setState({ selectedJumble: jumble })
  // }
//
//   render() {
//     const { length: count } = this.state.jumbles
//     const { selectedCategory, jumbles: allJumbles } = this.state
//
//     if (count === 0) return <p>There are no jumbles in the database</p>
//
//     const filtered =
//       selectedCategory && selectedCategory._id
//         ? allJumbles.filter(j => j.category._id === selectedCategory._id)
//         : allJumbles
//
//     return (
//       <React.Fragment>
//         <Navbar />
//
//         <main className="m-md-5 m-2 mt-5 mb-5">
//           <section className="container w-100 h-100 px-4 px-lg-5 mt-5">
//             <CategoryGroup
//               items={categories}
//               selectedItem={selectedCategory}
//               onItemSelect={handleCategorySelect}
//             />{' '}
//           </section>
//           <section className="card container px-4 px-lg-5 mt-5">
//             <p className="m-2">
//               Showing {filtered.length} Jumbles in the database.{' '}
//             </p>
//             <JumbleList
//               jumbles={filtered}
//               selectedJumble={this.state.selectedJumble}
//               onJumbleSelect={this.handleJumbleSelect}
//               jumblesCount={filtered.length}
//             />
//           </section>
//         </main>
//       </React.Fragment>
//     )
//   }
// }
//
// export default Categories
