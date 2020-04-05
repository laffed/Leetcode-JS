//Implement a function meetingPlanner that given the availability, slotsA and slotsB, of two people and a meeting duration dur, returns the earliest time slot that works for both of them and is of duration dur. If there is no common time slot that satisfies the duration requirement, return an empty array.
//Each person’s availability is represented by an array of pairs. Each pair is an epoch array of size two. The first epoch in a pair represents the start time of a slot. The second epoch is the end time of that slot. The input variable dur is a positive integer that represents the duration of a meeting in seconds. The output is also a pair represented by an epoch array of size two.
//In your implementation assume that the time slots in a person’s availability are disjointed, i.e, time slots in a person’s availability don’t overlap. Further assume that the slots are sorted by slots’ start time.
//input:  slotsA = [[10, 50], [60, 120], [140, 210]]
//        slotsB = [[0, 15], [60, 70]]
//        dur = 8
//output: [60, 68]

//input:  slotsA = [[10, 50], [60, 120], [140, 210]]
//        slotsB = [[0, 15], [60, 70]]
//        dur = 12
//output: [] # since there is no common slot whose duration is 12


function meetingPlanner(slotsA, slotsB, dur) {
    //pointer for each slot
    let i = 0; 
    let j = 0;

    while (i < slotsA.length && j < slotsB.length) {
        let max = Math.max(slotsA[i][0], slotsB[j][0]);
        let min = Math.min(slotsA[i][1], slotsB[j][1]);

        if (min - max >= dur) {
            return ([max, max + dur]);
        } else {
            if (slotsA[i][1] > slotsB[j][1]) {
                j++;
            } else {
                i++;
            }
        }
    }
    return [];
}


let a = [[10,50], [60,120],[140,210]]
let b = [[0,15],[60,70]]
console.log(meetingPlanner(a, b, 8))
