// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius() cipher", () => {
  it("should translate both i and j to 42 when encoding", () => {
    const actual = polybius("jigsaw", true);
    const expected = "424222341125";
    expect(actual).to.equal(expected);
  });
  it("should translate 42 to i/j when decoding", () => {
    const actual = polybius("424222341125", false);
    const expected = "i/ji/jgsaw";
    expect(actual).to.equal(expected);
  });
  it("it ignores capital letters", () => {
    const actual = polybius("Jigsaw", true);
    const expected = "424222341125";
    expect(actual).to.equal(expected);
  });
  it("should maintain spaces in messages", () => {
    const actual = polybius("Continue spaces", true);
    const expected = "3143334442335451 345311315134";
    expect(actual).to.equal(expected);
  });
});