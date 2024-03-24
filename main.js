const author = document.querySelector(".author");
const tagList = document.querySelector(".tag-list");
const quote = document.querySelector(".quote");

let fetchData = async () => {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    return data;
};

fetchData().then((data) => {
    console.log(data);
});
