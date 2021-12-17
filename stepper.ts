export type StepFunction = (context: any) => void

export class Stepper {
    private steps: StepFunction[] = []
    private stepNames: (string | string[])[] = []
    private currentStep = 0
    private context: any = {}

    addStep(fn: StepFunction, name: string | string[] = "unnamed step") {
        this.steps.push(fn)
        this.stepNames.push(name)
    }

    rewind() {
        this.currentStep = 0
        this.context = {}
    }

    runStep() {
        if (this.steps.length > this.currentStep) {
            const headline = [
                `CHAPTER ${this.currentStep + 1}`,
                ...(Array.isArray(this.stepNames[this.currentStep])
                    ? this.stepNames[this.currentStep]
                    : [this.stepNames[this.currentStep]]),
            ]
            const maxLength = Math.max(...headline.map((line) => line.length))
            const delimiter = `+${new Array(maxLength + 2).fill("-").join("")}+`
            console.log(delimiter)
            headline.forEach((line) =>
                console.log(`| ${line}${new Array(maxLength - line.length).fill(" ").join("")} |`)
            )
            console.log(delimiter)
            const step: StepFunction = this.steps[this.currentStep]
            step(this.context)
            const chapterEnd = new Array(maxLength).fill(undefined).map(() => " ")
            chapterEnd[Math.floor(chapterEnd.length / 2)] = "⬧"
            console.log()
            console.log(chapterEnd.join(""))
            console.log()
            this.currentStep++
            return true
        } else {
            console.log(`THE END`)
            return false
        }
    }
}
