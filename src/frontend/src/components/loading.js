import React from "react";
import Loader from 'react-loader-spinner'

export default function Loading() {
    return (
        <main className="d-flex m-md-5 mt-5 mb-5 min-vh-100">
            <section className="container w-100 p-3 flex-column align-self-center">
                <div className="d-flex h-100 w-100 text-center text-white  ">
                    <div className="cover-container align-self-center">
                        <Loader
                            type="ThreeDots"
                            color="white"
                            height={100}
                            width={100}
                            timeout={8000}
                        />
                    </div>
                </div>
            </section>
        </main>
    )
}