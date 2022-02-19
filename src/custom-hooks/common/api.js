export const getPosts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {
                    id: 1,
                    title: "Neeraj Won Gold in Olympics.",
                },
                {
                    id: 2,
                    title: "12th results announced. Check your results here.",
                },
                {
                    id: 3,
                    title: "End of Tokyo Olympics.",
                },
                {
                    id: 4,
                    title: "Pegasus Snooping.",
                },
                {
                    id: 5,
                    title: "defi: 600 million of crypto got stolen by hackers.",
                },
            ])
        }, 3000)
    })
}