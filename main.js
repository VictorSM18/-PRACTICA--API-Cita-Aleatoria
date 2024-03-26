const author = document.querySelector(".author");
const tagList = document.querySelector(".tag-list");
const quote = document.querySelector(".quote");
const randomButton = document.querySelector(".random");
const copyButton = document.querySelector(".copy");

const fetchData = async () => {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    return data;
};

fetchData().then((data) => {
    getData(data);
});

function getData(data) {
    author.innerHTML = data.author;
    for (item of data.tags) {
        const tag = document.createElement("li");
        tagList.appendChild(tag);
        tag.classList.add("tag");
        tag.innerHTML = item;
    }
    quote.innerHTML = `"${data.content}"`;
}

randomButton.addEventListener("click", () => {
    while (tagList.firstChild) {
        tagList.firstChild.remove();
    }
    fetchData().then((data) => getData(data));
});

copyButton.addEventListener("click", () => {
    navigator.clipboard.writeText(quote.innerHTML);
    alert("Quote Copied");
});
