const books = [
    // Fantasy
    { id: "book1", title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy", imageUrl: "images/The Hobbit.jpg", price: "$24.99", summary: "Bilbo Baggins, a hobbit enjoying his quiet life, is thrust into a grand adventure by the wizard Gandalf and a group of dwarves to reclaim their homeland from the dragon Smaug.", rating: "4.4/5" },
    { id: "book2", title: "Children of Blood and Bone", author: "Tomi Adeyemi", genre: "Fantasy", imageUrl: "images/Children of Blood and Bone.jpg", price: "$21.99", summary: "In a world where magic has been suppressed, Zélie Adebola has one chance to bring back magic and strike against the monarchy that killed her mother and oppressed her people.", rating: "4.2/5" },
    { id: "book3", title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", genre: "Fantasy", imageUrl: "images/Harry Potter and the Philosopher's Stone.jpg", price: "$26.99", summary: "Harry Potter learns on his 11th birthday that he is the orphaned son of two powerful wizards and possesses magical powers of his own.", rating: "4.5/5" },
    { id: "book4", title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis", genre: "Fantasy", imageUrl: "images/The Lion, the Witch and the Wardrobe.jpg", price: "$15.99", summary: "Four siblings discover a magical land called Narnia through a wardrobe and join the mystical lion Aslan to fight the evil White Witch.", rating: "4.1/5" },
    { id: "book5", title: "The Name of the Wind", author: "Patrick Rothfuss", genre: "Fantasy", imageUrl: "images/The Name of the Wind.jpg", price: "$10.99", summary: "This is the tale of Kvothe, a gifted young man growing up to be the most notorious wizard his world has ever seen, told in his own voice.", rating: "4.9/5" },
    { id: "book6", title: "The Final Empire", author: "Brandon Sanderson", genre: "Fantasy", imageUrl: "images/The Final Empire.jpg", price: "$35.99", summary: "In a dark world where ash falls from the sky and mist dominates the night, a young street urchin named Vin discovers her powers and joins a rebel group to overthrow the Lord Ruler.", rating: "3.2/5" },
    { id: "book7", title: "The Eye of the World", author: "Robert Jordan", genre: "Fantasy", imageUrl: "images/The Eye of the World.jpg", price: "$20.99", summary: "Rand al'Thor and his friends flee their home, guided by the mysterious Aes Sedai, Moiraine, after an attack by monsters, setting off a series of events that will change the world.", rating: "3.4/5" },
    { id: "book8", title: "A Wizard of Earthsea", author: "Ursula K. Le Guin", genre: "Fantasy", imageUrl: "images/A Wizard of Earthsea.jpg", price: "$23.99", summary: "A young boy named Ged, showing early signs of great magical power, attends wizardry school, where he must learn to control his powers and face a deadly shadow creature he has unleashed.", rating: "3.3/5" },
    { id: "book9", title: "The Colour of Magic", author: "Terry Pratchett", genre: "Fantasy", imageUrl: "images/The Colour of Magic.jpg", price: "$16.99", summary: "Follows the misadventures of the inept wizard Rincewind and naive tourist Twoflower in Discworld, a flat world balanced on the backs of four elephants which, in turn, stand on the back of a giant turtle.", rating: "4.6/5" },
    { id: "book10", title: "The Sword of Shannara", author: "Terry Brooks", genre: "Fantasy", imageUrl: "images/The Sword of Shannara.jpg", price: "$15.99", summary: "Shea Ohmsford, a half-elf, half-human boy, embarks on a quest to find the Sword of Shannara to save the Four Lands from the dark sorcerer Warlock Lord.", rating: "4.4/5" },

    // Historical
    { id: "book11", title: "I, Claudius", author: "Robert Graves", genre: "Historical", imageUrl: "images/I, Claudius.jpg", price: "$15.99", summary: " A fictional autobiography of Roman Emperor Claudius, chronicling his unlikely ascent to power and the subsequent challenges he faces.", rating: "4.9/5" },
    { id: "book12", title: "The Pillars of the Earth", author: "Ken Follett", genre: "Historical", imageUrl: "images/The Pillars of the Earth.jpg", price: "$15.99", summary: "This epic tale set in 12th-century England focuses on the building of a magnificent cathedral amid the backdrop of historical events and personal intrigue.", rating: "3.1/5" },
    { id: "book13", title: "Wolf Hall", author: "Hilary Mantel", genre: "Historical", imageUrl: "images/Wolf Hall.jpg", price: "$21.99", summary: "A gripping portrayal of the rise of Thomas Cromwell in the court of Henry VIII and his role in the complex politics of the English Reformation.", rating: "3.1/5" },
    { id: "book14", title: "War and Peace", author: "Leo Tolstoy", genre: "Historical", imageUrl: "images/War and Peace.jpg", price: "$21.99", summary: "An expansive narrative that intertwines the fates of families against the backdrop of the Napoleonic Wars, exploring themes of history, fate, and the human condition.", rating: "4.1/5" },
    { id: "book15", title: "The Name of the Rose", author: "Umberto Eco", genre: "Historical", imageUrl: "images/The Name of the Rose.jpg", price: "$21.99", summary: "A medieval mystery set in an Italian monastery, where Brother William of Baskerville investigates a series of murders linked to a lost Aristotelian manuscript.", rating: "4.6/5" },
    { id: "book16", title: "Shogun", author: "James Clavell", genre: "Historical", imageUrl: "images/Shogun.jpg", price: "$14.99", summary: "The epic saga of an English navigator in early 17th-century Japan, who becomes a pivotal player in the deadly politics of the closed, feudal society.", rating: "2.9/5" },
    { id: "book17", title: "Gone with the Wind", author: "Margaret Mitchell", genre: "Historical", imageUrl: "images/Gone with the Wind.jpg", price: "$29.99", summary: "A sweeping romantic drama set against the backdrop of the American Civil War and Reconstruction era, focusing on the turbulent life of Scarlett O'Hara.", rating: "2.4/5" },
    { id: "book18", title: "A Tale of Two Cities", author: "Charles Dickens", genre: "Historical", imageUrl: "images/A Tale of Two Cities.jpg", price: "$34.99", summary: "Set before and during the French Revolution, it depicts the struggles and sacrifices of those caught in the turmoil of revolutionary change.", rating: "2.4/5" },
    { id: "book19", title: "All the Light We Cannot See", author: "Anthony Doerr", genre: "Historical", imageUrl: "images/All the Light We Cannot See.jpg", price: "$39.99", summary: "The parallel stories of a blind French girl and a German soldier in occupied France during World War II, whose paths eventually cross.", rating: "1.4/5" },
    { id: "book20", title: "The Alienist", author: "Caleb Carr", genre: "Historical", imageUrl: "images/The Alienist.jpg", price: "$25.99", summary: "In 1896 New York City, a psychologist (or 'alienist'), a newspaper reporter, and the police commissioner's secretary team up to solve a series of gruesome murders.", rating: "1/5" },

    // Mystery
    { id: "book21", title: "The Hound of the Baskervilles", author: "Arthur Conan Doyle", genre: "Mystery", imageUrl: "images/The Hound of the Baskervilles.jpg", price: "$19.99", summary: "Sherlock Holmes and Dr. Watson investigate a legendary beast that is said to haunt the Baskerville family.", rating: "4.4/5" },
    { id: "book22", title: "Gone Girl", author: "Gillian Flynn", genre: "Mystery", imageUrl: "images/Gone Girl.jpg", price: "$19.99", summary: "On their fifth wedding anniversary, Nick's wife Amy disappears, and he becomes embroiled in a media frenzy and police investigation that reveal the complexities of their marriage.", rating: "4.1/5" },
    { id: "book23", title: "The Girl with the Dragon Tattoo", author: "Stieg larsson", genre: "Mystery", imageUrl: "images/The Girl with the Dragon Tattoo.jpg", price: "$15.99", summary: "Journalist Mikael Blomkvist and hacker Lisbeth Salander are drawn into a murder investigation of a missing scion from one of Sweden's wealthiest families.", rating: "2.4/5" },
    { id: "book24", title: "And Then There Were None", author: "Agatha Christie", genre: "Mystery", imageUrl: "images/And Then There Were None.jpg", price: "$14.99", summary: "Ten strangers are lured to an isolated island mansion where they are killed off one by one in accordance with a sinister nursery rhyme.", rating: "3.2/5" },
    { id: "book25", title: "The Big Sleep", author: "Raymond Chandler", genre: "Mystery", imageUrl: "images/The Big Sleep.jpg", price: "$15.99", summary: "Private detective Philip Marlowe is hired by a wealthy family to solve a blackmail case but gets drawn into a web of murder, blackmail, and intrigue.", rating: "3.8/5" },
    { id: "book26", title: "In the Woods", author: "Tana French", genre: "Mystery", imageUrl: "images/In the Woods.jpg", price: "$19.99", summary: "Detective Rob Ryan investigates a young girl's murder in a small Irish town and finds it eerily connected to his own past and a childhood mystery.", rating: "1.6/5" },
    { id: "book27", title: "The Silence of the Lambs", author: "Thomas Harris", genre: "Mystery", imageUrl: "images/The Silence of the Lambs.jpg", price: "$14.99", summary: "FBI trainee Clarice Starling seeks the help of incarcerated cannibalistic murderer, Hannibal Lecter, to capture serial killer 'Buffalo Bill,' leading to a psychological game of cat and mouse.", rating: "3.3/5" },
    { id: "book28", title: "Rebecca", author: "Daphne du Maurier", genre: "Mystery", imageUrl: "images/Rebecca.jpg", price: "$14.99", summary: "A young woman marries a wealthy widower and moves to his large home in Cornwall, where the memory of his first wife, Rebecca, haunts her.", rating: "1.1/5" },
    { id: "book29", title: "The No. 1 Ladies' Detective Agency", author: "Alexander McCall Smith", genre: "Mystery", imageUrl: "images/The No. 1 Ladies' Detective Agency.jpg", price: "$14.99", summary: "Precious Ramotswe opens the first and only female-run detective agency in Botswana, solving cases and helping people with her wisdom and wit.", rating: "4.9/5" },
    { id: "book30", title: "The Girl On The Train", author: "Paula Hawkins", genre: "Mystery", imageUrl: "images/The Girl On The Train.jpg", price: "$20.99", summary: "Rachel, a woman who fantasizes about a 'perfect' couple she sees from the train, becomes entangled in a mysterious disappearance that unfolds dark truths.", rating: "2.6/5" },

    // Nonfiction
    { id: "book31", title: "The Diary of a Young Girl", author: "Anne Frank", genre: "Nonfiction", imageUrl: "images/The Diary of a Young Girl.jpg", price: "$10.99", summary: "The profound and poignant diary entries of Anne Frank document her life hiding from the Nazis in an Amsterdam attic during World War II.", rating: "3.7/5" },
    { id: "book32", title: "Narrative of the Life of Frederick Douglass", author: "Frederick Douglass", genre: "Nonfiction", imageUrl: "images/Narrative of the Life of Frederick Douglass.jpg", price: "$16.99", summary: "An autobiographical account that chronicles the life of Frederick Douglass from his time in slavery to his escape and becoming a leading voice in the abolitionist movement.", rating: "1.9/5" },
    { id: "book33", title: "Alexander Hamilton", author: "Ron Chernow", genre: "Nonfiction", imageUrl: "images/Alexander Hamilton.jpg", price: "$23.99", summary: "A comprehensive biography that details the life, contributions, and legacy of Alexander Hamilton, one of America's founding fathers.", rating: "1.7/5" },
    { id: "book34", title: "The Autobiography of Malcolm X", author: "Malcolm X", genre: "Nonfiction", imageUrl: "images/The Autobiography of Malcolm X.jpg", price: "$25.99", summary: "A powerful autobiography that recounts the life, transformation, and perspectives of Malcolm X, a leading figure in the civil rights movement.", rating: "5/5" },
    { id: "book35", title: "I know Why the Caged Bird Sings", author: "Maya Angelou", genre: "Nonfiction", imageUrl: "images/I know Why the Caged Bird Sings.jpg", price: "$21.99", summary: "Maya Angelou's first autobiography that discusses the early years of her life, facing racism, trauma, and eventually finding her voice.", rating: "4/5" },
    { id: "book36", title: "Between the World and Me", author: "Ta-Nehisi Coates", genre: "Nonfiction", imageUrl: "images/Between the World and Me.jpg", price: "$20.99", summary: "Written as a letter to his son, Coates explores the feelings, symbolism, and realities associated with being black in America.", rating: "4.2/5" },
    { id: "book37", title: "A Brief History of Time", author: "Steven Hawking", genre: "Nonfiction", imageUrl: "images/A Brief History of Time.jpg", price: "$35.99", summary: "An accessible exploration into the cosmos, from the Big Bang to black holes, Stephen Hawking discusses the universe's biggest questions.", rating: "2.4/5" },
    { id: "book38", title: "The Immortal Life of Henrietta Lacks", author: "Rebecca Skloot", genre: "Nonfiction", imageUrl: "images/The Immortal Life of Henrietta Lacks.jpg", price: "$39.99", summary: "This book tells the story of Henrietta Lacks and the HeLa cells, exploring the ethics of scientific discovery and the impact on her descendants.", rating: "1/5" },
    { id: "book39", title: "Man's Search for Meaning", author: "Viktor E. Frankl", genre: "Nonfiction", imageUrl: "images/Man's Search for Meaning.jpg", price: "$59.99", summary: "Psychiatrist Viktor Frankl's memoir of survival in Nazi concentration camps and the development of his theory of psychological resilience.", rating: "1.5/5" },
    { id: "book40", title: "Silent Spring", author: "Rachel Carson", genre: "Nonfiction", imageUrl: "images/Silent Spring.jpg", price: "$40.99", summary: "A groundbreaking environmental science book that brought to light the dangers of pesticides to the environment and human health, sparking the modern environmental movement.", rating: "3.4/5" },

    // Romance
    { id: "book41", title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance", imageUrl: "images/Pride and Prejudice.jpg", price: "$20.99", summary: "Elizabeth Bennet navigates the complexities of manners, upbringing, morality, education, and marriage in early 19th-century England, while dealing with the haughty Mr. Darcy.", rating: "4.3/5" },
    { id: "book42", title: "The Notebook", author: "Nicholas Sparks", genre: "Romance", imageUrl: "images/The Notebook.jpg", price: "$39.99", summary: "An enduring love story between Noah Calhoun and Allie Nelson, showing how true love can overcome the greatest obstacles.", rating: "4.2/5" },
    { id: "book43", title: "It Ends with Us", author: "Colleen hoover", genre: "Romance", imageUrl: "images/It Ends with Us.jpg", price: "$32.99", summary: "Lily Bloom's life takes a complicated turn as she wrestles with the patterns of her past and her intense relationship with a captivating but troubled neurosurgeon, Ryle Kincaid.", rating: "2.5/5" },
    { id: "book44", title: "Five Feet Apart", author: "Mikki Daughtry. Rachael Lippincott, Tobias Iaconis", genre: "Romance", imageUrl: "images/Five Feet Apart.jpg", price: "$22.99", summary: "Two teenagers with cystic fibrosis, Stella Grant and Will Newman, fall in love but must stay five feet apart at all times to keep each other safe.", rating: "2.6/5" },
    { id: "book45", title: "The Bride Test", author: "Helen Hoang", genre: "Romance", imageUrl: "images/The Bride Test.jpg", price: "$21.99", summary: "Khoi, a socially awkward man who thinks he can't feel love, is proved wrong when his mother returns from Vietnam with Esme, a potential bride who makes him reconsider everything he thought he knew about emotions.", rating: "1.7/5" },
    { id: "book46", title: "The Fault in Our Stars", author: "John  Green", genre: "Romance", imageUrl: "images/The Fault in Our Stars.jpg", price: "$20.99", summary: "Hazel Grace Lancaster, a 16-year-old cancer patient, meets and falls in love with Gus Waters, an ex-basketball player and amputee, in a cancer support group.", rating: "3.2/5" },
    { id: "book47", title: "Beautiful Disaster", author: "Jamie McGuire", genre: "Romance", imageUrl: "images/Beautiful Disaster.jpg", price: "$25.99", summary: "Abby Abernathy tries to keep her dark past behind her, but she's irresistibly drawn to Travis Maddox, the ultimate bad boy with his own hidden issues.", rating: "1.8/5" },
    { id: "book48", title: "Jane Eyre", author: "Charlotte Brontë", genre: "Romance", imageUrl: "images/Jane Eyre.jpg", price: "$15.99", summary: "An orphaned girl, Jane Eyre, grows up to become a governess and falls in love with her employer, Mr. Rochester, only to discover his dark secret hidden in the attic.", rating: "2/5" },
    { id: "book49", title: "The Hating Game", author: "Sally Thorne", genre: "Romance", imageUrl: "images/The Hating Game.jpg", price: "$10.99", summary: "Lucy Hutton and Joshua Templeman are executive assistants to co-CEOs of a publishing company and sworn enemies, but their dynamic changes as they begin to understand each other better.", rating: "3.1/5" },
    { id: "book50", title: "The Kiss Quotient", author: "Helen Hoang", genre: "Romance", imageUrl: "images/The Kiss Quotient.jpg", price: "$9.99", summary: "Stella Lane, a woman with Asperger's, hires an escort, Michael Phan, to teach her about relationships and intimacy, leading to unexpected love.", rating: "2.4/5" },


    // Sci-Fi
    { id: "book51", title: "The Hunger Games", author: "Suzanne Collins", genre: "Sci-Fi", imageUrl: "images/The Hunger Games.jpg", price: "$15.99", summary: "In a dystopian future, Katniss Everdeen volunteers to take her sister's place in the Hunger Games, a televised competition in which two teenagers from each of the twelve Districts of Panem are chosen at random to fight to the death.", rating: "4.4/5" },
    { id: "book52", title: "1984", author: "George Orwell", genre: "Sci-Fi", imageUrl: "images/1984.jpg", price: "$11.99", summary: "In a totalitarian future society, Winston Smith, a member of the Outer Party, navigates a world of surveillance and propaganda under the eye of Big Brother, struggling with the rebellion of the mind.", rating: "4.2/5" },
    { id: "book53", title: "Dune", author: "Frank Herbert", genre: "Sci-Fi", imageUrl: "images/Dune.jpg", price: "$9.99", summary: "Set on the desert planet Arrakis, Paul Atreides battles for control of the planet's exclusive supply of melange, a spice that is the most valuable substance in the universe.", rating: "2.7/5" },
    { id: "book54", title: "The Martian", author: "Andy Weir", genre: "Sci-Fi", imageUrl: "images/The Martian.jpg", price: "$8.99", summary: "Astronaut Mark Watney, presumed dead, is left behind on Mars and struggles to survive alone while finding a way to signal Earth that he is alive.", rating: "3.5/5" },
    { id: "book55", title: "Neuromancer", author: "William Gibson", genre: "Sci-Fi", imageUrl: "images/Neuromancer.jpg", price: "$21.99", summary: "Case, a washed-up computer hacker, is hired by a mysterious employer for a final job which brings him up against a powerful artificial intelligence.", rating: "3.9/5" },
    { id: "book56", title: "The Left Hand of Darkness", author: "Ursula K. Le Guin", genre: "Sci-Fi", imageUrl: "images/The Left Hand of Darkness.jpg", price: "$23.99", summary: "Genly Ai, a human emissary, is sent to the planet of Gethen to convince its people to join an intergalactic civilization, navigating the complexities of a society where people can choose and change their gender.", rating: "4.9/5" },
    { id: "book57", title: "Foundation", author: "Isaac Asimov", genre: "Sci-Fi", imageUrl: "images/Foundation.jpg", price: "$25.99", summary: "Mathematician Hari Seldon spends his life developing a theory of psychohistory, a new scientific concept that can predict the future, to save the galaxy from impending doom.", rating: "1.8/5" },
    { id: "book58", title: "Snow Crash", author: "Neal Stephenson", genre: "Sci-Fi", imageUrl: "images/Snow Crash.jpg", price: "$24.99", summary: "In a future America where information is the most valuable commodity, Hiro Protagonist delivers pizza for the Mafia and uncovers a virtual reality drug that threatens to bring down civilization.", rating: "4.7/5" },
    { id: "book59", title: "The War of the Worlds", author: "H.G. Wells", genre: "Sci-Fi", imageUrl: "images/The War of the Worlds.jpg", price: "$20.99", summary: "Following the invasion of Earth by Martians, a man struggles to return to his wife as humanity fights back against the seemingly unstoppable alien force.", rating: "4.2/5" },
    { id: "book60", title: "Fahrenheit 451", author: "Ray Bradbury", genre: "Sci-Fi", imageUrl: "images/Fahrenheit 451.jpg", price: "$19.99", summary: "In a future American society where books are outlawed and 'firemen' burn any that are found, fireman Guy Montag begins to question his role and the values of the society.", rating: "5/5" },

    // Thriller
    { id: "book61", title: "The Shining", author: "Stephen King", genre: "Thriller", imageUrl: "images/The Shining.jpg", price: "$39.99", summary: "A family's stay as off-season caretakers of the isolated Overlook Hotel turns sinister as the father, influenced by malevolent forces, descends into madness.", rating: "4.2/5" },
    { id: "book62", title: "Before I Go to Sleep", author: "S.J. Watson", genre: "Thriller", imageUrl: "images/Before I Go to Sleep.jpg", price: "$29.99", summary: "Christine wakes up every day with no memory of her life from her early twenties onwards and must rediscover her identity daily, while uncovering disturbing secrets.", rating: "4.1/5" },
    { id: "book63", title: "I Am Watching You", author: "Teresa Driscoll", genre: "Thriller", imageUrl: "images/I Am Watching You.jpg", price: "$24.99", summary: "After witnessing a seemingly innocent encounter that leads to a disappearance, Ella becomes entangled in the mystery and guilt of what she did and did not do.", rating: "4.6/5" },
    { id: "book64", title: "Behind Closed Doors", author: "B.A. Paris", genre: "Thriller", imageUrl: "images/Behind Closed Doors.jpg", price: "$24.99", summary: "A seemingly perfect couple's marriage hides a dark secret, with one partner's twisted control revealing the nightmare behind closed doors.", rating: "3.7/5" },
    { id: "book65", title: "The Chain", author: "Adrian McKinty", genre: "Thriller", imageUrl: "images/The Chain.jpg", price: "$29.99", summary: "A parent's worst nightmare becomes reality when her daughter is kidnapped, and she must kidnap another child to secure her daughter's release, becoming part of a sinister chain of terror.", rating: "3.3/5" },
    { id: "book66", title: "Gone Tomorrow", author: "Lee Child", genre: "Thriller", imageUrl: "images/Gone Tomorrow.jpg", price: "$11.99", summary: "Set in New York City, Jack Reacher is drawn into a mystery involving a suicide on a subway train, leading him into a dangerous confrontation with dark forces.", rating: "4.4/5" },
    { id: "book67", title: "American Psycho", author: "Bret Easton Ellis", genre: "Thriller", imageUrl: "images/American Psycho.jpg", price: "$9.99", summary: "Set in the 1980s, this novel follows Patrick Bateman, a wealthy New York investment banker who hides his psychopathic ego from his peers, leading a double life as a serial killer.", rating: "1.4/5" },
    { id: "book68", title: "My Sister, the Serial Killer", author: "Oyinkan Braithwaite", genre: "Thriller", imageUrl: "images/My Sister, the Serial Killer.jpg", price: "$19.99", summary: "Korede's loyalty to her sister Ayoola (who can't seem to stop killing her boyfriends) is tested when the man she loves becomes Ayoola's next target.", rating: "2.6/5" },
    { id: "book69", title: "The Silent Patient", author: "Alex Michaelides", genre: "Thriller", imageUrl: "images/The Silent Patient.jpg", price: "$14.99", summary: "Alicia Berenson's life seems perfect until she shoots her husband five times and then never speaks another word, becoming a mystery that a psychotherapist is determined to unravel.", rating: "1.1/5" },
    { id: "book70", title: "Misery", author: "Stephen King", genre: "Thriller", imageUrl: "images/Misery.jpg", price: "$30.99", summary: "A famous author is rescued from a car crash by his 'number one fan' and finds himself captive and forced to write a novel to keep her satisfied, leading to a terrifying ordeal.", rating: "4.4/5" },

]


// set's filtergenre to all at the beginning to show all of the books.
filterGenre('all');


// This is the function that displays books based on the genre
function displayBooks(filteredBooks) {
    const bookContainer = document.getElementById('bookContainer');
    bookContainer.innerHTML = ''; // Clear current cart items

    filteredBooks.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        // he innerHTML for how the cards will be structured
        bookCard.innerHTML = `
            <img src="${book.imageUrl}" alt="${book.title}">
            <div class="book-details">
                <h2>${book.title}</h2>
                <h5>Rating: ${book.rating}</h5>
                <h5>Author: ${book.author}</h5>
                <p>Genre: ${book.genre}</p>
                <p>${book.summary}</p>
                <h4>${book.price}</h4>
            </div>
            <!--This is the button transmits the id of the book you clicked buy on to addToCart function -->
            <div class="button-container">
                <button class="buy-btn" onclick="addToCart('${book.id}')">Buy Now</button>
            </div>
        `;
        // attachs to the book container
        bookContainer.appendChild(bookCard);
    });
}

// set's the current genre to all
var currentGenre = 'all'; 

// This function filters books based on genre. When you click one genre, the rest are hidden.
function filterGenre(genre) {
    currentGenre = genre; // Store the current genre
    const filteredBooks = genre === 'all' ? books : books.filter(book => book.genre.toLowerCase() === genre);
    // shows only the genre you select
    displayBooks(filteredBooks);

    // sets the sorting drop down menu back to 'sorting' whenever genre is changed
    document.getElementById('sortSelect').value = 'sorting';
    // sets the search input back to nothing whenever genre is changed
    document.getElementById('searchInput').value = '';
}


// function to search for specific book when you type the name of the book into the search bar. It updates realtime as you search letter by letter.
function searchBooks() {
    const searchText = document.getElementById('searchInput').value.toLowerCase();
    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchText));
    displayBooks(filteredBooks);
}

// function to sort books by alphabetically, price low to high, and price high to low, most popular, and least popular
function sortBooks() {
    const sortValue = document.getElementById('sortSelect').value;
    let sortedBooks = books.filter(book => currentGenre === 'all' || book.genre.toLowerCase() === currentGenre);
    
    switch (sortValue) {
        case "alphabetical":
            sortedBooks.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case "priceLowHigh":
            sortedBooks.sort((a, b) => parseFloat(a.price.substring(1)) - parseFloat(b.price.substring(1)));
            break;
        case "priceHighLow":
            sortedBooks.sort((a, b) => parseFloat(b.price.substring(1)) - parseFloat(a.price.substring(1)));
            break;
        case "mostPopular":
            sortedBooks.sort((a, b) => parseFloat(b.rating.split('/')[0]) - parseFloat(a.rating.split('/')[0]));
            break;
        case "leastPopular":
            sortedBooks.sort((a, b) => parseFloat(a.rating.split('/')[0]) - parseFloat(b.rating.split('/')[0]));
            break;
    }
    displayBooks(sortedBooks);
}


// creates an empty cart array. This is where I will be adding feature to remove or display an alert and empty the cart.
let cart = [];

// function to add books to cart and alert the user that the book has been added to cart

// book id from the buy button is transmitted to this function, which will add the book into the cart.
function addToCart(bookId) {
    const book = books.find(book => book.id === bookId);
    if (book) {
        // pushes book into the cart array
        cart.push(book); // Add the book to the cart
        // alerts the user that the book they want to buy has been added to their cart
        alert(`${book.title} has been added to cart.`);
        // if you have cart open, it will refresh and show the book you clicked 'buy' on it immediately without needing to close and open again.
        displayCartItems(); // Refresh the cart display
    }
}

// function to toggle the cart modal to appear.
function toggleCart() {
    const cartModal = document.getElementById('cartModal');

    // if/else to cehck whetherthe cart modal is currently display or not. if it is not displaying, it displays the modal. Vice versa.
    if (cartModal.style.display === "none") {
        cartModal.style.display = "block";
    } else {
        cartModal.style.display = "none";
    }
    // the function to display the items inside the cart is called
    displayCartItems();
}

// function to display the inside of the cart
function displayCartItems() {
    // display cart items only if cart modal is showing
    if (cartModal.style.display === "block") {
        const cartItemsContainer = document.getElementById('cartItems');
        // Clear current cart items to prevent duplication. Many trial and errors to find a solution to prevent the duplication.
        cartItemsContainer.innerHTML = '';

        // A for loop that creates and appends cart items
        cart.forEach(book => {
            // create a html template
            const itemHtml = `
                <div class="cart-item">
                    ${book.title} - ${book.price}
                    <!-- Once the remove button is clicked, it calls for the removeFromCart function while transmitting the id of the book to remove -->
                    <button onclick="removeFromCart('${book.id}')">Remove</button>
                </div>`;
            cartItemsContainer.insertAdjacentHTML('beforeend', itemHtml); // inserts the html template into the cartItemsContainer element in the DOM
        });
    }
}


// function to remove books from the cart by by their id
function removeFromCart(bookId) {
    // Find the index of the book in the cart
    const bookIndex = cart.findIndex(book => book.id === bookId);
    if (bookIndex > -1) {
        cart.splice(bookIndex, 1); // Remove the book from the cart
        displayCartItems(); // Update the cart display
    }
}

// When checkout button is clicked, this function is called. It will tell the user a thank you and empty the cart, while refreshing it. This way, the cart is back to empty and it looks like the user purchased the items.
function checkout() {
    alert(`Thank you for your purchase! Your books will arrive soon!`);
    cart = [];
    displayCartItems();
}


// So much I want to do with this website, but there are functionalities that I do not know how to do.