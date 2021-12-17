import { createInterface } from "readline"
import { Stepper } from "./stepper"

/**
 *                 PARENTAL ADVISORY
 *                       PG-14
 *
 * This story is isn't for the faint hearted and
 * might disturb you in more ways than you may think
 * (it also depends on your blood alcohol level)
 *
 *
 * The following occured on a possibly sunny day some time
 * in 2021 on a different plane of abstraction.
 *
 *
 * Context:
 * - We created a service called OLAF ⛄️
 * - Olaf sends and receives Kafka messages
 * - Kafka can send any kind of data
 * - But if you we're actually going to do this
 *   it would result in absolute chaos. So no sane
 *   person would ever think of doing that....
 * - confluentic offers a useful thing called
 *   the schema registry *HBO sound in background*
 * - This registry stores the structure of messages
 * - It enables us to send highly compressed data
 *   instead of e.g. plain json
 * - Possible implementations of this compression are
 *   PROTOBUF and AVRO
 * - Both of those will send structured binary data
 *   that can be en-/decoded using the stored schema
 * - We use nestjs which offers kafka integration
 * - The kafka integration executes a `.toString('utf-8')`
 *   on all incoming data before passing the data to us....
 * - We really needed the binary data to decode properly
 *   ....
 *
 * This is how I spend way too many hours trying the impossible...
 *
 *
 *
 *                         DON'T PANIC
 *                  THIS IS ONLY A SIMULATION
 *
 *
 *
 */

// we have binary data arriving on kafka
const HELLO = [0x48, 0x65, 0x6c, 0x6c, 0x6f] // length: 5
const BINARY_DATA_EXAMPLE_1 = [0xc0, 0x80, 0x05, 0x07] // length: 4
const BINARY_DATA_EXAMPLE_2 = [0x7f, 0xff, 0xff, 0xff] // length: 4
const WORLD = [0x57, 0x6f, 0x72, 0x6c, 0x64, 0x21] // length: 6

const stepper = new Stepper()

//
//
//
//
//
//
stepper.addStep((context) => {
    //
    context.inputData = Buffer.from([...HELLO, ...BINARY_DATA_EXAMPLE_1, ...BINARY_DATA_EXAMPLE_2, ...WORLD])
    //
}, "This is the story of some random bytes")
//
//
//
//
//
//
// ##########################
// STOP: What do you expect?
// ##########################
stepper.addStep(({ inputData }) => {
    //
    console.log("Input Buffer:", inputData)
    console.log("Input Buffer Length:", inputData.length)
    //
}, "The bytes lived in a happy place called *The Buffer*, where all their needs were fulfilled.")
//
//
//
//
//
//
stepper.addStep(
    (context) => {
        // the used library does this:
        context.stringRepresentation = context.inputData.toString("utf-8")
    },
    [
        "One day an encoding called Jutiev came by and said:",
        `"Hey bytes! Why don't you come along and build a string. It's going to be fun."`,
        " .  .  .",
    ]
)
//
//
//
//
//
//
// ##########################
// STOP:
// - What do you expect?
// - How long should the output be?
// ##########################
stepper.addStep(
    ({ stringRepresentation }) => {
        //
        console.log("Let's count the characters...")
        console.log(`         11111111112`)
        console.log(`12345678901234567890`)
        console.log(stringRepresentation)
        //
    },
    [
        `The bytes thought: "Well, we don't have anything else to do, so we might as well..."`,
        `... but little did they know, that Jutiev was actually the devil in disguise.`,
        "So, shorty after building a string they counted their peers and found that something was off.",
    ]
)
//
//
//
//
//
//

stepper.addStep(
    ({ stringRepresentation }) => {
        //
        console.log(`actual length: ${stringRepresentation.length}`)
        //
    },
    ["They counted and counted again.", "But the numbers simply didn't add up."]
)
//
//
//
//
//
//
// our decoder requires the data as buffer -> convert back
stepper.addStep(
    (context) => {
        //
        context.outData = Buffer.from(context.stringRepresentation)
        //
    },
    [
        `It dawned on our little bytes that Jutiev had cast a dark spell upon them`,
        `and - feverishly - they attempted to undo the damage Jutiev had done.`,
    ]
)
//
//
//
//
//
//
// ##########################
// STOP:
// - What do you expect?
// - How long should the output be?
// ##########################
stepper.addStep(({ outData }) => {
    //
    console.log("Output Buffer:", outData)
    console.log(`Length after conversion back to bytes: ${outData.length}`)
    //
}, "But - what is happeing here? - after undoing Jutiev's spell, their count became even more absurd.")
//
//
//
//
//
//
stepper.addStep(({ inputData, outData }) => {
    //
    console.log("Output Buffer:", outData)
    console.log(`Difference in length: ${outData.length - inputData.length}`)
    //
}, "Their total number had increased by quite a lot.")
//
//
//
//
//
//
stepper.addStep(({ inputData, outData }) => {
    //
    console.log(`Are input and output of the same length?`, inputData.byteLength === outData.byteLength)
    console.log(`Is the data equal?`, inputData.compare(outData) === 0)
    //
}, "They found Jutiev had changed them at their core, and they had to figure out what it was.")
//
//
//
//
//
//
stepper.addStep(
    ({ inputData, outData }: { inputData: Buffer; outData: Buffer }) => {
        //
        const WHATS_THIS = "efbfbd"
        const hexString = outData.toString("hex")
        console.log(inputData.toString("hex")) // show original input
        console.log(hexString) // show output after back and forth conversion
        //
    },
    [
        "They tried hexes and curses and,",
        "at long last, they found the culprits in their midst,",
        "where once their friends had been.",
    ]
)
//
//
//
//
//
//
stepper.addStep(
    ({ inputData, outData }: { inputData: Buffer; outData: Buffer }) => {
        //
        const WHATS_THIS = "efbfbd"
        const hexString = outData.toString("hex")
        console.log(inputData.toString("hex")) // show original input
        console.log(hexString.split(WHATS_THIS).join("  ")) // show that data was lost
        //
    },
    [
        "They mourned for their friends for a full cycle of the Sipiju and then",
        "realized that they had to move on - and so they did.",
    ]
)
//
//
//
//
//
//
stepper.addStep(() => {}, [
    "And if Jutiev did no appear again...",
    "",
    "... they may still evade the garbage collector today.",
    "",
    "In loving memory of 0xc0800 and 0xffffff.",
    "                  May they rest in peace.",
    "",
    "",
    "On a sidenote:",
    `If you ever see this character ${Buffer.from([0xef, 0xbf, 0xbd]).toString("utf-8")}`,
    `your utf-8 conversion is telling you that your data isn't really utf`,
    "and you fucked up ...                                       ... hard!",
])
//
//
// 0xef, 0xbf, 0xbd is actually called >> REPLACEMENT CHARACTER <<< and
// it will replace all the characters that aren't utf compliant.
// This also means that a utf-8 conversion irreversibly mutates your input.
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// The fix you ask?
// Well, let's just say I wasn't a nestjs contributor before,
//                                            ...but now I am ;-)
//
//
//

async function runner() {
    const rl = createInterface({ input: process.stdin, output: process.stdout })
    while (
        await new Promise((resolve) => {
            rl.question("Hit <RETURN> to continue", () => {
                resolve(stepper.runStep())
            })
        })
    ) {}
    rl.close()
}
runner()

// async function testRunner() {
//     while (
//         await new Promise((resolve) => {
//             resolve(stepper.runStep())
//         })
//     ) {}
// }
// testRunner()
