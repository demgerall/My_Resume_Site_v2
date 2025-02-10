import React, { useEffect, useState } from 'react';

interface TextTyperProps {
    text: string;
    interval: number;
    timeout?: number;
}

export const TextTypier = (props: TextTyperProps) => {
    const { text = '', interval = 100, timeout = 0 } = props;

    const [typedText, setTypedText] = useState('');

    const typingRender = (text: string, interval: number) => {
        let localTypingIndex = 0;
        let localTyping = '';

        if (text) {
            let printer = setInterval(() => {
                if (localTypingIndex < text.length) {
                    setTypedText((localTyping += text[localTypingIndex]));
                    localTypingIndex += 1;
                } else {
                    localTypingIndex = 0;
                    localTyping = '';
                    clearInterval(printer);
                }
            }, interval);
        }
    };

    useEffect(() => {
        setTimeout(() => {
            typingRender(text, interval);
        }, timeout);
    }, [text, interval]);

    return <span>{typedText}</span>;
};
