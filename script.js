let currentMessageIndex = 0;
const messages = document.querySelectorAll('.hidden-message');

function showDadMessage() {
    const box = document.querySelector('.box');
    const textWrapper = document.querySelector('.text-wrapper');
    const giftBox = document.querySelector('.gift-box');
    const navigation = document.getElementById('navigation');
    const fatherInfo = document.getElementById('fatherInfo');
    const startingCardImage = document.querySelector('.card img');

    box.style.display = 'none';
    textWrapper.style.display = 'none';  
    giftBox.style.opacity = 0;
    navigation.style.display = 'flex';
    fatherInfo.style.display = 'block';
    messages[currentMessageIndex].style.display = 'flex';

    startingCardImage.style.display = 'none';

    updateFatherInfo();
    updateMessageCount();
    updateButtons();
}

function updateFatherInfo() {
    const fatherInfo = document.getElementById('fatherInfo');

    switch (currentMessageIndex) {
        case 0:
            fatherInfo.innerHTML = "<p>Dear Papa, your unwavering support and wisdom have shaped our paths and inspired us every day. Today, we celebrate not just a father, but a mentor, a friend, and a hero. Thank you for being the bedrock of our lives.</p>";
            break;
        case 1:
            fatherInfo.innerHTML = "<p>Daddy-o, you’re my compass and my cheerleader. Your love and counsel have sculpted who I am. Thanks for always having my back. Cheers to you on Father’s Day!</p>";
            break;
        case 2:
            fatherInfo.innerHTML = "<p>Pops, you're more than just my dad, you're my pal. Your jokes, your insight, and your love make each day brighter. Appreciate you more than words can say. Happy Father's Day!</p>";
            break;
        case 3:
            fatherInfo.innerHTML = "<p>Dad, your strength and kindness are a constant source of inspiration. You've taught me the importance of hard work and integrity. Celebrating you today and always. Happy Father's Day!</p>";
            break;
        case 4:
            fatherInfo.innerHTML = "<p>Father, your dedication to our family is unparalleled. Your wisdom and guidance have been a guiding light. Thank you for everything you do. Wishing you a joyous Father's Day!</p>";
            break;
        case 5:
            fatherInfo.innerHTML = "<p>To my dearest Dad, your love and laughter have filled my life with endless joy. Your presence is a gift I cherish every day. Happy Father's Day to the best dad ever!</p>";
            break;
        default:
            fatherInfo.innerHTML = "<p>Default father info</p>"; 
            break;
    }
}

function updateMessageCount() {
    const messageCountElement = document.getElementById('messageCount');
    const messagesRead = currentMessageIndex + 1;
    const messagesLeft = messages.length - messagesRead;

    messageCountElement.textContent = `${messagesRead}/${messagesLeft}`;
    messageCountElement.style.fontSize = '1.1rem';
    messageCountElement.style.fontFamily = 'monospace';
}

function updateMessages() {
    messages.forEach((message, index) => {
        message.style.display = index === currentMessageIndex ? 'flex' : 'none';
    });
}

function updateButtons() {
    const leftButton = document.querySelector('.nav-button.left');
    const rightButton = document.querySelector('.nav-button.right');

    leftButton.disabled = currentMessageIndex === 0;
    rightButton.disabled = currentMessageIndex === messages.length - 1;
}

function previousMessage() {
    if (currentMessageIndex > 0) {
        currentMessageIndex--;
        updateMessages();
        updateFatherInfo();
        updateMessageCount();
        updateButtons();
    }
}

function nextMessage() {
    if (currentMessageIndex < messages.length - 1) {
        currentMessageIndex++;
        updateMessages();
        updateFatherInfo();
        updateMessageCount();
        updateButtons();
    }
}
