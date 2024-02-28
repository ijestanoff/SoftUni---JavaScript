async function solution() {
    const articleUrl = 'http://localhost:3030/jsonstore/advanced/articles/list';
    const detailUrl = 'http://localhost:3030/jsonstore/advanced/articles/details/';
    const mainRef = document.querySelector('#main');


    const request = await fetch(articleUrl);
    const articles = await request.json();
    for (let article of articles) {
        const requestDetails = await fetch(detailUrl + article._id);
        const data = await requestDetails.json();
        createItem(data);
    }
    
    const buttonsRef = document.querySelectorAll('button');
    [...buttonsRef].forEach(button => button.addEventListener('click',buttonHandler));
    
    function buttonHandler (e) {
        const buttonRef = e.target;
        const moreText = e.target.parentElement.parentElement.children[1];
        if (buttonRef.textContent == 'More') {
            buttonRef.textContent = 'Less';
            moreText.style.display = 'block';
        } else {
            buttonRef.textContent = 'More';
            moreText.style.display = 'none';
        }
    }

    function createItem(data) {
        let inner = '<div class="accordion">';
        inner += '<div class="head">';
        inner += `<span>${data.title}</span>`;
        inner += `<button class="button" id="${data._id}">More</button>`;
        inner += '</div>';
        inner += '<div class="extra">';
        inner += `<p>${data.content}</p>`;
        inner += '</div></div>';
        mainRef.innerHTML += inner;
    }
}

solution ();