import React, { useState } from "react";
import { imageDb } from '../firebase-config/firebase';
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

function ImageUpload({ onUpload }) {
    const [img, setImg] = useState('');

    const handleClick = () => {
        if (img !== null) {
            const imgRef = ref(imageDb, `files/${v4()}`);
            uploadBytes(imgRef, img).then(snapshot => {
                getDownloadURL(snapshot.ref).then(url => {
                    onUpload(url);
                });
            });
        }
    };

    return (
        <div className="border p-2 rounded">
            <input   type="file" onChange={(e) => setImg(e.target.files[0])} />
            <button  class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ml-3" onClick={handleClick}>Upload</button>
        </div>
    );
}

export default ImageUpload;