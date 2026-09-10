// src/mocks/data.js
// Captured 2026/09/10 on local API
// user-activity window : startWeek=2026-07-09, endWeek=2026-09-09


export const MOCK_ACCOUNTS = [
    { "username": 'marcdubois', "password": 'password456', "userId": 'user456' },
    { "username": 'emmaleroy', "password": 'password789', "userId": 'user789' },
    { "username": 'sophiemartin', "password": 'password123', "userId": 'user123' }
]

export const MOCK_LOGIN = {
    "user123" :   { 
                "token": 'mock-token-user123',
                "userId": 'user123'
                },
    "user456" :   {
                "token": 'mock-token-user456',
                "userId": 'user456'
                },
    "user789" :   {
                "token": 'mock-token-user789',
                "userId": 'user789'
                }
}

export const MOCK_USER_INFO = {
    "user123": {
        "profile": {
            "firstName": "Sophie",
            "lastName": "Martin",
            "createdAt": "2025-01-01",
            "age": 32,
            "weight": 60,
            "height": 165,
            "profilePicture": "http://localhost:8000/images/sophie.jpg"
        },
        "statistics": {
            "totalDistance": "2250.2",
            "totalSessions": 348,
            "totalDuration": 14625
        }
    },

    "user456": {
        "profile": {
            "firstName": "Marc",
            "lastName": "Dubois",
            "createdAt": "2025-01-01",
            "age": 45,
            "weight": 85,
           "height": 180,
            "profilePicture": "http://localhost:8000/images/marc.jpg"
        },
        "statistics": {
            "totalDistance": "501.7",
            "totalSessions": 130,
            "totalDuration": 3555
        }
    },

    "user789": {
        "profile": {
            "firstName": "Emma",
            "lastName": "Leroy",
            "createdAt": "2025-01-01",
            "age": 28,
            "weight": 62,
            "height": 170,
            "profilePicture": "http://localhost:8000/images/emma.jpg"
        },
        "statistics": {
            "totalDistance": "3791.4",
            "totalSessions": 607,
            "totalDuration": 22624
        }
    }
}

export const MOCK_USER_ACTIVITY = {
    "user123": [
        {
            "date": "2026-07-09",
            "distance": 5.6,
            "duration": 36,
            "heartRate": {
                "min": 142,
                "max": 177,
                "average": 164
            },
            "caloriesBurned": 400
        },
        {
            "date": "2026-07-12",
            "distance": 9.8,
            "duration": 64,
            "heartRate": {
                "min": 138,
                "max": 179,
                "average": 160
            },
            "caloriesBurned": 675
        },
        {
            "date": "2026-07-19",
            "distance": 6.5,
            "duration": 42,
            "heartRate": {
                "min": 141,
                "max": 176,
                "average": 163
            },
            "caloriesBurned": 460
        },
        {
            "date": "2026-07-26",
            "distance": 7.2,
            "duration": 46,
            "heartRate": {
                "min": 140,
                "max": 177,
                "average": 162
            },
            "caloriesBurned": 505
        },
        {
            "date": "2026-08-03",
            "distance": 8.5,
            "duration": 55,
            "heartRate": {
                "min": 139,
                "max": 179,
                "average": 162
            },
            "caloriesBurned": 590
        },
        {
            "date": "2026-08-07",
            "distance": 4.9,
            "duration": 32,
            "heartRate": {
                "min": 143,
                "max": 179,
                "average": 166
            },
            "caloriesBurned": 350
        },
        {
            "date": "2026-08-10",
            "distance": 7.3,
            "duration": 47,
            "heartRate": {
                "min": 140,
                "max": 178,
                "average": 163
            },
            "caloriesBurned": 510
        },
        {
            "date": "2026-08-17",
            "distance": 11.5,
            "duration": 75,
            "heartRate": {
                "min": 132,
                "max": 180,
                "average": 157
            },
            "caloriesBurned": 785
        },
        {
            "date": "2026-08-24",
            "distance": 5.6,
            "duration": 36,
            "heartRate": {
                "min": 142,
                "max": 178,
                "average": 164
            },
            "caloriesBurned": 395
        },
        {
            "date": "2026-08-31",
            "distance": 6.8,
            "duration": 44,
            "heartRate": {
                "min": 141,
                "max": 177,
                "average": 163
            },
            "caloriesBurned": 475
        },
        {
            "date": "2026-09-04",
            "distance": 4.5,
            "duration": 29,
            "heartRate": {
                "min": 144,
                "max": 179,
                "average": 167
            },
            "caloriesBurned": 325
        },
        {
            "date": "2026-09-07",
            "distance": 8.8,
            "duration": 57,
            "heartRate": {
                "min": 139,
                "max": 179,
                "average": 162
            },
            "caloriesBurned": 615
        }
    ],

    "user456": [
        {
            "date": "2026-07-20",
            "distance": 3.5,
            "duration": 25,
            "heartRate": {
                "min": 121,
                "max": 145,
                "average": 132
            },
            "caloriesBurned": 185
        },
        {
            "date": "2026-08-03",
            "distance": 4.1,
            "duration": 29,
            "heartRate": {
                "min": 123,
                "max": 147,
                "average": 134
            },
            "caloriesBurned": 210
        },
        {
            "date": "2026-08-17",
            "distance": 3.8,
            "duration": 27,
            "heartRate": {
                "min": 122,
                "max": 146,
                "average": 133
            },
            "caloriesBurned": 195
        },
        {
            "date": "2026-08-31",
            "distance": 4,
            "duration": 28,
            "heartRate": {
                "min": 123,
                "max": 147,
                "average": 134
            },
            "caloriesBurned": 210
        }
    ],

    "user789": [
        {
            "date": "2026-07-09",
            "distance": 6.8,
            "duration": 41,
            "heartRate": {
                "min": 143,
                "max": 179,
                "average": 162
            },
            "caloriesBurned": 440
        },
        {
            "date": "2026-07-12",
            "distance": 5.6,
            "duration": 33,
            "heartRate": {
                "min": 139,
                "max": 174,
                "average": 157
            },
            "caloriesBurned": 355
        },
        {
            "date": "2026-07-15",
            "distance": 7.3,
            "duration": 44,
            "heartRate": {
                "min": 142,
                "max": 178,
                "average": 163
            },
            "caloriesBurned": 485
        },
        {
            "date": "2026-07-18",
            "distance": 6,
            "duration": 36,
            "heartRate": {
                "min": 140,
                "max": 175,
                "average": 159
            },
            "caloriesBurned": 400
        },
        {
            "date": "2026-07-21",
            "distance": 5.7,
            "duration": 34,
            "heartRate": {
                "min": 141,
                "max": 177,
                "average": 160
            },
            "caloriesBurned": 380
        },
        {
            "date": "2026-07-24",
            "distance": 6.9,
            "duration": 41,
            "heartRate": {
                "min": 143,
                "max": 179,
                "average": 162
            },
            "caloriesBurned": 435
        },
        {
            "date": "2026-07-27",
            "distance": 5.4,
            "duration": 32,
            "heartRate": {
                "min": 139,
                "max": 174,
                "average": 157
            },
            "caloriesBurned": 345
        },
        {
            "date": "2026-08-01",
            "distance": 5.4,
            "duration": 32,
            "heartRate": {
                "min": 139,
                "max": 174,
                "average": 157
            },
            "caloriesBurned": 345
        },
        {
            "date": "2026-08-04",
            "distance": 7.1,
            "duration": 43,
            "heartRate": {
                "min": 142,
                "max": 178,
                "average": 163
            },
            "caloriesBurned": 465
        },
        {
            "date": "2026-08-07",
            "distance": 6.3,
            "duration": 38,
            "heartRate": {
                "min": 140,
                "max": 176,
                "average": 160
            },
            "caloriesBurned": 415
        },
        {
            "date": "2026-08-10",
            "distance": 5.6,
            "duration": 34,
            "heartRate": {
                "min": 141,
                "max": 177,
                "average": 159
            },
            "caloriesBurned": 375
        },
        {
            "date": "2026-08-13",
            "distance": 6.8,
            "duration": 40,
            "heartRate": {
                "min": 143,
                "max": 179,
                "average": 162
            },
            "caloriesBurned": 440
        },
        {
            "date": "2026-08-16",
            "distance": 5.3,
            "duration": 31,
            "heartRate": {
                "min": 139,
                "max": 174,
                "average": 156
            },
            "caloriesBurned": 340
        },
        {
            "date": "2026-08-19",
            "distance": 7.2,
            "duration": 44,
            "heartRate": {
                "min": 142,
                "max": 178,
                "average": 163
            },
            "caloriesBurned": 480
        },
        {
            "date": "2026-08-22",
            "distance": 6.1,
            "duration": 36,
            "heartRate": {
                "min": 140,
                "max": 175,
                "average": 159
            },
            "caloriesBurned": 395
        },
        {
            "date": "2026-08-25",
            "distance": 5.8,
            "duration": 34,
            "heartRate": {
                "min": 141,
                "max": 177,
                "average": 160
            },
            "caloriesBurned": 380
        },
        {
            "date": "2026-08-28",
            "distance": 6.7,
            "duration": 40,
            "heartRate": {
                "min": 143,
                "max": 179,
                "average": 162
            },
            "caloriesBurned": 435
        },
        {
            "date": "2026-08-31",
            "distance": 5.5,
            "duration": 32,
            "heartRate": {
                "min": 139,
                "max": 174,
                "average": 157
            },
            "caloriesBurned": 350
        },
        {
            "date": "2026-09-03",
            "distance": 7,
            "duration": 42,
            "heartRate": {
                "min": 142,
                "max": 178,
                "average": 163
            },
            "caloriesBurned": 470
        },
        {
            "date": "2026-09-06",
            "distance": 6.2,
            "duration": 37,
            "heartRate": {
                "min": 140,
                "max": 176,
                "average": 160
            },
            "caloriesBurned": 410
        },
        {
            "date": "2026-09-09",
            "distance": 5.9,
            "duration": 35,
            "heartRate": {
                "min": 141,
                "max": 177,
                "average": 159
            },
            "caloriesBurned": 390
        }
    ]
}