import express from "express";

const app = express();


const port = process.env.PORT || 3000;

app.get('/api/jokes', (req, res) => {
    const jokes = [
      {
        "id": 1,
        "title": "The Mathematician's Fruit",
        "content": "Why was the equal sign so humble? It knew it wasn't less than or greater than anyone else."
      },
      {
        "id": 2,
        "title": "Coffee Break",
        "content": "I told my computer I needed a break, and now it won't stop sending me coffee."
      },
      {
        "id": 3,
        "title": "The Past, Present, and Future Walk into a Bar",
        "content": "The past, present, and future walked into a bar. It was tense."
      },
      {
        "id": 4,
        "title": "A Sandwich Walks into a Bar",
        "content": "A sandwich walks into a bar. The bartender says, 'Sorry, we don't serve food here.'"
      },
      {
        "id": 5,
        "title": "Parallel Lines",
        "content": "Parallel lines have so much in common. It's a shame they'll never meet."
      },
      {
        "id": 6,
        "title": "The Invisible Man",
        "content": "I used to be a baker because I kneaded dough."
      },
      {
        "id": 7,
        "title": "The Chicken Joke",
        "content": "Why did the chicken go to the seance? To talk to the other side."
      },
      {
        "id": 8,
        "title": "Time Travel",
        "content": "Time travel is tricky. If you go into the future, you might accidentally change your present."
      },
      {
        "id": 9,
        "title": "The Broken Pencil",
        "content": "I told my friend 10 jokes to make him laugh. Sadly, no pun in ten did."
      },
      {
        "id": 10,
        "title": "Astronauts",
        "content": "Why did the astronaut break up with his girlfriend? Because he needed space."
      },
      {
        "id": 11,
        "title": "The Beekeeper",
        "content": "Why did the beekeeper quit his job? He felt unfulfilled."
      },
      {
        "id": 12,
        "title": "The Shy Peacock",
        "content": "Why was the peacock so shy? Because it was just a little bit poultry in motion."
      },
      {
        "id": 13,
        "title": "The Scaredy-Cat",
        "content": "Why was the cat sitting on the computer? It wanted to keep an eye on the mouse."
      },
      {
        "id": 14,
        "title": "The Light Bulb",
        "content": "How many programmers does it take to change a light bulb? None. It's a hardware issue."
      },
      {
        "id": 15,
        "title": "The Drummer",
        "content": "Why did the drummer get kicked out of the band? Because he couldn't handle the beat."
      },
      {
        "id": 16,
        "title": "The Blind Date",
        "content": "I told my wife she was drawing her eyebrows too high. She looked surprised."
      },
      {
        "id": 17,
        "title": "The Vegetarian",
        "content": "Why did the vegetarian go to the barbecue? To remind everyone he's still a vegan."
      },
      {
        "id": 18,
        "title": "The Skeleton",
        "content": "Why did the skeleton go to the party alone? He had no body to go with."
      },
      {
        "id": 19,
        "title": "The Book",
        "content": "I'm reading a book on anti-gravity. It's impossible to put down."
      },
      {
        "id": 20,
        "title": "The Jumping Bean",
        "content": "Why was the bean so good at jumping? It was full of life."
      },
      {
        "id": 21,
        "title": "The Spider's Website",
        "content": "Have you heard about the spider's website? It's on the web."
      },
      {
        "id": 22,
        "title": "The Ice Cream Joke",
        "content": "Why did the ice cream truck break down? Because it had too many freezes."
      },
      {
        "id": 23,
        "title": "The Vacuum",
        "content": "Why did the vacuum cleaner break up with the broom? It found it to be too sweeping."
      },
      {
        "id": 24,
        "title": "The Computer's Diet",
        "content": "I told my computer I needed a break from work, and now it won't stop sending me vacation ads."
      },
      {
        "id": 25,
        "title": "The Fruit Salad",
        "content": "Why did the grape stop in the middle of the road? It ran out of juice."
      },
      {
        "id": 26,
        "title": "The Musician's Pizza",
        "content": "Why did the musician put their pizza on a treble clef? Because they wanted to eat in harmony."
      },
      {
        "id": 27,
        "title": "The Detective Dog",
        "content": "Why did the detective dog sit in the shade? It was on a hot trail."
      },
      {
        "id": 28,
        "title": "The Star Wars Fan",
        "content": "Why do Star Wars fans never date? Because relationships are full of Sith."
      },
      {
        "id": 29,
        "title": "The Bee Joke",
        "content": "What do you call a bee that can't make up its mind? A maybee."
      },
      {
        "id": 30,
        "title": "The Light Bulb Inventor",
        "content": "How many inventors does it take to change a light bulb? None. It's already lit."
      }
    ];
    res.send(jokes);
  });

app.listen(port,()=>{
  console.log(`server at http://localhost:${port}`);
});