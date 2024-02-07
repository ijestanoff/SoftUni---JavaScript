function solve() {
    const formRef = document.querySelector("form");
    formRef.addEventListener("submit", onSubmitHandler);
    const [addTask, openTask, inProgress, complete] = document.querySelectorAll("section");
    const btnHandlerEnum = {
        start: function (e) {
            let currentArticle = e.target.parentElement.parentElement;
            inProgress.children[1].appendChild(currentArticle);
            e.target.parentElement.remove(); //remove buttons
            currentArticle.innerHTML += getButtonPartial({ text: "Delete", clases: "red" }, { text: "Finish", clases: "orange" });
            let btns = currentArticle.querySelectorAll("button");
            Array.from(btns).forEach(x => x.addEventListener("click", btnHandler));
        },
        delete: function (e) {
            let currentArticle = e.target.parentElement.parentElement;
            currentArticle.remove();
        },
        finish: function (e) {
            let currentArticle = e.target.parentElement.parentElement;
            e.target.parentElement.remove(); //remove buttons
            complete.children[1].appendChild(currentArticle);
        }
    }

    function onSubmitHandler(e) {
        e.preventDefault();
        let addTaskRef = e.target.elements;
        let task = addTaskRef[0].value;
        let desc = addTaskRef[1].value;
        let data = addTaskRef[2].value;
        if (!task || !desc || !data) {
            return;
        }
        createArticle(task, desc, data);
        addTaskRef[0].value = "";
        addTaskRef[1].value = "";
        addTaskRef[2].value = "";

    }

    function createArticle(task, desc, data) {
        let newArticle = document.createElement("article");
        newArticle.innerHTML = `<h3>${task}</h3>` +
            `<p>Description: ${desc}</p>` +
            `<p>Due Date: ${data}</p>` +
            getButtonPartial({ text: "Start", clases: "green" }, { text: "Delete", clases: "red" });
        openTask.children[1].appendChild(newArticle);
        let btns = newArticle.querySelectorAll("button");
        Array.from(btns).forEach(x => x.addEventListener("click", btnHandler));

    }

    function btnHandler(e) {
        let current = e.target.innerText.toLowerCase();
        btnHandlerEnum[current](e);
    }

    function getButtonPartial(btn1, btn2) {
        return `<div class="flex">` +
            `<button class=${btn1.clases}>${btn1.text}</button>` +
            `<button class=${btn2.clases}>${btn2.text}</button>` +
            `</div>`;
    }
}