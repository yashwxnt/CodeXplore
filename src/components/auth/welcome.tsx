'use client'

import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card"

const Welcome = () => {
    return (
        <Card className={`w-1/2 h-2/4 flex flex-col justify-center items-center bg-transparent border-none`}>
            <CardTitle className={`p-3`}>
                Welcome
            </CardTitle>
            <CardDescription className={`text-center`}>
                Welcome to our platform. Please sign in or sign up to continue.
            </CardDescription>
        </Card>
    )
}

export default Welcome