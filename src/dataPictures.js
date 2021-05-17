import React from "react";
import Slide from '../src/components/slide';

// const dataPictures =  [
//     { id: 0, src: IMAGE_PATH + 'img_woods_wide.jpg', display: true },
//     { id: 1, src: IMAGE_PATH + 'img_5terre.jpg', display: false },
//     { id: 2, src: IMAGE_PATH + 'img_nature_wide.jpg', display: false },
// ];

const dataPictures =  [
    { id: 0, slide: <div><img src="public/assets/images/img_woods_wide.jpg"/><p>yyugygy</p></div>, display: true },
    { id: 1, slide: <Slide
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum."
                        imageSrc="img_5terre.jpg"
                        nameSlide="Slide"
                    />,
        display: false },
    { id: 2, slide: 'img_nature_wide.jpg', display: false },
];

export default dataPictures;