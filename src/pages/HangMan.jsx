import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Figure from "../components/Hangman/Figure";
import Header from "../components/Hangman/Header";
import Notification from "../components/Hangman/Notification";
import Popup from "../components/Hangman/Popup";
import Work from "../components/Hangman/Work";
import WrongLetters from "../components/Hangman/WrongLetters ";
import Helmet from "../components/Helmet";

const data = ["ronaldo", "messi", "neymar"];
export const checkWin = (word, wrong, select) => {
    let check = "win";
    select.split("").forEach((element) => {
        if (!word.includes(element)) {
            check = "";
        }
    });

    if (wrong.length === 6) {
        check = "lose";
    }
    return check;
};

export function show(setter) {
    setter(true);
    setTimeout(() => {
        setter(false);
    }, 2000);
}

let selectedWord = data[Math.floor(Math.random() * data.length)];

const HangMan = () => {
    const [playable, setPlayable] = useState(true);
    const [correctLetters, setCorrectLetters] = useState([]);
    const [wrongLetters, setWrongLetters] = useState([]);
    const [showNotification, setShowNotification] = useState(false);
    useEffect(() => {
        const handleKeyDown = (e) => {
            const { key, keyCode } = e;
            if (playable && keyCode >= 65 && keyCode <= 90) {
                const letter = key.toLowerCase();
                if (selectedWord.includes(letter)) {
                    if (!correctLetters.includes(letter)) {
                        setCorrectLetters((currentLetters) => [...currentLetters, letter]);
                    } else show(setShowNotification);
                } else {
                    if (!wrongLetters.includes(letter)) {
                        setWrongLetters((currentLetters) => {
                            return [...wrongLetters, letter];
                        });
                    } else show(setShowNotification);
                }
            }
        };
        document.addEventListener("keydown", handleKeyDown);

        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [wrongLetters, correctLetters, playable]);
    const playAgain = () => {
        setPlayable(true);
        setCorrectLetters([]);
        setWrongLetters([]);
        selectedWord = data[Math.floor(Math.random() * data.length)];
    };

    return (
        <Helmet title="Hangman">
            <div className="bg-gray-900 h-screen relative">
                <div className="absolute top-6 left-4">
                    <Link to={"/home"}>
                        <button className=" p-2 pl-4 pr-4 text-white rounded-full border border-slate-300">
                            Back
                        </button>
                    </Link>
                </div>
                <div className="container m-auto pt-16">
                    <Header></Header>
                    <div className="flex justify-center mt-12 w-auto">
                        <Figure wrongLetters={wrongLetters} />
                        <WrongLetters wrongLetters={wrongLetters} />
                    </div>
                    <Work correctLetters={correctLetters} selectedWord={selectedWord} />
                </div>
                <Popup
                    correctLetters={correctLetters}
                    selectedWord={selectedWord}
                    playAgain={playAgain}
                    setPlayable={setPlayable}
                    wrongLetters={wrongLetters}
                />
                <Notification showNotification={showNotification} />
            </div>
        </Helmet>
    );
};

export default HangMan;
