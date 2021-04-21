import {
  getResourcesRequested,
  getCivilizationsRequested,
  getStructuresRequested,
  getTechnologiesRequested,
  getUnitsRequested,
} from "./actions";
import { baseUrl } from "../api";

describe("ACTIONS", () => {
  describe("getResourcesRequested", () => {
    it("should create action", () => {
      const data = {
        civilizations: `${baseUrl}/civilizations`,
        structures: `${baseUrl}/structures`,
        technologies: `${baseUrl}/technologies`,
        units: `${baseUrl}/units`,
      };
      const expectedAction = {
        type: "GET_RESOURCES_REQUESTED",
        payload: data,
      };

      expect(getResourcesRequested(data)).toEqual(expectedAction);
    });
  });

  describe("getCivilizationsRequested", () => {
    it("sholud create action", () => {
      const data = [{ id: 0, name: "Civilization" }];
      const expectedAction = {
        type: "GET_CIVILIZATIONS_REQUESTED",
        payload: data,
      };

      expect(getCivilizationsRequested(data)).toEqual(expectedAction);
    });
  });

  describe("getStructuresRequested", () => {
    it("sholud create action", () => {
      const data = [{ id: 0, name: "Structure" }];
      const expectedAction = {
        type: "GET_STRUCTURES_REQUESTED",
        payload: data,
      };

      expect(getStructuresRequested(data)).toEqual(expectedAction);
    });
  });

  describe("getTechnologiesRequested", () => {
    it("sholud create action", () => {
      const data = [{ id: 0, name: "Technology" }];
      const expectedAction = {
        type: "GET_TECHNOLOGIES_REQUESTED",
        payload: data,
      };

      expect(getTechnologiesRequested(data)).toEqual(expectedAction);
    });
  });

  describe("getUnitsRequested", () => {
    it("sholud create action", () => {
      const data = [{ id: 0, name: "Unit" }];
      const expectedAction = {
        type: "GET_UNITS_REQUESTED",
        payload: data,
      };

      expect(getUnitsRequested(data)).toEqual(expectedAction);
    });
  });
});
