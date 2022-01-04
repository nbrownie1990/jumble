import React from 'react'
import 'react-datepicker/dist/react-datepicker.css'


export default function JumbleTeamMessage({
  value,
  name,
  readOnly,
}) {
  return (
    <React.Fragment>
         <div className="yours messages">
           <div className="message last row text-primary">
             <div className="col-12">
               Komm und gib deine Bewertung ab !
             </div>
             <div className="col-12">
               Wir interessieren uns für deine Meinung.
               <br/>
               Dein Jumble-Team ♥️
             </div>
           </div>
        </div>
    </React.Fragment>
  )
}
