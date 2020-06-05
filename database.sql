CREATE TABLE "user"
(
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "admin" BOOLEAN DEFAULT false
);


CREATE TABLE "story"
(
    "id" SERIAL PRIMARY KEY,
    "story_title" VARCHAR(100) NOT NULL,
    "story_description" VARCHAR(255) NOT NULL,
    "story_path"
        VARCHAR DEFAULT 'https://cdn.pixabay.com/photo/2017/07/22/11/46/adventure-2528477_1280.jpg',
    "user_id" INT,
    FOREIGN KEY ("user_id") REFERENCES "user"("id")
);


CREATE TABLE "snippet"
(
    "id" SERIAL PRIMARY KEY,
    "snip_title" VARCHAR(50) NOT NULL,
    "snip_description" VARCHAR NOT NULL,
    "snip_ending" BOOLEAN DEFAULT 'false',
    "snip_path"
        VARCHAR DEFAULT 'https://cdn.pixabay.com/photo/2017/05/24/17/40/book-2341083_1280.jpg',
    "story_id" INT,
    "views" INT DEFAULT '0',
    FOREIGN KEY ("story_id") REFERENCES story ("id")
);


CREATE TABLE "junction"
(
    "id" SERIAL PRIMARY KEY,
    "parent" INT,
    "child" INT,
    "action" VARCHAR(120) NOT NULL,
    FOREIGN KEY ("parent") REFERENCES snippet ("id"),
    FOREIGN KEY ("child") REFERENCES snippet ("id")
);


CREATE TABLE "comment"
(
    "id" SERIAL PRIMARY KEY,
    "user_id" INT,
    "comment" VARCHAR (255) NOT NULL,
    "comment_date" TIMESTAMPTZ DEFAULT NOW(),
    "snippet_id" INT,
    FOREIGN KEY ("snippet_id") REFERENCES "snippet"("id"),
    FOREIGN KEY ("user_id") REFERENCES "user"("id")
);


INSERT INTO "user"
    (username, password, admin)
VALUES
    ('Tan', '$2a$10$TOxyLoVnx3sfRTcU47F25.8kYvWL7x4rJg/REiGsBButD8CwwkZbK', 'true'),
    ('Linda', '$2a$10$I/s6RuKsCkTkRTQ5eqklU.cvjD4sSUFkI1XFfOuvF/uwJmzyvweaG', 'true'),
    ('Dane', '$2a$10$Mn7ixXSFHwC0RvxUwIvHzeqpZzcD7FBVnvi/mDcsf71zC/fiwyb1.', 'false'),
    ('Dev', '$2a$10$MJx.TxtdniEYF5YPRHZEFONSKf6kbTJkqqXm3NGjXuQp6.gsM2XTy', 'false'),
    ('Vi', '$2a$10$35hL2edh9HgzqvbOr07VwOZrFDaxeIIfaGfWjwb/OflexP.MfBCX6', 'true'),
    ('Pibbil', '$2a$10$GsczqPCDrTEQ5IKHna7JaOoJ1krhJJOzrVT0ZBzy9uqodKiyPrNjy', 'true'),
    ('shaokee', '$2a$10$hybCon2q7G/LASKaYltXuOWvhq7uljmcw92X6F8wPQ02gB.IVqI1G', 'true'),
    ('some guy', '$2a$10$akL6q2rR28lM4iqA4sp00upC9J29JlJ/LDUbnn0Te2rksVcRQ8ACO', 'false');


INSERT INTO "story"
    (user_id, story_title, story_description, story_path)
VALUES
    (1, 'The Elven Warrior', 'A short Elven adventure.', 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/600001c3-7f2c-4f7e-88ba-50856e624266/daiq6l5-28a36c4a-5471-4ffb-af02-185ab4ffdce4.jpg/v1/fill/w_1207,h_662,q_70,strp/elven_warrior_by_artdeepmind_daiq6l5-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD03MDIiLCJwYXRoIjoiXC9mXC82MDAwMDFjMy03ZjJjLTRmN2UtODhiYS01MDg1NmU2MjQyNjZcL2RhaXE2bDUtMjhhMzZjNGEtNTQ3MS00ZmZiLWFmMDItMTg1YWI0ZmZkY2U0LmpwZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.ZmFXDtiEo2arDJQNXz42544hYwSVvqUBXtgqYTePeNA'),
    (1, 'Into the Wind', 'A fantastic journey into the unknown.', 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80'),
    (1, 'Becoming Super', 'An ordinary high schooler gains an extraordinary ability!  Decide the fate of this zero and become a hero.', 'https://images.unsplash.com/photo-1519834785169-98be25ec3f84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2800&q=80')
;

-- The Elven Warrior Story Snippets
INSERT INTO "snippet"
    (snip_title, snip_description, snip_ending, story_id, snip_path)
VALUES
    ( 'The Elven Warrior',
        'In the night, you''ve heard the terrifying sound of beasts.  It''s been two days hiding in the safety of your house.  It''s been quiet all day.',
        'false',
        1, 'https://images.unsplash.com/photo-1588933505258-28b2fbd2a2a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'),

    ( 'The Window to a New World', '
You make your way to the window.  It looks quiet out there.  You open the window and begin to climb outside.  As you recollect yourself from the climb, you feel the ground rumble.  Slowly, hands begin to claw their way from beneath.  The dead has risen!  Before you know it, one has grabbed hold of you.', 'true', 1, 'https://images.unsplash.com/photo-1503925802536-c9451dcd87b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'),

    ( 'A Sigh of Relief', 'You slowly open your front door and peek outside.  You see nothing.', 'false', 1, 'https://images.unsplash.com/photo-1505210448888-9bd04f8f875c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=629&q=80'),

    ( 'Dreams Do Come True', 'You climb back in bed as if nothing happened.', 'true', 1, 'https://images.unsplash.com/photo-1560478047-ec53b6b830ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80'),

    ( 'Huzzah!!', 'You kick the door open!  To your dismay, the loud noise has attracted monsters from all around.  There are too many to fight off.', 'true', 1, 'https://cdn.pixabay.com/photo/2016/09/06/02/46/eery-1648250_1280.jpg');

-- Into the Wind Story Snippets
INSERT INTO "snippet"
    (snip_title, snip_description, snip_ending, story_id, snip_path)
VALUES
    ( 'Into the Wind', 'A perilous mountain lies ahead of you.  The wind is calling.', 'false', 2, 'https://cdn.pixabay.com/photo/2018/04/16/12/59/face-3324569_960_720.jpg'),
    ( 'Safe and Steady', 'You decide to safely hike down the mountain.  You arrive home and go straight to bed from the exhaustion.  The end.', 'true', 2, 'https://images.unsplash.com/photo-1560478047-ec53b6b830ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80'),
    ( 'A Dangerous Choice', 'You''ve decided to climb down the mountains.  Half way down the mountain, you realize that you are running out of energy fast.  Hunger sets in and you look into your knapsack.', 'false', 2, 'https://images.unsplash.com/photo-1581605405669-fcdf81165afa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'),
    ( 'The Deadliest Catch', 'You reach into your knapsack for a sandwich. You dig and dig and to your despair, there is no sandwich!  Your grip loosens from the sheer exhaustion and you fall.  Falling to your doom, the last thoughts are of that sandwich you left on your kitchen counter.  You are one with the wind now.', 'true', 2, 'https://cdn.pixabay.com/photo/2020/01/28/08/37/watercolour-4799196_1280.jpg'),
    ( 'Yellow Berry Surprise', 'You reach into your knapsack and find a bottle of yellow berry juice.  It reinvigorates your spirit and you quickly climb down the mountain.  Standing at the base of the mountain, the wind brushes against your cheek and you enjoy the sunset.', 'true', 2, 'https://images.unsplash.com/photo-1514519273132-6a1abd48302c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80');

-- Becoming Super Story Snippets
INSERT INTO "snippet"
    (snip_title, snip_description, snip_ending, story_id, snip_path)
VALUES
    ( 'Becoming Super', 'Brrrrring.  The high school alarm goes off and you rush out of class.  It''s the firefly festival tonight!  There''s this Fussa tradition to go to Firefly Park and celebrate by eating a shaved ice dessert.  What a perfect treat for such a hot day.', 'false', 3,
        'https://images.unsplash.com/photo-1562233142-8b7334969c33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3021&q=80'),

    ( 'The early bird gets the worm...', 'You decide to beat the crowds and leave your friends behind.  As you start walking towards Firefly Park, the wind picks up slightly.  You feel your legs moving faster and faster.  Before you know it, you''re sprinting uncontrollably!', 'false', 3,
        'https://images.unsplash.com/photo-1481966115753-963394378f23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1687&q=80'),

    ( 'A distant voice...', 'Pacing around the schoolyard, you wait for your best friend, Takeshi.  From behind, you hear the words "Yes, I''m so glad you waited for me!".  As you turn around, you see Takeshi walking towards you.  As he gets closer, you tell him, "Of course I waited for you!"  A confused look on Takeshi''s face as he repeats "I''m so glad you waited for me!".', 'false', 3,
        'https://images.unsplash.com/photo-1544215830-1c67ed769a61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'),

    ( 'A Hard Stop...', 'Abruptly, you put the brakes on and stop running.  How bizarre!  You realize you''ve ran almost a mile in what seemed like seconds.  How could this be?  Did you blackout during the run?  Fortunately, you know this area of Fussa.  Unfortunately, it''s a terrible neighborhood.  In the distance, you can hear the screams of an older lady.', 'false', 3, 'https://images.unsplash.com/photo-1505072861857-fa749f6540a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1649&q=80'),


    ( 'Faster than fast...', 'With each blink you take, you are in a different area of town.  Could this be some kind of dream?  The speed takes over and you begin to lose yourself.  Light begins to fill your eyes as you travel faster and faster.  You have become one with the wind.', 'true', 3, 'https://miro.medium.com/max/2048/1*aHi0DGeU3pw4EMESVK3RJw.jpeg');

--( 'Becoming Super','', 'false', 3, 
--'https://cdn.pixabay.com/photo/2018/04/16/12/59/face-3324569_960_720.jpg'),

INSERT INTO "junction"
    (parent, child, action)
VALUES
    (1, 2, 'Climb out the window'),
    (1, 3, 'Check the front door'),
    (3, 4, 'Slowly climb into bed'),
    (3, 5, 'Go outside and enjoy the fresh air'),
    (6, 7, 'Take the safe path down the mountain'),
    (6, 8, 'Climb down the mountain'),
    (8, 9, 'Grab a sandwich to eat'),
    (8, 10, 'Drink yellow berry juice');


INSERT INTO "junction"
    (parent, child, action)
VALUES
    (11, 12, 'Run to the festival'),
    (11, 13, 'Wait for your best friend'),
    (12, 14, 'Slow down'),
    (12, 15, 'Go even faster');


INSERT INTO "comment"
    (user_id, comment, snippet_id, comment_date)
VALUES
    ('1', 'That was too short!', '4', '2020-06-02 13:45:09.250411+00'),
    ('2', 'i loved the part where I died', '2', '2020-06-01 16:45:09.250411+00'),
    ('1', 'I can''t believe that happened!', '2', '2020-06-02 17:45:09.250411+00'),
    ('4', 'tiny drop of blood', '5', '2020-06-04 18:45:09.250411+00'),
    ('2', 'Hooray!  I give that ending a ten out of ten!', '10', '2020-06-03 20:45:09.250411+00'),
    ('3', 'OH NO, THEY GOT MY NECK!', '5', '2020-06-04 23:45:09.250411+00'),
    ('5', 'Dang it. I’m dead alreAdy', '2', '2020-06-03 22:45:09.250411+00'),
    ('5', 'Yasss!', '10', '2020-06-03 22:49:51.328775+00'),
    ('5', 'Wow so perfect', '7', '2020-06-03 23:00:40.07294+00'),
    ('8', 'The sandwich is a lie...', '9', '2020-06-04 16:08:43.546826+00');
