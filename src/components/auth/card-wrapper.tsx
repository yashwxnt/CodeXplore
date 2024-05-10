'use client';

import { Children } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import AuthHeader from "./auth-header";
import BackButton from "./back-button";
import ForgotPassword from "./forgotpassword/forgotpassword";

interface CardWrapperProps {
    label: string;
    title: string;
    backButtonHref: string;
    backButtonLabel: string;
    forgotPasswordHref: string; // Added new prop for forgot password link
    forgotPasswordLabel: string; // Added new prop for forgot password label
    children: React.ReactNode;
}

const CardWrapper = ({
    label,
    title,
    backButtonHref,
    backButtonLabel,
    forgotPasswordHref,
    forgotPasswordLabel,
    children,
}: CardWrapperProps) => {
    return (
        <Card className="xl:w-1/4 md:w-1/2 shadow-md">
            <CardHeader>
                <AuthHeader label={label} title={title} />
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            <CardFooter>
                <BackButton label={backButtonLabel} href={backButtonHref} />
                <ForgotPassword label={forgotPasswordLabel} href={forgotPasswordHref} />
               
            </CardFooter>
        </Card>
    );
};

export default CardWrapper;

  