import img1 from './images/book1.jpg'
import img2 from './images/book2.jpg'
import img3 from './images/book3.jpg'

export const books = [
    {
        author: "Dav Pilkey",
        title: "Dog Man: Twenty Thousand Fleas Under the Sea",
        img: img1,
        id: 1 // react wants a unique ID to keep track of each component
    }, {
        author: "William W Li MD",
        title: "Eat to Beat Your Diet: Burn Fat, Heal Your Metabolism, and Live Longer",
        img: img2,
        id: 2
    }, {
        author: "Taylor Jenkins Reid",
        title: "Daisy Jones & The Six: A Novel",
        img: img3,
        id: 3
    }
];

// export default books // can only have one default export per file!