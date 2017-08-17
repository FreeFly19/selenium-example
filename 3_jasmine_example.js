describe("Node.js arithmetic exam", function () {
    it("Plus", function () {
        expect(6+4).toBeGreaterThan(4);
        expect(6+4).toBeGreaterThan(6);

        expect(3+6).toBeLessThanOrEqual(100);
        expect(5+6).toBe(11);

        expect(5+"6").toBe(11);
        expect(2 + 5).toContain();
    });

    it("Multiplication", () => {
        expect(3 * 5).toBeGreaterThanOrEqual(15);

        expect(3 * "five").toBeNaN();
    });
});
