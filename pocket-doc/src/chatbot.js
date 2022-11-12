import React, { Component } from 'react';

class Chatbot extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

        const chat = {
            1: {
                text: 'Hi! Welcome to Pocket Doc.',
                options: [
                    {
                        text: '👋',
                        next: 2
                    }
                ]
            },
            2: {
                text: 'How do you feel today?',
                options: [
                    {
                        text: "I'm feeling great!",
                        next: 3
                    },
                    {
                        text: "Not feeling that great.",
                        next: 4
                    }
                ]
            },
            3: {
                text: "Sounds fantastic. I'm so happy for you.",
                options: [
                    {
                        text: "😊",
                        next: 5
                    },
                ]
            },
            4: {
                text: "I'm here to help. Which of these feelings is the closest to how you feel now?",
                options: [
                    {
                        text: "I'm anxious 😰",
                        next: 7
                    },
                    {
                        text: "I'm depressed 😥",
                        next: 8
                    },
                    {
                        text: "I'm feeling impulsive 🔥",
                        next: 9
                    },
                ]
            },
            5: {
                text: 'Feel free to come by any time you need help. The door is always open.',
                options: [
                    {
                        text: "Got it.",
                        next: 6
                    },
                ]
            },
            6: {
                text: 'Click restart below to start over.',
            },
            7: {
                text: "We can get through this together. Are you in immediate harm or feel your life is at risk?",
                options: [
                    {
                        text: "Yes",
                        next: 10
                    },
                    {
                        text: "No",
                        next: 11
                    },
                ]
            },
            8: {
                text: "We can get through this together. Are you in immediate harm or feel your life is at risk?",
                options: [
                    {
                        text: "Yes",
                        next: 10
                    },
                    {
                        text: "No",
                        next: 12
                    },
                ]
            },
            9: {
                text: "We can get through this together. Are you in immediate harm or feel your life is at risk?",
                options: [
                    {
                        text: "Yes",
                        next: 10
                    },
                    {
                        text: "No",
                        next: 13
                    },
                ]
            },
            10: {
                text: "Has any form of lethal harm already been done?",
                options: [
                    {
                        text: "Yes",
                        next: 14
                    },
                    {
                        text: "No",
                        next: 15
                    },
                ]
            },
            11: {
                text: "We can try some techniques to reduce your anxiety levels.",
                options: [
                    {
                        text: "Breathing technique",
                        next: 19
                    },
                    {
                        text: "Safe space technique",
                        next: 20
                    },
                    {
                        text: "Journaling technique",
                        next: 21
                    },
                    {
                        text: "Focusing technique",
                        next: 22
                    },
                ]
            },
            14: {
                text: "Please dial 119 and or 112 immediately.",
                next: 16
            },
            15: {
                text: "These are the list of hotlines and crisis lines in South Korea. Please reach out to them now. We recommend you start with 1588-9191.",
                options: [
                    {
                        text: "Crisis Lines",
                        url: "https://www.therapyroute.com/article/suicide-hotlines-and-crisis-lines-in-south-korea"
                    },
                ],
            },
            16: {
                text: "We are all here to help you. So call us.",
                next: 17
            },
            17: {
                text: "I'll always be here, and waiting until you're back. Let's talk again after we get you immediate help.",
                options: [
                    {
                        text: "Got it.",
                        next: 18
                    },
                ]
            },
            18: {
                text: "We can get through this together. I'm here by your side.",
            },
            19: {
                text: "The following breathing exercise is quite simple.",
                next: 23
            },
            23: {
                text: "The following breathing exercise is quite simple. It's called 4-7-8 breathing.",
                options: [
                    {
                        text: "I haven't heard of it.",
                        next: 24
                    },
                    {
                        text: "I already know it.",
                        next: 29
                    }
                ]
            },
            24: {
                text: "I'm glad to guide you through it.",
                next: 26
            },
            26: {
                text: "First, inhale for 4 seconds.",
                next: 27
            },
            27: {
                text: "Next, hold that breath for 7 seconds.",
                next: 28
            },
            28: {
                text: "Then, release it for 8 seconds. Easy, right?",
                options: [
                    {
                        text: "Yup 😊",
                        next: 29
                    },
                ]
            },
            29: {
                text: "Let's get started then.",
                next: 30
            },
            30: {
                text: "First, inhale for 4 seconds.",
                next: 31
            },
            31: {
                text: "Next, hold that breath for 7 seconds.",
                next: 32
            },
            32: {
                text: "Then, release it for 8 seconds.",
                options: [
                    {
                        text: "Done 😮‍💨",
                        next: 33
                    },
                ]
            },
            33: {
                text: "One more time.",
                next: 34
            },
            34: {
                text: "First, inhale for 4 seconds.",
                next: 35
            },
            35: {
                text: "Next, hold that breath for 7 seconds.",
                next: 36
            },
            36: {
                text: "Then, release it for 8 seconds.",
                options: [
                    {
                        text: "Done 😮‍💨",
                        next: 37
                    },
                ]
            },
            37: {
                text: "One last time.",
                next: 38
            },
            38: {
                text: "First, inhale for 4 seconds.",
                next: 39
            },
            39: {
                text: "Next, hold that breath for 7 seconds.",
                next: 40
            },
            40: {
                text: "Then, release it for 8 seconds.",
                options: [
                    {
                        text: "Done 😮‍💨",
                        next: 41
                    },
                ]
            },
            41: {
                text: "Has this exercise helped you relax?",
                options: [
                    {
                        text: "Yes 👍",
                        next: 42
                    },
                    {
                        text: "No 👎",
                        next: 43
                    },
                ]
            },
            42: {
                text: "I'm so glad I could help.",
                next: 44
            },
            43: {
                text: "I'm sorry it didn't help. There are many other ways I could help you.",
                next: 44
            },
            44: {
                text: "Would you like to try other exercises?",
                options: [
                    {
                        text: "Yes 👍",
                        next: 11
                    },
                    {
                        text: "No 👎",
                        next: 5
                    },
                ]
            },

        };


        const bot = function () {

            const peekobot = document.getElementById('peekobot');
            const container = document.getElementById('peekobot-container');
            const inner = document.getElementById('peekobot-inner');
            let restartButton = null;

            const sleep = function (ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
            };

            const scrollContainer = function () {
                inner.scrollTop = inner.scrollHeight;
            };

            const insertNewChatItem = function (elem) {
                //container.insertBefore(elem, peekobot);
                peekobot.appendChild(elem);
                scrollContainer();
                //debugger;
                elem.classList.add('activated');
            };

            const printResponse = async function (step) {
                const response = document.createElement('div');
                response.classList.add('chat-response');
                response.innerHTML = step.text;
                insertNewChatItem(response);

                await sleep(1500);

                if (step.options) {
                    const choices = document.createElement('div');
                    choices.classList.add('choices');
                    step.options.forEach(function (option) {
                        const button = document.createElement(option.url ? 'a' : 'button');
                        button.classList.add('choice');
                        button.innerHTML = option.text;
                        if (option.url) {
                            button.href = option.url;
                        } else {
                            button.dataset.next = option.next;
                        }
                        choices.appendChild(button);
                    });
                    insertNewChatItem(choices);
                } else if (step.next) {
                    printResponse(chat[step.next]);
                }
            };

            const printChoice = function (choice) {
                const choiceElem = document.createElement('div');
                choiceElem.classList.add('chat-ask');
                choiceElem.innerHTML = choice.innerHTML;
                insertNewChatItem(choiceElem);
            };

            const disableAllChoices = function () {
                const choices = document.querySelectorAll('.choice');
                choices.forEach(function (choice) {
                    choice.disabled = 'disabled';
                });
                return;
            };

            const handleChoice = async function (e) {

                if (!e.target.classList.contains('choice') || 'A' === e.target.tagName) {
                    // Target isn't a button, but could be a child of a button.
                    var button = e.target.closest('#peekobot-container .choice');

                    if (button !== null) {
                        button.click();
                    }

                    return;
                }

                e.preventDefault();
                const choice = e.target;

                disableAllChoices();

                printChoice(choice);
                scrollContainer();

                await sleep(1500);

                if (choice.dataset.next) {
                    printResponse(chat[choice.dataset.next]);
                }
                // Need to disable buttons here to prevent multiple choices
            };

            const handleRestart = function () {
                startConversation();
            }

            const startConversation = function () {
                printResponse(chat[1]);
            }

            const init = function () {
                container.addEventListener('click', handleChoice);

                restartButton = document.createElement('button');
                restartButton.innerText = "Restart";
                restartButton.classList.add('restart');
                restartButton.addEventListener('click', handleRestart);

                container.appendChild(restartButton);

                startConversation();
            };

            init();
        }

        bot();
    }
    render() {
        return (
            <div id="peekobot-container">
                <div id="peekobot-inner">
                    <div id="peekobot"></div>
                </div>
            </div>
        )
    }
}


export default Chatbot;