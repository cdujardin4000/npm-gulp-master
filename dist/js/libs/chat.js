const renderChat = (CONFIG) => {
    const OUTER = document.createElement('div');
    OUTER.className = 'chat-container';

    const INNER = document.createElement('div');
    INNER.className = 'inner-container';

    INNER.append(createHeader(CONFIG));
    INNER.append(createMessageContainer());
    INNER.append(createForm());

    OUTER.append(INNER);
    return OUTER;
}


const createHeader = (CONFIG) => {
    const HEADER = document.createElement('header');
    HEADER.innerHTML = `<h1>conversation with ${CONFIG.botName}</h1>`;
    HEADER.className = 'chat-header';
    return HEADER;
}

const createMessageContainer = () => {
    const CONTAINER = document.createElement('div');
    CONTAINER.className = 'message-container';
    return CONTAINER;
}

const createForm = () => {
    const CONTAINER = document.createElement('div');
    CONTAINER.className = 'chat-input-container';

    const FORM = document.createElement('form');
    FORM.className = 'chat-input-form';

    const INPUT = document.createElement('input');
    INPUT.placeholder = 'Posez votre question ici'
    INPUT.className = 'chat-input';

    const BTN = document.createElement('button');
    BTN.className = 'chat-btn-send';

    const IMG = document.createElement('img');
    IMG.src = './assets/icons/send.svg';
    IMG.alt = 'send-paper-plane';
    IMG.className = 'chat-btn-send-icon';

    BTN.append(IMG);
    FORM.append(INPUT);
    FORM.append(BTN);
    CONTAINER.append(FORM);

    return CONTAINER;
}

const createUserChatMessage = () => {
    const CONTAINER = document.createElement('div');
    CONTAINER.classList.add(
        'user-chat-message-container'
    )
    const AVATARCONTAINER = document.createElement('div');
    AVATARCONTAINER.classList.add(
        'user-avatar-container'
    )
    const IMG = document.createElement('img');
    IMG.src = './assets/icons/send.svg';
    IMG.alt = 'user-avatar-icon';
    IMG.className = 'chat-btn-send-icon';

    const MESSAGECONTAINER = document.createElement('div');
    MESSAGECONTAINER.className = 'user-chat-message';

    return CONTAINER;
}

const createBotChatMessage = () => {
    const CONTAINER = document.createElement('div');
    CONTAINER.className = 'message-container';
    return CONTAINER;
}
export default  renderChat