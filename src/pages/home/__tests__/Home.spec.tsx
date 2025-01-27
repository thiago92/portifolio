import { render } from "@testing-library/react"
import Home from "../Index"

describe("test Home", () => {
    it("teste render", () => {
        render(<Home />)
        expect(1).toBe(1)
    })
})