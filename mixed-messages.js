const mixedMessages = {
  _timeOfDay: ["morning", "afternoon", "evening", "day"],
  _greetingsArray: ["hi", "hey", "what's up", "hello", "how's it going?"],
  _motivationArray: ['“We cannot solve problems with the kind of thinking we employed when we came up with them.” — Albert Einstein',
    '“Learn as if you will live forever, live like you will die tomorrow.” — Mahatma Gandhi',
    '“Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.” — Mark Twain',
    '“When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.”— Eleanor Roosevelt',
    '“When you change your thoughts, remember to also change your world.”—Norman Vincent Peale',
    '“It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest. —Walter Anderson',
    '“Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.”—Diane McLaren'],
  _questionOfDayArray: ['What will you be doing today', 'What\'s planned for today', 'What are you excited for today', 'How would you like to start your day', 'What are you grateful for today'],
  _adjectivesArray: ["good", "excellent", "glorious", "amazing", 'beautiful', 'glamorous', 'radiant', 'breathtaking', 'stunning', 'charming', 'delightful', 'gorgeous', 'exquisite'],
  get motivation() {
    return this._motivationArray;
  },
  get adjectives() {
    return this._adjectivesArray;
  },
  set motivation(str) {
    if ((typeof str) = 'string') {
      this._motivationArray.push(str);
    } else {
      console.log('Input a valid motivational phrase string to start the day.');
    }
  },
  set adjectives(str) {
    if ((typeof str) = 'string') {
      this._adjectivesArray.push(str);
    } else {
      console.log('Input a valid adjective string.');
    }
  }
}

const currentDay = new Date();
console.log(timeOfDay.getHours());
const adjectiveIndex = Math.floor(Math.random());
