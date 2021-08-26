import * as React from "react";

function SunIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 330 330"
            {...props}
        >
            <path
                d="M321.708 151.584l-56.326-28.164 19.915-59.743c1.797-5.39.394-11.333-3.624-15.35s-9.964-5.42-15.35-3.624L206.579 64.62 178.416 8.292a14.998 14.998 0 00-26.832 0L123.421 64.62 63.677 44.704a14.999 14.999 0 00-18.974 18.974l19.914 59.743-56.325 28.163a14.998 14.998 0 000 26.833l56.325 28.163-19.914 59.743a14.999 14.999 0 0018.974 18.974l59.744-19.913 28.163 56.325a14.999 14.999 0 0026.832 0l28.163-56.325 59.744 19.913a15 15 0 0018.974-18.974l-19.915-59.743 56.326-28.163a15.002 15.002 0 000-26.833z" //nosonar
                fill="#ffb65b"
            />
            <path
                d="M321.708 151.584l-56.326-28.164 19.915-59.743c1.797-5.39.394-11.333-3.624-15.35s-9.964-5.42-15.35-3.624L206.579 64.62 178.416 8.292A14.998 14.998 0 00165 0v330c5.682 0 10.876-3.21 13.416-8.291l28.163-56.325 59.744 19.913a15 15 0 0018.974-18.974l-19.915-59.743 56.326-28.163a15.002 15.002 0 000-26.833z" //nosonar
                fill="#ffa828"
            />
            <path
                d="M165 75c-49.627 0-90 40.374-90 90 0 49.627 40.373 90 90 90 49.625 0 90-40.373 90-90 0-49.626-40.375-90-90-90z" //nosonar
                fill="#ffde51"
            />
            <path
                d="M165 75v180c49.625 0 90-40.373 90-90 0-49.626-40.375-90-90-90z" //nosonar
                fill="#ffd400"
            />
        </svg>
    );
}

export default SunIcon;
