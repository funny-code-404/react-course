import {
  getFormatedPath,
  getFormatedName,
  API,
  baseUrl,
  defaultConfig,
} from "./index";

const config = { ...defaultConfig, config: {} };

global.fetch = jest.fn();

describe("API handler", () => {
  it("getFormatedPath", () => {
    let path = getFormatedPath(`${baseUrl}/login`);
    expect(path).toBe("/login");
    path = getFormatedPath(path);
    expect(path).toBe("/login");
  });
  it("getFormatedName", () => {
    let path = getFormatedName(`${baseUrl}/item/test`);
    expect(path).toBe("test");
    path = getFormatedName("/item/next_test");
    expect(path).toBe("next test");
  });
  it("API", async () => {
    await API.get("/test");
    expect(fetch).toHaveBeenCalledWith("/test", config);
    await API.request("/test", { test: "test" });
    expect(fetch).toHaveBeenCalledWith("/test", {
      ...config,
      config: { test: "test" },
    });
  });
});
