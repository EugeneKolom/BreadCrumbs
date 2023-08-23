import {PlaceNavigation} from "./classes/place-nav.js"


const placeTree = {
  name: 'Earth',
  places: [
    {
      name: 'Ukraine',
      places: [
        {
          name: 'Kievskaya oblast',
          places: [
            {
              name: 'Kiev',
              places: [
                {
                  name: 'Darnitsa',
                  places: []
                },
                {
                  name: 'Pechersk',
                  places: []
                },
                {
                  name: "Podil",
                  places: []
                },
                {
                  name: "Shevchenkivskyi",
                  places: []
                },
                {
                  name: "Holosiiv",
                  places: []
                }
              ]
            }
          ],
        },
        {
          name: 'Lvivskaya oblast',
          places: [
            {
              name: 'Lviv',
              places: [],
            },
            {
              name: 'Stryi',
              places: [],
            },
          ],
        },
      ],
    },
    {
      name: 'Germany',
      places: [
        {
          name: 'Bavaria',
          places: [],
        },
        {
          name: 'NRW',
          places: [
            {
              name: 'Dusseldorf',
              places: [],
            },
            {
              name: 'Essen',
              places: [],
            },
            {
              name: 'Mannheim',
              places: [],
            },
            {
              name: 'Langenfeld',
              places: [],
            }
          ],
        },
        {
          name: 'Hesse',
          places: [],
        },
      ],
    },
  ]
}

console.log(placeTree)

const placeNavigation = new PlaceNavigation(placeTree)

placeNavigation.appendToParent(container)



