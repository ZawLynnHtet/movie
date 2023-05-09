import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  popular_movies = [
    {
      "adult": false,
      "backdrop_path": "/8YFL5QQVPy3AgrEQxNYVSgiPEbe.jpg",
      "genre_ids": [
        28,
        12,
        878
      ],
      "id": 640146,
      "original_language": "en",
      "original_title": "Ant-Man and the Wasp: Quantumania",
      "overview": "Super-Hero partners Scott Lang and Hope van Dyne, along with with Hope's parents Janet van Dyne and Hank Pym, and Scott's daughter Cassie Lang, find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that will push them beyond the limits of what they thought possible.",
      "popularity": 10446.465,
      "poster_path": "/ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg",
      "release_date": "2023-02-15",
      "title": "Ant-Man and the Wasp: Quantumania",
      "video": false,
      "vote_average": 6.5,
      "vote_count": 1797
    },
    {
      "adult": false,
      "backdrop_path": "/lWqjXgut48IK5f5IRbDBAoO2Epp.jpg",
      "genre_ids": [
        16,
        12,
        10751,
        14,
        35
      ],
      "id": 502356,
      "original_language": "en",
      "original_title": "The Super Mario Bros. Movie",
      "overview": "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
      "popularity": 8282.211,
      "poster_path": "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
      "release_date": "2023-04-05",
      "title": "The Super Mario Bros. Movie",
      "video": false,
      "vote_average": 7.5,
      "vote_count": 1389
    },
    {
      "adult": false,
      "backdrop_path": "/nDxJJyA5giRhXx96q1sWbOUjMBI.jpg",
      "genre_ids": [
        28,
        35,
        14
      ],
      "id": 594767,
      "original_language": "en",
      "original_title": "Shazam! Fury of the Gods",
      "overview": "Billy Batson and his foster siblings, who transform into superheroes by saying 'Shazam!', are forced to get back into action and fight the Daughters of Atlas, who they must stop from using a weapon that could destroy the world.",
      "popularity": 4790.147,
      "poster_path": "/2VK4d3mqqTc7LVZLnLPeRiPaJ71.jpg",
      "release_date": "2023-03-15",
      "title": "Shazam! Fury of the Gods",
      "video": false,
      "vote_average": 6.8,
      "vote_count": 1171
    },
    {
      "adult": false,
      "backdrop_path": "/ovM06PdF3M8wvKb06i4sjW3xoww.jpg",
      "genre_ids": [
        878,
        12,
        28
      ],
      "id": 76600,
      "original_language": "en",
      "original_title": "Avatar: The Way of Water",
      "overview": "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
      "popularity": 3900.586,
      "poster_path": "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
      "release_date": "2022-12-14",
      "title": "Avatar: The Way of Water",
      "video": false,
      "vote_average": 7.7,
      "vote_count": 7489
    },
    {
      "adult": false,
      "backdrop_path": "/5i6SjyDbDWqyun8klUuCxrlFbyw.jpg",
      "genre_ids": [
        18,
        28
      ],
      "id": 677179,
      "original_language": "en",
      "original_title": "Creed III",
      "overview": "After dominating the boxing world, Adonis Creed has been thriving in both his career and family life. When a childhood friend and former boxing prodigy, Damian Anderson, resurfaces after serving a long sentence in prison, he is eager to prove that he deserves his shot in the ring. The face-off between former friends is more than just a fight. To settle the score, Adonis must put his future on the line to battle Damian — a fighter who has nothing to lose.",
      "popularity": 3219.774,
      "poster_path": "/cvsXj3I9Q2iyyIo95AecSd1tad7.jpg",
      "release_date": "2023-03-01",
      "title": "Creed III",
      "video": false,
      "vote_average": 7.3,
      "vote_count": 1174
    },
    {
      "adult": false,
      "backdrop_path": "/7bWxAsNPv9CXHOhZbJVlj2KxgfP.jpg",
      "genre_ids": [
        27,
        53
      ],
      "id": 713704,
      "original_language": "en",
      "original_title": "Evil Dead Rise",
      "overview": "Two sisters find an ancient vinyl that gives birth to bloodthirsty demons that run amok in a Los Angeles apartment building and thrusts them into a primal battle for survival as they face the most nightmarish version of family imaginable.",
      "popularity": 2291.491,
      "poster_path": "/mIBCtPvKZQlxubxKMeViO2UrP3q.jpg",
      "release_date": "2023-04-12",
      "title": "Evil Dead Rise",
      "video": false,
      "vote_average": 7,
      "vote_count": 170
    },
    {
      "adult": false,
      "backdrop_path": "/bT3IpP7OopgiVuy6HCPOWLuaFAd.jpg",
      "genre_ids": [
        35,
        9648,
        28
      ],
      "id": 638974,
      "original_language": "en",
      "original_title": "Murder Mystery 2",
      "overview": "After starting their own detective agency, Nick and Audrey Spitz land a career-making case when their billionaire pal is kidnapped from his wedding.",
      "popularity": 2117.072,
      "poster_path": "/s1VzVhXlqsevi8zeCMG9A16nEUf.jpg",
      "release_date": "2023-03-28",
      "title": "Murder Mystery 2",
      "video": false,
      "vote_average": 6.6,
      "vote_count": 852
    },
    {
      "adult": false,
      "backdrop_path": "/xwA90BwZXTh8ke3CVsQlj8EOkFr.jpg",
      "genre_ids": [
        28,
        12,
        36,
        18,
        10752
      ],
      "id": 948713,
      "original_language": "en",
      "original_title": "The Last Kingdom: Seven Kings Must Die",
      "overview": "In the wake of King Edward's death, Uhtred of Bebbanburg and his comrades adventure across a fractured kingdom in the hopes of uniting England at last.",
      "popularity": 3329.466,
      "poster_path": "/qcNDxDzd5OW9wE3c8nWxCBQoBrM.jpg",
      "release_date": "2023-04-14",
      "title": "The Last Kingdom: Seven Kings Must Die",
      "video": false,
      "vote_average": 7.4,
      "vote_count": 216
    },
    {
      "adult": false,
      "backdrop_path": "/54IXMMEQKlkPXHqPExWy98UBmtE.jpg",
      "genre_ids": [
        27
      ],
      "id": 1008005,
      "original_language": "es",
      "original_title": "La niña de la comunión",
      "overview": "Spain, late 1980s. Newcomer Sara tries to fit in with the other teens in this tight-knit small town in the province of Tarragona. If only she were more like her extroverted best friend, Rebe. They go out one night at a nightclub, on the way home, they come upon a little girl holding a doll, dressed for her first communion. And that's when the nightmare begins.",
      "popularity": 1400.918,
      "poster_path": "/sP6AO11a7jWgsmT9T8j9EGIWAaZ.jpg",
      "release_date": "2023-02-10",
      "title": "The Communion Girl",
      "video": false,
      "vote_average": 6.3,
      "vote_count": 53
    },
    {
      "adult": false,
      "backdrop_path": "/eSVu1FvGPy86TDo4hQbpuHx55DJ.jpg",
      "genre_ids": [
        878,
        12,
        53,
        28
      ],
      "id": 700391,
      "original_language": "en",
      "original_title": "65",
      "overview": "65 million years ago, the only 2 survivors of a spaceship from Somaris that crash-landed on Earth must fend off dinosaurs and reach the escape vessel in time before an imminent asteroid strike threatens to destroy the planet.",
      "popularity": 1325.004,
      "poster_path": "/rzRb63TldOKdKydCvWJM8B6EkPM.jpg",
      "release_date": "2023-03-02",
      "title": "65",
      "video": false,
      "vote_average": 6.3,
      "vote_count": 734
    },
    {
      "adult": false,
      "backdrop_path": "/h8gHn0OzBoaefsYseUByqsmEDMY.jpg",
      "genre_ids": [
        28,
        53,
        80
      ],
      "id": 603692,
      "original_language": "en",
      "original_title": "John Wick: Chapter 4",
      "overview": "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
      "popularity": 1444.362,
      "poster_path": "/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
      "release_date": "2023-03-22",
      "title": "John Wick: Chapter 4",
      "video": false,
      "vote_average": 8,
      "vote_count": 1187
    },
    {
      "adult": false,
      "backdrop_path": "/tFaC1Fb1sv1dALB0i9Avi76MHmn.jpg",
      "genre_ids": [
        10751,
        28,
        12
      ],
      "id": 946310,
      "original_language": "nl",
      "original_title": "De Piraten van Hiernaast II: De Ninja's van de Overkant",
      "overview": "The pirates feel right at home in Sandborough, but the atmosphere cools right down when the ninjas come to live in the street. After all, pirates and ninjas are sworn enemies! While pirate captain Hector Blunderbuss struggles to get rid of his new neighbours, son Billy and ninja daughter Yuka become friends. The pirates challenge the ninjas to the ultimate battle at the village's annual hexathlon. Who will win the match? Ninjas are faster and more agile of course, but pirates are the best cheats in all of the seven seas...",
      "popularity": 1334.971,
      "poster_path": "/uDsvma9dAwnDPVuCFi99YpWvBk0.jpg",
      "release_date": "2023-3-25"
    }
  ]

  top_rated_movies = [
    {
      "adult": false,
      "backdrop_path": "/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
      "genre_ids": [
        18,
        80
      ],
      "id": 238,
      "original_language": "en",
      "original_title": "The Godfather",
      "overview": "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
      "popularity": 103.436,
      "poster_path": "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
      "release_date": "1972-03-14",
      "title": "The Godfather",
      "video": false,
      "vote_average": 8.7,
      "vote_count": 17798
    },
    {
      "adult": false,
      "backdrop_path": "/iNh3BivHyg5sQRPP1KOkzguEX0H.jpg",
      "genre_ids": [
        18,
        80
      ],
      "id": 278,
      "original_language": "en",
      "original_title": "The Shawshank Redemption",
      "overview": "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
      "popularity": 151.657,
      "poster_path": "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
      "release_date": "1994-09-23",
      "title": "The Shawshank Redemption",
      "video": false,
      "vote_average": 8.7,
      "vote_count": 23645
    },
    {
      "adult": false,
      "backdrop_path": "/ejnlCzBd5pOGAYCpxC93NXSrdrz.jpg",
      "genre_ids": [
        35,
        14
      ],
      "id": 772071,
      "original_language": "es",
      "original_title": "Cuando Sea Joven",
      "overview": "70-year-old Malena gets a second chance at life when she magically turns into her 22-year-old self. Now, posing as 'Maria' to hide her true identity, she becomes the lead singer of her grandson's band and tries to recover her dream of singing, which she had to give up at some point.",
      "popularity": 32.219,
      "poster_path": "/6gIJuFHh5Lj4dNaPG3TzIMl7L68.jpg",
      "release_date": "2022-09-14",
      "title": "Cuando Sea Joven",
      "video": false,
      "vote_average": 8.6,
      "vote_count": 213
    },
    {
      "adult": false,
      "backdrop_path": "/kGzFbGhp99zva6oZODW5atUtnqi.jpg",
      "genre_ids": [
        18,
        80
      ],
      "id": 240,
      "original_language": "en",
      "original_title": "The Godfather Part II",
      "overview": "In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.",
      "popularity": 56.141,
      "poster_path": "/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg",
      "release_date": "1974-12-20",
      "title": "The Godfather Part II",
      "video": false,
      "vote_average": 8.6,
      "vote_count": 10770
    },
    {
      "adult": false,
      "backdrop_path": "/zb6fM1CX41D9rF9hdgclu0peUmy.jpg",
      "genre_ids": [
        18,
        36,
        10752
      ],
      "id": 424,
      "original_language": "en",
      "original_title": "Schindler's List",
      "overview": "The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.",
      "popularity": 71.546,
      "poster_path": "/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
      "release_date": "1993-12-15",
      "title": "Schindler's List",
      "video": false,
      "vote_average": 8.6,
      "vote_count": 13985
    },
    {
      "adult": false,
      "backdrop_path": "/vI3aUGTuRRdM7J78KIdW98LdxE5.jpg",
      "genre_ids": [
        35,
        18,
        10749
      ],
      "id": 19404,
      "original_language": "hi",
      "original_title": "दिलवाले दुल्हनिया ले जायेंगे",
      "overview": "Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.",
      "popularity": 24.946,
      "poster_path": "/ktejodbcdCPXbMMdnpI9BUxW6O8.jpg",
      "release_date": "1995-10-19",
      "title": "Dilwale Dulhania Le Jayenge",
      "video": false,
      "vote_average": 8.6,
      "vote_count": 4112
    },
    {
      "adult": false,
      "backdrop_path": "/Ab8mkHmkYADjU7wQiOkia9BzGvS.jpg",
      "genre_ids": [
        16,
        10751,
        14
      ],
      "id": 129,
      "original_language": "ja",
      "original_title": "千と千尋の神隠し",
      "overview": "A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.",
      "popularity": 86.262,
      "poster_path": "/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
      "release_date": "2001-07-20",
      "title": "Spirited Away",
      "video": false,
      "vote_average": 8.5,
      "vote_count": 14204
    },
    {
      "adult": false,
      "backdrop_path": "/tj6iPnz18hGfr0LKqWmG6Cp3niO.jpg",
      "genre_ids": [
        18
      ],
      "id": 389,
      "original_language": "en",
      "original_title": "12 Angry Men",
      "overview": "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case soon becomes a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other.",
      "popularity": 34.759,
      "poster_path": "/ppd84D2i9W8jXmsyInGyihiSyqz.jpg",
      "release_date": "1957-04-10",
      "title": "12 Angry Men",
      "video": false,
      "vote_average": 8.5,
      "vote_count": 7210
    },
    {
      "adult": false,
      "backdrop_path": "/dIWwZW7dJJtqC6CgWzYkNVKIUm8.jpg",
      "genre_ids": [
        10749,
        16,
        18
      ],
      "id": 372058,
      "original_language": "ja",
      "original_title": "君の名は。",
      "overview": "High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.",
      "popularity": 105.948,
      "poster_path": "/q719jXXEzOoYaps6babgKnONONX.jpg",
      "release_date": "2016-08-26",
      "title": "Your Name.",
      "video": false,
      "vote_average": 8.5,
      "vote_count": 9729
    },
    {
      "adult": false,
      "backdrop_path": "/hiKmpZMGZsrkA3cdce8a7Dpos1j.jpg",
      "genre_ids": [
        35,
        53,
        18
      ],
      "id": 496243,
      "original_language": "ko",
      "original_title": "기생충",
      "overview": "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
      "popularity": 73.322,
      "poster_path": "/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
      "release_date": "2019-05-30",
      "title": "Parasite",
      "video": false,
      "vote_average": 8.5,
      "vote_count": 15612
    },
    {
      "adult": false,
      "backdrop_path": "/dqK9Hag1054tghRQSqLSfrkvQnA.jpg",
      "genre_ids": [
        18,
        28,
        80,
        53
      ],
      "id": 155,
      "original_language": "en",
      "original_title": "The Dark Knight",
      "overview": "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
      "popularity": 77.169,
      "poster_path": "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      "release_date": "2008-07-14",
      "title": "The Dark Knight",
      "video": false,
      "vote_average": 8.5,
      "vote_count": 29563
    },
    {
      "adult": false,
      "backdrop_path": "/vxJ08SvwomfKbpboCWynC3uqUg4.jpg",
      "genre_ids": [
        14,
        18,
        80
      ],
      "id": 497,
      "original_language": "en",
      "original_title": "The Green Mile",
      "overview": "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cell block's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution.",
      "popularity": 77.553,
      "poster_path": "/o0lO84GI7qrG6XFvtsPOSV7CTNa.jpg",
      "release_date": "1999-12-10",
      "title": "The Green Mile",
      "video": false,
      "vote_average": 8.5,
      "vote_count": 15305
    },
    {
      "adult": false,
      "backdrop_path": "/wxaBkuqVIgImjRHEMJoxL9Lq6i8.jpg",
      "genre_ids": [
        16,
        10751,
        12,
        14
      ],
      "id": 995133,
      "original_language": "en",
      "original_title": "The Boy, the Mole, the Fox and the Horse",
      "overview": "The unlikely friendship of a boy, a mole, a fox and a horse traveling together in the boy’s search for home.",
      "popularity": 27.165,
      "poster_path": "/oQRgyQCzcyZvE6w5heM9ktVY0LT.jpg",
      "release_date": "2022-12-25",
      "title": "The Boy, the Mole, the Fox and the Horse",
      "video": false,
      "vote_average": 8.5,
      "vote_count": 309
    },
    {
      "adult": false,
      "backdrop_path": "/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg",
      "genre_ids": [
        53,
        80
      ],
      "id": 680,
      "original_language": "en",
      "original_title": "Pulp Fiction",
      "overview": "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
      "popularity": 69.715,
      "poster_path": "/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
      "release_date": "1994-09-10",
      "title": "Pulp Fiction",
      "video": false,
      "vote_average": 8.5,
      "vote_count": 25027
    },
    {
      "adult": false,
      "backdrop_path": "/3RMLbSEXOn1CzLoNT7xFeLfdxhq.jpg",
      "genre_ids": [
        10749,
        16
      ],
      "id": 372754,
      "original_language": "ja",
      "original_title": "同級生",
      "overview": "Rihito Sajo, an honor student with a perfect score on the entrance exam and Hikaru Kusakabe, in a band and popular among girls, would have never crossed paths. Until one day they started talking at the practice for their school’s upcoming chorus festival. After school, the two meet regularly, as Hikaru helps Rihito to improve his singing skills. While they listen to each other’s voice and harmonize, their hearts start to beat together.",
      "popularity": 12.141,
      "poster_path": "/cIfRCA5wEvj9tApca4UDUagQEiM.jpg",
      "release_date": "2016-02-20",
      "title": "Dou kyu sei – Classmates",
      "video": false,
      "vote_average": 8.5,
      "vote_count": 301
    },
    {
      "adult": false,
      "backdrop_path": "/eoCSp75lxatmIa6aGqfnzwtbttd.jpg",
      "genre_ids": [
        37
      ],
      "id": 429,
      "original_language": "it",
      "original_title": "Il buono, il brutto, il cattivo",
      "overview": "While the Civil War rages on between the Union and the Confederacy, three men – a quiet loner, a ruthless hitman, and a Mexican bandit – comb the American Southwest in search of a strongbox containing $200,000 in stolen gold.",
      "popularity": 56.358,
      "poster_path": "/bX2xnavhMYjWDoZp1VM6VnU1xwe.jpg",
      "release_date": "1966-12-23",
      "title": "The Good, the Bad and the Ugly",
      "video": false,
      "vote_average": 8.5,
      "vote_count": 7344
    },
    {
      "adult": false,
      "backdrop_path": "/3h1JZGDhZ8nzxdgvkxha0qBqi05.jpg",
      "genre_ids": [
        35,
        18,
        10749
      ],
      "id": 13,
      "original_language": "en",
      "original_title": "Forrest Gump",
      "overview": "A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case, far exceeding what anyone imagined he could do. But despite all he has achieved, his one true love eludes him.",
      "popularity": 67.209,
      "poster_path": "/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
      "release_date": "1994-06-23",
      "title": "Forrest Gump",
      "video": false,
      "vote_average": 8.5,
      "vote_count": 24519
    },
    {
      "adult": false,
      "backdrop_path": "/9DeGfFIqjph5CBFVQrD6wv9S7rR.jpg",
      "genre_ids": [
        12,
        14,
        28
      ],
      "id": 122,
      "original_language": "en",
      "original_title": "The Lord of the Rings: The Return of the King",
      "overview": "Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor from Sauron's forces. Meanwhile, Frodo and Sam take the ring closer to the heart of Mordor, the dark lord's realm.",
      "popularity": 73.179,
      "poster_path": "/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
      "release_date": "2003-12-01",
      "title": "The Lord of the Rings: The Return of the King",
      "video": false,
      "vote_average": 8.5,
      "vote_count": 21473
    },
    {
      "adult": false,
      "backdrop_path": "/uBZQOYZLIU9dBmd62fdzBAoropu.jpg",
      "genre_ids": [
        28,
        12,
        16,
        18
      ],
      "id": 704264,
      "original_language": "en",
      "original_title": "Primal: Tales of Savagery",
      "overview": "Genndy Tartakovsky's Primal: Tales of Savagery features a caveman and a dinosaur on the brink of extinction. Bonded by tragedy, this unlikely friendship becomes the only hope of survival.",
      "popularity": 14.295,
      "poster_path": "/9NBBkdxH0TjQEBSN2AzeE1sgsF9.jpg",
      "release_date": "2019-11-21",
      "title": "Primal: Tales of Savagery",
      "video": false,
      "vote_average": 8.5,
      "vote_count": 262
    },
    {
      "adult": false,
      "backdrop_path": "/sw7mordbZxgITU877yTpZCud90M.jpg",
      "genre_ids": [
        18,
        80
      ],
      "id": 769,
      "original_language": "en",
      "original_title": "GoodFellas",
      "overview": "The true story of Henry Hill, a half-Irish, half-Sicilian Brooklyn kid who is adopted by neighbourhood gangsters at an early age and climbs the ranks of a Mafia family under the guidance of Jimmy Conway.",
      "popularity": 37.333,
      "poster_path": "/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
      "release_date": "1990-09-12",
      "title": "GoodFellas",
      "video": false,
      "vote_average": 8.5,
      "vote_count": 11188
    }
  ];

  upcoming_movies = [
    {
      "adult": false,
      "backdrop_path": "/lWqjXgut48IK5f5IRbDBAoO2Epp.jpg",
      "genre_ids": [
        16,
        12,
        10751,
        14,
        35
      ],
      "id": 502356,
      "original_language": "en",
      "original_title": "The Super Mario Bros. Movie",
      "overview": "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
      "popularity": 8282.211,
      "poster_path": "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
      "release_date": "2023-04-05",
      "title": "The Super Mario Bros. Movie",
      "video": false,
      "vote_average": 7.5,
      "vote_count": 1389
    },
    {
      "adult": false,
      "backdrop_path": "/7bWxAsNPv9CXHOhZbJVlj2KxgfP.jpg",
      "genre_ids": [
        27,
        53
      ],
      "id": 713704,
      "original_language": "en",
      "original_title": "Evil Dead Rise",
      "overview": "Two sisters find an ancient vinyl that gives birth to bloodthirsty demons that run amok in a Los Angeles apartment building and thrusts them into a primal battle for survival as they face the most nightmarish version of family imaginable.",
      "popularity": 2291.491,
      "poster_path": "/mIBCtPvKZQlxubxKMeViO2UrP3q.jpg",
      "release_date": "2023-04-12",
      "title": "Evil Dead Rise",
      "video": false,
      "vote_average": 7,
      "vote_count": 170
    },
    {
      "adult": false,
      "backdrop_path": "/a2tys4sD7xzVaogPntGsT1ypVoT.jpg",
      "genre_ids": [
        53,
        35,
        80
      ],
      "id": 804150,
      "original_language": "en",
      "original_title": "Cocaine Bear",
      "overview": "Inspired by a true story, an oddball group of cops, criminals, tourists and teens converge in a Georgia forest where a 500-pound black bear goes on a murderous rampage after unintentionally ingesting cocaine.",
      "popularity": 1332.34,
      "poster_path": "/gOnmaxHo0412UVr1QM5Nekv1xPi.jpg",
      "release_date": "2023-02-22",
      "title": "Cocaine Bear",
      "video": false,
      "vote_average": 6.4,
      "vote_count": 862
    },
    {
      "adult": false,
      "backdrop_path": "/5Y5pz0NX7SZS9036I733F7uNcwK.jpg",
      "genre_ids": [
        27,
        53
      ],
      "id": 758323,
      "original_language": "en",
      "original_title": "The Pope's Exorcist",
      "overview": "Father Gabriele Amorth, Chief Exorcist of the Vatican, investigates a young boy's terrifying possession and ends up uncovering a centuries-old conspiracy the Vatican has desperately tried to keep hidden.",
      "popularity": 1229.734,
      "poster_path": "/9JBEPLTPSm0d1mbEcLxULjJq9Eh.jpg",
      "release_date": "2023-04-05",
      "title": "The Pope's Exorcist",
      "video": false,
      "vote_average": 6.6,
      "vote_count": 135
    },
    {
      "adult": false,
      "backdrop_path": "/wD2kUCX1Bb6oeIb2uz7kbdfLP6k.jpg",
      "genre_ids": [
        27,
        53
      ],
      "id": 980078,
      "original_language": "en",
      "original_title": "Winnie the Pooh: Blood and Honey",
      "overview": "Christopher Robin is headed off to college and he has abandoned his old friends, Pooh and Piglet, which then leads to the duo embracing their inner monsters.",
      "popularity": 813.708,
      "poster_path": "/ewF3IlGscc7FjgGEPcQvZsAsgAW.jpg",
      "release_date": "2023-01-27",
      "title": "Winnie the Pooh: Blood and Honey",
      "video": false,
      "vote_average": 5.8,
      "vote_count": 509
    },
    {
      "adult": false,
      "backdrop_path": "/sp7MPK2K60LLd7A6zjHKsfgjFil.jpg",
      "genre_ids": [
        27,
        53
      ],
      "id": 296271,
      "original_language": "en",
      "original_title": "The Devil Conspiracy",
      "overview": "The hottest biotech company in the world has discovered they can clone history’s most influential people from the dead. Now, they are auctioning clones of Michelangelo, Galileo, Vivaldi, and others for tens of millions of dollars to the world’s ultra-rich. But when they steal the Shroud of Turin and clone the DNA of Jesus Christ, all hell breaks loose.",
      "popularity": 722.341,
      "poster_path": "/2lUYbD2C3XSuwqMUbDVDQuz9mqz.jpg",
      "release_date": "2023-01-13",
      "title": "The Devil Conspiracy",
      "video": false,
      "vote_average": 6.3,
      "vote_count": 129
    },
    {
      "adult": false,
      "backdrop_path": "/fI5RsaM0NSU6TqztRhA2pal5ezv.jpg",
      "genre_ids": [
        28,
        80,
        53
      ],
      "id": 385687,
      "original_language": "en",
      "original_title": "Fast X",
      "overview": "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
      "popularity": 504.247,
      "poster_path": "/jwMMQR69Xz9AYtX4u2uYJgfAAev.jpg",
      "release_date": "2023-05-17",
      "title": "Fast X",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
    },
    {
      "adult": false,
      "backdrop_path": "/8c9c4xg0IdXDg627uQF35K54VpC.jpg",
      "genre_ids": [
        10749,
        35
      ],
      "id": 800301,
      "original_language": "en",
      "original_title": "What's Love Got to Do with It?",
      "overview": "Two childhood friends now in their thirties must decide whether to follow their heads or their hearts once the man decides to follow his parents' advice and enter into an arranged marriage in Pakistan.",
      "popularity": 275.484,
      "poster_path": "/14fGGPAL5PQxuesjO4CFoDJEH5G.jpg",
      "release_date": "2023-01-26",
      "title": "What's Love Got to Do with It?",
      "video": false,
      "vote_average": 6.5,
      "vote_count": 41
    },
    {
      "adult": false,
      "backdrop_path": "/94TIUEhuwv8PhdIADEvSuwPljS5.jpg",
      "genre_ids": [
        10752,
        28
      ],
      "id": 840326,
      "original_language": "fi",
      "original_title": "Sisu",
      "overview": "Deep in the wilderness of Lapland, Aatami Korpi is searching for gold but after he stumbles upon Nazi patrol, a breathtaking and gold-hungry chase through the destroyed and mined Lapland wilderness begins.",
      "popularity": 447.464,
      "poster_path": "/dHx5yuBb05U9vNaNhIBD7jWyxPk.jpg",
      "release_date": "2023-01-27",
      "title": "Sisu",
      "video": false,
      "vote_average": 7,
      "vote_count": 15
    },
    {
      "adult": false,
      "backdrop_path": "/46FRuCeAn6TrS4F1P4F9zhyCpyo.jpg",
      "genre_ids": [
        18
      ],
      "id": 785084,
      "original_language": "en",
      "original_title": "The Whale",
      "overview": "A reclusive English teacher suffering from severe obesity attempts to reconnect with his estranged teenage daughter for one last chance at redemption.",
      "popularity": 282.697,
      "poster_path": "/jQ0gylJMxWSL490sy0RrPj1Lj7e.jpg",
      "release_date": "2022-12-09",
      "title": "The Whale",
      "video": false,
      "vote_average": 8.1,
      "vote_count": 2085
    },
    {
      "adult": false,
      "backdrop_path": "/ceYZCBfwbBwSpGJ6PapNVw5jqLG.jpg",
      "genre_ids": [
        16,
        18,
        12,
        14
      ],
      "id": 916224,
      "original_language": "ja",
      "original_title": "すずめの戸締まり",
      "overview": "Suzume, 17, lost her mother as a little girl. On her way to school, she meets a mysterious young man. But her curiosity unleashes a calamity that endangers the entire population of Japan, and so Suzume embarks on a journey to set things right.",
      "popularity": 293.279,
      "poster_path": "/vIeu8WysZrTSFb2uhPViKjX9EcC.jpg",
      "release_date": "2022-11-11",
      "title": "Suzume",
      "video": false,
      "vote_average": 8,
      "vote_count": 182
    },
    {
      "adult": false,
      "backdrop_path": "/tIX6j3NzadlwGcJ52nuWdmtOQkg.jpg",
      "genre_ids": [
        27,
        53,
        9648
      ],
      "id": 717728,
      "original_language": "en",
      "original_title": "Jeepers Creepers: Reborn",
      "overview": "Forced to travel with her boyfriend to a horror festival, Laine begins to experience disturbing visions associated with the urban legend of The Creeper. As the festival arrives and the blood-soaked entertainment builds to a frenzy, she becomes the center of it while something unearthly has been summoned.",
      "popularity": 205.007,
      "poster_path": "/aGBuiirBIQ7o64FmJxO53eYDuro.jpg",
      "release_date": "2022-09-15",
      "title": "Jeepers Creepers: Reborn",
      "video": false,
      "vote_average": 5.8,
      "vote_count": 744
    },
    {
      "adult": false,
      "backdrop_path": "/7TUp4uKIaX9c2TAZLPwjty5A0EP.jpg",
      "genre_ids": [
        878,
        12,
        28
      ],
      "id": 447365,
      "original_language": "en",
      "original_title": "Guardians of the Galaxy Volume 3",
      "overview": "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
      "popularity": 249.137,
      "poster_path": "/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
      "release_date": "2023-05-03",
      "title": "Guardians of the Galaxy Volume 3",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
    },
    {
      "adult": false,
      "backdrop_path": "/sxQuWAUnyZCSJnjXhcGrCP6ASUy.jpg",
      "genre_ids": [
        18,
        27,
        53
      ],
      "id": 931954,
      "original_language": "es",
      "original_title": "Venus",
      "overview": "Lucía, a club dancer on the run, takes refuge in a sinister building on the outskirts of Madrid where her sister Rocío lives with her daughter Alba.",
      "popularity": 199.191,
      "poster_path": "/vyQmDx5CF8x9T6WKCLuoFotGpjf.jpg",
      "release_date": "2022-12-02",
      "title": "Venus",
      "video": false,
      "vote_average": 5.6,
      "vote_count": 82
    },
    {
      "adult": false,
      "backdrop_path": "/pr5B7Hb7711QQDirAyS5P7fKjts.jpg",
      "genre_ids": [
        53,
        28,
        27,
        12
      ],
      "id": 760741,
      "original_language": "en",
      "original_title": "Beast",
      "overview": "A recently widowed man and his two teenage daughters travel to a game reserve in South Africa. However, their journey of healing soon turns into a fight for survival when a bloodthirsty lion starts to stalk them.",
      "popularity": 190.392,
      "poster_path": "/f18rGcLlawKjNC5KRh36S0mvRlY.jpg",
      "release_date": "2022-08-11",
      "title": "Beast",
      "video": false,
      "vote_average": 6.8,
      "vote_count": 1077
    },
    {
      "adult": false,
      "backdrop_path": "/cdOQk4GP5ch5e1HHATFG3NXouPL.jpg",
      "genre_ids": [
        10749,
        18,
        35
      ],
      "id": 1016121,
      "original_language": "en",
      "original_title": "Beautiful Disaster",
      "overview": "Bad-boy Travis is exactly what college freshman Abby needs and wants to avoid. He spends his nights fighting in underground boxing matches, and his days as the ultimate college campus charmer. But Abby wants nothing to do with Travis. Intrigued by Abby’s resistance, Travis offers her a simple bet: if he loses his next fight, he must remain sex-free for a month. If he wins, Abby must live in his apartment for the same amount of time. Either way, Travis has no idea that Abby’s dark past is about to emerge, and he may have finally met his match.",
      "popularity": 186.873,
      "poster_path": "/aQs2JO5fBfWBqy3cRAJYmgmRSCe.jpg",
      "release_date": "2023-04-04",
      "title": "Beautiful Disaster",
      "video": false,
      "vote_average": 6.8,
      "vote_count": 17
    },
    {
      "adult": false,
      "backdrop_path": "/2ZpwPckspTSY9sVEkjEyatgBWT7.jpg",
      "genre_ids": [
        53,
        18,
        27
      ],
      "id": 848058,
      "original_language": "es",
      "original_title": "Cerdita",
      "overview": "A bullied overweight teenager sees a glimpse of hope when her tormentors are brutally abducted by a mesmerizing stranger.",
      "popularity": 144.586,
      "poster_path": "/pIFeu5gF7ofAxI9NqrWbJAjjKn6.jpg",
      "release_date": "2022-10-07",
      "title": "Piggy",
      "video": false,
      "vote_average": 6.7,
      "vote_count": 340
    },
    {
      "adult": false,
      "backdrop_path": "/qCW1DUmfWj2xLQRCRhrwkQyKROH.jpg",
      "genre_ids": [
        14,
        28,
        12
      ],
      "id": 455476,
      "original_language": "en",
      "original_title": "Knights of the Zodiac",
      "overview": "When a headstrong street orphan, Seiya, in search of his abducted sister unwittingly taps into hidden powers, he discovers he might be the only person alive who can protect a reincarnated goddess, sent to watch over humanity. Can he let his past go and embrace his destiny to become a Knight of the Zodiac?",
      "popularity": 185.628,
      "poster_path": "/ixLxaRJrJZoN3pg6tc2RAsheYmV.jpg",
      "release_date": "2023-04-27",
      "title": "Knights of the Zodiac",
      "video": false,
      "vote_average": 6.8,
      "vote_count": 6
    },
    {
      "adult": false,
      "backdrop_path": "/pbMbDlOAkVuvnxovBA2ENin59xH.jpg",
      "genre_ids": [
        12,
        10751,
        14,
        10749
      ],
      "id": 447277,
      "original_language": "en",
      "original_title": "The Little Mermaid",
      "overview": "The youngest of King Triton’s daughters, and the most defiant, Ariel longs to find out more about the world beyond the sea, and while visiting the surface, falls for the dashing Prince Eric. With mermaids forbidden to interact with humans, Ariel makes a deal with the evil sea witch, Ursula, which gives her a chance to experience life on land, but ultimately places her life – and her father’s crown – in jeopardy.",
      "popularity": 150.263,
      "poster_path": "/ym1dxyOk4jFcSl4Q2zmRrA5BEEN.jpg",
      "release_date": "2023-05-18",
      "title": "The Little Mermaid",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
    },
    {
      "adult": false,
      "backdrop_path": "/dnrUa6EXInBVfuPZLMDvkH7bMBi.jpg",
      "genre_ids": [
        18
      ],
      "id": 855263,
      "original_language": "en",
      "original_title": "A Thousand and One",
      "overview": "Struggling but unapologetically living on her own terms, Inez is moving from shelter to shelter in mid-1990s New York City. With her 6-year-old son Terry in foster care and unable to leave him again, she kidnaps him so they can build their life together. As the years go by, their family grows and Terry becomes a smart yet quiet teenager, but the secret that has defined their lives threatens to destroy the home they have so improbably built.",
      "popularity": 159.682,
      "poster_path": "/9WyipqK3wOf8lJLWqFX0r7aBodm.jpg",
      "release_date": "2023-03-31",
      "title": "A Thousand and One",
      "video": false,
      "vote_average": 8.5,
      "vote_count": 10
    }
  ];

  now_playing_movies = [
    {
      "adult": false,
      "backdrop_path": "/lWqjXgut48IK5f5IRbDBAoO2Epp.jpg",
      "genre_ids": [
        16,
        12,
        10751,
        14,
        35
      ],
      "id": 502356,
      "original_language": "en",
      "original_title": "The Super Mario Bros. Movie",
      "overview": "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
      "popularity": 8282.211,
      "poster_path": "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
      "release_date": "2023-04-05",
      "title": "The Super Mario Bros. Movie",
      "video": false,
      "vote_average": 7.5,
      "vote_count": 1389
    },
    {
      "adult": false,
      "backdrop_path": "/nDxJJyA5giRhXx96q1sWbOUjMBI.jpg",
      "genre_ids": [
        28,
        35,
        14
      ],
      "id": 594767,
      "original_language": "en",
      "original_title": "Shazam! Fury of the Gods",
      "overview": "Billy Batson and his foster siblings, who transform into superheroes by saying 'Shazam!', are forced to get back into action and fight the Daughters of Atlas, who they must stop from using a weapon that could destroy the world.",
      "popularity": 4790.147,
      "poster_path": "/2VK4d3mqqTc7LVZLnLPeRiPaJ71.jpg",
      "release_date": "2023-03-15",
      "title": "Shazam! Fury of the Gods",
      "video": false,
      "vote_average": 6.8,
      "vote_count": 1171
    },
    {
      "adult": false,
      "backdrop_path": "/7bWxAsNPv9CXHOhZbJVlj2KxgfP.jpg",
      "genre_ids": [
        27,
        53
      ],
      "id": 713704,
      "original_language": "en",
      "original_title": "Evil Dead Rise",
      "overview": "Two sisters find an ancient vinyl that gives birth to bloodthirsty demons that run amok in a Los Angeles apartment building and thrusts them into a primal battle for survival as they face the most nightmarish version of family imaginable.",
      "popularity": 2291.491,
      "poster_path": "/mIBCtPvKZQlxubxKMeViO2UrP3q.jpg",
      "release_date": "2023-04-12",
      "title": "Evil Dead Rise",
      "video": false,
      "vote_average": 7,
      "vote_count": 170
    },
    {
      "adult": false,
      "backdrop_path": "/54IXMMEQKlkPXHqPExWy98UBmtE.jpg",
      "genre_ids": [
        27
      ],
      "id": 1008005,
      "original_language": "es",
      "original_title": "La niña de la comunión",
      "overview": "Spain, late 1980s. Newcomer Sara tries to fit in with the other teens in this tight-knit small town in the province of Tarragona. If only she were more like her extroverted best friend, Rebe. They go out one night at a nightclub, on the way home, they come upon a little girl holding a doll, dressed for her first communion. And that's when the nightmare begins.",
      "popularity": 1400.918,
      "poster_path": "/sP6AO11a7jWgsmT9T8j9EGIWAaZ.jpg",
      "release_date": "2023-02-10",
      "title": "The Communion Girl",
      "video": false,
      "vote_average": 6.3,
      "vote_count": 53
    },
    {
      "adult": false,
      "backdrop_path": "/eSVu1FvGPy86TDo4hQbpuHx55DJ.jpg",
      "genre_ids": [
        878,
        12,
        53,
        28
      ],
      "id": 700391,
      "original_language": "en",
      "original_title": "65",
      "overview": "65 million years ago, the only 2 survivors of a spaceship from Somaris that crash-landed on Earth must fend off dinosaurs and reach the escape vessel in time before an imminent asteroid strike threatens to destroy the planet.",
      "popularity": 1325.004,
      "poster_path": "/rzRb63TldOKdKydCvWJM8B6EkPM.jpg",
      "release_date": "2023-03-02",
      "title": "65",
      "video": false,
      "vote_average": 6.3,
      "vote_count": 734
    },
    {
      "adult": false,
      "backdrop_path": "/h8gHn0OzBoaefsYseUByqsmEDMY.jpg",
      "genre_ids": [
        28,
        53,
        80
      ],
      "id": 603692,
      "original_language": "en",
      "original_title": "John Wick: Chapter 4",
      "overview": "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
      "popularity": 1444.362,
      "poster_path": "/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
      "release_date": "2023-03-22",
      "title": "John Wick: Chapter 4",
      "video": false,
      "vote_average": 8,
      "vote_count": 1187
    },
    {
      "adult": false,
      "backdrop_path": "/a2tys4sD7xzVaogPntGsT1ypVoT.jpg",
      "genre_ids": [
        53,
        35,
        80
      ],
      "id": 804150,
      "original_language": "en",
      "original_title": "Cocaine Bear",
      "overview": "Inspired by a true story, an oddball group of cops, criminals, tourists and teens converge in a Georgia forest where a 500-pound black bear goes on a murderous rampage after unintentionally ingesting cocaine.",
      "popularity": 1332.34,
      "poster_path": "/gOnmaxHo0412UVr1QM5Nekv1xPi.jpg",
      "release_date": "2023-02-22",
      "title": "Cocaine Bear",
      "video": false,
      "vote_average": 6.4,
      "vote_count": 862
    },
    {
      "adult": false,
      "backdrop_path": "/ouB7hwclG7QI3INoYJHaZL4vOaa.jpg",
      "genre_ids": [
        16,
        10751,
        14,
        12,
        35,
        18
      ],
      "id": 315162,
      "original_language": "en",
      "original_title": "Puss in Boots: The Last Wish",
      "overview": "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
      "popularity": 1525.433,
      "poster_path": "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
      "release_date": "2022-12-07",
      "title": "Puss in Boots: The Last Wish",
      "video": false,
      "vote_average": 8.3,
      "vote_count": 5316
    },
    {
      "adult": false,
      "backdrop_path": "/5Y5pz0NX7SZS9036I733F7uNcwK.jpg",
      "genre_ids": [
        27,
        53
      ],
      "id": 758323,
      "original_language": "en",
      "original_title": "The Pope's Exorcist",
      "overview": "Father Gabriele Amorth, Chief Exorcist of the Vatican, investigates a young boy's terrifying possession and ends up uncovering a centuries-old conspiracy the Vatican has desperately tried to keep hidden.",
      "popularity": 1229.734,
      "poster_path": "/9JBEPLTPSm0d1mbEcLxULjJq9Eh.jpg",
      "release_date": "2023-04-05",
      "title": "The Pope's Exorcist",
      "video": false,
      "vote_average": 6.6,
      "vote_count": 135
    },
    {
      "adult": false,
      "backdrop_path": "/m1fgGSLK0WvRpzM1AmZu38m0Tx8.jpg",
      "genre_ids": [
        28
      ],
      "id": 842945,
      "original_language": "en",
      "original_title": "Supercell",
      "overview": "Good-hearted teenager William always lived in hope of following in his late father’s footsteps and becoming a storm chaser. His father’s legacy has now been turned into a storm-chasing tourist business, managed by the greedy and reckless Zane Rogers, who is now using William as the main attraction to lead a group of unsuspecting adventurers deep into the eye of the most dangerous supercell ever seen.",
      "popularity": 1052.219,
      "poster_path": "/gbGHezV6yrhua0KfAgwrknSOiIY.jpg",
      "release_date": "2023-03-17",
      "title": "Supercell",
      "video": false,
      "vote_average": 6.4,
      "vote_count": 119
    },
    {
      "adult": false,
      "backdrop_path": "/wD2kUCX1Bb6oeIb2uz7kbdfLP6k.jpg",
      "genre_ids": [
        27,
        53
      ],
      "id": 980078,
      "original_language": "en",
      "original_title": "Winnie the Pooh: Blood and Honey",
      "overview": "Christopher Robin is headed off to college and he has abandoned his old friends, Pooh and Piglet, which then leads to the duo embracing their inner monsters.",
      "popularity": 813.708,
      "poster_path": "/ewF3IlGscc7FjgGEPcQvZsAsgAW.jpg",
      "release_date": "2023-01-27",
      "title": "Winnie the Pooh: Blood and Honey",
      "video": false,
      "vote_average": 5.8,
      "vote_count": 509
    },
    {
      "adult": false,
      "backdrop_path": "/c3hl9E8E7b9opXDFVF5tSyk0ykr.jpg",
      "genre_ids": [
        16,
        35,
        10751,
        12,
        14
      ],
      "id": 816904,
      "original_language": "es",
      "original_title": "Momias",
      "overview": "Through a series of unfortunate events, three mummies end up in present-day London and embark on a wacky and hilarious journey in search of an old ring belonging to the Royal Family, stolen by ambitious archaeologist Lord Carnaby.",
      "popularity": 872.257,
      "poster_path": "/qVdrYN8qu7xUtsdEFeGiIVIaYd.jpg",
      "release_date": "2023-01-05",
      "title": "Mummies",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 213
    },
    {
      "adult": false,
      "backdrop_path": "/9Rq14Eyrf7Tu1xk0Pl7VcNbNh1n.jpg",
      "genre_ids": [
        28,
        12,
        53
      ],
      "id": 646389,
      "original_language": "en",
      "original_title": "Plane",
      "overview": "After a heroic job of successfully landing his storm-damaged aircraft in a war zone, a fearless pilot finds himself between the agendas of multiple militias planning to take the plane and its passengers hostage.",
      "popularity": 691.213,
      "poster_path": "/qi9r5xBgcc9KTxlOLjssEbDgO0J.jpg",
      "release_date": "2023-01-12",
      "title": "Plane",
      "video": false,
      "vote_average": 6.9,
      "vote_count": 1133
    },
    {
      "adult": false,
      "backdrop_path": "/zM9RGbJBZ3UNpFOabcRqh0iVAYP.jpg",
      "genre_ids": [
        27,
        9648,
        53
      ],
      "id": 631842,
      "original_language": "en",
      "original_title": "Knock at the Cabin",
      "overview": "While vacationing at a remote cabin, a young girl and her two fathers are taken hostage by four armed strangers who demand that the family make an unthinkable choice to avert the apocalypse. With limited access to the outside world, the family must decide what they believe before all is lost.",
      "popularity": 591.933,
      "poster_path": "/dm06L9pxDOL9jNSK4Cb6y139rrG.jpg",
      "release_date": "2023-02-01",
      "title": "Knock at the Cabin",
      "video": false,
      "vote_average": 6.4,
      "vote_count": 1330
    },
    {
      "adult": false,
      "backdrop_path": "/70aVSo3fuZ94jyQ3rT64afEf8lV.jpg",
      "genre_ids": [
        16,
        12,
        35,
        10751,
        14
      ],
      "id": 676710,
      "original_language": "en",
      "original_title": "The Amazing Maurice",
      "overview": "Maurice is a streetwise ginger cat who comes up with a money-making scam by befriending a group of self-taught talking rats. When Maurice and the rodents meet a bookworm called Malicia, their little con soon goes down the drain.",
      "popularity": 576.862,
      "poster_path": "/ydhZeUjbzVEFclUpMhLfDZSavUY.jpg",
      "release_date": "2022-12-16",
      "title": "The Amazing Maurice",
      "video": false,
      "vote_average": 7,
      "vote_count": 59
    },
    {
      "adult": false,
      "backdrop_path": "/dlrWhn0G3AtxYUx2D9P2bmzcsvF.jpg",
      "genre_ids": [
        878,
        27,
        35
      ],
      "id": 536554,
      "original_language": "en",
      "original_title": "M3GAN",
      "overview": "A brilliant toy company roboticist uses artificial intelligence to develop M3GAN, a life-like doll programmed to emotionally bond with her newly orphaned niece. But when the doll's programming works too well, she becomes overprotective of her new friend with terrifying results.",
      "popularity": 633.892,
      "poster_path": "/d9nBoowhjiiYc4FBNtQkPY7c11H.jpg",
      "release_date": "2022-12-28",
      "title": "M3GAN",
      "video": false,
      "vote_average": 7.4,
      "vote_count": 2414
    },
    {
      "adult": false,
      "backdrop_path": "/zGoZB4CboMzY1z4G3nU6BWnMDB2.jpg",
      "genre_ids": [
        28,
        35,
        10749
      ],
      "id": 758009,
      "original_language": "en",
      "original_title": "Shotgun Wedding",
      "overview": "Darcy and Tom gather their families for the ultimate destination wedding but when the entire party is taken hostage, “’Til Death Do Us Part” takes on a whole new meaning in this hilarious, adrenaline-fueled adventure as Darcy and Tom must save their loved ones—if they don’t kill each other first.",
      "popularity": 515.031,
      "poster_path": "/t79ozwWnwekO0ADIzsFP1E5SkvR.jpg",
      "release_date": "2022-12-28",
      "title": "Shotgun Wedding",
      "video": false,
      "vote_average": 6.3,
      "vote_count": 770
    },
    {
      "adult": false,
      "backdrop_path": "/ttXABm22Vu9MsQjDAF3Lx2nUPy0.jpg",
      "genre_ids": [
        35,
        28
      ],
      "id": 1101799,
      "original_language": "es",
      "original_title": "Fuga de Reinas",
      "overview": "When four women finally take the road trip they planned in high school, they have no idea of the things they'll bump into sometimes literally.",
      "popularity": 442.944,
      "poster_path": "/oUmuwUIofGsgOr05kieD3Q8ELEO.jpg",
      "release_date": "2023-04-14",
      "title": "Queens on the Run",
      "video": false,
      "vote_average": 7.3,
      "vote_count": 56
    },
    {
      "adult": false,
      "backdrop_path": "/sRfX2XPjyL7nRKVRKXVG6D0bVQI.jpg",
      "genre_ids": [
        27,
        53
      ],
      "id": 884184,
      "original_language": "en",
      "original_title": "Consecration",
      "overview": "After the alleged suicide of her priest brother, Grace travels to the remote Scottish convent where he fell to his death. Distrusting the Church's account, she uncovers murder, sacrilege and a disturbing truth about herself.",
      "popularity": 387.177,
      "poster_path": "/yQTRmPzKAdLodknnPVtImm6FWPZ.jpg",
      "release_date": "2023-02-09",
      "title": "Consecration",
      "video": false,
      "vote_average": 6.5,
      "vote_count": 31
    },
    {
      "adult": false,
      "backdrop_path": "/2E6pIbJien7B9yWpaz8Yd2njzUI.jpg",
      "genre_ids": [
        18,
        27
      ],
      "id": 1026563,
      "original_language": "es",
      "original_title": "13 exorcismos",
      "overview": "After participating in a séance, young Laura begins to behave strangely. Alarmed, her parents ask Father Olmedo, one of the few exorcists authorized by the Vatican to intervene in cases of demonic possession, for help.",
      "popularity": 382.018,
      "poster_path": "/8LpnMIqpRiwxpbGR33ALCmVl7gj.jpg",
      "release_date": "2022-11-04",
      "title": "13 Exorcisms",
      "video": false,
      "vote_average": 5.5,
      "vote_count": 61
    }
  ];

  result_movies = [
    {
      "movies": this.now_playing_movies,
      "title": "Now Playing Movies"
    },
    {
      "movies": this.popular_movies,
      "title": "Popular Movies"
    },
    {
      "movies": this.top_rated_movies,
      "title": "Top Rated Movies"
    },
    {
      "movies": this.upcoming_movies,
      "title": "Upcoming Movies"
    }
  ]

}


