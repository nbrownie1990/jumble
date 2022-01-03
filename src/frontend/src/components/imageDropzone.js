import React, {useCallback, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import {getDownloadURL, uploadBytes, ref, uploadBytesResumable} from 'firebase/storage';
import {storage} from '../services/firebase';
import {useParams} from "react-router";

export default function ImageDropzone(
    { mode, onDrop,
      user,setUser, uploadJumbleImage,
      jumble, setJumble,
      url, setUrl,
      handleJumbleInputChange,
      handleImageInputChange}) {


    // async function uploadUserImage(id, file){
    //     if(!file) return;
    //     const fileRef = ref(storage, "users/" + 'userId.' + user.id + '.png');
    //     const snapshot = await uploadBytes(fileRef, file);
    //     const userPhoto = getDownloadURL(fileRef)
    //         .then((url) => {setUrl(url)})
    //     alert("Bild ist hochgeladen! Sobald du auf speichern gehst, wird es aktualisiert...")
    // }

    // const onDrop = useCallback(acceptedFiles => {
    //     const file = acceptedFiles[0];
    //     console.log(file)
    //     {mode === 'jumble' && uploadJumbleImage(jumble.jumbleId, file) }
    //     {mode === 'user' && uploadUserImage(user.id, file) }
    //  },[])

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
                        onClick={() => setJumble({...jumble, jumbleImage: url})}

                    //onClick={() => handleJumbleInputChange(url)}
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
