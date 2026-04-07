// Chart.js
const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Mon','Tue','Wed','Thu','Fri'],
        datasets: [{
            label: 'Progress',
            data: [60,70,65,80,90],
            borderColor: '#00f5c4',
            tension: 0.4
        }]
    },
    options: {
        plugins: {
            legend: { display: false }
        }
    }
});

// Chat toggle
const toggleBtn = document.querySelector('.chat-toggle');
const chatPanel = document.querySelector('.chat-panel');

toggleBtn.onclick = () => {
    chatPanel.classList.toggle('active');
};

// Chat system
const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const completion = await client.chat.completions.create({
  model: "gpt-4o-mini",
  messages: [{ role: "user", content: message }]
});
