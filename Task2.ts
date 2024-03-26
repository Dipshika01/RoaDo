type Point = string;

interface Shipment {
    pickups: Point[];
    dropoffs: Point[];
}

interface Trip {
    pickup: Point;
    dropoff: Point;
}

function validateTrips(shipment: Shipment, trips: Trip[]): boolean {
    const wareHouse:String = 'W'
    const allPoints = [...shipment.pickups, ...shipment.dropoffs, wareHouse];
    const validTrips: Set<string> = new Set();

    for (const trip of trips) {
        // Checking if the trip points are valid points in the shipment
        if (!allPoints.includes(trip.pickup) || !allPoints.includes(trip.dropoff)) {
            return false;
        }

        // Checking if the trip has already been covered by previous trips
        const tripKey = ${trip.pickup}-${trip.dropoff};
        if (validTrips.has(tripKey)) {
            return false; // Duplicate trip
        }

        // Add the trip to the set of valid trips
        validTrips.add(tripKey);
    }

    // Check if all pickups and dropoffs are covered by the trips
    for (const pickup of shipment.pickups) {
        let found = false;
        for (const trip of trips) {
            if (trip.pickup === pickup) {
                found = true;
                break;
            }
        }
        if (!found) {
            return false; // Uncovered pickup
        }
    }

    for (const dropoff of shipment.dropoffs) {
        let found = false;
        for (const trip of trips) {
            if (trip.dropoff === dropoff) {
                found = true;
                break;
            }
        }
        if (!found) {
            return false; // Uncovered dropoff
        }
    }

    return true; // All checks passed
}

// Example usage:
const shipment: Shipment = {
    pickups: ['A', 'B'],
    dropoffs: ['C', 'D']
};

const trips: Trip[] = [
    { pickup: 'A', dropoff: 'W' },
    { pickup: 'B', dropoff: 'W' },
    { pickup: 'W', dropoff: 'C' },
    { pickup: 'W', dropoff: 'D' }
];

console.log(validateTrips(shipment, trips)); // Output: true