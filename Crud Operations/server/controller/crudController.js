import Crud from "../model/crudModel.js";


// CREATE
export const createData = async (req, res) => {
  try {
    const data = await Crud.create(req.body);
    res.status(200).json({ msg: "Created", data });
  } catch (err) {
    res.status(400).json({ msg: "Error create" });
  }
};

// READ
export const getData = async (req, res) => {
  try {
    const data = await Crud.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({ msg: "Error fetch" });
  }
};

// GET SINGLE (EDIT)
export const getSingle = async (req, res) => {
  try {
    
    const data = await Crud.findById(req.params.id);
    res.status(200).json(data);
  } catch {
    res.status(400).json({ msg: "Error single" });
  }
};

// UPDATE
export const updateData = async (req, res) => {
  try {
    const data = await Crud.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new:true}
    )
    res.status(200).json({ msg: "Updated", data });
  } catch {
    res.status(400).json({ msg: "Error update" });
  }
};

// DELETE
export const deleteData = async (req, res) => {
  try {
    await Crud.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: "Deleted" });
  } catch {
    res.status(400).json({ msg: "Error delete" });
  }
};