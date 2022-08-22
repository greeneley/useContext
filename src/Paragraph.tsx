
import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

export function Paragraph() {
    const context = useContext(ThemeContext);

    return (
        <p className={context.theme}> Long Lanh lap lanh anh sao may</p>
    )
}