import React from 'react'
import '../assets/css/style.css'
import TextArea from "./textArea";
import Message from "./message";
import MessageTeam from "./messageTeam";
import StarRating from "./star";

export default function Reviews({
    handleRating,
    handleAddRating,
    result
}){

    return (
        <>{result &&
        <div className="rez container">
            <Message
                result={result} />
          </div>}
            <MessageTeam />
           </>
     )
 }



