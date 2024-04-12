$(document).ready(function() {
    const quotes = [
        {
            text: "You miss 100% of the shots you don’t take. - Wayne Gretzky",
            author: "Michael Scott",
        },
        {
            text: "Do I need to be liked? Absolutely not. I like to be liked. I enjoy being liked. I have to be liked. But it’s not like this compulsive need, like my need to be praised.",
            author: "Michael Scott",
        },
        {
            text: "I knew exactly what to do. But in a much more real sense, I had no idea what to do.",
            author: "Michael Scott",
        },
        {
            text: "I feel like all my kids grew up and then they married each other. It’s every parent’s dream.",
            author: "Michael Scott",
        },
        {
            text: "You know what they say. Fool me once, strike one, but fool me twice...strike three.",
            author: "Michael Scott",
        },
        {
            text: "I'm not superstitious, but I am a little stitious.",
            author: "Michael Scott",
        },
        {
            text: "Sometimes I'll start a sentence and I don't even know where it's going. I just hope I find it along the way.",
            author: "Michael Scott",
        },
        {
            text: "I am Beyoncé, always.",
            author: "Michael Scott",
        },
        {
            text: "Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.",
            author: "Michael Scott",
        },
        {
            text: "That's what she said.",
            author: "Michael Scott",
        },
    ];

    function displayRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];
        $('#text').text(randomQuote.text);
        $('#author').text(randomQuote.author);
    }

    // Display a random quote on page load
    displayRandomQuote();

    // Event listener for 'New Quote' 
    $('#new-quote').click(function() {
        displayRandomQuote();
    });

    // Event listener for 'Tweet'
    $('#tweet-quote').click(function() {
        const currentQuote = $('#text').text();
        const currentAuthor = $('#author').text();
        const tweetUrl = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + currentQuote + '" - ' + currentAuthor);
        $('#tweet-quote').attr('href', tweetUrl);
    });
});
