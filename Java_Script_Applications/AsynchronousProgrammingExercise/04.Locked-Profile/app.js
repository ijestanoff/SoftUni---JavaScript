async function lockedProfile() {
    const profileUrl = 'http://localhost:3030/jsonstore/advanced/profiles';
    const mainRef = document.getElementById('main');

    const respond = await fetch(profileUrl);
    const data = await respond.json();
    mainRef.children[0].remove();
    Object.entries(data).forEach(([_, user], index) => {
        mainRef.innerHTML += createProfile(user.username, user.email, user.age, index);
    });
    const buttonsRef = document.querySelectorAll('button');
    [...buttonsRef].forEach(button => button.addEventListener('click', showHandler));

    function showHandler(e) {
        let childs = e.target.parentElement.children;
        let radioCheck = childs[2];
        let hiddenBlock = childs[9];
        let buttonText = childs[10];
        if (!radioCheck.checked) {
            if (hiddenBlock.hidden) {
                hiddenBlock.hidden = false;
                buttonText.textContent = 'Hide it';
            } else {
                hiddenBlock.hidden = true;
                buttonText.textContent = 'Show more';
            }
        }
    }

    function createProfile(username, email, age, index) {
        let inner = '<div class="profile">';
        inner += '<img src="./iconProfile2.png" class="userIcon" />';
        inner += '<label>Lock</label>';
        inner += `<input type="radio" name="user${index + 1}Locked" value="lock" checked>`;
        inner += '<label>Unlock</label>';
        inner += `<input type="radio" name="user${index + 1}Locked" value="unlock"><br>`;
        inner += '<hr>';
        inner += '<label>Username</label>';
        inner += `<input type="text" name="user${index + 1}Username" value="${username}" enabled readonly />`;
        inner += `<div class="user${index + 1}Username" hidden>`; //id="user${index + 1}HiddenFields" 
        inner += '<hr>';
        inner += '<label>Email:</label>';
        inner += `<input type="email" name="user${index + 1}Email" value="${email}" disabled readonly />`;
        inner += '<label>Age:</label>';
        inner += `<input type="email" name="user${index + 1}Age" value="${age}" disabled readonly />`;
        inner += '</div>';
        inner += '<button>Show more</button>';
        return inner + '</div>';
    }
}