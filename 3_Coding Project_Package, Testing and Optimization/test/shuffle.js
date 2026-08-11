import { expect } from "chai";
import { shuffle } from "../src/shuffle.js";

describe("shuffle", () => {
  it("returns a new array with the same items in a different order", () => {
    const cards = [1, 2, 3, 4, 5];
    const result = shuffle(cards);

    expect(result).to.be.an("array");
    expect(result).to.have.length(cards.length);
    expect(result).to.have.members(cards);
    expect(result).to.not.deep.equal(cards);
  });

  it("returns an empty array when given an empty array", () => {
    const cards = [];
    const result = shuffle(cards);

    expect(result).to.deep.equal([]);
  });
});


