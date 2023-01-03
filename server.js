const express = require("express");
const app = express();

app.get("/",(req,res) => {
    res.json({
        text: "Hello World"
    })
})

app.get("/user",(req,res) => {
    res.json([
        {
          "_id": "63b3fe87f5458857eb65c6c6",
          "index": 0,
          "guid": "4d6a15b2-fe31-493a-a3d6-00725adbf6ed",
          "isActive": false,
          "balance": "$1,791.86",
          "picture": "http://placehold.it/32x32",
          "age": 34,
          "eyeColor": "blue",
          "name": "Solis Crane",
          "gender": "male",
          "company": "QUAREX",
          "email": "soliscrane@quarex.com",
          "phone": "+1 (842) 558-2151",
          "address": "192 Bushwick Avenue, Goochland, Georgia, 9006",
          "about": "Nulla nisi officia et cupidatat exercitation anim excepteur ullamco voluptate adipisicing ipsum labore voluptate. Consectetur pariatur quis velit id tempor tempor velit in aute labore. Elit dolore laborum dolore labore qui et incididunt ea esse est sit.\r\n",
          "registered": "2015-02-16T04:06:30 -06:-30",
          "latitude": 7.573058,
          "longitude": -75.235026,
          "tags": [
            "deserunt",
            "qui",
            "occaecat",
            "laboris",
            "nostrud",
            "incididunt",
            "laborum"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Buck Elliott"
            },
            {
              "id": 1,
              "name": "West Scott"
            },
            {
              "id": 2,
              "name": "Tran Ward"
            }
          ]
        },
        {
          "_id": "63b3fe875b54ef6881d6b45f",
          "index": 1,
          "guid": "408d2f14-2b4d-4660-a5e2-563b786c9913",
          "isActive": true,
          "balance": "$1,745.46",
          "picture": "http://placehold.it/32x32",
          "age": 36,
          "eyeColor": "green",
          "name": "Tia Rogers",
          "gender": "female",
          "company": "EARWAX",
          "email": "tiarogers@earwax.com",
          "phone": "+1 (861) 413-3931",
          "address": "166 Ferry Place, Roeville, Wyoming, 2757",
          "about": "Laboris laboris commodo commodo officia do dolor enim commodo. Elit aliquip occaecat proident dolore aute. Aliquip reprehenderit deserunt in proident fugiat magna reprehenderit cillum cupidatat aute voluptate nulla Lorem aliqua. Pariatur Lorem elit cupidatat adipisicing nulla ipsum quis laborum Lorem.\r\n",
          "registered": "2018-03-19T11:05:43 -06:-30",
          "latitude": 71.805901,
          "longitude": -77.164404,
          "tags": [
            "sunt",
            "nostrud",
            "esse",
            "amet",
            "ad",
            "esse",
            "consequat"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Shannon Good"
            },
            {
              "id": 1,
              "name": "Isabelle Sims"
            },
            {
              "id": 2,
              "name": "Genevieve Sullivan"
            }
          ]
        },
        {
          "_id": "63b3fe87f12055e2a47fe89f",
          "index": 2,
          "guid": "d4f62cf6-42ba-42cc-8f03-5e979e39c904",
          "isActive": true,
          "balance": "$1,357.94",
          "picture": "http://placehold.it/32x32",
          "age": 38,
          "eyeColor": "blue",
          "name": "Christa Sawyer",
          "gender": "female",
          "company": "XURBAN",
          "email": "christasawyer@xurban.com",
          "phone": "+1 (937) 491-2727",
          "address": "902 Georgia Avenue, Watchtower, Michigan, 4091",
          "about": "Culpa tempor duis enim aliquip aliqua. Commodo do ad amet enim ex nisi do exercitation. Lorem labore esse sint est cillum. Veniam consequat elit cupidatat deserunt sunt incididunt non tempor.\r\n",
          "registered": "2015-03-18T09:27:13 -06:-30",
          "latitude": 2.186106,
          "longitude": -38.274497,
          "tags": [
            "quis",
            "adipisicing",
            "fugiat",
            "enim",
            "duis",
            "id",
            "id"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Morton Spencer"
            },
            {
              "id": 1,
              "name": "Parsons Lowe"
            },
            {
              "id": 2,
              "name": "Hodges Herrera"
            }
          ]
        },
        {
          "_id": "63b3fe87c9bb06a51d7968a2",
          "index": 3,
          "guid": "23391476-ba4a-4d94-9125-2d93b31ab9bc",
          "isActive": false,
          "balance": "$2,651.27",
          "picture": "http://placehold.it/32x32",
          "age": 28,
          "eyeColor": "green",
          "name": "Alta Sanchez",
          "gender": "female",
          "company": "BUGSALL",
          "email": "altasanchez@bugsall.com",
          "phone": "+1 (971) 548-3938",
          "address": "420 Cherry Street, Turpin, South Carolina, 2039",
          "about": "Ex culpa deserunt proident ad sit cupidatat consectetur nulla. Labore exercitation labore voluptate adipisicing exercitation nisi labore occaecat laboris. Consequat voluptate ex laborum reprehenderit eiusmod Lorem adipisicing deserunt do commodo.\r\n",
          "registered": "2021-12-23T12:28:40 -06:-30",
          "latitude": 21.372751,
          "longitude": 42.055588,
          "tags": [
            "ipsum",
            "mollit",
            "Lorem",
            "sint",
            "veniam",
            "aliqua",
            "veniam"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Bridgett Barker"
            },
            {
              "id": 1,
              "name": "Fleming Day"
            },
            {
              "id": 2,
              "name": "Stacie Oneal"
            }
          ]
        },
        {
          "_id": "63b3fe87937a01f49e073c67",
          "index": 4,
          "guid": "a46a37a8-7250-4879-8ecc-dfa41d6ef924",
          "isActive": true,
          "balance": "$3,178.89",
          "picture": "http://placehold.it/32x32",
          "age": 38,
          "eyeColor": "brown",
          "name": "Henrietta Blake",
          "gender": "female",
          "company": "IMMUNICS",
          "email": "henriettablake@immunics.com",
          "phone": "+1 (800) 486-2141",
          "address": "172 Batchelder Street, Stollings, Maryland, 4907",
          "about": "In sunt consectetur nulla sint sint do est. Ea est nisi quis consequat adipisicing. Excepteur irure excepteur excepteur labore. Eu eu sit sunt esse occaecat ipsum non.\r\n",
          "registered": "2019-10-25T05:28:55 -06:-30",
          "latitude": -75.040867,
          "longitude": 105.396504,
          "tags": [
            "enim",
            "voluptate",
            "ex",
            "laboris",
            "labore",
            "qui",
            "deserunt"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Weeks Haney"
            },
            {
              "id": 1,
              "name": "Flynn Mcneil"
            },
            {
              "id": 2,
              "name": "Aurelia Gilliam"
            }
          ]
        },
        {
          "_id": "63b3fe870128060a1e14529a",
          "index": 5,
          "guid": "108626fd-92cc-4035-b37b-f3b7a549a54a",
          "isActive": true,
          "balance": "$2,689.93",
          "picture": "http://placehold.it/32x32",
          "age": 25,
          "eyeColor": "brown",
          "name": "Austin Clements",
          "gender": "male",
          "company": "ZILLACON",
          "email": "austinclements@zillacon.com",
          "phone": "+1 (818) 427-3566",
          "address": "857 Montague Terrace, Foxworth, Texas, 3002",
          "about": "Sint proident reprehenderit reprehenderit cillum ad incididunt ipsum. Amet Lorem quis deserunt cupidatat nulla et aliquip reprehenderit aliqua. Aliqua nisi officia eiusmod sunt ipsum ut consectetur ad. Culpa aliqua pariatur amet ea aute. Cillum ad aliquip consectetur sint nulla dolor cillum tempor ex. Voluptate mollit occaecat minim sit duis dolore velit Lorem magna officia esse laboris eiusmod ullamco. Cillum irure nulla magna ad sit enim consequat.\r\n",
          "registered": "2018-08-10T02:38:17 -06:-30",
          "latitude": 32.003126,
          "longitude": 159.101514,
          "tags": [
            "commodo",
            "deserunt",
            "cillum",
            "reprehenderit",
            "velit",
            "excepteur",
            "cupidatat"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Church Richardson"
            },
            {
              "id": 1,
              "name": "Suzette Cardenas"
            },
            {
              "id": 2,
              "name": "Geraldine Woodward"
            }
          ]
        },
        {
          "_id": "63b3fe87115e50656d299fab",
          "index": 6,
          "guid": "30aeb5fc-15de-4803-a399-3c7f37710c84",
          "isActive": false,
          "balance": "$1,622.86",
          "picture": "http://placehold.it/32x32",
          "age": 21,
          "eyeColor": "green",
          "name": "Jill Snider",
          "gender": "female",
          "company": "YOGASM",
          "email": "jillsnider@yogasm.com",
          "phone": "+1 (919) 417-2981",
          "address": "632 Vermont Street, Bellamy, District Of Columbia, 9273",
          "about": "Cupidatat aliqua culpa elit pariatur voluptate. Culpa magna deserunt nulla ea enim eu nostrud tempor excepteur Lorem cupidatat labore elit officia. Occaecat cillum sint aliquip consequat do minim anim adipisicing consectetur cillum deserunt voluptate. Aute qui excepteur laboris aute.\r\n",
          "registered": "2015-07-24T04:32:00 -06:-30",
          "latitude": -27.158749,
          "longitude": -72.315818,
          "tags": [
            "eiusmod",
            "ea",
            "consequat",
            "dolore",
            "Lorem",
            "incididunt",
            "ut"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Kent Battle"
            },
            {
              "id": 1,
              "name": "Cora Farrell"
            },
            {
              "id": 2,
              "name": "Betty Rutledge"
            }
          ]
        }
      ])
})

app.listen(5000)