// MAIL DELIVERY ROBOT

const roads = [
  "Alice's House-Bob's House",
  "Alice's House-Cabin",
  "Alice's House-Post Office",
  "Bob's House-Town Hall",
  "Daria's House-Ernie's House",
  "Daria's House-Town Hall",
  "Ernie's House-Grete's House",
  "Grete's House-Farm",
  "Grete's House-Shop",
  "Marketplace-Farm",
  "Marketplace-Post Office",
  "Marketplace-Shop",
  "Marketplace-Town Hall",
  "Shop-Town Hall",
];

function buildGraph(edges) {
  let graph = Object.create(null);

  function addEdge(from, to) {
    if (from in graph) {
      graph[from].push(to);
    } else {
      graph[from] = [to];
    }
  }
  for (let [from, to] of edges.map((r) => r.split("-"))) {
    addEdge(from, to);
    addEdge(to, from);
  }
  return graph;
}
const roadGraph = buildGraph(roads);

console.log(roadGraph);

class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }
  move(destination) {
    if (!roadGraph[this.place].includes(destination)) {
      return this;
    } else {
      let parcels = this.parcels
        .map((p) => {
          if (p.place != this.place) return p;
          return { place: destination, address: p.address };
        })
        .filter((p) => p.place != p.address);

      return new VillageState(destination, parcels);
    }
  }
}

let first = new VillageState("Post Office", [
  { place: "Post Office", address: "Alice's House" },
]);
// console.log(first); // The actual instamce created
// VillageState {
//   place: 'Post Office',
//   parcels: [ { place: 'Post Office', address: "Alice's House" } ]
// }

let next = first.move("Alice's House");
// console.log(next.place);
// → it shows that ok am already at Alice's House
// console.log(next.parcels);
// → it shows that am done delivering hence -> []
// console.log(first.place);
// →  This just shows that the original class is not being changed hence it shows "Post Office"

// TASK
/* 1. decide which point to go next
 2. finish task when all parcels have been delivered
 3.  */

//  PERSISTENT DATA
// I usually prefer to just tell people that a given object shouldn’t be messed with and hope they remember it

// SIMULATION

function runRobot(state, robot, memory) {
  for (let turn = 0; ; turn++) {
    if (state.parcels.length == 0) {
      console.log(`Done in ${turn} turns`);
      break;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    console.log(`Moved to ${action.direction}`);
  }
}

function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}
function randomRobot(state) {
  return { direction: randomPick(roadGraph[state.place]) };
}

// CREATE A NEW STATIC STATE
VillageState.random = function (parcelCount = 5) {
  let parcels = [];
  for (let i = 0; i < parcelCount; i++) {
    let address = randomPick(Object.keys(roadGraph)); //5
    let place;
    do {
      place = randomPick(Object.keys(roadGraph));
    } while (place == address);
    parcels.push({ place, address });
  }
  return new VillageState("Post Office", parcels);
};

let vilage = VillageState.random();

// The mail Trucks Route

// console.log(vilage);

const mailRoute = [
  "Alice's House",
  "Cabin",
  "Alice's House",
  "Bob's House",
  "Town Hall",
  "Daria's House",
  "Ernie's House",
  "Grete's House",
  "Shop",
  "Grete's House",
  "Farm",
  "Marketplace",
  "Post Office",
];

function routeRobot(state, memory) {
  if (memory.length == 0) {
    memory = mailRoute;
    console.log(memory);
  }
  return { direction: memory[0], memory: memory.slice(1) };
}

// runRobot(vilage, randomRobot);

// The mail Trucks Route

function findRoute(graph, from, to) {
  let work = [{ at: from, route: [] }];
  for (let i = 0; i < work.length; i++) {
    let { at, route } = work[i];
    for (let place of graph[at]) {
      if (place == to) return route.concat(place);
      if (!work.some((w) => w.at == place)) {
        work.push({ at: place, route: route.concat(place) });
      }
    }
  }
}

/* Summary:
The function uses a breadth-first search (BFS) algorithm to explore the graph. It starts from the from location and tries all possible connections. If it finds the destination (to), it returns the route leading there.
The work array acts as a queue that stores places yet to be explored, along with the path taken so far to reach them. The function avoids cycles by making sure it doesn't visit the same place more than once. */

// console.log(findRoute(roadGraph, "Cabin", "Town Hall"));

// fINAL ROBOT
function goalOrientedRobot({ place, parcels }, route) {
  if (route.length == 0) {
    let parcel = parcels[0];
    if (parcel.place != place) {
      route = findRoute(roadGraph, place, parcel.place);
    } else {
      route = findRoute(roadGraph, place, parcel.address);
    }
  }
  return { direction: route[0], memory: route.slice(1) };
}

// EXCERCISES

const countSteps = (state, robot, memory) => {
  for (let steps = 0; ; steps++) {
    if (state.parcels.length == 0) return steps;
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
  }
};

const compareRobots = (robot1, memory1, robot2, memory2) => {
  let total1 = 0,
    total2 = 0;
  for (let i = 0; i < 100; i++) {
    let state = VillageState.random();
    total1 += countSteps(state, robot1, memory1);
    total2 += countSteps(state, robot2, memory2);
  }
  console.log(`Robot 1 needed ${total1 / 100} steps per task`, total1);
  console.log(`Robot 2 needed ${total2 / 100}`, total2);
};

// compareRobots(routeRobot, [], goalOrientedRobot, []);

const fasterRobot = ({ place, parcels }, route) => {
  if (route.length === 0) {
    // Find the parcel closest to the current location
    let closestParcel = parcels.reduce((closest, parcel) => {
      let currentDist = findRoute(roadGraph, place, parcel.place).length;
      let closestDist = findRoute(roadGraph, place, closest.place).length;
      return currentDist < closestDist ? parcel : closest;
    });

    // Set the route based on the closest parcel
    route =
      closestParcel.place != place
        ? findRoute(roadGraph, place, closestParcel.place)
        : findRoute(roadGraph, place, closestParcel.address);
  }
  return { direction: route[0], memory: route.slice(1) };
};

function lazyRobot({ place, parcels }, route) {
  if (route.length == 0) {
    // Describe a route for every parcel
    let routes = parcels.map((parcel) => {
      if (parcel.place != place) {
        return {
          route: findRoute(roadGraph, place, parcel.place),
          pickUp: true,
        };
      } else {
        return {
          route: findRoute(roadGraph, place, parcel.address),
          pickUp: false,
        };
      }
    });

    // This determines the precedence a route gets when choosing.
    // Route length counts negatively, routes that pick up a package
    // get a small bonus.
    function score({ route, pickUp }) {
      return (pickUp ? 0.5 : 0) - route.length;
    }
    route = routes.reduce((a, b) => (score(a) > score(b) ? a : b)).route;
  }

  return { direction: route[0], memory: route.slice(1) };
}

compareRobots(lazyRobot, [], fasterRobot, []);
