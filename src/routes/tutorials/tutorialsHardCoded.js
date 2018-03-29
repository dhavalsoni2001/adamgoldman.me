/* eslint-disable */
  export default [
  {
    "title": "Coming To Wholeness",
    "description": "A PRACTICAL step by step tool for non \"enlightment\"",
    "credits": "Source: I've adapted this [tool](/tools/) from Connirae's [Wholeness Process](http://andreasnlptrainings.com/wholeness/).",
    "initialState": {
      "Is": [],
      "inputExperience": "",
      "inputFeel": "",
      "inputFeelingLocation": "",
      "inputFeelingSizeShape": "",
      "inputFeelingSensationQuality": "",
      "inputILocation": "",
      "inputISizeShape": "",
      "inputISensationQuality": "",
      "inputIIntegrationDescription": "",
      "inputFeelingIntegrationDescription": ""
    },
    "mockState": {
      "Is": [
        {
          "location": "Above me, two meters",
          "sizeShape": "round small orange",
          "sensationQuality": "warm anf fuzzy"
        }
      ],
      "iCompare": "very different than before",
      "feelingCompare": "somewhat different than before",
      "inputExperience": "Fighting with father",
      "inputFeel": "Feel annoyed",
      "inputFeelingLocation": "In stomach",
      "inputFeelingSizeShape": "small brick",
      "inputFeelingSensationQuality": "vast and clear",
      "inputILocation": "Above me, two meters",
      "inputISizeShape": "round small orange",
      "inputISensationQuality": "warm anf fuzzy",
      "inputIIntegrationDescription": "omg is it the best feeling or what?",
      "inputFeelingIntegrationDescription": "I'm light as a gazelle!"
    },
    "steps": [
      {
        "title": "Background",
        "preDescriptionHtml": {
          "type": "div",
          "key": null,
          "ref": null,
          "props": {
            "children": [
              {
                "key": null,
                "ref": null,
                "props": {
                  "imgSrc": "https://scontent.fmad3-4.fna.fbcdn.net/v/t1.0-1/p50x50/22852018_10155160350728379_1394566735044658139_n.jpg?oh=57414f3649e2f9a526776e8a6be6d521&oe=5AC94334",
                  "text": "I feel like that resolved the memory even more and equipped me with a tool I can tap into in a similar situation in the future. That exercise makes me feel much more aware and accepting of myself and what's inside my head, it's incredibly helpful.",
                  "name": "Julianne Barley, cleared all Fibromyalgia symptoms",
                  "isRtl": false
                },
                "_owner": null,
                "_store": {}
              },
              {
                "key": null,
                "ref": null,
                "props": {
                  "imgSrc": "https://scontent.fmad3-4.fna.fbcdn.net/v/t1.0-1/p50x50/21761536_1549692695090122_4419204185971223288_n.jpg?oh=5196db6b63c2ebe986e404a8a2e471a7&oe=5ACD560E",
                  "text": "Man! Just completed two rounds of this WHOLENESS process and I'm FLYING! The frustration turned into a soft sensation, and I can keep on going!",
                  "name": "Tommy Gorden, hypnotist",
                  "isRtl": false
                },
                "_owner": null,
                "_store": {}
              }
            ]
          },
          "_owner": null,
          "_store": {}
        },
        "answers": [
          {
            "text": "Yes, I want to proactively go after a better life!"
          },
          {
            "text": "Makes sense to me, let's continue"
          },
          {
            "text": "I rather wait passively for life to improve"
          }
        ]
      },
      {
        "title": "Choose Experience",
        "input": {
          "placeholder": "I want to resolve the experience of ...",
          "id": "Experience"
        }
      },
      {
        "title": "Initial Feeling",
        "input": {
          "placeholder": "I feel ...",
          "id": "Feel"
        }
      },
      {
        "title": "Initial Feeling - location",
        "input": {
          "placeholder": "It’s ...",
          "id": "FeelingLocation"
        }
      },
      {
        "title": "Initial Feeling - Size & Shape",
        "input": {
          "placeholder": "It’s ...",
          "id": "FeelingSizeShape"
        }
      },
      {
        "title": "Initial Feeling - Sensation Quality",
        "input": {
          "placeholder": "It's ...",
          "id": "FeelingSensationQuality"
        }
      },
      {
        "title": "Noticing Awareness",
        "answers": [
          {
            "text": "Indeed I can"
          },
          {
            "text": "I do recognize, now what am I recognizing this \"Awareness\" for?"
          }
        ]
      },
      {
        "title": "Experiencing Practical Awareness",
        "answers": [
          {
            "text": "Yes, I'm aware of all that, and more"
          },
          {
            "text": "Yup, awareness is here, what's next?"
          }
        ]
      },
      {
        "title": "I - Location",
        "id": "Location",
        "input": {
          "placeholder": "It’s ...",
          "id": "ILocation"
        }
      },
      {
        "title": "I - Size & Shape",
        "input": {
          "placeholder": "It’s ...",
          "id": "ISizeShape"
        }
      },
      {
        "title": "I - Sensation Quality",
        "input": {
          "placeholder": "The sensation quality is ...",
          "id": "ISensationQuality"
        }
      },
      {
        "title": "I - Inviting Integration",
        "invitation": true,
        "answers": [
          {
            "text": "No",
            "goToStepByTitle": "Acknolwedging Decline"
          },
          {
            "text": "Yes",
            "goToStepByTitle": "I - Experiencing Integration"
          }
        ]
      },
      {
        "title": "Acknolwedging Decline",
        "decline": true,
        "id": "decline",
        "answers": [
          {
            "text": "Correct"
          },
          {
            "text": "Actually it does accept the invitation now"
          }
        ]
      },
      {
        "title": "I - Experiencing Integration",
        "input": {
          "placeholder": "I feel ...",
          "id": "IIntegrationDescription"
        }
      },
      {
        "title": "I - Allowing Complete Integration",
        "answers": [
          {
            "text": "I'm experiencing more relaxing ..."
          },
          {
            "text": "I'm experiencing more melting ..."
          },
          {
            "text": "I'm experiencing more dissolving ..."
          },
          {
            "text": "I feel the integration is complete ..."
          }
        ]
      },
      {
        "title": "Circling Back - Previous I - Compare",
        "answers": [
          {
            "text": "It's exactly the same as before"
          },
          {
            "text": "It's somewhat different than before"
          },
          {
            "text": "It's very different than before"
          }
        ]
      },
      {
        "title": "Circling Back - Previous I - Inviting Integration",
        "invitation": true,
        "answers": [
          {
            "text": "Yes",
            "goToStepByTitle": "I - Experiencing Integration"
          },
          {
            "text": "No",
            "goToStepByTitle": "Acknolwedging Decline"
          }
        ]
      },
      {
        "title": "Circling Back - Initial Feeling - Compare",
        "answers": [
          {
            "text": "It's exactly the same as before"
          },
          {
            "text": "It's somewhat different than before"
          },
          {
            "text": "It's very different than before"
          }
        ]
      },
      {
        "title": "Circling Back - Initial Feeling - Inviting Integration",
        "invitation": true,
        "input": {
          "placeholder": "I feel ...",
          "id": "FeelingIntegrationDescription"
        }
      },
      {
        "title": "Circling Back - Initial Context",
        "answers": [
          {
            "text": "I feel more at ease"
          },
          {
            "text": "It's more neutral"
          },
          {
            "text": "I feel more resourceful"
          },
          {
            "text": "It's better but there's still something left"
          },
          {
            "text": "It's exactly the same as before, I don't percieve any change"
          }
        ]
      },
      {
        "title": "\"Being This Way\" In The Past",
        "answers": [
          {
            "text": "I feel more at ease"
          },
          {
            "text": "It's more neutral"
          },
          {
            "text": "I feel more resourceful"
          },
          {
            "text": "It's better but there's still something left"
          },
          {
            "text": "It's exactly the same as before, I don't percieve any change"
          }
        ]
      },
      {
        "title": "\"Being This Way\" In The Future",
        "answers": [
          {
            "text": "I feel more at ease"
          },
          {
            "text": "It's more neutral"
          },
          {
            "text": "I feel more resourceful"
          },
          {
            "text": "It's better but there's still something left"
          },
          {
            "text": "It's exactly the same as before, I don't percieve any change"
          }
        ]
      },
      {
        "title": "Rejoicing Learning",
        "answers": [
          {
            "onClick": "onRestart",
            "text": "I want to do it again on the same experience!"
          },
          {
            "onClick": "onRestart",
            "text": "I want to do it again on a different experience"
          },
          {
            "key": null,
            "ref": null,
            "props": {
              "children": "I want more to experience this!"
            },
            "_owner": null,
            "_store": {}
          },
          {
            "key": null,
            "ref": null,
            "props": {
              "to": "/i-dont-charge-i-accept/",
              "children": "This is great and I want to give back",
              "onClick": null
            },
            "_owner": null,
            "_store": {}
          },
          {
            "key": null,
            "ref": null,
            "props": {
              "to": "/tools/",
              "children": "Cool! what other brain hacks can you teach me?",
              "onClick": null
            },
            "_owner": null,
            "_store": {}
          },
          {
            "text": "Thank you Adam, can I share with you my experience?",
            "onClick": "onShareWithAdam"
          }
        ]
      }
    ],
    "url": "coming-to-wholeness"
  },
  {
    "title": "Internal Dialog Scrambeler",
    "description": "Stop recurring intrusive thoughts and limiting beliefs. Perfect for \"what if's, \"I'm not good enough\", and all that lovely things we said to ourselves",
    "url": "internal-dialog-scrambeler"
  },
  {
    "title": "Loved Ones Amplifier",
    "description": "Enjoy people you like like never before",
    "url": "loved-one-amplifier"
  },
]