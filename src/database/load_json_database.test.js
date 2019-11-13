const { City, Weather } = require("./load_json_database");

describe("LoadJsonDatabase", () => {
  it("City Shold not be null/undefined/false", () => {
    expect(City).not.toBeNull();
    expect(City).not.toBeUndefined();
    expect(City).not.toBeFalsy();
  });

  it("Weather Shold not be null/undefined/false", () => {
    expect(Weather).not.toBeNull();
    expect(Weather).not.toBeUndefined();
    expect(Weather).not.toBeFalsy();
  });
});
