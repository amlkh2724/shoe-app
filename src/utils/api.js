// /* eslint-disable no-unused-vars */


import axios from "axios";

const API = {
  shoes: axios.create({
    baseURL: "https://shoe-app-b0573-default-rtdb.europe-west1.firebasedatabase.app/",
  }),

  async addShoes(content) {
    try {
      const response = await this.shoes.post("/shoes.json", content);
      return response;
    } catch (error) {
      throw new Error("addShoes failed ...", error);
    }
  },

  async editShoes(description, field) {
    try {
      const allShoes = await this.getShoes();
      const shoesToUpdate = allShoes.find((shoe) => shoe.description === description);
      const fieldToUpdate = field.split("*")[0];
      const valueToUpdate = field.split("*")[1];

      const updatedShoes = { ...shoesToUpdate, [fieldToUpdate]: valueToUpdate };
      await this.shoes.put(`/shoes/${shoesToUpdate.id}.json`, updatedShoes);
      return updatedShoes;
    } catch (error) {
      throw new Error("editShoes failed ...", error);
    }
  },

  async deleteShoes(description) {
    try {
      const allShoes = await this.getShoes();
      const shoesToDelete = allShoes.find((shoe) => shoe.description === description);
      const response = await this.shoes.delete(`/shoes/${shoesToDelete.id}.json`);
      return response;
    } catch (error) {
      throw new Error("deleteShoes failed ...", error);
    }
  },

  async getShoes() {
    try {
      const response = await this.shoes.get("/shoes.json");
      const shoesData = response.data;
      const shoes = [];
      for (let key in shoesData) {
        shoes.push({ id: key, ...shoesData[key] });
      }
      return shoes;
    } catch (error) {
      throw new Error("getShoes failed ...", error);
    }
  },
};

export default API;
