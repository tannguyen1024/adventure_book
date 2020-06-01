
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

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
    "story_path" VARCHAR DEFAULT 'https://cdn.pixabay.com/photo/2017/07/22/11/46/adventure-2528477_1280.jpg',
    "user_id" INT,
    FOREIGN KEY ("user_id") REFERENCES "user"("id")
);

CREATE TABLE "snippet"
(
    "id" SERIAL PRIMARY KEY,
    "snip_title" VARCHAR(50) NOT NULL,
    "snip_description" VARCHAR NOT NULL,
    "snip_ending" BOOLEAN DEFAULT 'false',
    "snip_path" VARCHAR DEFAULT 'https://cdn.pixabay.com/photo/2017/05/24/17/40/book-2341083_1280.jpg',
    "story_id" INT,
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