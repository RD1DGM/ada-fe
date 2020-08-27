# Ada Front End Test

Welcome to the Front End Developer test! The goal of this test is to allow you to prove that you can program, as well as develop and design application interfaces. In this test, we have provided an API as well as documentation for it, and you will have to build a web interface for the aforementioned API.

This test is inspired by problems we have run into in our work and we expect you to tackle it like any other work problem. You may use any programming language as well as your favourite editor. Feel free to google-and-stackoverflow your way to success.

As for the programming challenges, we suggest you stick to the old programming mantra:

- Make it work
- Make it right
- Make it fast

The most important thing is to make it work somehow. If you then can clean it up and make it _right_, all the better. That said, we would like you to give some thought and documentation on how you would deliver your code to clients in production and let us understand the underlying assumptions of your solution. Why is this solution appropriate? How would you handle large datasets on the client? What could be potential user experience challenges in the future? How would you make this accesible? What would you change if you had more time to work on it? Please spare a few words to these assumptions and write them out; either directly as code comments or in a separate document.

As for the code, don't feel bound by what is already there. Add functions and datastructures as you see fit, and delete old code with abandon if you don't find it helpful (as long as the unit tests pass). This is your code, so write it your way!

# The Setup

You are working on a database-backed web-app in which you have to fix bugs and add new functionality (sounds familiar?). We have provided you with a functional backend and database that we need you to build a front end for. We have also provided design documents typical of what our front end minded folks use today.

## Tasks

![58CB6FC5-1001-43C2-A8DD-729C5CF0258B](resources/sketch.png)

## Challenge 1

Build a front end component that displays  information from the /nodes endpoint
according to the specification outlined here.

## Challenge 2

Build an interactive front end component that works with the /search end point

## Challenge 3

Build an interactive front end component that renders the content using template
strings.

## Tools to help you get started

### React
[create react app](https://reactjs.org/docs/create-a-new-react-app.html)

### API Setup and Docs
It should be simple to get the API up and running:

1. `yarn`
2. `yarn start-server`

#### `GET /nodes`

Returns a shallow list of nodes with enough to render a sidebar

```
[
  {
    "id": 1,
    "title": "These are the voyages"
  },
  ...
]
```

#### `GET /nodes/:id`

returns a nodes' connections to children nodes

```
[
  {
    "id": 1,
    "title": "Data on friendship",
    "connections": [
      2, // These are ID's to other nodes
      3,
      ...
    ],
    "content": [
      {...},
      ...
    ]
  },
  ...
]
```

#### `POST /nodes/search`

returns search content related to a node


```
`POST {query: "test"}`

>>>
[
    {
        "id": 2,
        "title": "Data on friendship"
    },
    {
        "id": 5,
        "title": "Maybe Data with Beard"
    },
    {
        "id": 6,
        "title": "Borg Hails"
    }
]
```

#### `GET /variables`

returns all our variable data

```
[
  {
      "id": "74c695031a554c2ebfdb2ee123c8b4f6",
      "name": "first",
      "scope": "global"
  },
  ...
]
```
