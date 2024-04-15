const router = require("express").Router();
const {
  Intro,
  About,
  Experience,
  Project,
  Certification,
  Contact,
} = require("../models/portfolioModel");

// get all portfolio data
router.get("/truder-portfolio", async (req, res) => {
  try {
    const intros = await Intro.find();
    const abouts = await About.find();
    const experiences = await Experience.find();
    const projects = await Project.find();
    const contacts = await Contact.find();
    const certifications = await Certification.find();

    res.status(200).send({
      intro: intros[0],
      about: abouts[0],
      experience: experiences,
      project: projects,
      contact: contacts[0],
      certification: certifications,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update the data

router.post("/update-intro", async (req, res) => {
  try {
    const intro = await Intro.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: intro,
      success: true,
      message: "Intro Updated Succcessfully",
    });
  } catch (error) {
    res.status(200).send(error);
  }
});

router.post("/update-about", async (req, res) => {
  try {
    const about = await About.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    console.log(about);
    res.status(200).send({
      data: about,
      success: true,
      message: "about Updated Succcessfully",
    });
  } catch (error) {
    res.status(200).send(error);
  }
});

router.post("/update-contact", async (req, res) => {
  try {
    const contact = await Contact.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: contact,
      success: true,
      message: "contact Updated Succcessfully",
    });
  } catch (error) {
    res.status(200).send(error);
  }
});

router.post("/add-experience", async (req, res) => {
  try {
    const experience = new Experience(req.body);
    await experience.save();
    res.status(200).send({
      data: experience,
      success: true,
      message: "Experience Added Succcessfully",
    });
  } catch (error) {
    res.status(200).send(error);
  }
});

router.post("/update-experience", async (req, res) => {
  try {
    // Find the existing experience by its _id and update it with the provided data
    const experience = await Experience.findOneAndUpdate(
      { _id: req.body.id }, // Use req.body.id to find the experience by its _id
      req.body, // Use req.body to update the experience with the provided data
      { new: true } // Return the updated experience
    );

    res.status(200).send({
      data: experience,
      success: true,
      message: "Experience Updated Successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/delete-experience", async (req, res) => {
  try {
    const experience = new Experience(req.body);
    await experience.deleteOne();
    res.status(200).send({
      data: experience,
      success: true,
      message: "Experience Deleted Succcessfully",
    });
  } catch (error) {
    res.status(200).send(error);
  }
});

router.post("/add-project", async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(200).send({
      data: project,
      success: true,
      message: "project Added Succcessfully",
    });
  } catch (error) {
    res.status(200).send(error);
  }
});

router.post("/update-project", async (req, res) => {
  try {
    // Find the existing project by its _id and update it with the provided data
    const project = await Project.findOneAndUpdate(
      { _id: req.body.id }, // Use req.body.id to find the project by its _id
      req.body, // Use req.body to update the project with the provided data
      { new: true } // Return the updated project
    );

    res.status(200).send({
      data: project,
      success: true,
      message: "project Updated Successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/delete-project", async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.deleteOne();
    res.status(200).send({
      data: project,
      success: true,
      message: "project Deleted Succcessfully",
    });
  } catch (error) {
    res.status(200).send(error);
  }
});

router.post("/add-certification", async (req, res) => {
  try {
    const certification = new Certification(req.body);
    await certification.save();
    res.status(200).send({
      data: certification,
      success: true,
      message: "certification Added Succcessfully",
    });
  } catch (error) {
    res.status(200).send(error);
  }
});

router.post("/update-certification", async (req, res) => {
  try {
    // Find the existing certification by its _id and update it with the provided data
    const certification = await Certification.findOneAndUpdate(
      { _id: req.body.id }, // Use req.body.id to find the certification by its _id
      req.body, // Use req.body to update the certification with the provided data
      { new: true } // Return the updated certification
    );

    res.status(200).send({
      data: certification,
      success: true,
      message: "certification Updated Successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/delete-certification", async (req, res) => {
  try {
    const certification = new Certification(req.body);
    await certification.deleteOne();
    res.status(200).send({
      data: certification,
      success: true,
      message: "certification Deleted Succcessfully",
    });
  } catch (error) {
    res.status(200).send(error);
  }
});

module.exports = router;

