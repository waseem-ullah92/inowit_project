import { FaArrowLeftLong } from "react-icons/fa6";
import Router from "next/router";

export default function BackButton() {
    return (
        <button className="backBtn" onClick={() => Router.back()}>
            <FaArrowLeftLong /> <span className="ms-3">BACK TO ARCHIVE</span>
        </button>
    )
}