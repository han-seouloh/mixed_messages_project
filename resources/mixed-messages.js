/*Defining Mixed Messages phrases*/
const mixedMessages = {
  _timeOfDay: ["morning", "afternoon", "evening"],
  _greetingsArray: ["Hi", "Hey", "What's up", "Hello", 'Salutations'],
  _motivationArray: ['“We cannot solve problems with the kind of thinking we employed when we came up with them.”\n— Albert Einstein',
    '“Learn as if you will live forever, live like you will die tomorrow.”\n— Mahatma Gandhi',
    '“Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.”\n— Mark Twain',
    '“When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.”\n— Eleanor Roosevelt',
    '“When you change your thoughts, remember to also change your world.”\n— Norman Vincent Peale',
    '“It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest."\n— Walter Anderson',
    '“Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.”\n— Diane McLaren'],
  _questionOfDayArray: ['What will you be doing today', 'What\'s planned for today', 'What are you excited for today', 'How would you like to start your day', 'What are you grateful for today'],
  _adjectivesArray: ["good", "excellent", "glorious", "amazing", 'beautiful', 'glamorous', 'radiant', 'breathtaking', 'stunning', 'charming', 'delightful', 'gorgeous', 'exquisite'],
  get timeOfDay() {
    return this._timeOfDay
  },
  get greetings() {
    return this._greetingsArray
  },
  get motivation() {
    return this._motivationArray;
  },
  get question() {
    return this._questionOfDayArray
  },
  get adjectives() {
    return this._adjectivesArray;
  },
  set motivation(outputMessage) {
    if (typeof outputMessage === 'string') {
      this._motivationArray.push(outputMessage);
    } else {
      console.log('Input a valid motivational phrase string to start the day.');
    }
  },
  set adjectives(outputMessage) {
    if (typeof outputMessage === 'string') {
      this._adjectivesArray.push(outputMessage);
    } else {
      console.log('Input a valid adjective string.');
    }
  }
}

/*Set Day or Night Background*/
const currentTime = new Date();
const dayBackground = document.getElementById('day');
const nightBackground = document.getElementById('night');

setInterval(() => {
  if (currentTime.getHours >= 8 && currentTime.getHours < 18) {
    dayBackground.style.zIndex = '0';
    nightBackground.style.zIndex = '-1';
    console.log(currentTime.getHours);
  } else {
    dayBackground.style.zIndex = '-1';
    nightBackground.style.zIndex = '0';
    console.log(currentTime.getHours);
  }
}, 1000);

const startButton = document.getElementById('start');
const backButton = document.getElementById('back');
const welcomeBanner = document.getElementsByClassName('banner welcome');
const messageBanner = document.getElementsByClassName('banner message');

/*Define Mixed Messages function*/
const mixedMessage = () => {
  console.log(currentTime)
  console.log(currentTime.getHours())
  const greetingsIndex = Math.floor(Math.random() * mixedMessages.greetings.length)
  const adjectiveIndex = Math.floor(Math.random() * mixedMessages.adjectives.length);
  const phraseIndex = Math.floor(Math.random() * mixedMessages.motivation.length);
  const questionIndex = Math.floor(Math.random() * mixedMessages.question.length);
  let greetingMessage;
  let outputMessage;

  if (currentTime.getHours() >= 6 && currentTime.getHours() < 12) {
    greetingMessage = `${mixedMessages.greetings[greetingsIndex]}, ${mixedMessages.adjectives[adjectiveIndex]} ${mixedMessages.timeOfDay[0]}!`;
    outputMessage = `${mixedMessages.question[questionIndex]}?\nLet's get you started with a motivational phrase.\n${mixedMessages.motivation[phraseIndex]}`;
    
  } else if (currentTime.getHours() >= 12 && currentTime.getHours() < 20) {
    greetingMessage = `${mixedMessages.greetings[greetingsIndex]}, ${mixedMessages.adjectives[adjectiveIndex]} ${mixedMessages.timeOfDay[1]}!`;
    outputMessage = `\nAnd remember...\n${mixedMessages.motivation[phraseIndex]}`;

  } else if (currentTime.getHours() >= 20 && currentTime.getHours() <= 23 || (currentTime.getHours() >= 0 && currentTime.getHours() < 2)) {
    greetingMessage = `${mixedMessages.greetings[greetingsIndex]}, ${mixedMessages.adjectives[adjectiveIndex]} ${mixedMessages.timeOfDay[2]}!`;
    outputMessage = `Let's finish up, enjoy what remains of the night and rest so you can seize the day tomorrow!\n${mixedMessages.motivation[phraseIndex]}`;

  } else {
    outputMessage = 'It\'s getting late... You should sleep soon.';

  }
  console.log(greetingMessage);
  console.log(outputMessage);
}

startButton.onclick = mixedMessage;