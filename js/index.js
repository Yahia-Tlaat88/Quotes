document.getElementById('btn');
document.getElementById('quote-output');

var quotes=["“Be yourself; everyone else is already taken.” ",
    "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.” ",
    "“So many books, so little time.”",
    "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” ",
    "“A room without books is like a body without a soul.” ",
    " “Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.” ",
    "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.” "];
    var authors=["Oscar Wilde ",
        " Marilyn Monroe",
        "Frank Zappa",
        "Albert Einstein",
        " Marcus Tullius Cicero ",
        "Bernard M. Baruch",
        " Dr. Seuss "];
    function generator(){
        var random_q=quotes[Math.floor(Math.random()*quotes.length)];
        var random_a=authors[Math.floor(Math.random()*authors.length)];
        document.getElementById('quote-output').innerHTML = random_q;
        document.getElementById('authors-output').innerHTML = random_a;
    }