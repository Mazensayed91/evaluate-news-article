# Evaluate-News-Article-NLP

The aim of this project is to practice webpack-nodejs to evaluate news article using NLP

The main task of this React project are the following:

    1.  Display a form that takes url of an article to analyze
    2.  Analyze this article and return the sentiment analysis results


## Meaning Cloud API
Here is the documentation of how to do sentiment analysis with meaning cloud api: https://learn.meaningcloud.com/developer/sentiment-analysis/2.1/doc/what-is-sentiment-analysis


## TL;DR

To get started developing right away:

* create .env file at the root of the project
* add LICENSE_KEY = XXXxxxXXXXxxxxXXXxx [The api key you get from meaningcloud]
* install all project dependencies with `npm install`
* start the development server with `npm start`
* to build the client for development with `npm build-dev`
* to build the client for production with `npm build-prod`

## What You're Getting

```bash
├── README.md - This file.
├── package.json # npm package manager file, it's like the project's id.
├── __test__
│   ├── testClient # Uses jest to unit test individual functions.
│   └── testServer
└── src
    ├── Client # Contains the UI, get request to 8081 to get the results returned from the backend
    │   ├── Book.js # Represents a book.
    │   └── BookShelf.js # Represents book shel.   f
    ├── Server # Contains the get requests to meaning cloud api to analyze the article.
    │   ├── index.js
```


## Backend Server

### `get`

End-Point:

```js
/sentiment_analysis/*
```

* Hitting this endpoint with valid url returns a json object contains data of the sentiment analysis.


### Author:

Mazen Sayed
