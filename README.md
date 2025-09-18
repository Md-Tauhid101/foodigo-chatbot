# 🍴 Foodigo Chatbot (FoodAgent)

A simple **food ordering chatbot** built with **Dialogflow Messenger** and a custom frontend.  
This project demonstrates how to integrate a Dialogflow agent into a food delivery web app with a shopping cart, menu, and chatbot support.  

---

## 🚀 Features
- 📋 Interactive food menu with images and prices  
- 🛒 Shopping cart functionality (add, remove items, checkout)  
- 🤖 Integrated **Dialogflow Messenger chatbot** (FoodAgent)  
- 🎨 Modern UI with responsive design  
- ⚡ Lightweight frontend: HTML, CSS, JavaScript  

---

## 📂 Project Structure
foodigo-chatbot/


├── index.html # Main HTML file

├── style.css # Styling for website + chatbot

├── script.js # Shopping cart logic

├── images/ # Food item images

└── dialogflow-agent/ # (Optional) Exported Dialogflow agent ZIP

---

## 🔧 Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/Md-Tauhid101/foodigo-chatbot.git
cd foodigo-chatbot
```

### 2. Clone the repository
Simply open index.html in your browser.
The chatbot will load automatically.


## 💬 Using The Chatbot
The chatbot runs using Dialogflow Messenger.

### Use your own Dialogflow agent

- In the Dialogflow Console, create a new agent.

- Go to Settings → Export and Import → Import Agent.

- Import the .zip file from the /dialogflow-agent folder (if included).

- Copy your agent’s agent-id and replace it in index.html:
```bash
<df-messenger
  intent="WELCOME"
  chat-title="FoodAgent"
  agent-id="YOUR-AGENT-ID"
  language-code="en"
></df-messenger>
```

## 📸 Screenshots

![image alt](https://github.com/Md-Tauhid101/foodigo-chatbot/blob/ffee6253badd879e6941ab404cf4320b5f779f92/2.jpg)


## 🛠️ Tech Stack
- Frontend: HTML, CSS, JavaScript

- Chatbot: Dialogflow Messenger (Google Cloud)
