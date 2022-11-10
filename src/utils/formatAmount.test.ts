import { formatAmount, getRawAmount } from "./formatAmount"

describe("format amount", () => {
    it("should format the number to the BRL currency value", () => {
        expect(formatAmount("100")).toBe("R$ 100,00");
    })

    it("should get the raw value of the amount", () => {
        expect(getRawAmount("R$ 100,00")).toBe(100)
    })
})