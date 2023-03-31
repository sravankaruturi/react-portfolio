
function AboutMeRowValue({ answer }) {
    return (
        <div className="text-xl px-20 py-2 text-white self-center">
            {answer}
        </div>
    );
}

function AboutMeRowKey({ question }) {
    return (
        <div className="text-2xl py-2 text-white self-center">
            {question}
        </div>
    );
}

function AboutMeRow({ question, answer }) {
    return (
        <div className="py-2">
            <AboutMeRowKey question={question} />
            <AboutMeRowValue answer={answer} />
        </div>
    );
}

function About() {
    return (
        <div className='text-center p-10 md:px-20 lg:px-30 bg-slate-800' >
            <h1 className="text-4xl py-2 text-white font-medium">
                About Me
            </h1>
            <div className='py-2'>

                <AboutMeRow
                    question={
                        "What do I do?"
                    }
                    answer={
                        "I'm a senior software engineer at Osmo/Byjus. I work on building Games and Game systems for Game Devlopers."
                    }
                />

                <AboutMeRow
                    question={
                        "Where did I study?"
                    }
                    answer={
                        "I completed my master's in Game Design and Development at Rochester Institute of Technology and have been working in the industry since 2019."
                    }
                />

                <AboutMeRow
                    question={
                        "Can I look at some of your work?"
                    }
                    answer={
                        "Listed above are some of the projects I worked on in the past. Check out my portfolio page for more projects"
                    }
                />

                <AboutMeRow
                    question={
                        "Hobbies and Interests?"
                    }
                    answer={
                        "I like to program Game Engines in my free time and play Dota2 :). I'm picking up React and React Native recently and building this portfolio from the ground up is part of that process."
                    }
                />

                <AboutMeRow
                    question={
                        "Are you looking for oppurtunities"
                    }
                    answer={
                        "I am looking for new challenges to take on in my career, so if you have any openings that are a good fit, feel free to reach out to me in one of the ways below."
                    }
                />
            </div>
        </div>
    );
}

export default About;