import express from "express";

const app = express();

app.get('/',(req,res)=>{
  res.send("server is ready");
});

const port = process.env.PORT || 3000;

app.get('/jokes',(req,res) => {
    const jokes = [
      {
        "id": 1,
        "title": "The Mathematician's Joke",
        "content": "Why was the equal sign so humble? Because it knew it wasn't less than or greater than anyone else."
      },
      {
        "id": 2,
        "title": "The Programmer's Joke",
        "content": "Why do programmers prefer dark mode? Because light attracts bugs."
      },
      {
        "id": 3,
        "title": "The Coffee Joke",
        "content": "Why do coffee beans never get into arguments? Because they know how to espresso themselves."
      },
      {
        "id": 4,
        "title": "The Book Joke",
        "content": "I told my wife she was drawing her eyebrows too high. She looked surprised."
      },
      {
        "id": 5,
        "title": "The Gym Joke",
        "content": "I don't need a personal trainer; my microwave beeps every time my food is ready."
      }
    ];
    res.send(jokes);
  });

app.listen(port,()=>{
  console.log(`server at http://localhost:${port}`);
});