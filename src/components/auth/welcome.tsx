'use client'

import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card"
import '../ui/TypeWriter.css'

const Welcome = () => {
    return (
        <Card className={`w-1/2 h-2/4 flex flex-col justify-center items-center bg-transparent border-none text-white`}>
            <CardTitle className={`p-3 font-brenet-outline`}>
                Welcome to CodeExplore
            </CardTitle>
            <CardDescription className={`text-center font-brenet-regular text-violet-400 overflow-hidden border-r-2 border-orange-500 mx-auto tracking-tighter animate-typing`}>
                The ultimate gamified platform for coding and education! Dive into interactive challenges, explore coding puzzles, and unlock achievements as you enhance your programming skills. Whether you're a beginner or an experienced coder, CodeXplore offers a fun and engaging way to learn and grow.
            </CardDescription>
        </Card>
    )
}

export default Welcome