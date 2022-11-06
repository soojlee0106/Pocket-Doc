import React, { Component } from 'react';

class Chatbot extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

        // input options
        const utterances = [
            ["good"],
            ["anxious"],
            ["depressed"],
            [""],
            ["ayes"]
        ];

        // Possible responses corresponding to triggers

        const answers = [
            [
                "Fantastic to hear that. Tell me more about your day.",
                "I'm so happy for you. Please tell me the details about your day."
            ],
            [
                "Let's go through basic exercises to relax you. Would you like to try? ayes / ano"
            ],
            [
                "Please remember I am here for you. I have some exercises to help you through this moment. dyes / dno"
            ],
            [""],
            ["We will try a technique to imagine you in your safe space."]

        ];

        // Random for any other user input

        const alternatives = [
            "Go on...",
            "Try again",
        ];

        const inputField = document.getElementById("input");
        inputField.addEventListener("keydown", (e) => {
            if (e.code === "Enter") {
                let input = inputField.value;
                inputField.value = "";
                output(input);
            }
        });

        function output(input) {
            let product;
            let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
            text = text
                .replace(/ a /g, " ")
                .replace(/whats/g, "what is")
                .replace(/please /g, "")
                .replace(/ please/g, "")
                .replace(/r u/g, "are you");

            if (compare(utterances, answers, text)) {
                // Search for exact match in triggers
                product = compare(utterances, answers, text);
            }
            else {
                product = alternatives[Math.floor(Math.random() * alternatives.length)];
            }

            addChatEntry(input, product);
        }

        function compare(utterancesArray, answersArray, string) {
            let reply;
            let replyFound = false;
            for (let x = 0; x < utterancesArray.length; x++) {
                for (let y = 0; y < utterancesArray[x].length; y++) {
                    if (utterancesArray[x][y] === string) {
                        let replies = answersArray[x];
                        reply = replies[Math.floor(Math.random() * replies.length)];
                        replyFound = true;
                        break;
                    }
                }
                if (replyFound) {
                    break;
                }
            }
            return reply;
        }

        function addChatEntry(input, product) {
            const messagesContainer = document.getElementById("messages");
            let userDiv = document.createElement("div");
            userDiv.id = "user";
            userDiv.className = "user response";
            userDiv.innerHTML = `<span>${input}</span>`;
            messagesContainer.appendChild(userDiv);

            let botDiv = document.createElement("div");
            let botText = document.createElement("span");
            botDiv.id = "bot";
            botDiv.className = "bot response";
            botText.innerText = "Typing...";
            botDiv.appendChild(botText);
            messagesContainer.appendChild(botDiv);

            messagesContainer.scrollTop =
                messagesContainer.scrollHeight - messagesContainer.clientHeight;

            setTimeout(() => {
                botText.innerText = `${product}`;
            }, 3000);
        }
    }
    render() {
        return (
            <div id="container" class="container">
                <div id="chat" class="chat">
                    <div id="messages" class="messages"> How are you feeling? Good/Anxious/Depressed </div>
                    <input id="input" type="text" placeholder="Write something..." autocomplete="off" autofocus="true" />
                </div>
            </div>
        )
    }
}


export default Chatbot;