import Link from "next/link";

export default function ServiceContact() {
    const headingPart1 = "Let’s Us Be a Part Of Your";
    const headingPart2 = "Next Project";
    // const heading2 = "Next Project"
    return (
        <div className="serviceContact p-lg-5 p-sm-4 p-3 d-flex align-items-center">
            <div className="col-xl-8 col-md-8 contactService pl-[6rem]">
                <h2>{headingPart1}</h2>
                <h2>{headingPart2}</h2>
                {/* <h2 className="text-white">{heading2}</h2> */}
                <Link href="/contact" style={{ fontSize: "18px" }}>Contact Us</Link>
            </div>
        </div>
    )
}