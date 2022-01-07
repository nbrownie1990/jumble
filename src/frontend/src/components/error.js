import React from "react";
import Triangle from 'react-loader-spinner'

export default function Error() {
    return (
        <main className="d-flex m-md-5 mt-5 mb-5 min-vh-100">
            <section className="container w-100 p-3 flex-column align-self-center">
                <div className="d-flex h-100 w-100 text-center text-white  ">
                    <div className="cover-container align-self-center">
                        <Triangle
                            color="red"
                            height={80}
                            width={80}
                            timeout={8000}
                            arialLabel="loading-indicator"
                        />
                        <h1> Oh no! There is an error...Please try it again later</h1>
                    </div>
                </div>
            </section>
        </main>
    )
}