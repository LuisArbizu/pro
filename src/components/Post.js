import { React, useState } from "react";
import axios from 'axios';
import { HiThumbUp } from "react-icons/hi";
import { FaComment } from "react-icons/fa";

const Post = ({ object }) => {

    const {
        title, description, image, user, likes, comments
    } = object; // -> Destructuring
    // estado que cuente si ya di o no like

    //  await axios.patch(`https://posts-pw2021.herokuapp.com/api/v1/post/like/${_id}`, null, {headers: {
    //                Authorization: `Bearer ${localStorage.getItem('token')}`,
    //             }});
    return (
        <div className="w-2/4 bg-gray-500 flex flex-col my-4 rounded-lg h-4/6">
            {/* Se le pone "?" porque el username de los demas usuarios puede ser null or undefined */}
            <div className="p-3">
                <h1 className="text-white font-bold text-lg"> @{user?.username} </h1>
                <h2 className="text-base text-white font-semibold"> {title} </h2>
                <p className="text-white"> {description} </p>
            </div>
            <div>
                <img src={image} className="w-full" />
            </div>
            <div className="flex flex-wrap px-4 pt-4 pb-1 items-center w-full text-white space-x-72">
                <span> {likes.length +193 } Likes </span>
                <span> {comments.length} Comentarios </span>
            </div>
            <div className="flex flex-wrap p-4 items-center">
                <div className="p-1 flex flex-row justify-center text-white w-1/2">
                    <button className="flex flex-row p-2 rounded-lg hover:bg-gray-700"> <HiThumbUp size="20" className="mr-3 hover:text-blue-600" /> Like </button>

                </div>
                <div className="p-1 flex flex-row justify-center text-white w-1/2 space-x-72">
                    <button className="flex flex-row p-2 rounded-lg hover:bg-gray-700"> <FaComment size="20" className="mr-3 hover:text-blue-600" /> Comentar </button>
                </div>
            </div>
        </div>
    );
};

export default Post;
