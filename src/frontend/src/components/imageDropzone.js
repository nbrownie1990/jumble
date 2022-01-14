import React from 'react';
import {useDropzone} from 'react-dropzone';


export default function ImageDropzone(
    { mode, onDrop,
      user,setUser,
      jumble, setJumble,
      url }) {


    const {getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        noClick: true,
        name: "jumbleImage",
        noKeyboard: true,
        accept: "image/*"
    });

    return (
        <div className="container">
            <div {...getRootProps({
                className: 'dropzone',
                name: "jumbleImage"
            })}>
                <input {...getInputProps()} />
                {isDragActive ? (
                    <h3 className="btn btn-success">Yepp!</h3>
                ) : (<p>Hier das Bild per Drag 'n' drop hinzufügen</p>)
                }
               {!isDragActive && (
                    <button className="btn edit-btn"
                            aria-label="save button"
                            type="button"
                            data-toggle="tooltip"
                            title="Save"
                            onClick= {mode === 'user' ? ( () => setUser({...user, userImage: url}))
                                     : (() => setJumble({...jumble, jumbleImage: url}))}
                    >
                        <i className="fas fa-save ps-2 pb-1"></i>
                    </button>
                )}
            </div>

            {mode === 'jumble' &&
                (jumble.jumbleImage && url ?
                    ( <img
                            className="rounded-circle p-md-3 profile-img"
                            name="jumbleImage"
                            alt="This is the jumble, uploaded by the user"
                            src={url.toString()}
                        />
                    )
                    :
                !jumble.jumbleImage && !url ?
                    ( <img
                            className="rounded-circle p-md-3 profile-img"
                            name="jumbleImage"
                            alt="This is the jumble, uploaded by the user"
                            src="https://firebasestorage.googleapis.com/v0/b/jumble-113b5.appspot.com/o/footer%2Fjumbleavatar.webp?alt=media&token=13f82459-302d-4850-b7ab-ff8a4a3ceec2"
                        />
                    ) :
                    !jumble.jumbleImage && url ?
                        (<img
                                className="rounded-circle p-md-3 profile-img"
                                name="jumbleImage"
                                alt="This is the jumble, uploaded by the user"
                                src={url.toString()}
                            />)
                        :
                        (<img
                            className="rounded-circle p-md-3 profile-img"
                            name="jumbleImage"
                            alt="This is the jumble, uploaded by the user"
                            src={jumble.jumbleImage}
                        />
                        ))}

            {mode === 'user' &&
                (user.userImage && url ?
                    ( <img
                            className="rounded-circle p-md-3 profile-img"
                            name="userImage"
                            alt="This is the user, uploaded by the user"
                            src={url.toString()}
                        />
                    )
                    :
                    !user.userImage && !url ?
                        ( <img
                                className="rounded-circle p-md-3 profile-img"
                                name="userImage"
                                alt="This is the user, uploaded by the user"
                                src="https://firebasestorage.googleapis.com/v0/b/jumble-113b5.appspot.com/o/footer%2Fuseravatar.webp?alt=media&token=f9760d16-9cd6-46e9-9f20-38712da2f4ab"
                            />
                        ) :
                        !user.userImage && url ?
                            (<img
                                className="rounded-circle p-md-3 profile-img"
                                name="userImage"
                                alt="This is the user, uploaded by the user"
                                src={url.toString()}
                            />)
                            :
                            (<img
                                    className="rounded-circle p-md-3 profile-img"
                                    name="jumbleImage"
                                    alt="This is the user, uploaded by the user"
                                    src={user.userImage}
                                />
                            ))}
        </div>
    );
}
