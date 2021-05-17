import React from "react";
import Slide from '../src/components/slide';
const IMAGE_PATH = 'public/assets/images/';

// const dataPictures =  [
//     { id: 0, src: IMAGE_PATH + 'img_woods_wide.jpg', display: true },
//     { id: 1, src: IMAGE_PATH + 'img_5terre.jpg', display: false },
//     { id: 2, src: IMAGE_PATH + 'img_nature_wide.jpg', display: false },
// ];

const dataPictures =  [
    { id: 0, src: <div><img src="public/assets/images/img_woods_wide.jpg"/><p>yyugygy</p></div>, display: true },
    { id: 1, src: <Slide />, display: false },
    { id: 2, src: 'img_nature_wide.jpg', display: false },
];

export default dataPictures;