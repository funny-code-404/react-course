import {
  resources,
  initialResourcesState,
  civilizations,
  initialCivilizationsState,
  structures,
  initialStructuresState,
  technologies,
  initialTechnologiesState,
  units,
  initialUnitsState,
} from "./reducers";
import { baseUrl } from "../api";

describe("Reducers", () => {
  describe("Resources reducer", () => {
    it("should return initial state when state and action are undefined", () => {
      expect(resources(undefined, {})).toEqual(initialResourcesState);
    });

    it("should update initial state by adding response to the data", () => {
      const data = {
        civilizations: `${baseUrl}/civilizations`,
        structures: `${baseUrl}/structures`,
        technologies: `${baseUrl}/technologies`,
        units: `${baseUrl}/units`,
      };
      const getResourcesSucceed = {
        type: "GET_RESOURCES_SUCCEED",
        response: data,
      };

      expect(resources(initialResourcesState, getResourcesSucceed)).toEqual({
        ...initialResourcesState,
        data,
      });
    });
  });

  describe("Civilizations reducer", () => {
    it("should return initial state when state and action are undefined", () => {
      expect(resources(undefined, {})).toEqual(initialCivilizationsState);
    });

    it("should update initial state by adding response to the data", () => {
      const data = [{ id: 0, name: "Civilization" }];
      const getCivilizationsSucceed = {
        type: "GET_CIVILIZATIONS_SUCCEED",
        response: data,
      };

      expect(
        civilizations(initialCivilizationsState, getCivilizationsSucceed)
      ).toEqual({
        ...initialCivilizationsState,
        data,
      });
    });
  });

  describe("Structures reducer", () => {
    it("should return initial state when state and action are undefined", () => {
      expect(structures(undefined, {})).toEqual(initialStructuresState);
    });

    it("should update initial state by adding response to the data", () => {
      const data = [{ id: 0, name: "Structure" }];
      const getStructuresSucceed = {
        type: "GET_STRUCTURES_SUCCEED",
        response: data,
      };

      expect(structures(initialStructuresState, getStructuresSucceed)).toEqual({
        ...initialStructuresState,
        data,
      });
    });
  });

  describe("Technologies reducer", () => {
    it("should return initial state when state and action are undefined", () => {
      expect(technologies(undefined, {})).toEqual(initialTechnologiesState);
    });

    it("should update initial state by adding response to the data", () => {
      const data = [{ id: 0, name: "Technology" }];
      const getTechnologiesSucceed = {
        type: "GET_TECHNOLOGIES_SUCCEED",
        response: data,
      };

      expect(
        technologies(initialTechnologiesState, getTechnologiesSucceed)
      ).toEqual({
        ...initialTechnologiesState,
        data,
      });
    });
  });

  describe("Units reducer", () => {
    it("should return initial state when state and action are undefined", () => {
      expect(units(undefined, {})).toEqual(initialUnitsState);
    });

    it("should update initial state by adding response to the data", () => {
      const data = [{ id: 0, name: "Unit" }];
      const getUnitsSucceed = {
        type: "GET_UNITS_SUCCEED",
        response: data,
      };

      expect(units(initialUnitsState, getUnitsSucceed)).toEqual({
        ...initialUnitsState,
        data,
      });
    });
  });
});
