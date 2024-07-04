const Furniture = require('../models/Furniture');

exports.getOne = (furnitureId) => Furniture.findById(furnitureId);

exports.getAll = (ownerId) => {
    let query = Furniture.find();

    if (ownerId) {
        query = query.find({_ownerId: ownerId});
    }

    return Furniture.find(query);
};

exports.update = (furnitureId, furnitureData) => Furniture.findByIdAndUpdate(furnitureId, furnitureData);

exports.create = (furnitureData) => Furniture.create(furnitureData);

exports.delete = (furnitureId) => Furniture.findByIdAndDelete(furnitureId);