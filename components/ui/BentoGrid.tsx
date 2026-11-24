'use client';

import dynamic from "next/dynamic";
import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

const GlobeDemo = dynamic(() => import("./GridGlobe").then((m) => m.GlobeDemo), {
    ssr: false,
});
const Lottie = dynamic(() => import("react-lottie"), {
    ssr: false,
});

const techStack = [
    "Spatial Data Science",
    "Python",
    "GeoAI",
    "ArcGIS APIs",
    "Machine Learning",
    "BIM",
];

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    id,
    img,
    imgClassName,
    titleClassName,
    spareImg,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    id: number;
    img?: string;
    imgClassName?: string;
    titleClassName?: string;
    spareImg: string;
}) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        const text = "maliawan.gis@gmail.com";
        navigator.clipboard.writeText(text);
        setCopied(true);
    };

    return (
        <div
            className={cn(
                "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
                className
            )}
            style={{
                background: "rgb(4,7,29)",
                backgroundColor:
                    "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
        >
            {/* add img divs */}
            <div className={`${id === 6 && "flex justify-center"} h-full`}>
                <div className="w-full h-full absolute">
                    {img && (
                        <img
                            src={img}
                            alt={img}
                            className={cn(imgClassName, "object-cover object-center ")}
                        />
                    )}
                </div>
                <div
                    className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
                        } `}
                >
                    {spareImg && (
                        <img
                            src={spareImg}
                            alt={spareImg}
                            className="object-cover object-center w-full h-full"
                        />
                    )}
                </div>

                {id === 6 && (
                    <BackgroundGradientAnimation>
                    </BackgroundGradientAnimation>
                )}
                <div className={cn(
                    titleClassName,
                    // tech stack box: heading top-left, skills below it
                    id === 3 && "justify-start",
                    'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col p-5 lg:p-10'
                )}>
                    <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
                        {description}
                    </div>
                    <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
                        {title}
                    </div>

                    {id === 2 && <GlobeDemo />}

                    {id === 3 && (
                        <div className="mt-4 lg:mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-2 lg:gap-3 w-full z-10">
                            {techStack.map((item) => (
                                <span
                                    key={item}
                                    className="py-2 px-3 text-xs lg:text-sm rounded-lg text-center bg-[#10132E]"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    )}

                    {id === 6 && (
                        <div className="mt-5 relative">
                            {copied && (
                                <div className="absolute -bottom-5 right-0 pointer-events-none">
                                    <Lottie
                                        eventListeners={[]}
                                        options={{
                                            loop: copied,
                                            autoplay: copied,
                                            animationData: animationData,
                                            rendererSettings: {
                                                preserveAspectRatio: "xMidYMid slice",
                                            },
                                        }}
                                        height={200}
                                        width={200}
                                    />
                                </div>
                            )}
                            <MagicButton
                                title={copied ? "Email Copied!" : "Copy my email"}
                                icon={<IoCopyOutline />}
                                position="left"
                                otherClasses="!bg-[#161a31]"
                                handleClick={handleCopy}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};