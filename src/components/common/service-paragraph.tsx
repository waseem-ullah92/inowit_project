export default function ServiceParagraph({ text, isCenter, classes, textWhite, isHeight }: { text: string, isCenter?: boolean, classes?: any, textWhite?: boolean, isHeight?: boolean }) {
    const alignment = isCenter ? "center" : "left";
    const height = isHeight ? "2.3" : "1.5";
    return (
        <p className={`serviceParagraph ${classes && "mt-3"} ${textWhite && "text-white"} `} style={{ textAlign: alignment, lineHeight: height }}>{text}</p>
    )
}