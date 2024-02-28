function attachEvents() {
    const url = 'http://localhost:3030/jsonstore/messenger';
    const authorRef = document.querySelector('input[name="author"]');
    const contentRef = document.querySelector('input[name="content"]');
    document.querySelector('#submit').addEventListener('click', sendHandler);
    document.querySelector('#refresh').addEventListener('click', refreshHandler);

    async function sendHandler() {
        const data = { 'author': authorRef.value, 'content': contentRef.value };
        const request = await fetch(url, {
            method: 'post',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(data)
        });
        authorRef.value = '';
        contentRef.value = '';
    }

    async function refreshHandler() {
        const request = await fetch(url);
        const data = await request.json();
        let arr = Object.values(data).map(message => `${message.author}: ${message.content}`);
        document.querySelector('#messages').value = arr.join('\n');
    }
}

attachEvents();