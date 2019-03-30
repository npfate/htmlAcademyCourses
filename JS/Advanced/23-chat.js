// Контейнер для сообщений
let chatContainer = document.querySelector('.chat-content');

// Форма и поле ввода текста
let newMessageForm = document.querySelector('.chat-form');
let newMessageInput = newMessageForm.querySelector('.chat-form-input');

// Шаблон для сообщения
let messageTemplate = document.querySelector('#message-template').content;
let newMessageTemplate = messageTemplate.querySelector('.chat-message');

// Удаление сообщения по крестику
let deleteMessageHandler = function(button, item) {
  button.addEventListener('click', function() {
    item.remove();
  });
}

// Создание нового сообщения
newMessageForm.addEventListener('submit', function(evt) {
  evt.preventDefault();
  
  let messageText = newMessageInput.value; // Получаем текст из поля ввода  
  let newMessage = newMessageTemplate.cloneNode(true); // Клонируем шаблон сообщения  
  newMessage.querySelector('.chat-message-text').textContent = messageText;
  
  let delButton = newMessage.querySelector('.chat-message-button'); // Находим кнопку с крестиком
  
  chatContainer.appendChild(newMessage); // Добавляем сообщение на страницу  
  deleteMessageHandler(delButton, newMessage); // Добавляем обработчик удаления сообщений по крестику  
  newMessageInput.value = ''; // Чистим содержимое поля ввода
});

/*

var chat = document.querySelector('.chat-form');
var chatInput = chat.querySelector('.chat-form-input');
var chatContent = document.querySelector('.chat-content');

var template = document.querySelector('#message-template').content;
var messageTemplate = template.querySelector('.chat-message');

chat.addEventListener('submit', function(e) {
  e.preventDefault();
  
  var inputText = chatInput.value;
  var messageText = messageTemplate.querySelector('.chat-message-text');
  messageText.textContent = inputText;
  
  var newMessage = messageTemplate.cloneNode(true);
  delMessage(newMessage);
  chatContent.appendChild(newMessage);
  chatInput.value = '';  
});

var delMessage = function(message) {
  var delButton = message.querySelector('.chat-message-button');
  delButton.addEventListener('click', function() {
    chatContent.removeChild(message);
  });
}
*/

/*

var chat = document.querySelector('.chat-form');
var chatInput = chat.querySelector('.chat-form-input');
var chatContent = document.querySelector('.chat-content');
var chatContentChildren = chatContent.children;

var template = document.querySelector('#message-template').content;
var messageTemplate = template.querySelector('.chat-message');

chat.addEventListener('submit', function(e) {
  e.preventDefault();
  
  var inputText = chatInput.value;
  var messageText = messageTemplate.querySelector('.chat-message-text');
  messageText.textContent = inputText;
  
  var newMessage = messageTemplate.cloneNode(true);
  delMessage(newMessage);
  chatContent.appendChild(newMessage);
  chatInput.value = '';  
});

var delMessage = function(message) {
  var delButton = message.querySelector('.chat-message-button');
  delButton.addEventListener('click', function() {
    message.remove();
  });
}

for (var i = 0; i < chatContentChildren.length; i++) {
  delMessage(chatContentChildren[i]);
}

*/
