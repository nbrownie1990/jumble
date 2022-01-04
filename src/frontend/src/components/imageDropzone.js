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
                            alt="1"
                            src={url.toString()}
                        />
                    )
                    :
                !jumble.jumbleImage && !url ?
                    ( <img
                            className="rounded-circle p-md-3 profile-img"
                            name="jumbleImage"
                            alt="2"
                            src="https://images.unsplash.com/photo-1608155686393-8fdd966d784d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                        />
                    ) :
                    !jumble.jumbleImage && url ?
                        (<img
                                className="rounded-circle p-md-3 profile-img"
                                name="jumbleImage"
                                alt="3"
                                src={url.toString()}
                            />)
                        :
                        (<img
                            className="rounded-circle p-md-3 profile-img"
                            name="jumbleImage"
                            alt="4"
                            src={jumble.jumbleImage}
                        />
                        ))}

            {mode === 'user' &&
                (user.userImage && url ?
                    ( <img
                            className="rounded-circle p-md-3 profile-img"
                            name="jumbleImage"
                            alt="1"
                            src={url.toString()}
                        />
                    )
                    :
                    !user.userImage && !url ?
                        ( <img
                                className="rounded-circle p-md-3 profile-img"
                                name="jumbleImage"
                                alt="2"
                                src="https://images.unsplash.com/photo-1608155686393-8fdd966d784d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            />
                        ) :
                        !user.userImage && url ?
                            (<img
                                className="rounded-circle p-md-3 profile-img"
                                name="jumbleImage"
                                alt="3"
                                src={url.toString()}
                            />)
                            :
                            (<img
                                    className="rounded-circle p-md-3 profile-img"
                                    name="jumbleImage"
                                    alt="4"
                                    src={user.userImage}
                                />
                            ))}
        </div>
    );
}
